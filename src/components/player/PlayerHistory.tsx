'use client'

import { motion } from 'framer-motion'
import { History, TrendingUp, TrendingDown, ArrowRight, Sparkles, Calendar } from 'lucide-react'
import { PlayerProfile, CATEGORY_INFO } from '@/lib/leaderboard-api'

interface PlayerHistoryProps {
  profile: PlayerProfile
  limit?: number
}

const TREND_ICONS = {
  'up': TrendingUp,
  'down': TrendingDown,
  'same': ArrowRight,
  'new': Sparkles
}

const TREND_COLORS = {
  'up': 'text-green-500 bg-green-50',
  'down': 'text-red-500 bg-red-50',
  'same': 'text-gray-500 bg-gray-50',
  'new': 'text-purple-500 bg-purple-50'
}

const TREND_LABELS = {
  'up': 'Rank Improved',
  'down': 'Rank Dropped',
  'same': 'No Change',
  'new': 'New Entry'
}

export default function PlayerHistory({ profile, limit }: PlayerHistoryProps) {
  const sortedHistory = [...profile.rank_history].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  const displayHistory = limit ? sortedHistory.slice(0, limit) : sortedHistory

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return 'Yesterday'
    if (diffDays <= 7) return `${diffDays} days ago`
    
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    })
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  const getPositionChangeText = (change: number, direction: string) => {
    if (direction === 'new') return 'First time on leaderboard!'
    if (change === 0) return 'Position maintained'
    if (change > 0) return `Dropped ${change} positions`
    return `Improved by ${Math.abs(change)} positions`
  }

  const getRankBadgeColor = (position: number) => {
    if (position === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
    if (position <= 3) return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white'
    if (position <= 10) return 'bg-gradient-to-r from-orange-400 to-orange-600 text-white'
    return 'bg-background-tertiary text-foreground-muted'
  }

  // Group history by date for better organization
  const groupedHistory = displayHistory.reduce((groups, entry) => {
    const date = new Date(entry.timestamp).toDateString()
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push(entry)
    return groups
  }, {} as Record<string, typeof displayHistory>)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <History size={24} className="text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          Rank History
        </h2>
        {limit && (
          <span className="text-sm text-foreground-muted">
            Showing latest {displayHistory.length} updates
          </span>
        )}
      </div>

      {displayHistory.length > 0 ? (
        <div className="space-y-6">
          {Object.entries(groupedHistory).map(([date, entries], groupIndex) => (
            <div key={date}>
              {/* Date Header */}
              <div className="flex items-center gap-2 mb-4">
                <Calendar size={16} className="text-foreground-muted" />
                <h3 className="text-sm font-semibold text-foreground-muted">
                  {formatDate(entries[0].timestamp)}
                </h3>
                <div className="flex-1 h-px bg-border-light"></div>
              </div>

              {/* History Entries for this date */}
              <div className="space-y-3">
                {entries.map((entry, index) => {
                  const categoryInfo = CATEGORY_INFO[entry.category] || {
                    name: entry.category,
                    displayName: entry.category,
                    icon: 'BarChart3',
                    description: 'Server statistic',
                    color: 'from-gray-400 to-gray-600'
                  }
                  
                  const TrendIcon = TREND_ICONS[entry.trend_direction as keyof typeof TREND_ICONS] || ArrowRight
                  const trendColor = TREND_COLORS[entry.trend_direction as keyof typeof TREND_COLORS]
                  const trendLabel = TREND_LABELS[entry.trend_direction as keyof typeof TREND_LABELS]

                  return (
                    <motion.div
                      key={`${entry.category}-${entry.timestamp}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (groupIndex * entries.length + index) * 0.05 }}
                      className="bg-background-secondary rounded-lg p-4 hover:bg-background-tertiary transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        {/* Category Icon */}
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${categoryInfo.color} flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white text-sm font-bold">
                            {categoryInfo.displayName.charAt(0)}
                          </span>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-foreground">{categoryInfo.displayName}</h4>
                              <p className="text-sm text-foreground-muted">
                                {getPositionChangeText(entry.position_change, entry.trend_direction)}
                              </p>
                            </div>

                            <div className="text-right">
                              <div className="text-xs text-foreground-muted mb-1">
                                {formatTime(entry.timestamp)}
                              </div>
                              <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${trendColor}`}>
                                <TrendIcon size={12} />
                                {trendLabel}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-4">
                              <div className="text-center">
                                <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${getRankBadgeColor(entry.position)}`}>
                                  #{entry.position}
                                </div>
                                <div className="text-xs text-foreground-muted mt-1">New Rank</div>
                              </div>

                              {entry.position_change !== 0 && entry.trend_direction !== 'new' && (
                                <div className="flex items-center gap-2 text-xs text-foreground-muted">
                                  <span>Previous: #{entry.position - entry.position_change}</span>
                                  <div className={`px-2 py-1 rounded ${
                                    entry.position_change < 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                  }`}>
                                    {entry.position_change > 0 ? '+' : ''}{entry.position_change}
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="text-right">
                              <div className="font-bold text-foreground">{entry.formatted_value}</div>
                              <div className="text-xs text-foreground-muted">Value</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <History size={48} className="text-foreground-muted mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground-muted mb-2">No History Available</h3>
          <p className="text-foreground-muted">
            Rank history will appear here as you participate in leaderboards.
          </p>
        </div>
      )}

      {/* View More Button */}
      {limit && profile.rank_history.length > limit && (
        <div className="mt-6 text-center">
          <button className="text-primary hover:text-primary/80 transition-colors font-medium">
            View full history ({profile.rank_history.length} updates) →
          </button>
        </div>
      )}

      {/* Performance Summary */}
      {profile.rank_history.length > 0 && (
        <div className="mt-6 pt-6 border-t border-border-light">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background-secondary rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-500">
                {profile.rank_history.filter(h => h.trend_direction === 'up').length}
              </div>
              <div className="text-sm text-foreground-muted">Improvements</div>
            </div>
            
            <div className="bg-background-secondary rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-500">
                {Object.keys(profile.current_streaks).filter(cat => profile.current_streaks[cat] > 0).length}
              </div>
              <div className="text-sm text-foreground-muted">Active Streaks</div>
            </div>
            
            <div className="bg-background-secondary rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-500">
                {Object.keys(profile.highest_ranks).length}
              </div>
              <div className="text-sm text-foreground-muted">Categories Ranked</div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}