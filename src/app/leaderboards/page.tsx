'use client'

import { LeaderboardsResponse } from '@/lib/leaderboard-api'
import { useLeaderboardData } from '@/hooks/useLeaderboardData'
import { Trophy } from 'lucide-react'
import Navigation from '@/components/Navigation'
import PardonAppearanceModal from '@/components/PardonAppearanceModal'
import LeaderboardGrid from '@/components/leaderboards/LeaderboardGrid'
import { LeaderboardSkeleton, ErrorState, EmptyState } from '@/components/leaderboards/LoadingStates'
import { useEffect, useState } from 'react'

export default function LeaderboardsPage() {
  const { data, loading, error, refresh } = useLeaderboardData()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(true)
  }, [])

  const handleRetry = () => {
    refresh()
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <PardonAppearanceModal show={showModal} onClose={() => setShowModal(false)} />
        <div className="container mx-auto px-6 pt-24 pb-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <Trophy size={32} className="text-white" />
              </div>
              <h1 className="hero-title">Leaderboards</h1>
            </div>
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
        <PardonAppearanceModal show={showModal} onClose={() => setShowModal(false)} />
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
        <PardonAppearanceModal show={showModal} onClose={() => setShowModal(false)} />
        <div className="flex items-center justify-center min-h-screen pt-24">
          <EmptyState />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PardonAppearanceModal show={showModal} onClose={() => setShowModal(false)} />
      <div className="pt-24">
        <LeaderboardGrid data={data as LeaderboardsResponse} />
      </div>
    </main>
  )
}