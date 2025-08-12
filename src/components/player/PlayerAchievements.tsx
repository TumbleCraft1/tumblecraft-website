'use client'

import { motion } from 'framer-motion'
import { Trophy, Medal, Gem, Crown, Award, Star, Target, Flame, Calendar } from 'lucide-react'
import { PlayerProfile, PlayerAchievement } from '@/lib/leaderboard-api'

interface PlayerAchievementsProps {
  profile: PlayerProfile
  limit?: number
}

const TIER_ICONS = {
  'bronze': Medal,
  'silver': Medal,
  'gold': Medal,
  'diamond': Gem,
  'legend': Crown
}

const TIER_COLORS = {
  'bronze': 'from-orange-400 to-orange-600',
  'silver': 'from-gray-300 to-gray-500',
  'gold': 'from-yellow-400 to-yellow-600',
  'diamond': 'from-cyan-400 to-cyan-600',
  'legend': 'from-purple-400 to-purple-600'
}

export default function PlayerAchievements({ profile, limit }: PlayerAchievementsProps) {
  const sortedAchievements = [...profile.achievements].sort((a, b) => {
    const tierOrder = { 'legend': 5, 'diamond': 4, 'gold': 3, 'silver': 2, 'bronze': 1 }
    const aTier = tierOrder[a.tier as keyof typeof tierOrder] || 0
    const bTier = tierOrder[b.tier as keyof typeof tierOrder] || 0
    
    if (aTier !== bTier) return bTier - aTier
    return new Date(b.earned_at).getTime() - new Date(a.earned_at).getTime()
  })

  const displayAchievements = limit ? sortedAchievements.slice(0, limit) : sortedAchievements

  const getTierStats = () => {
    const stats = { bronze: 0, silver: 0, gold: 0, diamond: 0, legend: 0 }
    profile.achievements.forEach(achievement => {
      stats[achievement.tier as keyof typeof stats]++
    })
    return stats
  }

  const tierStats = getTierStats()

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getAchievementTypeIcon = (achievement: PlayerAchievement) => {
    if (achievement.requirements.type === 'rank_achievement') return Trophy
    if (achievement.requirements.type === 'value_achievement') return Target
    if (achievement.requirements.type === 'streak_achievement') return Flame
    if (achievement.requirements.type === 'multi_category') return Star
    return Award
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <Trophy size={24} className="text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          Achievements ({profile.total_achievements})
        </h2>
        {limit && (
          <span className="text-sm text-foreground-muted">
            Showing latest {displayAchievements.length}
          </span>
        )}
      </div>

      {/* Tier Statistics */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {Object.entries(tierStats).map(([tier, count]) => {
          const TierIcon = TIER_ICONS[tier as keyof typeof TIER_ICONS]
          const color = TIER_COLORS[tier as keyof typeof TIER_COLORS]
          
          return (
            <div key={tier} className="text-center">
              <div className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center`}>
                <TierIcon size={20} className="text-white" />
              </div>
              <div className="text-lg font-bold text-foreground">{count}</div>
              <div className="text-xs text-foreground-muted capitalize">{tier}</div>
            </div>
          )
        })}
      </div>

      {/* Achievement List */}
      {displayAchievements.length > 0 ? (
        <div className="space-y-4">
          {displayAchievements.map((achievement, index) => {
            const TierIcon = TIER_ICONS[achievement.tier as keyof typeof TIER_ICONS] || Award
            const TypeIcon = getAchievementTypeIcon(achievement)
            const tierColor = TIER_COLORS[achievement.tier as keyof typeof TIER_COLORS]

            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-background-secondary rounded-lg p-4 hover:bg-background-tertiary transition-colors ${
                  achievement.is_featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Achievement Icon */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${tierColor} flex items-center justify-center flex-shrink-0 relative`}>
                    <TierIcon size={24} className="text-white" />
                    {achievement.is_featured && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <Star size={12} className="text-white" />
                      </div>
                    )}
                  </div>

                  {/* Achievement Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{achievement.name}</h3>
                        <p className="text-foreground-muted text-sm">{achievement.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-right">
                        <div className="flex items-center gap-1">
                          <TypeIcon size={14} className="text-foreground-muted" />
                          <span className="text-xs text-foreground-muted capitalize">
                            {achievement.tier}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {achievement.category && (
                          <div className="flex items-center gap-1 px-2 py-1 bg-background rounded text-xs text-foreground-muted">
                            <span>{achievement.category}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-1 text-xs text-foreground-muted">
                          <Calendar size={12} />
                          <span>Earned {formatDate(achievement.earned_at)}</span>
                        </div>
                      </div>

                      {achievement.is_featured && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                          <Star size={12} />
                          Featured
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <Trophy size={48} className="text-foreground-muted mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground-muted mb-2">No Achievements Yet</h3>
          <p className="text-foreground-muted">
            Start playing to unlock your first achievement!
          </p>
        </div>
      )}

      {/* View More Button */}
      {limit && profile.achievements.length > limit && (
        <div className="mt-6 text-center">
          <button className="text-primary hover:text-primary/80 transition-colors font-medium">
            View all {profile.achievements.length} achievements →
          </button>
        </div>
      )}

      {/* Achievement Progress Hint */}
      {profile.achievements.length > 0 && (
        <div className="mt-6 pt-6 border-t border-border-light">
          <div className="bg-background-secondary rounded-lg p-4">
            <div className="flex items-center gap-3">
              <Target size={20} className="text-primary" />
              <div>
                <h4 className="font-semibold text-foreground">Keep Going!</h4>
                <p className="text-sm text-foreground-muted">
                  You&apos;re doing great! Continue playing to unlock more achievements and climb the leaderboards.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}