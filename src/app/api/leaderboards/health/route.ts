import { NextResponse } from 'next/server'

const LEADERBOARD_API_BASE = process.env.NEXT_PUBLIC_LEADERBOARD_API_URL || 'http://n1336.pufferfish.host:25646'
const HEALTH_CHECK_TIMEOUT = 5000

export async function GET() {
  const startTime = Date.now()
  
  try {
    console.log(`[Health Check] Testing connection to: ${LEADERBOARD_API_BASE}`)
    
    const response = await fetch(`${LEADERBOARD_API_BASE}/api/health`, {
      method: 'GET',
      headers: {
        'User-Agent': 'TumbleCraft-Website-HealthCheck/1.0',
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(HEALTH_CHECK_TIMEOUT)
    })
    
    const duration = Date.now() - startTime
    const isHealthy = response.ok
    
    console.log(`[Health Check] Response - Status: ${response.status}, Duration: ${duration}ms, Healthy: ${isHealthy}`)
    
    return NextResponse.json({
      status: isHealthy ? 'healthy' : 'unhealthy',
      statusCode: response.status,
      responseTime: duration,
      timestamp: new Date().toISOString(),
      endpoint: `${LEADERBOARD_API_BASE}/api/health`,
      environment: process.env.NODE_ENV
    }, {
      status: isHealthy ? 200 : 503,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      }
    })
    
  } catch (error) {
    const duration = Date.now() - startTime
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    console.error(`[Health Check] Failed after ${duration}ms:`, errorMessage)
    
    let errorType = 'unknown'
    if (errorMessage.includes('timeout') || errorMessage.includes('TimeoutError')) {
      errorType = 'timeout'
    } else if (errorMessage.includes('Network') || errorMessage.includes('fetch')) {
      errorType = 'network'
    } else if (errorMessage.includes('AbortError')) {
      errorType = 'aborted'
    }
    
    return NextResponse.json({
      status: 'unhealthy',
      error: errorMessage,
      errorType,
      responseTime: duration,
      timestamp: new Date().toISOString(),
      endpoint: `${LEADERBOARD_API_BASE}/api/health`,
      environment: process.env.NODE_ENV
    }, {
      status: 503,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      }
    })
  }
}