'use client'

import { motion } from 'framer-motion'
import { User, Clock, Calendar, Zap } from 'lucide-react'
import { PlayerProfile } from '@/lib/leaderboard-api'

interface PlayerProfileHeaderProps {
  profile: PlayerProfile
}

export default function PlayerProfileHeader({ profile }: PlayerProfileHeaderProps) {
  const formatPlaytime = (seconds?: number) => {
    if (!seconds) return 'Unknown'
    const hours = Math.floor(seconds / 3600)
    const days = Math.floor(hours / 24)
    const remainingHours = hours % 24
    
    if (days > 0) {
      return `${days}d ${remainingHours}h`
    }
    return `${hours}h`
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getPerformanceScoreColor = (score: number) => {
    if (score >= 90) return 'text-purple-500'
    if (score >= 75) return 'text-blue-500'
    if (score >= 60) return 'text-green-500'
    if (score >= 40) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getPerformanceScoreLabel = (score: number) => {
    if (score >= 90) return 'Legendary'
    if (score >= 75) return 'Expert'
    if (score >= 60) return 'Advanced'
    if (score >= 40) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl p-8 shadow-lg mb-8"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        {/* Player Info */}
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
            <User size={32} className="text-primary" />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {profile.player_name}
            </h1>
            <p className="text-foreground-muted text-sm font-mono mb-4">
              {profile.player_uuid}
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-foreground-muted">
                <Calendar size={16} />
                <span>Joined {formatDate(profile.first_seen)}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Clock size={16} />
                <span>Last seen {formatDate(profile.last_seen)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-background-secondary rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-foreground">
              {profile.total_achievements}
            </div>
            <div className="text-sm text-foreground-muted">Achievements</div>
          </div>
          
          <div className="bg-background-secondary rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-foreground">
              {Object.keys(profile.highest_ranks).length}
            </div>
            <div className="text-sm text-foreground-muted">Categories</div>
          </div>
          
          <div className="bg-background-secondary rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-foreground">
              {formatPlaytime(profile.total_playtime)}
            </div>
            <div className="text-sm text-foreground-muted">Playtime</div>
          </div>
          
          <div className="bg-background-secondary rounded-lg p-4 text-center">
            <div className={`text-2xl font-bold ${getPerformanceScoreColor(profile.performance_score)}`}>
              {Math.round(profile.performance_score)}
            </div>
            <div className="text-sm text-foreground-muted">Performance</div>
            <div className={`text-xs ${getPerformanceScoreColor(profile.performance_score)}`}>
              {getPerformanceScoreLabel(profile.performance_score)}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Score Bar */}
      <div className="mt-6 pt-6 border-t border-border-light">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-foreground-muted">Overall Performance Score</span>
          <span className={`text-sm font-medium ${getPerformanceScoreColor(profile.performance_score)}`}>
            {Math.round(profile.performance_score)}/100
          </span>
        </div>
        <div className="w-full bg-background-secondary rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${profile.performance_score}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-3 rounded-full ${
              profile.performance_score >= 90 ? 'bg-purple-500' :
              profile.performance_score >= 75 ? 'bg-blue-500' :
              profile.performance_score >= 60 ? 'bg-green-500' :
              profile.performance_score >= 40 ? 'bg-yellow-500' :
              'bg-red-500'
            }`}
          />
        </div>
        <div className="flex justify-between text-xs text-foreground-muted mt-1">
          <span>Beginner</span>
          <span>Intermediate</span>
          <span>Advanced</span>
          <span>Expert</span>
          <span>Legendary</span>
        </div>
      </div>

      {/* Top Achievements Preview */}
      {profile.achievements.length > 0 && (
        <div className="mt-6 pt-6 border-t border-border-light">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={20} className="text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Recent Achievements</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto">
            {profile.achievements.slice(0, 6).map((achievement) => (
              <div
                key={achievement.id}
                className="flex-shrink-0 bg-background-secondary rounded-lg p-3 min-w-[150px]"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="text-sm font-medium text-foreground">{achievement.name}</div>
                  <div className="text-xs text-foreground-muted capitalize">{achievement.tier}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}