'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LeaderboardsResponse, LeaderboardAPI, LeaderboardPlayer } from '@/lib/leaderboard-api'

interface LeaderboardGridProps {
  data: LeaderboardsResponse
}

export default function LeaderboardGrid({ data }: LeaderboardGridProps) {
  const [activeTab, setActiveTab] = useState(data.leaderboards?.[0]?.category || '')

  const activeCategory = data.leaderboards?.find(cat => cat.category === activeTab)
  const categoryInfo = activeCategory ? LeaderboardAPI.getCategoryInfo(activeCategory.category) : null

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

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="border-b border-border-light">
          <nav className="-mb-px flex flex-wrap gap-2">
            {data.leaderboards?.map((category) => {
              const categoryInfo = LeaderboardAPI.getCategoryInfo(category.category)
              const isActive = activeTab === category.category
              
              return (
                <button
                  key={category.category}
                  onClick={() => setActiveTab(category.category)}
                  className={`
                    flex items-center gap-2 py-3 px-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors
                    ${isActive 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-foreground-muted hover:text-foreground hover:border-border'
                    }
                  `}
                >
                  <span className="text-lg">{categoryInfo.icon}</span>
                  {categoryInfo.displayName}
                  <span className="text-xs bg-background-tertiary px-2 py-1 rounded-full">
                    {category.total_entries}
                  </span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Active Category Table */}
      {activeCategory && categoryInfo && (
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                {categoryInfo.icon}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{categoryInfo.displayName}</h2>
                <p className="text-foreground-muted">{categoryInfo.description}</p>
              </div>
            </div>
            <div className="text-foreground-muted text-sm">
              Last updated: {activeCategory.last_updated && activeCategory.last_updated !== '' 
                ? new Date(parseInt(activeCategory.last_updated) * 1000).toLocaleString()
                : 'Unknown'}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left py-3 px-4 font-semibold text-foreground-muted">Rank</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground-muted">Player</th>
                  <th className="text-right py-3 px-4 font-semibold text-foreground-muted">Value</th>
                </tr>
              </thead>
              <tbody>
                {activeCategory.rankings.map((player: LeaderboardPlayer, index: number) => (
                  <motion.tr
                    key={player.player_uuid}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border-light/50 hover:bg-background-secondary/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {player.position <= 3 && (
                          <span className="text-lg">
                            {player.position === 1 ? '🥇' : player.position === 2 ? '🥈' : '🥉'}
                          </span>
                        )}
                        <span className={`font-bold ${
                          player.position === 1 ? 'text-yellow-500' :
                          player.position === 2 ? 'text-gray-400' :
                          player.position === 3 ? 'text-amber-600' :
                          'text-foreground'
                        }`}>
                          #{player.position}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">
                            {player.player_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="font-medium text-foreground">{player.player_name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="font-bold text-primary text-lg">
                        {player.formatted_value}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {activeCategory.rankings.length === 0 && (
            <div className="text-center py-12 text-foreground-muted">
              <p className="text-lg">No players found for this category</p>
            </div>
          )}
        </motion.div>
      )}
    </div>
  )
}