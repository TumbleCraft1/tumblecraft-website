import { NextRequest, NextResponse } from 'next/server'

const LEADERBOARD_API_BASE = 'http://103.137.193.5:8012'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    
    // Construct the target URL
    const targetUrl = category 
      ? `${LEADERBOARD_API_BASE}/api/leaderboards/${category}`
      : `${LEADERBOARD_API_BASE}/api/all`
    
    // Fetch from the HTTP API
    const response = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(10000)
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    // Return the data with proper CORS headers
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
    
  } catch (error) {
    console.error('Leaderboard proxy error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch leaderboard data',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type',
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