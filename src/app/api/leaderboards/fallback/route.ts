import { NextResponse } from 'next/server'

// Fallback data for when the external API is unavailable
const FALLBACK_LEADERBOARD_DATA = {
  "money": {
    "category": "money",
    "display_name": "Top Money",
    "rankings": [
      {
        "position": 1,
        "player_name": "Loading...",
        "player_uuid": "00000000-0000-0000-0000-000000000000",
        "value": "0",
        "formatted_value": "$0.00"
      }
    ],
    "last_updated": Date.now() / 1000,
    "total_entries": 1
  },
  "playtime": {
    "category": "playtime",
    "display_name": "Top Playtime",
    "rankings": [
      {
        "position": 1,
        "player_name": "Server Offline",
        "player_uuid": "00000000-0000-0000-0000-000000000000",
        "value": "0",
        "formatted_value": "0h 0m"
      }
    ],
    "last_updated": Date.now() / 1000,
    "total_entries": 1
  }
}

export async function GET() {
  console.log('[Fallback API] Serving fallback leaderboard data')
  
  return NextResponse.json(FALLBACK_LEADERBOARD_DATA, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Cache-Control': 'no-cache',
      'X-Fallback-Data': 'true'
    }
  })
}

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