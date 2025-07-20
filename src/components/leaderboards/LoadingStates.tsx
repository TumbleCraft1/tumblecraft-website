'use client'

import { motion } from 'framer-motion'

export function LeaderboardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-white/20 rounded-lg animate-pulse" />
            <div>
              <div className="w-32 h-5 bg-white/20 rounded animate-pulse mb-2" />
              <div className="w-24 h-3 bg-white/20 rounded animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded animate-pulse" />
                  <div className="w-8 h-8 bg-white/20 rounded-lg animate-pulse" />
                  <div>
                    <div className="w-20 h-4 bg-white/20 rounded animate-pulse mb-1" />
                    <div className="w-16 h-3 bg-white/20 rounded animate-pulse" />
                  </div>
                </div>
                <div className="w-16 h-5 bg-white/20 rounded animate-pulse" />
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/20">
            <div className="w-full h-10 bg-white/20 rounded-lg animate-pulse" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <motion.div
      className="text-center py-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="text-6xl mb-4">⚠️</div>
      <h2 className="text-2xl font-bold text-white mb-2">Failed to Load Leaderboards</h2>
      <p className="text-gray-300 mb-6">
        Unable to connect to the server. Please check your connection and try again.
      </p>
      <motion.button
        onClick={onRetry}
        className="bg-primary hover:bg-primary/80 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Try Again
      </motion.button>
    </motion.div>
  )
}

export function EmptyState() {
  return (
    <motion.div
      className="text-center py-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="text-6xl mb-4">📊</div>
      <h2 className="text-2xl font-bold text-white mb-2">No Data Available</h2>
      <p className="text-gray-300">
        Leaderboard data is not available at the moment. Please check back later.
      </p>
    </motion.div>
  )
}