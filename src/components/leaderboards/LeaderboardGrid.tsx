'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Trophy, Medal, Award, ExternalLink, User, TrendingUp, Calendar, Users } from 'lucide-react'
import { LeaderboardsResponse, LeaderboardPlayer, CATEGORY_INFO } from '@/lib/leaderboard-api'
import * as Icons from 'lucide-react'

interface LeaderboardGridProps {
  data: LeaderboardsResponse
}

export default function LeaderboardGrid({ data }: LeaderboardGridProps) {
  const [activeTab, setActiveTab] = useState(data.leaderboards?.[0]?.category || '')
  const router = useRouter()

  const activeCategory = data.leaderboards?.find(cat => cat.category === activeTab)
  const categoryInfo = activeCategory ? CATEGORY_INFO[activeCategory.category] || {
    name: activeCategory.category,
    displayName: activeCategory.display_name,
    icon: 'BarChart3',
    description: 'Server statistic',
    color: 'from-gray-400 to-gray-600'
  } : null

  const handlePlayerClick = (player: LeaderboardPlayer) => {
    router.push(`/player/${player.player_uuid}?name=${encodeURIComponent(player.player_name)}`)
  }

  const getRankIcon = (position: number) => {
    if (position === 1) return Trophy
    if (position <= 3) return Medal
    return Award
  }

  const getRankColor = (position: number) => {
    if (position === 1) return 'text-yellow-500'
    if (position === 2) return 'text-gray-400'
    if (position === 3) return 'text-amber-600'
    return 'text-foreground-muted'
  }

  const getIconComponent = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] // eslint-disable-line @typescript-eslint/no-explicit-any
    return IconComponent || Icons.BarChart3
  }

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
          <nav className="-mb-px flex flex-wrap gap-2 overflow-x-auto">
            {data.leaderboards?.map((category) => {
              const categoryInfo = CATEGORY_INFO[category.category] || {
                name: category.category,
                displayName: category.display_name,
                icon: 'BarChart3',
                description: 'Server statistic',
                color: 'from-gray-400 to-gray-600'
              }
              const isActive = activeTab === category.category
              const IconComponent = getIconComponent(categoryInfo.icon)
              
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
                  <IconComponent size={18} />
                  {categoryInfo.displayName}
                  <span className="text-xs bg-background-tertiary px-2 py-1 rounded-full flex items-center gap-1">
                    <Users size={10} />
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
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${categoryInfo.color}`}>
                {React.createElement(getIconComponent(categoryInfo.icon), { size: 24, className: 'text-white' })}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{categoryInfo.displayName}</h2>
                <p className="text-foreground-muted">{categoryInfo.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-1 text-sm text-foreground-muted">
                  <Calendar size={14} />
                  <span>
                    Last updated: {activeCategory.last_updated && activeCategory.last_updated !== '' 
                      ? new Date(parseInt(activeCategory.last_updated) * 1000).toLocaleString()
                      : 'Unknown'}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-foreground-muted mt-1">
                  <TrendingUp size={14} />
                  <span>{activeCategory.total_entries} competitive players</span>
                </div>
              </div>
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
                {activeCategory.rankings.map((player: LeaderboardPlayer, index: number) => {
                  const RankIcon = getRankIcon(player.position)
                  const rankColor = getRankColor(player.position)
                  
                  return (
                    <motion.tr
                      key={player.player_uuid}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handlePlayerClick(player)}
                      className="border-b border-border-light/50 hover:bg-background-secondary/50 transition-colors cursor-pointer group"
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {player.position <= 3 && (
                            <RankIcon size={20} className={rankColor} />
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
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center relative">
                            <User size={16} className="text-primary" />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <ExternalLink size={8} className="text-white" />
                            </div>
                          </div>
                          <div>
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {player.player_name}
                            </span>
                            <div className="text-xs text-foreground-muted group-hover:text-primary/70 transition-colors">
                              Click to view profile
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <span className="font-bold text-primary text-lg">
                            {player.formatted_value}
                          </span>
                          <ExternalLink size={16} className="text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </td>
                    </motion.tr>
                  )
                })}
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