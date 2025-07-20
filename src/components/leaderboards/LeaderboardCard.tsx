'use client'

import { motion } from 'framer-motion'
import { LeaderboardCategory, CategoryInfo, LeaderboardAPI } from '@/lib/leaderboard-api'
import PlayerRanking from './PlayerRanking'

interface LeaderboardCardProps {
  category: LeaderboardCategory
  categoryInfo: CategoryInfo
  onClick?: () => void
}

export default function LeaderboardCard({ category, categoryInfo, onClick }: LeaderboardCardProps) {
  const topPlayers = category.rankings.slice(0, 3)
  
  return (
    <motion.div
      className="feature-card cursor-pointer group hover-lift h-full flex flex-col"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-6 gap-4">
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
            {categoryInfo.icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-foreground font-bold text-xl truncate">{categoryInfo.displayName}</h3>
            <p className="text-foreground-muted text-sm line-clamp-2">{categoryInfo.description}</p>
          </div>
        </div>
        
        <div className="text-foreground-muted text-sm font-medium bg-background-tertiary px-3 py-1 rounded-full whitespace-nowrap flex-shrink-0">
          {category.total_entries} players
        </div>
      </div>
      
      <div className="space-y-2 flex-1">
        {topPlayers.length > 0 ? (
          topPlayers.map((player, index) => (
            <PlayerRanking
              key={player.player_uuid}
              player={player}
              rank={player.position}
              category={category.category}
              formatValue={LeaderboardAPI.formatValue}
            />
          ))
        ) : (
          <div className="text-foreground-muted text-center py-8 bg-background-tertiary rounded-lg">
            No players yet
          </div>
        )}
      </div>
      
      {category.total_entries > 3 && (
        <div className="text-center mt-4">
          <span className="text-foreground-muted text-sm font-medium">
            +{category.total_entries - 3} more players
          </span>
        </div>
      )}
      
      <div className="mt-6 pt-4 border-t border-border-light">
        <button className="btn-primary w-full group-hover:bg-primary-hover">
          View Full Leaderboard
        </button>
      </div>
    </motion.div>
  )
}