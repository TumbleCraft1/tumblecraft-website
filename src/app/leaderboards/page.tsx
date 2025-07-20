'use client'

import { useRouter } from 'next/navigation'
import { LeaderboardsResponse } from '@/lib/leaderboard-api'
import { useLeaderboardData } from '@/hooks/useLeaderboardData'
import LeaderboardGrid from '@/components/leaderboards/LeaderboardGrid'
import { LeaderboardSkeleton, ErrorState, EmptyState } from '@/components/leaderboards/LoadingStates'

export default function LeaderboardsPage() {
  const router = useRouter()
  const { data, loading, error, refresh } = useLeaderboardData()

  const handleCategoryClick = (category: string) => {
    router.push(`/leaderboards/${category}`)
  }

  const handleRetry = () => {
    refresh()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              🏆 Leaderboards
            </h1>
            <p className="text-xl text-gray-300">Loading leaderboard data...</p>
          </div>
          <LeaderboardSkeleton />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <ErrorState onRetry={handleRetry} />
      </div>
    )
  }

  if (!data || (data as LeaderboardsResponse).leaderboards?.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <EmptyState />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <LeaderboardGrid data={data as LeaderboardsResponse} onCategoryClick={handleCategoryClick} />
    </div>
  )
}