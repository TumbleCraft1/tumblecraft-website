'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, RefreshCw } from 'lucide-react'
import { LeaderboardAPI, LeaderboardCategory } from '@/lib/leaderboard-api'
import { useLeaderboardData } from '@/hooks/useLeaderboardData'
import PlayerRanking from '@/components/leaderboards/PlayerRanking'
import { ErrorState } from '@/components/leaderboards/LoadingStates'

export default function CategoryLeaderboardPage() {
  const params = useParams()
  const router = useRouter()
  const category = params.category as string
  
  const { data, loading, error, refreshing, refresh } = useLeaderboardData({ category })
  const categoryInfo = LeaderboardAPI.getCategoryInfo(category)


  const handleRefresh = () => {
    refresh()
  }

  const handleRetry = () => {
    refresh()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" data-category-page>
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <div className="text-6xl mb-4">{categoryInfo.icon}</div>
            <h1 className="text-4xl font-bold text-white mb-2">{categoryInfo.displayName}</h1>
            <p className="text-gray-300">Loading leaderboard...</p>
          </div>
          
          <div className="max-w-2xl mx-auto mt-12 space-y-3">
            {Array.from({ length: 10 }, (_, i) => i).map((i) => (
              <div key={`loading-${i}`} className="flex items-center justify-between p-4 bg-white/10 rounded-lg animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-6 bg-white/20 rounded" />
                  <div className="w-8 h-8 bg-white/20 rounded-lg" />
                  <div>
                    <div className="w-24 h-4 bg-white/20 rounded mb-1" />
                    <div className="w-20 h-3 bg-white/20 rounded" />
                  </div>
                </div>
                <div className="w-20 h-5 bg-white/20 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center" data-category-page>
        <ErrorState onRetry={handleRetry} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" data-category-page>
      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.button
              onClick={() => router.back()}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full text-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="text-center">
              <div className="text-6xl mb-2">{categoryInfo.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{categoryInfo.displayName}</h1>
            </div>
            
            <motion.button
              onClick={handleRefresh}
              disabled={refreshing}
              className="bg-white/20 hover:bg-white/30 p-3 rounded-full text-white transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <RefreshCw className={`w-5 h-5 ${refreshing ? 'animate-spin' : ''}`} />
            </motion.button>
          </div>
          
          <p className="text-xl text-gray-300">{categoryInfo.description}</p>
          {data && (
            <p className="text-gray-400 mt-2">{(data as LeaderboardCategory).rankings.length} players ranked</p>
          )}
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {data && (data as LeaderboardCategory).rankings.length > 0 ? (
            <div className="space-y-3">
              {(data as LeaderboardCategory).rankings.map((player, index) => (
                <PlayerRanking
                  key={player.player_uuid}
                  player={player}
                  rank={index + 1}
                />
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-4xl mb-4">🏜️</div>
              <h2 className="text-2xl font-bold text-white mb-2">No Players Yet</h2>
              <p className="text-gray-300">
                Be the first to appear on this leaderboard!
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}