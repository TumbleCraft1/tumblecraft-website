import { PlayerProfile, PlayerStatistic } from './leaderboard-api'

export interface KPIScore {
  category: string
  score: number
  tier: PerformanceTier
  percentile: number
  rank: number
  trend: 'improving' | 'declining' | 'stable'
  strength: 'primary' | 'secondary' | 'developing'
}

export interface PlayerKPIProfile {
  overall_score: number
  overall_tier: PerformanceTier
  category_scores: KPIScore[]
  top_strengths: KPIScore[]
  improvement_areas: KPIScore[]
  performance_trends: Record<string, number[]>
  consistency_rating: number
  last_calculated: string
}

export type PerformanceTier = 'legend' | 'diamond' | 'gold' | 'silver' | 'bronze' | 'standard'

export interface KPICategory {
  id: string
  name: string
  description: string
  icon: string
  color: string
  metrics: string[]
  weight: number
  calculation_method: 'rank_based' | 'value_based' | 'hybrid'
  tier_thresholds: Record<PerformanceTier, number>
}

// KPI Category Definitions
export const KPI_CATEGORIES: Record<string, KPICategory> = {
  combat: {
    id: 'combat',
    name: 'Combat Performance',
    description: 'Fighting prowess and survival skills',
    icon: 'Sword',
    color: 'bg-red-500',
    metrics: ['kills', 'deaths', 'mobs', 'timesincedeath'],
    weight: 0.25,
    calculation_method: 'hybrid',
    tier_thresholds: {
      legend: 95,
      diamond: 85,
      gold: 70,
      silver: 50,
      bronze: 25,
      standard: 0
    }
  },
  economic: {
    id: 'economic',
    name: 'Economic Success',
    description: 'Wealth accumulation and resource management',
    icon: 'DollarSign',
    color: 'bg-yellow-500',
    metrics: ['money', 'coins'],
    weight: 0.20,
    calculation_method: 'rank_based',
    tier_thresholds: {
      legend: 95,
      diamond: 85,
      gold: 70,
      silver: 50,
      bronze: 25,
      standard: 0
    }
  },
  building: {
    id: 'building',
    name: 'Building & Industry',
    description: 'Construction and production capabilities',
    icon: 'Hammer',
    color: 'bg-orange-500',
    metrics: ['mined', 'crafted', 'factories', 'chests'],
    weight: 0.20,
    calculation_method: 'value_based',
    tier_thresholds: {
      legend: 95,
      diamond: 85,
      gold: 70,
      silver: 50,
      bronze: 25,
      standard: 0
    }
  },
  engagement: {
    id: 'engagement',
    name: 'Server Engagement',
    description: 'Activity level and server loyalty',
    icon: 'Heart',
    color: 'bg-blue-500',
    metrics: ['playtime', 'votes', 'jumps', 'sleptinbed'],
    weight: 0.20,
    calculation_method: 'hybrid',
    tier_thresholds: {
      legend: 95,
      diamond: 85,
      gold: 70,
      silver: 50,
      bronze: 25,
      standard: 0
    }
  },
  social: {
    id: 'social',
    name: 'Social & Community',
    description: 'Community contribution and collaboration',
    icon: 'Users',
    color: 'bg-purple-500',
    metrics: ['quests', 'animalsbred', 'votes'],
    weight: 0.15,
    calculation_method: 'rank_based',
    tier_thresholds: {
      legend: 95,
      diamond: 85,
      gold: 70,
      silver: 50,
      bronze: 25,
      standard: 0
    }
  }
}

