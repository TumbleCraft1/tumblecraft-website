import { NextRequest, NextResponse } from 'next/server'

const LEADERBOARD_API_BASE = process.env.NEXT_PUBLIC_LEADERBOARD_API_URL || 'http://103.137.193.5:8012'
const MAX_RETRIES = 3
const RETRY_DELAY = 1000
const REQUEST_TIMEOUT = 15000

interface RetryOptions {
  maxRetries: number
  delay: number
  backoff: boolean
}

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchWithRetry(url: string, options: RequestInit, retryOptions: RetryOptions): Promise<Response> {
  let lastError: Error | null = null
  
  for (let attempt = 0; attempt <= retryOptions.maxRetries; attempt++) {
    try {
      console.log(`[Leaderboard API] Attempt ${attempt + 1}/${retryOptions.maxRetries + 1} - Fetching: ${url}`)
      
      const response = await fetch(url, {
        ...options,
        signal: AbortSignal.timeout(REQUEST_TIMEOUT)
      })
      
      if (response.ok) {
        console.log(`[Leaderboard API] Success on attempt ${attempt + 1} - Status: ${response.status}`)
        return response
      }
      
      // For 403 errors from Cloudflare Workers restrictions, provide specific error
      if (response.status === 403) {
        console.error(`[Leaderboard API] 403 Forbidden - Cloudflare Workers may be blocking HTTP requests to IP addresses`)
        throw new Error(`Cloudflare Workers restriction: 403 Forbidden - HTTP requests to IP addresses may be blocked in production environment`)
      }
      
      // For other 4xx errors, don't retry
      if (response.status >= 400 && response.status < 500) {
        console.error(`[Leaderboard API] Client error ${response.status} - Not retrying`)
        throw new Error(`Client error: ${response.status} ${response.statusText}`)
      }
      
      // For 5xx errors, retry
      lastError = new Error(`Server error: ${response.status} ${response.statusText}`)
      console.warn(`[Leaderboard API] Server error ${response.status} on attempt ${attempt + 1} - ${lastError.message}`)
      
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Unknown error')
      
      // Check for specific Cloudflare Workers errors
      if (error instanceof Error && error.message.includes('403 Forbidden')) {
        console.error(`[Leaderboard API] Cloudflare Workers blocking detected: ${error.message}`)
        throw error // Don't retry 403 errors
      }
      
      if (error instanceof DOMException && error.name === 'TimeoutError') {
        console.warn(`[Leaderboard API] Timeout on attempt ${attempt + 1} - ${lastError.message}`)
      } else if (error instanceof Error && error.name === 'AbortError') {
        console.warn(`[Leaderboard API] Request aborted on attempt ${attempt + 1} - ${lastError.message}`)
      } else if (error instanceof TypeError && error.message.includes('fetch')) {
        console.warn(`[Leaderboard API] Network/fetch error on attempt ${attempt + 1} - ${lastError.message}`)
        // This might be a Cloudflare Workers restriction
        if (attempt === retryOptions.maxRetries) {
          throw new Error(`Network error: ${lastError.message}. This may be due to Cloudflare Workers restricting HTTP requests to IP addresses.`)
        }
      } else {
        console.warn(`[Leaderboard API] Unknown error on attempt ${attempt + 1} - ${lastError.message}`)
      }
    }
    
    // Don't delay after the last attempt
    if (attempt < retryOptions.maxRetries) {
      const delay = retryOptions.backoff ? retryOptions.delay * Math.pow(2, attempt) : retryOptions.delay
      console.log(`[Leaderboard API] Retrying in ${delay}ms...`)
      await sleep(delay)
    }
  }
  
  throw lastError || new Error('All retry attempts failed')
}

export async function GET(request: NextRequest) {
  const startTime = Date.now()
  let category: string | null = null
  let targetUrl: string = ''
  
  try {
    const { searchParams } = new URL(request.url)
    category = searchParams.get('category')
    
    // Construct the target URL
    targetUrl = category 
      ? `${LEADERBOARD_API_BASE}/api/leaderboards/${category}`
      : `${LEADERBOARD_API_BASE}/api/all`
    
    console.log(`[Leaderboard API] Request started - Category: ${category || 'all'}, URL: ${targetUrl}`)
    
    // Fetch from the HTTP API with retry logic
    const response = await fetchWithRetry(targetUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible; TumbleCraft-Website/1.0)',
        'Referer': 'https://tumblecraft.gg',
        'Origin': 'https://tumblecraft.gg',
        'X-Forwarded-For': request.headers.get('x-forwarded-for') || request.headers.get('cf-connecting-ip') || 'unknown',
        'X-Real-IP': request.headers.get('cf-connecting-ip') || 'unknown'
      }
    }, {
      maxRetries: MAX_RETRIES,
      delay: RETRY_DELAY,
      backoff: true
    })
    
    const data = await response.json()
    const duration = Date.now() - startTime
    
    console.log(`[Leaderboard API] Success - Category: ${category || 'all'}, Duration: ${duration}ms, Status: ${response.status}`)
    
    // Return the data with proper CORS headers
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, max-age=60, s-maxage=60'
      },
    })
    
  } catch (error) {
    const duration = Date.now() - startTime
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    console.error(`[Leaderboard API] Error - Category: ${category || 'all'}, Duration: ${duration}ms, URL: ${targetUrl}, Error: ${errorMessage}`)
    
    // Determine error type and status code
    let statusCode = 500
    let userMessage = 'Failed to fetch leaderboard data'
    let shouldUseFallback = false
    
    if (error instanceof Error) {
      if (error.message.includes('Cloudflare Workers restriction') || error.message.includes('403 Forbidden')) {
        statusCode = 503
        userMessage = 'Leaderboard service temporarily unavailable due to network restrictions'
        shouldUseFallback = true
      } else if (error.message.includes('TimeoutError') || error.message.includes('timeout')) {
        statusCode = 504
        userMessage = 'Request timed out - the server may be busy'
        shouldUseFallback = true
      } else if (error.message.includes('Network') || error.message.includes('fetch')) {
        statusCode = 503
        userMessage = 'Unable to connect to the leaderboard server'
        shouldUseFallback = true
      } else if (error.message.includes('Client error: 4')) {
        statusCode = 502
        userMessage = 'Leaderboard server returned an error'
      }
    }
    
    // If we should use fallback, try to fetch fallback data (only for all leaderboards)
    if (shouldUseFallback && !category) {
      try {
        console.log('[Leaderboard API] Attempting to use fallback data')
        // Use absolute URL to avoid issues
        const fallbackUrl = new URL('/api/leaderboards/fallback', request.url).toString()
        const fallbackResponse = await fetch(fallbackUrl, {
          headers: { 'Accept': 'application/json' }
        })
        
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json()
          console.log('[Leaderboard API] Successfully served fallback data')
          
          return NextResponse.json(fallbackData, {
            status: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET',
              'Access-Control-Allow-Headers': 'Content-Type',
              'Cache-Control': 'no-cache',
              'X-Fallback-Data': 'true',
              'X-Original-Error': errorMessage
            }
          })
        }
      } catch (fallbackError) {
        console.warn('[Leaderboard API] Fallback data also failed:', fallbackError)
      }
    }
    
    return NextResponse.json(
      { 
        error: userMessage,
        message: errorMessage,
        category: category || 'all',
        timestamp: new Date().toISOString(),
        duration: duration
      },
      { 
        status: statusCode,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Cache-Control': 'no-cache'
        },
      }
    )
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}