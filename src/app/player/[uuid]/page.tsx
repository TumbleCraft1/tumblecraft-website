'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, History } from 'lucide-react'
import Navigation from '@/components/Navigation'
import PardonAppearanceModal from '@/components/PardonAppearanceModal'
import { LeaderboardAPI, PlayerProfile } from '@/lib/leaderboard-api'
import PlayerProfileHeader from '@/components/player/PlayerProfileHeader'
import PlayerStatistics from '@/components/player/PlayerStatistics'
import PlayerHistory from '@/components/player/PlayerHistory'
import { ErrorState, LoadingStates } from '@/components/leaderboards/LoadingStates'

export default function PlayerProfilePage() {
  const params = useParams()
  const uuid = params.uuid as string

  const [profile, setProfile] = useState<PlayerProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    setShowModal(true)
  }, [])

  useEffect(() => {
    if (uuid) {
      fetchPlayerProfile()
    }
  }, [uuid]) // eslint-disable-line react-hooks/exhaustive-deps

  const fetchPlayerProfile = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await LeaderboardAPI.getPlayerProfile(uuid)
      setProfile(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load player profile')
    } finally {
      setLoading(false)
    }
  }

  const handleRetry = () => {
    fetchPlayerProfile()
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <PardonAppearanceModal show={showModal} onClose={() => setShowModal(false)} />
        <div className="container mx-auto px-6 pt-24 pb-12">
          <LoadingStates.PlayerProfile />
        </div>
      </main>
    )
  }

  if (error || !profile) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <PardonAppearanceModal show={showModal} onClose={() => setShowModal(false)} />
        <div className="flex items-center justify-center min-h-screen pt-24">
          <ErrorState onRetry={handleRetry} message={error} />
        </div>
      </main>
    )
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'statistics', name: 'Statistics', icon: TrendingUp },
    { id: 'history', name: 'History', icon: History }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PardonAppearanceModal show={showModal} onClose={() => setShowModal(false)} />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Player Profile Header */}
        <PlayerProfileHeader profile={profile} />

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-border-light">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center gap-2 py-3 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors
                      ${activeTab === tab.id 
                        ? 'border-primary text-primary' 
                        : 'border-transparent text-foreground-muted hover:text-foreground hover:border-border'
                      }
                    `}
                  >
                    <IconComponent size={18} />
                    {tab.name}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <PlayerStatistics profile={profile} showTopCategories={true} />
              </div>
              <div>
                <PlayerHistory profile={profile} limit={10} />
              </div>
            </div>
          )}

          {activeTab === 'statistics' && (
            <PlayerStatistics profile={profile} showTopCategories={false} />
          )}

          {activeTab === 'history' && (
            <PlayerHistory profile={profile} />
          )}
        </motion.div>
      </div>
    </main>
  )
}