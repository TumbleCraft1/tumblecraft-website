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

const API_BASE_URL = LEADERBOARD_CONFIG.API_BASE_URL

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
    try {
      const response = await this.fetchWithTimeout(`/api/leaderboards`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json() as AllLeaderboardsResponse
      // Convert the object format to array format expected by the frontend
      const leaderboards = Object.values(data).map(category => ({
        ...category,
        rankings: this.deduplicatePlayersByUUID(category.rankings)
      }))
      return { leaderboards }
    } catch (error) {
      console.error('Failed to fetch leaderboards:', error)
      throw new Error('Failed to fetch leaderboards')
    }
  }

  static async getCategoryLeaderboard(category: string): Promise<LeaderboardCategory> {
    try {
      const response = await this.fetchWithTimeout(`/api/leaderboards?category=${category}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json() as LeaderboardCategory
      return {
        ...data,
        rankings: this.deduplicatePlayersByUUID(data.rankings)
      }
    } catch (error) {
      console.error(`Failed to fetch leaderboard for ${category}:`, error)
      throw new Error(`Failed to fetch leaderboard for ${category}`)
    }
  }

  static async getServerStatus(): Promise<{ status: 'online' | 'offline' }> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/api/health`, 3000)
      return { status: response.ok ? 'online' : 'offline' }
    } catch {
      return { status: 'offline' }
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