'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ArrowUp, ArrowDown, Minus, Crown, Gem, Trophy, Medal, Award, Circle, Star } from 'lucide-react'
import { PlayerProfile } from '@/lib/leaderboard-api'
import { 
  PlayerKPICalculator, 
  KPI_CATEGORIES
} from '@/lib/player-kpi'

interface PlayerKPIDashboardProps {
  profile: PlayerProfile
  showTopCategories?: boolean
}

const TIER_ICONS = {
  'legend': Crown,
  'diamond': Gem,
  'gold': Trophy,
  'silver': Medal,
  'bronze': Award,
  'standard': Circle
}

export default function PlayerKPIDashboard({ profile, showTopCategories = false }: PlayerKPIDashboardProps) {
  const kpiProfile = PlayerKPICalculator.calculateOverallKPI(profile)
  const tierInfo = PlayerKPICalculator.getTierInfo(kpiProfile.overall_tier)
  const TierIcon = TIER_ICONS[kpiProfile.overall_tier]

  const displayCategories = showTopCategories 
    ? kpiProfile.top_strengths.slice(0, 3)
    : kpiProfile.category_scores

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return ArrowUp
      case 'declining': return ArrowDown
      default: return Minus
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'improving': return 'text-green-500'
      case 'declining': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-purple-500'
    if (score >= 80) return 'text-cyan-500'
    if (score >= 70) return 'text-yellow-500'
    if (score >= 60) return 'text-orange-500'
    if (score >= 40) return 'text-blue-500'
    return 'text-gray-500'
  }

  const renderPerformanceCard = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 mb-6 border border-primary/20"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-16 h-16 rounded-full ${tierInfo.color} flex items-center justify-center`}>
            <TierIcon size={28} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              {PlayerKPICalculator.formatKPIScore(kpiProfile.overall_score)}
            </h3>
            <p className="text-lg font-semibold text-primary">{tierInfo.name} Player</p>
            <p className="text-sm text-foreground-muted">{tierInfo.description}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-2 mb-2">
            <Star size={16} className="text-yellow-500" />
            <span className="text-sm font-medium text-foreground">
              Consistency: {kpiProfile.consistency_rating}%
            </span>
          </div>
          <div className="text-xs text-foreground-muted">
            {tierInfo.threshold}
          </div>
        </div>
      </div>

      {/* Performance Progress Bar */}
      <div className="mt-4">
        <div className="flex justify-between text-xs text-foreground-muted mb-2">
          <span>Overall Performance</span>
          <span>{kpiProfile.overall_score.toFixed(1)}/100</span>
        </div>
        <div className="w-full bg-background-secondary rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${kpiProfile.overall_score}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`h-3 rounded-full ${tierInfo.color}`}
          />
        </div>
      </div>
    </motion.div>
  )

  const renderTopStrengths = () => {
    if (!showTopCategories || kpiProfile.top_strengths.length === 0) return null

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Trophy size={20} className="text-yellow-500" />
          Top Strengths
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {kpiProfile.top_strengths.slice(0, 3).map((strength, index) => {
            const category = KPI_CATEGORIES[strength.category]
            const strengthTierInfo = PlayerKPICalculator.getTierInfo(strength.tier)
            const StrengthTierIcon = TIER_ICONS[strength.tier]
            
            return (
              <motion.div
                key={strength.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-background-secondary rounded-lg p-4 relative"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">
                      {category.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-foreground text-sm">{category.name}</h5>
                    <p className="text-xs text-foreground-muted">{strengthTierInfo.name}</p>
                  </div>
                  <StrengthTierIcon size={16} className={strengthTierInfo.textColor} />
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-bold ${getScoreColor(strength.score)}`}>
                    {strength.score.toFixed(1)}
                  </span>
                  <span className="text-xs text-foreground-muted">
                    #{strength.rank}
                  </span>
                </div>

                {index === 0 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-6">
        <TrendingUp size={24} className="text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          {showTopCategories ? 'Performance Overview' : 'Detailed KPI Analysis'}
        </h2>
        {showTopCategories && (
          <span className="text-sm text-foreground-muted">
            Your strongest areas
          </span>
        )}
      </div>

      {/* Overall Performance Card */}
      {renderPerformanceCard()}

      {/* Top Strengths for Overview */}
      {renderTopStrengths()}

      {/* KPI Categories */}
      <div className="space-y-4">
        {displayCategories.map((kpiScore, index) => {
          const category = KPI_CATEGORIES[kpiScore.category]
          const categoryTierInfo = PlayerKPICalculator.getTierInfo(kpiScore.tier)
          const CategoryTierIcon = TIER_ICONS[kpiScore.tier]
          const TrendIcon = getTrendIcon(kpiScore.trend)
          
          return (
            <motion.div
              key={kpiScore.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="bg-background-secondary rounded-lg p-4 hover:bg-background-tertiary transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {/* Category Icon */}
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center text-white`}>
                    <span className="text-xl font-bold">
                      {category.name.charAt(0)}
                    </span>
                  </div>

                  {/* Category Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{category.name}</h3>
                      <TrendIcon size={16} className={getTrendColor(kpiScore.trend)} />
                    </div>
                    <p className="text-sm text-foreground-muted">{category.description}</p>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="flex items-center gap-6">
                  {/* Tier Badge */}
                  <div className="text-center">
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${categoryTierInfo.color} text-white`}>
                      <CategoryTierIcon size={14} />
                      {categoryTierInfo.name}
                    </div>
                    <div className="text-xs text-foreground-muted mt-1">{categoryTierInfo.threshold}</div>
                  </div>

                  {/* KPI Score */}
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getScoreColor(kpiScore.score)}`}>
                      {kpiScore.score.toFixed(1)}
                    </div>
                    <div className="text-xs text-foreground-muted">KPI Score</div>
                  </div>

                  {/* Rank */}
                  <div className="text-center">
                    <div className="text-lg font-bold text-foreground">#{kpiScore.rank}</div>
                    <div className="text-xs text-foreground-muted">{kpiScore.percentile}th %ile</div>
                  </div>

                  {/* Strength Level */}
                  <div className="text-center min-w-[80px]">
                    <div className={`text-sm font-medium ${
                      kpiScore.strength === 'primary' ? 'text-green-500' :
                      kpiScore.strength === 'secondary' ? 'text-yellow-500' : 'text-gray-500'
                    }`}>
                      {PlayerKPICalculator.getStrengthLabel(kpiScore.strength)}
                    </div>
                  </div>
                </div>
              </div>

              {/* KPI Progress Bar */}
              <div className="mt-3 pt-3 border-t border-border-light">
                <div className="flex justify-between text-xs text-foreground-muted mb-1">
                  <span>Performance Level</span>
                  <span>{kpiScore.score.toFixed(1)}/100</span>
                </div>
                <div className="w-full bg-background rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${kpiScore.score}%` }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className={`h-2 rounded-full ${category.color}`}
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Improvement Suggestions */}
      {!showTopCategories && kpiProfile.improvement_areas.length > 0 && (
        <div className="mt-6 pt-6 border-t border-border-light">
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp size={20} className="text-blue-500" />
            Growth Opportunities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {kpiProfile.improvement_areas.map((area) => {
              const category = KPI_CATEGORIES[area.category]
              
              return (
                <div key={area.category} className="bg-background-secondary rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded ${category.color} flex items-center justify-center`}>
                      <span className="text-white text-sm font-bold">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground">{category.name}</h5>
                      <p className="text-xs text-foreground-muted">Score: {area.score.toFixed(1)}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground-muted">
                    Focus on {category.description.toLowerCase()} to improve your ranking.
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {showTopCategories && kpiProfile.category_scores.length > 3 && (
        <div className="mt-6 text-center">
          <button className="text-primary hover:text-primary/80 transition-colors font-medium">
            View detailed KPI analysis →
          </button>
        </div>
      )}
    </motion.div>
  )
}