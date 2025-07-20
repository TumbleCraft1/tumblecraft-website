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
  const topPlayers = category.players.slice(0, 3)
  
  return (
    <motion.div
      className={`bg-gradient-to-br ${categoryInfo.color} p-6 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm cursor-pointer group`}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{categoryInfo.icon}</div>
          <div>
            <h3 className="text-white font-bold text-lg">{categoryInfo.displayName}</h3>
            <p className="text-white/80 text-sm">{categoryInfo.description}</p>
          </div>
        </div>
        
        <div className="text-white/60 text-sm">
          {category.players.length} players
        </div>
      </div>
      
      <div className="space-y-2">
        {topPlayers.length > 0 ? (
          topPlayers.map((player, index) => (
            <PlayerRanking
              key={player.uuid}
              player={player}
              rank={index + 1}
              category={category.category}
              formatValue={LeaderboardAPI.formatValue}
            />
          ))
        ) : (
          <div className="text-white/60 text-center py-4">
            No players yet
          </div>
        )}
      </div>
      
      {category.players.length > 3 && (
        <div className="text-center mt-4">
          <span className="text-white/80 text-sm">
            +{category.players.length - 3} more players
          </span>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t border-white/20">
        <button className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 group-hover:bg-white/30">
          View Full Leaderboard
        </button>
      </div>
    </motion.div>
  )
}