export class PlayerKPICalculator {
  static calculateCategoryScore(
    category: KPICategory, 
    playerStats: PlayerStatistic[], 
    totalPlayers: number = 1000
  ): KPIScore {
    const categoryStats = playerStats.filter(stat => 
      category.metrics.includes(stat.category)
    )

    if (categoryStats.length === 0) {
      return {
        category: category.id,
        score: 0,
        tier: 'standard',
        percentile: 0,
        rank: 999,
        trend: 'stable',
        strength: 'developing'
      }
    }

    let score = 0
    let averageRank = 0
    let averagePercentile = 0

    // Calculate based on method
    switch (category.calculation_method) {
      case 'rank_based':
        score = this.calculateRankBasedScore(categoryStats, totalPlayers)
        break
      case 'value_based':
        score = this.calculateValueBasedScore(categoryStats)
        break
      case 'hybrid':
        score = this.calculateHybridScore(categoryStats, totalPlayers)
        break
    }

    // Calculate averages for display
    averageRank = categoryStats.reduce((sum, stat) => 
      sum + parseInt(stat.position), 0) / categoryStats.length
    
    averagePercentile = categoryStats.reduce((sum, stat) => {
      const rank = parseInt(stat.position)
      return sum + this.calculatePercentile(rank, totalPlayers)
    }, 0) / categoryStats.length

    const tier = this.determineTier(score, category.tier_thresholds)
    const trend = this.calculateTrend(categoryStats)
    const strength = this.determineStrength(score)

    return {
      category: category.id,
      score: Math.round(score * 100) / 100,
      tier,
      percentile: Math.round(averagePercentile),
      rank: Math.round(averageRank),
      trend,
      strength
    }
  }

  private static calculateRankBasedScore(
    stats: PlayerStatistic[], 
    totalPlayers: number
  ): number {
    const avgRank = stats.reduce((sum, stat) => 
      sum + parseInt(stat.position), 0) / stats.length
    
    return this.calculatePercentile(avgRank, totalPlayers)
  }

  private static calculateValueBasedScore(stats: PlayerStatistic[]): number {
    // For value-based scoring, we look at the actual values
    // This is useful for metrics like blocks mined, items crafted
    const totalValue = stats.reduce((sum, stat) => {
      const value = parseFloat(stat.value.replace(/[^0-9.-]/g, '')) || 0
      return sum + value
    }, 0)

    // Normalize to 0-100 scale based on typical server values
    // These thresholds would be configurable in production
    return Math.min(100, (totalValue / 10000) * 100)
  }

  private static calculateHybridScore(
    stats: PlayerStatistic[], 
    totalPlayers: number
  ): number {
    const rankScore = this.calculateRankBasedScore(stats, totalPlayers)
    const valueScore = this.calculateValueBasedScore(stats)
    
    // Weight rank more heavily for competitive metrics
    return (rankScore * 0.7) + (valueScore * 0.3)
  }

  private static calculatePercentile(rank: number, totalPlayers: number): number {
    if (totalPlayers <= 1) return 100
    return Math.max(0, Math.round(((totalPlayers - rank) / (totalPlayers - 1)) * 100))
  }

  private static determineTier(
    score: number, 
    thresholds: Record<PerformanceTier, number>
  ): PerformanceTier {
    if (score >= thresholds.legend) return 'legend'
    if (score >= thresholds.diamond) return 'diamond'
    if (score >= thresholds.gold) return 'gold'
    if (score >= thresholds.silver) return 'silver'
    if (score >= thresholds.bronze) return 'bronze'
    return 'standard'
  }

  private static calculateTrend(stats: PlayerStatistic[]): 'improving' | 'declining' | 'stable' {
    // In a real implementation, this would use historical data
    // For now, we'll use a simple heuristic based on current performance
    const avgPercentile = stats.reduce((sum, stat) => {
      const rank = parseInt(stat.position)
      return sum + this.calculatePercentile(rank, 1000)
    }, 0) / stats.length

    if (avgPercentile > 75) return 'improving'
    if (avgPercentile < 40) return 'declining'
    return 'stable'
  }

  private static determineStrength(score: number): 'primary' | 'secondary' | 'developing' {
    if (score >= 80) return 'primary'
    if (score >= 60) return 'secondary'
    return 'developing'
  }

