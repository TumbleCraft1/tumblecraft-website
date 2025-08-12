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

export function ErrorState({ onRetry, message }: { onRetry: () => void, message?: string | null }) {
  return (
    <motion.div
      className="text-center py-12 max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="text-6xl mb-6">⚠️</div>
      <h2 className="section-title mb-4">Failed to Load Leaderboards</h2>
      <p className="subtitle mb-8">
        {message || 'Unable to connect to the server. Please check your connection and try again.'}
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

export function PlayerProfile() {
  const statCards = Array.from({ length: 4 }, (_, i) => `stat-card-${Date.now()}-${i}`)
  const statRows = Array.from({ length: 5 }, (_, i) => `stat-row-${Date.now()}-${i}`)
  const tierCards = Array.from({ length: 5 }, (_, i) => `tier-${Date.now()}-${i}`)
  const achievements = Array.from({ length: 3 }, (_, i) => `achievement-${Date.now()}-${i}`)
  const dateGroups = Array.from({ length: 4 }, (_, i) => `date-group-${Date.now()}-${i}`)

  return (
    <div className="space-y-8">
      {/* Profile Header Skeleton */}
      <div className="bg-card rounded-xl p-8 shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-background-secondary rounded-xl animate-pulse" />
            <div>
              <div className="h-8 w-48 bg-background-secondary rounded animate-pulse mb-2" />
              <div className="h-4 w-64 bg-background-secondary rounded animate-pulse mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-32 bg-background-secondary rounded animate-pulse" />
                <div className="h-4 w-36 bg-background-secondary rounded animate-pulse" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map((key) => (
              <div key={key} className="bg-background-secondary rounded-lg p-4 animate-pulse">
                <div className="h-6 w-12 bg-background rounded mb-2" />
                <div className="h-4 w-16 bg-background rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          {/* Statistics Card */}
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <div className="h-6 w-32 bg-background-secondary rounded animate-pulse mb-6" />
            <div className="space-y-4">
              {statRows.map((key) => (
                <div key={key} className="bg-background-secondary rounded-lg p-4 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-background rounded-lg" />
                      <div>
                        <div className="h-4 w-24 bg-background rounded mb-2" />
                        <div className="h-3 w-32 bg-background rounded" />
                      </div>
                    </div>
                    <div className="h-6 w-16 bg-background rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <div className="h-6 w-32 bg-background-secondary rounded animate-pulse mb-6" />
            <div className="grid grid-cols-5 gap-4 mb-8">
              {tierCards.map((key) => (
                <div key={key} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 bg-background-secondary rounded-lg animate-pulse" />
                  <div className="h-4 w-6 mx-auto bg-background-secondary rounded animate-pulse mb-1" />
                  <div className="h-3 w-12 mx-auto bg-background-secondary rounded animate-pulse" />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {achievements.map((key) => (
                <div key={key} className="bg-background-secondary rounded-lg p-4 animate-pulse">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-background rounded-lg" />
                    <div className="flex-1">
                      <div className="h-5 w-32 bg-background rounded mb-2" />
                      <div className="h-4 w-48 bg-background rounded mb-3" />
                      <div className="h-3 w-24 bg-background rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          {/* History Card */}
          <div className="bg-card rounded-xl p-6 shadow-lg">
            <div className="h-6 w-32 bg-background-secondary rounded animate-pulse mb-6" />
            <div className="space-y-6">
              {dateGroups.map((key) => (
                <div key={key}>
                  <div className="h-4 w-24 bg-background-secondary rounded animate-pulse mb-4" />
                  <div className="space-y-3">
                    <div className="bg-background-secondary rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-background rounded-lg" />
                        <div className="flex-1">
                          <div className="h-4 w-32 bg-background rounded mb-2" />
                          <div className="h-3 w-48 bg-background rounded mb-3" />
                          <div className="flex justify-between">
                            <div className="h-6 w-16 bg-background rounded" />
                            <div className="h-4 w-20 bg-background rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-background-secondary rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-background rounded-lg" />
                        <div className="flex-1">
                          <div className="h-4 w-32 bg-background rounded mb-2" />
                          <div className="h-3 w-48 bg-background rounded mb-3" />
                          <div className="flex justify-between">
                            <div className="h-6 w-16 bg-background rounded" />
                            <div className="h-4 w-20 bg-background rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const LoadingStates = {
  LeaderboardSkeleton,
  PlayerProfile
}