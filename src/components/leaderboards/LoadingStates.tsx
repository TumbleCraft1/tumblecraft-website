'use client'

import { motion } from 'framer-motion'

export function LeaderboardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
      {Array.from({ length: 6 }, (_, index) => index).map((index) => (
        <motion.div
          key={`skeleton-${index}`}
          className="feature-card h-full flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl animate-pulse" />
            <div>
              <div className="w-32 h-5 bg-background-tertiary rounded animate-pulse mb-2" />
              <div className="w-24 h-3 bg-background-tertiary rounded animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-2 flex-1">
            {Array.from({ length: 3 }, (_, i) => i).map((i) => (
              <div key={`inner-${i}`} className="flex items-center justify-between p-4 bg-background-secondary rounded-lg border border-border-light">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className="w-6 h-6 bg-background-tertiary rounded animate-pulse flex-shrink-0" />
                  <div className="w-10 h-10 bg-primary/10 rounded-xl animate-pulse flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="w-20 h-4 bg-background-tertiary rounded animate-pulse mb-1" />
                    <div className="w-16 h-3 bg-background-tertiary rounded animate-pulse" />
                  </div>
                </div>
                <div className="w-16 h-5 bg-background-tertiary rounded animate-pulse flex-shrink-0" />
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-border-light">
            <div className="w-full h-12 bg-primary/10 rounded-lg animate-pulse" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <motion.div
      className="text-center py-12 max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="text-6xl mb-6">⚠️</div>
      <h2 className="section-title mb-4">Failed to Load Leaderboards</h2>
      <p className="subtitle mb-8">
        Unable to connect to the server. Please check your connection and try again.
      </p>
      <motion.button
        onClick={onRetry}
        className="btn-primary"
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
      className="text-center py-12 max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="text-6xl mb-6">📊</div>
      <h2 className="section-title mb-4">No Data Available</h2>
      <p className="subtitle">
        Leaderboard data is not available at the moment. Please check back later.
      </p>
    </motion.div>
  )
}