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

export interface PaginatedLeaderboardCategory {
  category: string
  display_name: string
  rankings: LeaderboardPlayer[]
  last_updated: string
  total_entries: number
  page: number
  limit: number
  total_pages: number
  has_next_page: boolean
  has_previous_page: boolean
}

export interface LeaderboardsResponse {
  leaderboards: LeaderboardCategory[]
}

export interface AllLeaderboardsResponse {
  [category: string]: LeaderboardCategory
}

// Enhanced Player Profile Interfaces
export interface PlayerProfile {
  player_name: string
  player_uuid: string
  first_seen: string
  last_seen: string
  statistics: PlayerStatistic[]
  achievements: PlayerAchievement[]
  rank_history: PlayerRankHistory[]
  total_achievements: number
  highest_ranks: Record<string, number>
  current_streaks: Record<string, number>
  total_playtime?: number
  performance_score: number
  last_updated: string
}

export interface PlayerRankHistory {
  category: string
  position: number
  value: string
  formatted_value: string
  timestamp: string
  trend_direction: 'up' | 'down' | 'same' | 'new'
  position_change: number
}

export interface PlayerAchievement {
  id: string
  name: string
  description: string
  category?: string
  tier: 'bronze' | 'silver' | 'gold' | 'diamond' | 'legend'
  icon: string
  earned_at: string
  is_featured: boolean
  requirements: Record<string, unknown>
}

export interface PlayerComparison {
  target_player: string
  comparing_player: string
  category_comparisons: CategoryComparison[]
  overall_summary: ComparisonSummary
  last_updated: string
}

export interface CategoryComparison {
  category: string
  display_name: string
  target_rank: number
  comparing_rank: number
  target_value: string
  comparing_value: string
  rank_difference: number
  percentage_difference?: number
  who_is_leading: 'target' | 'comparing' | 'tied'
}

export interface ComparisonSummary {
  categories_target_leads: number
  categories_comparing_leads: number
  categories_tied: number
  overall_leader: string
  performance_gap: number
}

export interface LeaderboardAnalytics {
  category: string
  display_name: string
  total_players: number
  active_players: number
  average_score: number
  median_score: number
  top_percentile_threshold: Record<string, number>
  growth_rate: number
  competition_level: 'low' | 'medium' | 'high' | 'extreme'
  recent_changes: RankChange[]
  last_updated: string
}

export interface RankChange {
  player_name: string
  player_uuid: string
  old_rank?: number
  new_rank: number
  change_type: 'new_entry' | 'rank_up' | 'rank_down' | 'returned'
  positions_changed: number
  timestamp: string
}

export interface GlobalStats {
  total_categories: number
  total_players: number
  active_players: number
  total_achievements_earned: number
  most_competitive_category: string
  fastest_growing_category: string
  recent_milestones: GlobalMilestone[]
  leaderboard_health: Record<string, string>
  last_updated: string
}

export interface GlobalMilestone {
  milestone_type: string
  player_name?: string
  category?: string
  description: string
  timestamp: string
  value?: string
}

// Enhanced Player Statistics (extends existing)
export interface PlayerStatistic {
  category: string
  display_name: string
  position: string
  value: string
  formatted_value: string
  percentile?: number // Add percentile ranking
  trend?: 'improving' | 'declining' | 'stable'
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
    icon: 'DollarSign',
    description: 'Richest players on the server',
    color: 'bg-yellow-500'
  },
  playtime: {
    name: 'playtime',
    displayName: 'Top Playtime',
    icon: 'Clock',
    description: 'Most dedicated players',
    color: 'bg-blue-500'
  },
  coins: {
    name: 'coins',
    displayName: 'Top Coins',
    icon: 'Coins',
    description: 'Most coins collected',
    color: 'bg-amber-500'
  },
  votes: {
    name: 'votes',
    displayName: 'Top Votes',
    icon: 'Vote',
    description: 'Most server votes',
    color: 'bg-purple-500'
  },
  kills: {
    name: 'kills',
    displayName: 'Top Kills',
    icon: 'Sword',
    description: 'Most player kills',
    color: 'bg-red-500'
  },
  deaths: {
    name: 'deaths',
    displayName: 'Top Deaths',
    icon: 'Skull',
    description: 'Most deaths recorded',
    color: 'bg-gray-500'
  },
  quests: {
    name: 'quests',
    displayName: 'Top Quests',
    icon: 'ScrollText',
    description: 'Most quests completed',
    color: 'bg-green-500'
  },
  factories: {
    name: 'factories',
    displayName: 'Top Factories',
    icon: 'Factory',
    description: 'Most factories built',
    color: 'bg-indigo-500'
  },
  mobs: {
    name: 'mobs',
    displayName: 'Top Mob Kills',
    icon: 'Zap',
    description: 'Most mobs defeated',
    color: 'bg-orange-500'
  },
  mined: {
    name: 'mined',
    displayName: 'Top Blocks Mined',
    icon: 'Pickaxe',
    description: 'Most blocks mined',
    color: 'bg-stone-500'
  },
  timesincedeath: {
    name: 'timesincedeath',
    displayName: 'Time Since Death',
    icon: 'Shield',
    description: 'Longest survival streak',
    color: 'bg-emerald-500'
  },
  falls: {
    name: 'falls',
    displayName: 'Top Falls',
    icon: 'Plane',
    description: 'Most fall damage taken',
    color: 'bg-sky-500'
  },
  chests: {
    name: 'chests',
    displayName: 'Top Chests Opened',
    icon: 'Package',
    description: 'Most chests opened',
    color: 'bg-brown-500'
  },
  jumps: {
    name: 'jumps',
    displayName: 'Top Jumps',
    icon: 'MoveUp',
    description: 'Most jumps performed',
    color: 'bg-lime-500'
  },
  crafted: {
    name: 'crafted',
    displayName: 'Top Crafted Items',
    icon: 'Hammer',
    description: 'Most items crafted',
    color: 'bg-orange-500'
  },
  animalsbred: {
    name: 'animalsbred',
    displayName: 'Animals Bred',
    icon: 'Heart',
    description: 'Most animals bred',
    color: 'bg-pink-500'
  },
  sleptinbed: {
    name: 'sleptinbed',
    displayName: 'Sleep in Bed',
    icon: 'Bed',
    description: 'Most nights slept',
    color: 'bg-violet-500'
  }
}

