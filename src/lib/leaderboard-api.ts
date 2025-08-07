import { LEADERBOARD_CONFIG } from './config'

export interface LeaderboardPlayer {
  position: number
  player_name: string
  player_uuid: string
  value: string
  formatted_value: string
}

export interface LeaderboardCategory {
  category: string
  display_name: string
  rankings: LeaderboardPlayer[]
  last_updated: string
  total_entries: number
}

export interface LeaderboardsResponse {
  leaderboards: LeaderboardCategory[]
}

export interface AllLeaderboardsResponse {
  [category: string]: LeaderboardCategory
}

export interface CategoryInfo {
  name: string
  displayName: string
  icon: string
  description: string
  color: string
}

export const CATEGORY_INFO: Record<string, CategoryInfo> = {
  money: {
    name: 'money',
    displayName: 'Top Money',
    icon: '💰',
    description: 'Richest players on the server',
    color: 'from-yellow-400 to-yellow-600'
  },
  playtime: {
    name: 'playtime',
    displayName: 'Top Playtime',
    icon: '⏰',
    description: 'Most dedicated players',
    color: 'from-blue-400 to-blue-600'
  },
  coins: {
    name: 'coins',
    displayName: 'Top Coins',
    icon: '🪙',
    description: 'Most coins collected',
    color: 'from-amber-400 to-amber-600'
  },
  votes: {
    name: 'votes',
    displayName: 'Top Votes',
    icon: '🗳️',
    description: 'Most server votes',
    color: 'from-purple-400 to-purple-600'
  },
  kills: {
    name: 'kills',
    displayName: 'Top Kills',
    icon: '⚔️',
    description: 'Most player kills',
    color: 'from-red-400 to-red-600'
  },
  deaths: {
    name: 'deaths',
    displayName: 'Top Deaths',
    icon: '💀',
    description: 'Most deaths recorded',
    color: 'from-gray-400 to-gray-600'
  },
  quests: {
    name: 'quests',
    displayName: 'Top Quests',
    icon: '📋',
    description: 'Most quests completed',
    color: 'from-green-400 to-green-600'
  },
  factories: {
    name: 'factories',
    displayName: 'Top Factories',
    icon: '🏭',
    description: 'Most factories built',
    color: 'from-indigo-400 to-indigo-600'
  },
  mobs: {
    name: 'mobs',
    displayName: 'Top Mob Kills',
    icon: '👹',
    description: 'Most mobs defeated',
    color: 'from-orange-400 to-orange-600'
  },
  mined: {
    name: 'mined',
    displayName: 'Top Blocks Mined',
    icon: '⛏️',
    description: 'Most blocks mined',
    color: 'from-stone-400 to-stone-600'
  },
  timesincedeath: {
    name: 'timesincedeath',
    displayName: 'Time Since Death',
    icon: '🛡️',
    description: 'Longest survival streak',
    color: 'from-emerald-400 to-emerald-600'
  },
  falls: {
    name: 'falls',
    displayName: 'Top Falls',
    icon: '🪂',
    description: 'Most fall damage taken',
    color: 'from-sky-400 to-sky-600'
  },
  chests: {
    name: 'chests',
    displayName: 'Top Chests Opened',
    icon: '📦',
    description: 'Most chests opened',
    color: 'from-brown-400 to-brown-600'
  },
  jumps: {
    name: 'jumps',
    displayName: 'Top Jumps',
    icon: '🦘',
    description: 'Most jumps performed',
    color: 'from-lime-400 to-lime-600'
  },
  crafted: {
    name: 'crafted',
    displayName: 'Top Crafted Items',
    icon: '🔨',
    description: 'Most items crafted',
    color: 'from-orange-400 to-orange-600'
  },
  animalsbred: {
    name: 'animalsbred',
    displayName: 'Animals Bred',
    icon: '🐄',
    description: 'Most animals bred',
    color: 'from-pink-400 to-pink-600'
  },
  sleptinbed: {
    name: 'sleptinbed',
    displayName: 'Sleep in Bed',
    icon: '🛏️',
    description: 'Most nights slept',
    color: 'from-violet-400 to-violet-600'
  }
}


