'use client'

import { motion } from 'framer-motion'
import { LeaderboardPlayer } from '@/lib/leaderboard-api'

interface PlayerRankingProps {
  player: LeaderboardPlayer
  rank: number
  category: string
  formatValue: (category: string, value: string) => string
}

export default function PlayerRanking({ player, rank, category, formatValue }: PlayerRankingProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return '🥇'
      case 2: return '🥈'
      case 3: return '🥉'
      default: return `#${rank}`
    }
  }

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'text-yellow-500'
      case 2: return 'text-gray-400'
      case 3: return 'text-amber-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <motion.div
      className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: rank * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center gap-3">
        <div className={`text-lg font-bold ${getRankColor(rank)} min-w-[40px]`}>
          {getRankIcon(rank)}
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">
              {player.player_name.charAt(0).toUpperCase()}
            </span>
          </div>
          
          <div>
            <div className="text-white font-medium">{player.player_name}</div>
            <div className="text-gray-300 text-sm">UUID: {player.player_uuid.slice(0, 8)}...</div>
          </div>
        </div>
      </div>
      
      <div className="text-right">
        <div className="text-white font-bold text-lg">
          {player.formatted_value}
        </div>
      </div>
    </motion.div>
  )
}