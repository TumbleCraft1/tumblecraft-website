import { NextResponse } from 'next/server'

// Generate proper fallback rankings
function generateFallbackRankings(category: string) {
  const baseRankings = []
  
  for (let i = 1; i <= 10; i++) {
    let formattedValue = "0"
    
    switch (category) {
      case "money":
        formattedValue = "$0.00"
        break
      case "playtime":
      case "timesincedeath":
        formattedValue = "0h 0m"
        break
      default:
        formattedValue = "0"
    }
    
    baseRankings.push({
      "position": i,
      "player_name": i === 1 ? "Service Unavailable" : "---",
      "player_uuid": i === 1 ? "00000000-0000-0000-0000-000000000001" : "7b8bb88f-f1c7-36e0-a1f6-765c0f480a40",
      "value": i === 1 ? "0" : "---",
      "formatted_value": i === 1 ? formattedValue : "---"
    })
  }
  
  return baseRankings
}

// Fallback data for when the external API is unavailable
const FALLBACK_LEADERBOARD_DATA = {
  "money": {
    "category": "money",
    "display_name": "Top Money",
    "rankings": generateFallbackRankings("money"),
    "last_updated": Date.now() / 1000,
    "total_entries": 10
  },
  "playtime": {
    "category": "playtime",
    "display_name": "Top Playtime",
    "rankings": generateFallbackRankings("playtime"),
    "last_updated": Date.now() / 1000,
    "total_entries": 10
  },
  "votes": {
    "category": "votes",
    "display_name": "Top Votes",
    "rankings": generateFallbackRankings("votes"),
    "last_updated": Date.now() / 1000,
    "total_entries": 10
  },
  "kills": {
    "category": "kills",
    "display_name": "Top Kills",
    "rankings": generateFallbackRankings("kills"),
    "last_updated": Date.now() / 1000,
    "total_entries": 10
  },
  "deaths": {
    "category": "deaths",
    "display_name": "Top Deaths",
    "rankings": generateFallbackRankings("deaths"),
    "last_updated": Date.now() / 1000,
    "total_entries": 10
  },
  "timesincedeath": {
    "category": "timesincedeath",
    "display_name": "Top Time Since Death",
    "rankings": generateFallbackRankings("timesincedeath"),
    "last_updated": Date.now() / 1000,
    "total_entries": 10
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