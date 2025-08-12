'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ArrowUp, Minus } from 'lucide-react'
import { PlayerProfile, LeaderboardAPI, CATEGORY_INFO } from '@/lib/leaderboard-api'

interface PlayerStatisticsProps {
  profile: PlayerProfile
  showTopCategories?: boolean
}

export default function PlayerStatistics({ profile, showTopCategories = false }: PlayerStatisticsProps) {
  const sortedStats = [...profile.statistics].sort((a, b) => {
    const aRank = parseInt(a.position) || 999
    const bRank = parseInt(b.position) || 999
    return aRank - bRank
  })

  const displayStats = showTopCategories ? sortedStats.slice(0, 5) : sortedStats

  const getRankBadgeColor = (position: string) => {
    const rank = parseInt(position) || 999
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
    if (rank <= 3) return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white'
    if (rank <= 10) return 'bg-gradient-to-r from-orange-400 to-orange-600 text-white'
    if (rank <= 50) return 'bg-gradient-to-r from-blue-400 to-blue-600 text-white'
    return 'bg-background-tertiary text-foreground-muted'
  }

  const getPercentileRank = (position: string) => {
    const rank = parseInt(position) || 999
    // Estimate total players as 3x the rank for rough percentile
    const estimatedTotal = Math.max(rank * 3, 100)
    return LeaderboardAPI.calculatePercentileRank(rank, estimatedTotal)
  }

  const getTrendIndicator = (category: string) => {
    const streak = profile.current_streaks[category] || 0
    if (streak > 0) {
      return { icon: ArrowUp, color: 'text-green-500', label: `${streak} day streak` }
    }
    // For simplicity, we'll show neutral for now
    return { icon: Minus, color: 'text-gray-500', label: 'Stable' }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp size={24} className="text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          {showTopCategories ? 'Top Performance' : 'All Statistics'}
        </h2>
        {showTopCategories && (
          <span className="text-sm text-foreground-muted">
            Showing best {displayStats.length} categories
          </span>
        )}
      </div>

      <div className="space-y-4">
        {displayStats.map((stat, index) => {
          const categoryInfo = CATEGORY_INFO[stat.category] || {
            name: stat.category,
            displayName: stat.display_name,
            icon: 'BarChart3',
            description: 'Server statistic',
            color: 'from-gray-400 to-gray-600'
          }
          
          const trend = getTrendIndicator(stat.category)
          const TrendIcon = trend.icon
          const percentile = getPercentileRank(stat.position)
          const highestRank = profile.highest_ranks[stat.category] || parseInt(stat.position)

          return (
            <motion.div
              key={stat.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-background-secondary rounded-lg p-4 hover:bg-background-tertiary transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {/* Category Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${categoryInfo.color} flex items-center justify-center text-white`}>
                    <span className="text-xl font-bold">
                      {categoryInfo.displayName.charAt(0)}
                    </span>
                  </div>

                  {/* Category Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{categoryInfo.displayName}</h3>
                      <TrendIcon size={16} className={trend.color} />
                    </div>
                    <p className="text-sm text-foreground-muted">{categoryInfo.description}</p>
                  </div>
                </div>

                {/* Statistics */}
                <div className="flex items-center gap-6">
                  {/* Current Rank */}
                  <div className="text-center">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${getRankBadgeColor(stat.position)}`}>
                      #{stat.position}
                    </div>
                    <div className="text-xs text-foreground-muted mt-1">Current</div>
                  </div>

                  {/* Best Rank */}
                  {highestRank < parseInt(stat.position) && (
                    <div className="text-center">
                      <div className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-green-400 to-green-600 text-white">
                        #{highestRank}
                      </div>
                      <div className="text-xs text-foreground-muted mt-1">Best</div>
                    </div>
                  )}

                  {/* Value */}
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">{stat.formatted_value}</div>
                    <div className="text-xs text-foreground-muted">Top {100 - percentile}%</div>
                  </div>

                  {/* Trend */}
                  <div className="text-center min-w-[60px]">
                    <div className={`text-sm font-medium ${trend.color}`}>
                      {trend.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-3 pt-3 border-t border-border-light">
                <div className="flex justify-between text-xs text-foreground-muted mb-1">
                  <span>Percentile Rank</span>
                  <span>{percentile}th percentile</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentile}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${categoryInfo.color}`}
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {showTopCategories && profile.statistics.length > 5 && (
        <div className="mt-6 text-center">
          <button className="text-primary hover:text-primary/80 transition-colors font-medium">
            View all {profile.statistics.length} statistics →
          </button>
        </div>
      )}
    </motion.div>
  )
}