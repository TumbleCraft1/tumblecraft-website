'use client'

import { motion } from 'framer-motion'
import { LeaderboardPlayer } from '@/lib/leaderboard-api'

interface PlayerRankingProps {
  player: LeaderboardPlayer
  rank: number
  category?: string
  formatValue?: (category: string, value: string) => string
}

export default function PlayerRanking({ player, rank }: PlayerRankingProps) {
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
      case 1: return 'text-accent'
      case 2: return 'text-primary'
      case 3: return 'text-accent-dark'
      default: return 'text-foreground-muted'
    }
  }

  return (
    <motion.div
      className="flex items-center justify-between p-4 bg-background-secondary rounded-lg border border-border-light hover:border-primary hover:bg-background-tertiary transition-all duration-300 min-w-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: rank * 0.05 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <div className={`text-lg font-bold ${getRankColor(rank)} min-w-[40px] flex-shrink-0`}>
          {getRankIcon(rank)}
        </div>
        
        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 flex-shrink-0">
          <span className="text-primary font-bold text-sm">
            {player.player_name.charAt(0).toUpperCase()}
          </span>
        </div>
        
        <div className="min-w-0 flex-1">
          <div className="text-foreground font-semibold truncate">{player.player_name}</div>
          <div className="text-foreground-muted text-sm truncate">UUID: {player.player_uuid.slice(0, 8)}...</div>
        </div>
      </div>
      
      <div className="text-right flex-shrink-0 ml-4">
        <div className="text-foreground font-bold text-lg">
          {player.formatted_value}
        </div>
      </div>
    </motion.div>
  )
}