export const ACHIEVEMENT_CATEGORIES = {
  RANK: {
    name: 'Ranking Achievements',
    description: 'Achievements based on leaderboard positions',
    icon: 'Trophy'
  },
  VALUE: {
    name: 'Milestone Achievements', 
    description: 'Achievements for reaching specific values',
    icon: 'Target'
  },
  STREAK: {
    name: 'Consistency Achievements',
    description: 'Achievements for maintaining positions over time',
    icon: 'Flame'
  },
  MULTI: {
    name: 'Multi-Category Achievements',
    description: 'Achievements spanning multiple categories',
    icon: 'Star'
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

  static async getCategoryLeaderboardPaginated(category: string, page: number = 1, limit: number = 25): Promise<PaginatedLeaderboardCategory> {
    const startTime = Date.now()
    
    try {
      console.log(`[LeaderboardAPI] Starting paginated getCategoryLeaderboard request for: ${category} (page ${page}, limit ${limit})`)
      const url = `${LEADERBOARD_CONFIG.API_BASE_URL}/api/leaderboards/${category}?page=${page}&limit=${limit}`
      const response = await this.fetchWithTimeout(url)
      
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
      
      const data = await response.json() as PaginatedLeaderboardCategory
      const duration = Date.now() - startTime
      
      console.log(`[LeaderboardAPI] Successfully fetched paginated ${category} leaderboard in ${duration}ms`)
      
      return {
        ...data,
        rankings: this.deduplicatePlayersByUUID(data.rankings || [])
      }
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      
      console.error(`[LeaderboardAPI] Failed to fetch paginated ${category} leaderboard after ${duration}ms:`, errorMessage)
      
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

  static async getPlayerProfile(playerUuid: string): Promise<PlayerProfile> {
    const startTime = Date.now()
    
    try {
      console.log(`[LeaderboardAPI] Fetching player profile for: ${playerUuid}`)
      const response = await this.fetchWithTimeout(`${LEADERBOARD_CONFIG.API_BASE_URL}/api/player/${playerUuid}/profile`)
      
      if (!response.ok) {
        let errorDetails = 'Unknown error'
        try {
          const errorData = await response.json() as { message?: string; error?: string }
          errorDetails = errorData.message || errorData.error || `HTTP ${response.status}`
        } catch {
          errorDetails = `HTTP error! status: ${response.status}`
        }
        throw new Error(errorDetails)
      }
      
      const data = await response.json() as PlayerProfile
      const duration = Date.now() - startTime
      
      console.log(`[LeaderboardAPI] Successfully fetched player profile in ${duration}ms`)
      return data
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      
      console.error(`[LeaderboardAPI] Failed to fetch player profile after ${duration}ms:`, errorMessage)
      throw new Error(`Failed to fetch player profile: ${errorMessage}`)
    }
  }

  static async getPlayerComparison(uuid1: string, uuid2: string): Promise<PlayerComparison> {
    const startTime = Date.now()
    
    try {
      console.log(`[LeaderboardAPI] Comparing players: ${uuid1} vs ${uuid2}`)
      const response = await this.fetchWithTimeout(`${LEADERBOARD_CONFIG.API_BASE_URL}/api/compare/${uuid1}/${uuid2}`)
      
      if (!response.ok) {
        let errorDetails = 'Unknown error'
        try {
          const errorData = await response.json() as { message?: string; error?: string }
          errorDetails = errorData.message || errorData.error || `HTTP ${response.status}`
        } catch {
          errorDetails = `HTTP error! status: ${response.status}`
        }
        throw new Error(errorDetails)
      }
      
      const data = await response.json() as PlayerComparison
      const duration = Date.now() - startTime
      
      console.log(`[LeaderboardAPI] Successfully fetched comparison in ${duration}ms`)
      return data
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      
      console.error(`[LeaderboardAPI] Failed to fetch comparison after ${duration}ms:`, errorMessage)
      throw new Error(`Failed to fetch player comparison: ${errorMessage}`)
    }
  }

  static async getLeaderboardAnalytics(category: string): Promise<LeaderboardAnalytics> {
    const startTime = Date.now()
    
    try {
      console.log(`[LeaderboardAPI] Fetching analytics for: ${category}`)
      const response = await this.fetchWithTimeout(`${LEADERBOARD_CONFIG.API_BASE_URL}/api/analytics/${category}`)
      
      if (!response.ok) {
        let errorDetails = 'Unknown error'
        try {
          const errorData = await response.json() as { message?: string; error?: string }
          errorDetails = errorData.message || errorData.error || `HTTP ${response.status}`
        } catch {
          errorDetails = `HTTP error! status: ${response.status}`
        }
        throw new Error(errorDetails)
      }
      
      const data = await response.json() as LeaderboardAnalytics
      const duration = Date.now() - startTime
      
      console.log(`[LeaderboardAPI] Successfully fetched analytics in ${duration}ms`)
      return data
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      
      console.error(`[LeaderboardAPI] Failed to fetch analytics after ${duration}ms:`, errorMessage)
      throw new Error(`Failed to fetch analytics: ${errorMessage}`)
    }
  }

  static async getGlobalStats(): Promise<GlobalStats> {
    const startTime = Date.now()
    
    try {
      console.log(`[LeaderboardAPI] Fetching global statistics`)
      const response = await this.fetchWithTimeout(`${LEADERBOARD_CONFIG.API_BASE_URL}/api/global-stats`)
      
      if (!response.ok) {
        let errorDetails = 'Unknown error'
        try {
          const errorData = await response.json() as { message?: string; error?: string }
          errorDetails = errorData.message || errorData.error || `HTTP ${response.status}`
        } catch {
          errorDetails = `HTTP error! status: ${response.status}`
        }
        throw new Error(errorDetails)
      }
      
      const data = await response.json() as GlobalStats
      const duration = Date.now() - startTime
      
      console.log(`[LeaderboardAPI] Successfully fetched global stats in ${duration}ms`)
      return data
    } catch (error) {
      const duration = Date.now() - startTime
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      
      console.error(`[LeaderboardAPI] Failed to fetch global stats after ${duration}ms:`, errorMessage)
      throw new Error(`Failed to fetch global statistics: ${errorMessage}`)
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
      color: 'bg-gray-500'
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
  
  static getTierColor(tier: string): string {
    switch (tier) {
      case 'bronze': return 'bg-orange-500'
      case 'silver': return 'bg-gray-400'
      case 'gold': return 'bg-yellow-500'
      case 'diamond': return 'bg-cyan-500'
      case 'legend': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }
  
  static getTierIcon(tier: string): string {
    switch (tier) {
      case 'bronze': return 'Medal'
      case 'silver': return 'Medal'
      case 'gold': return 'Medal'
      case 'diamond': return 'Gem'
      case 'legend': return 'Crown'
      default: return 'Award'
    }
  }
  
  static getCompetitionLevelColor(level: string): string {
    switch (level) {
      case 'low': return 'text-green-500'
      case 'medium': return 'text-yellow-500'
      case 'high': return 'text-orange-500'
      case 'extreme': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }
  
  static getTrendIcon(direction: string): string {
    switch (direction) {
      case 'up': return 'TrendingUp'
      case 'down': return 'TrendingDown'
      case 'same': return 'ArrowRight'
      case 'new': return 'Sparkles'
      default: return 'BarChart3'
    }
  }
  
  static formatTimeAgo(timestamp: string): string {
    const now = Date.now()
    const time = new Date(timestamp).getTime()
    const diff = now - time
    
    const seconds = Math.floor(diff / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    
    if (days > 0) return `${days}d ago`
    if (hours > 0) return `${hours}h ago`
    if (minutes > 0) return `${minutes}m ago`
    return 'Just now'
  }
  
  static calculatePercentileRank(rank: number, totalPlayers: number): number {
    if (totalPlayers <= 1) return 100
    return Math.max(0, Math.round(((totalPlayers - rank) / (totalPlayers - 1)) * 100))
  }
}