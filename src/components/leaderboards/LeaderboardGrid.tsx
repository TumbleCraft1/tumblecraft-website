'use client'

import { motion } from 'framer-motion'
import { LeaderboardsResponse, LeaderboardAPI } from '@/lib/leaderboard-api'
import LeaderboardCard from './LeaderboardCard'

interface LeaderboardGridProps {
  data: LeaderboardsResponse
  onCategoryClick?: (category: string) => void
}

export default function LeaderboardGrid({ data, onCategoryClick }: LeaderboardGridProps) {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="hero-title mb-6">
          🏆 Leaderboards
        </h1>
        <p className="subtitle max-w-3xl mx-auto">
          See how you stack up against the competition! Our leaderboards track the top players in various categories across the TumbleCraft server.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
        {data.leaderboards?.map((category, index) => {
          const categoryInfo = LeaderboardAPI.getCategoryInfo(category.category)
          
          return (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <LeaderboardCard
                category={category}
                categoryInfo={categoryInfo}
                onClick={() => onCategoryClick?.(category.category)}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}