export class LeaderboardAPI {
  private static async fetchWithTimeout(url: string, timeout = LEADERBOARD_CONFIG.REQUEST_TIMEOUT): Promise<Response> {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)
    
    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
        },
      })
      clearTimeout(timeoutId)
      return response
    } catch (error) {
      clearTimeout(timeoutId)
      throw error
    }
  }

  static async getAllLeaderboards(): Promise<LeaderboardsResponse> {
    const startTime = Date.now()
    
    try {
      console.log('[LeaderboardAPI] Starting getAllLeaderboards request')
      
      // First get the list of available categories
      const categoriesResponse = await this.fetchWithTimeout(`${LEADERBOARD_CONFIG.API_BASE_URL}/api/leaderboards`)
      
      if (!categoriesResponse.ok) {
        let errorDetails = 'Unknown error'
        try {
          const errorData = await categoriesResponse.json() as { message?: string; error?: string }
          errorDetails = errorData.message || errorData.error || `HTTP ${categoriesResponse.status}`
          console.error(`[LeaderboardAPI] Server error response:`, errorData)
        } catch {
          errorDetails = `HTTP error! status: ${categoriesResponse.status}`
        }
        throw new Error(errorDetails)
      }
      
      const categoriesData = await categoriesResponse.json() as { categories: string[] }
      console.log('[LeaderboardAPI] Available categories:', categoriesData.categories)
      
      // Fetch data for each category concurrently
      const categoryPromises = categoriesData.categories.map(async (categoryName) => {
        try {
          return await this.getCategoryLeaderboard(categoryName)
        } catch (error) {
          console.warn(`[LeaderboardAPI] Failed to fetch ${categoryName}:`, error)
          // Return a placeholder category if one fails
          return {
            category: categoryName,
            display_name: this.getCategoryInfo(categoryName).displayName,
            rankings: [],
            last_updated: new Date().toISOString(),
            total_entries: 0
          }
        }
      })
      
      const leaderboards = await Promise.all(categoryPromises)
      const duration = Date.now() - startTime
      
      console.log(`[LeaderboardAPI] Successfully fetched ${leaderboards.length} leaderboards in ${duration}ms`)
      
      return { leaderboards }
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      
      console.error(`[LeaderboardAPI] Failed to fetch leaderboards after ${duration}ms:`, errorMessage)
      
      // Provide more specific error messages based on error type
      if (errorMessage.includes('timeout') || errorMessage.includes('aborted')) {
        throw new Error('Request timed out - the leaderboard server may be busy. Please try again.')
      } else if (errorMessage.includes('Network') || errorMessage.includes('fetch')) {
        throw new Error('Unable to connect to the leaderboard server. Please check your internet connection.')
      } else if (errorMessage.includes('504') || errorMessage.includes('Gateway')) {
        throw new Error('The leaderboard server is temporarily unavailable. Please try again in a few moments.')
      } else if (errorMessage.includes('503') || errorMessage.includes('Service')) {
        throw new Error('The leaderboard service is temporarily down. Please try again later.')
      } else {
        throw new Error(`Failed to fetch leaderboards: ${errorMessage}`)
      }
    }
  }

  static async getCategoryLeaderboard(category: string): Promise<LeaderboardCategory> {
    const startTime = Date.now()
    
    try {
      console.log(`[LeaderboardAPI] Starting getCategoryLeaderboard request for: ${category}`)
      const response = await this.fetchWithTimeout(`${LEADERBOARD_CONFIG.API_BASE_URL}/api/leaderboards/${category}`)
      
      if (!response.ok) {
        // Try to parse error response for detailed information
        let errorDetails = 'Unknown error'
        try {
          const errorData = await response.json() as { message?: string; error?: string }
          errorDetails = errorData.message || errorData.error || `HTTP ${response.status}`
          console.error(`[LeaderboardAPI] Server error response for ${category}:`, errorData)
        } catch {
          errorDetails = `HTTP error! status: ${response.status}`
        }
        throw new Error(errorDetails)
      }
      
      const data = await response.json() as LeaderboardCategory
      const duration = Date.now() - startTime
      
      console.log(`[LeaderboardAPI] Successfully fetched ${category} leaderboard in ${duration}ms`)
      
      return {
        ...data,
        rankings: this.deduplicatePlayersByUUID(data.rankings || [])
      }
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      
      console.error(`[LeaderboardAPI] Failed to fetch ${category} leaderboard after ${duration}ms:`, errorMessage)
      
      // Provide more specific error messages based on error type
      if (errorMessage.includes('timeout') || errorMessage.includes('aborted')) {
        throw new Error(`Request timed out while fetching ${category} leaderboard. Please try again.`)
      } else if (errorMessage.includes('Network') || errorMessage.includes('fetch')) {
        throw new Error(`Unable to connect to server for ${category} leaderboard. Please check your connection.`)
      } else if (errorMessage.includes('504') || errorMessage.includes('Gateway')) {
        throw new Error(`The ${category} leaderboard is temporarily unavailable. Please try again in a few moments.`)
      } else if (errorMessage.includes('503') || errorMessage.includes('Service')) {
        throw new Error(`The ${category} leaderboard service is temporarily down. Please try again later.`)
      } else {
        throw new Error(`Failed to fetch ${category} leaderboard: ${errorMessage}`)
      }
    }
  }

  static async getServerStatus(): Promise<{ status: 'online' | 'offline', details?: Record<string, unknown> }> {
    try {
      console.log('[LeaderboardAPI] Checking server status via health endpoint')
      const response = await this.fetchWithTimeout(`${LEADERBOARD_CONFIG.API_BASE_URL}/api/health`, LEADERBOARD_CONFIG.HEALTH_CHECK_TIMEOUT)
      
      if (response.ok) {
        const healthData = await response.json() as { status?: string; [key: string]: unknown }
        console.log('[LeaderboardAPI] Health check result:', healthData)
        return { 
          status: healthData.status === 'healthy' ? 'online' : 'offline',
          details: healthData
        }
      } else {
        console.warn('[LeaderboardAPI] Health check failed with status:', response.status)
        return { status: 'offline', details: { statusCode: response.status } }
      }
    } catch (error) {
      console.error('[LeaderboardAPI] Health check error:', error)
      return { status: 'offline', details: { error: error instanceof Error ? error.message : 'Unknown error' } }
    }
  }

  static formatValue(category: string, value: number): string {
    switch (category) {
      case 'money':
        return `$${value.toLocaleString()}`
      case 'playtime':
        const hours = Math.floor(value / 3600)
        const minutes = Math.floor((value % 3600) / 60)
        return `${hours}h ${minutes}m`
      case 'timesincedeath':
        const days = Math.floor(value / 86400)
        const remainingHours = Math.floor((value % 86400) / 3600)
        return `${days}d ${remainingHours}h`
      default:
        return value.toLocaleString()
    }
  }

  static getCategoryInfo(category: string): CategoryInfo {
    return CATEGORY_INFO[category] || {
      name: category,
      displayName: category.charAt(0).toUpperCase() + category.slice(1),
      icon: '📊',
      description: 'Server statistics',
      color: 'from-gray-400 to-gray-600'
    }
  }

  /**
   * Remove duplicate players by UUID, keeping the one with the highest position (lowest number)
   */
  private static deduplicatePlayersByUUID(rankings: LeaderboardPlayer[]): LeaderboardPlayer[] {
    const seen = new Map<string, LeaderboardPlayer>()
    
    for (const player of rankings) {
      const existing = seen.get(player.player_uuid)
      if (!existing || player.position < existing.position) {
        seen.set(player.player_uuid, player)
      }
    }
    
    return Array.from(seen.values()).sort((a, b) => a.position - b.position)
  }
}