  static calculateOverallKPI(profile: PlayerProfile): PlayerKPIProfile {
    const categoryScores: KPIScore[] = []
    let totalWeightedScore = 0
    let totalWeight = 0

    // Calculate score for each KPI category
    Object.values(KPI_CATEGORIES).forEach(category => {
      const score = this.calculateCategoryScore(category, profile.statistics)
      categoryScores.push(score)
      
      totalWeightedScore += score.score * category.weight
      totalWeight += category.weight
    })

    const overallScore = totalWeight > 0 ? totalWeightedScore / totalWeight : 0
    const overallTier = this.determineTier(overallScore, KPI_CATEGORIES.combat.tier_thresholds)

    // Identify top strengths (top 3 categories)
    const topStrengths = [...categoryScores]
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)

    // Identify improvement areas (bottom 2 categories with potential)
    const improvementAreas = [...categoryScores]
      .filter(score => score.score < 70 && score.score > 20)
      .sort((a, b) => a.score - b.score)
      .slice(0, 2)

    // Calculate consistency rating
    const scores = categoryScores.map(s => s.score)
    const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length
    const variance = scores.reduce((sum, score) => sum + Math.pow(score - avgScore, 2), 0) / scores.length
    const consistencyRating = Math.max(0, 100 - Math.sqrt(variance))

    return {
      overall_score: Math.round(overallScore * 100) / 100,
      overall_tier: overallTier,
      category_scores: categoryScores,
      top_strengths: topStrengths,
      improvement_areas: improvementAreas,
      performance_trends: {}, // Would be populated with historical data
      consistency_rating: Math.round(consistencyRating),
      last_calculated: new Date().toISOString()
    }
  }

  static getTierInfo(tier: PerformanceTier) {
    const tierInfo = {
      legend: {
        name: 'Legend',
        color: 'bg-purple-500',
        textColor: 'text-purple-500',
        description: 'Elite performer in top 5%',
        icon: 'Crown',
        threshold: '95th percentile+'
      },
      diamond: {
        name: 'Diamond',
        color: 'bg-cyan-500',
        textColor: 'text-cyan-500',
        description: 'Exceptional skills in top 15%',
        icon: 'Gem',
        threshold: '85th-94th percentile'
      },
      gold: {
        name: 'Gold',
        color: 'bg-yellow-500',
        textColor: 'text-yellow-500',
        description: 'Strong performance in top 30%',
        icon: 'Trophy',
        threshold: '70th-84th percentile'
      },
      silver: {
        name: 'Silver',
        color: 'bg-gray-400',
        textColor: 'text-gray-400',
        description: 'Above average performance',
        icon: 'Medal',
        threshold: '50th-69th percentile'
      },
      bronze: {
        name: 'Bronze',
        color: 'bg-orange-500',
        textColor: 'text-orange-500',
        description: 'Developing skills',
        icon: 'Award',
        threshold: '25th-49th percentile'
      },
      standard: {
        name: 'Standard',
        color: 'bg-gray-500',
        textColor: 'text-gray-500',
        description: 'Getting started',
        icon: 'Circle',
        threshold: 'Below 25th percentile'
      }
    }

    return tierInfo[tier]
  }

  static formatKPIScore(score: number): string {
    return `${score.toFixed(1)}/100`
  }

  static getStrengthLabel(strength: 'primary' | 'secondary' | 'developing'): string {
    switch (strength) {
      case 'primary': return 'Core Strength'
      case 'secondary': return 'Growing Skill'
      case 'developing': return 'Opportunity'
    }
  }

  static getTrendIcon(trend: 'improving' | 'declining' | 'stable'): string {
    switch (trend) {
      case 'improving': return 'TrendingUp'
      case 'declining': return 'TrendingDown'
      case 'stable': return 'Minus'
    }
  }

  static getTrendColor(trend: 'improving' | 'declining' | 'stable'): string {
    switch (trend) {
      case 'improving': return 'text-green-500'
      case 'declining': return 'text-red-500'
      case 'stable': return 'text-gray-500'
    }
  }
}