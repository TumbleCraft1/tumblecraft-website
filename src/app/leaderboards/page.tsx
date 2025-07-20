'use client'

import { useRouter } from 'next/navigation'
import { LeaderboardsResponse } from '@/lib/leaderboard-api'
import { useLeaderboardData } from '@/hooks/useLeaderboardData'
import Navigation from '@/components/Navigation'
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
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 pt-24 pb-12">
          <div className="text-center mb-12">
            <h1 className="hero-title mb-6">
              🏆 Leaderboards
            </h1>
            <p className="subtitle">Loading leaderboard data...</p>
          </div>
          <LeaderboardSkeleton />
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen pt-24">
          <ErrorState onRetry={handleRetry} />
        </div>
      </main>
    )
  }

  if (!data || (data as LeaderboardsResponse).leaderboards?.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen pt-24">
          <EmptyState />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24">
        <LeaderboardGrid data={data as LeaderboardsResponse} onCategoryClick={handleCategoryClick} />
      </div>
    </main>
  )
}