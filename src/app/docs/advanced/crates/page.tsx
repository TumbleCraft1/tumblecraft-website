'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Package, Gift, Star, Trophy, Vote, BarChart3, TrendingUp, Clock, Lightbulb, Calculator, Target, Award } from 'lucide-react'
import { useState } from 'react'

const advancedCrateTypes = [
  {
    name: 'Vote Crate',
    tier: 'Free',
    icon: Vote,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Free daily crates with consistent value',
    keySource: 'Daily voting (/vote)',
    avgValue: '$50-150',
    bestRewards: ['Tool enchantments', 'Building blocks', 'Basic cosmetics'],
    strategy: 'Vote daily for guaranteed income stream',
    openingTip: 'Open immediately - no cooldowns or bonuses',
    rarity: {
      common: 70,
      uncommon: 25,
      rare: 5
    }
  },
  {
    name: 'Common Crate',
    tier: 'Entry',
    icon: Package,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    description: 'Reliable rewards for steady progression',
    keySource: 'Purchase ($500) or events',
    avgValue: '$200-400',
    bestRewards: ['Construction materials', 'Food supplies', 'Basic tools'],
    strategy: 'Good for new players building up resources',
    openingTip: 'Best value for resource gathering',
    rarity: {
      common: 60,
      uncommon: 30,
      rare: 10
    }
  },
  {
    name: 'Rare Crate',
    tier: 'Mid-Tier',
    icon: Gift,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Quality rewards with good value returns',
    keySource: 'Purchase ($2,500) or achievements',
    avgValue: '$1,000-2,500',
    bestRewards: ['Enchanted tools', 'Rare blocks', 'Cosmetic items'],
    strategy: 'Excellent ROI for mid-game players',
    openingTip: 'Wait for bonus events for better odds',
    rarity: {
      common: 40,
      uncommon: 35,
      rare: 20,
      epic: 5
    }
  },
  {
    name: 'Epic Crate',
    tier: 'High-End',
    icon: Star,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Premium rewards for serious players',
    keySource: 'Purchase (25 coins) or special events',
    avgValue: '15-50 coins equivalent',
    bestRewards: ['Legendary tools', 'Exclusive cosmetics', 'Large coin rewards'],
    strategy: 'Save for special opening events',
    openingTip: 'Open during 2x reward weekends',
    rarity: {
      uncommon: 30,
      rare: 40,
      epic: 25,
      legendary: 5
    }
  },
  {
    name: 'Superior Crate',
    tier: 'Ultimate',
    icon: Trophy,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    description: 'The pinnacle of crate rewards',
    keySource: 'Exclusive events or premium purchase (50 coins)',
    avgValue: '25-100 coins equivalent',
    bestRewards: ['Mythic items', 'Unique cosmetics', 'Massive coin bonuses'],
    strategy: 'Ultimate investment for endgame players',
    openingTip: 'Only open during maximum bonus periods',
    rarity: {
      rare: 20,
      epic: 45,
      legendary: 30,
      mythic: 5
    }
  }
]

const advancedStrategies = [
  {
    title: 'Event Timing Strategy',
    description: 'Maximize rewards by timing your crate openings',
    icon: Clock,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    strategies: [
      'Wait for 2x reward weekends before opening epic/superior crates',
      'Stack vote keys during the week, open all on bonus days',
      'Monitor server announcements for surprise bonus events',
      'Holiday events often have increased legendary drop rates'
    ],
    profitBoost: '+50-100% value'
  },
  {
    title: 'Portfolio Diversification',
    description: 'Balance risk and reward across crate types',
    icon: BarChart3,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    strategies: [
      'Maintain 70% safe investments (vote/common), 30% high-risk (epic/superior)',
      'Use vote crate profits to fund higher tier purchases',
      'Never put all keys into one crate type',
      'Reinvest cosmetic duplicates into more keys'
    ],
    profitBoost: 'Steady +25% ROI'
  },
  {
    title: 'Market Analysis',
    description: 'Track reward values and market trends',
    icon: TrendingUp,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    strategies: [
      'Monitor auction house prices for rare items',
      'Track which cosmetics are currently popular',
      'Note seasonal demand spikes (e.g., Halloween cosmetics)',
      'Keep spreadsheet of opening results vs investment'
    ],
    profitBoost: '+20-40% informed decisions'
  },
  {
    title: 'Bulk Opening Technique',
    description: 'Optimize large-scale crate opening sessions',
    icon: Package,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    strategies: [
      'Save 10+ keys of same type for bulk sessions',
      'Clear inventory before major opening sessions',
      'Use /ec (enderchest) for quick storage access',
      'Open during low-lag server times for better experience'
    ],
    profitBoost: 'Better organization'
  }
]

const expertTips = [
  {
    title: 'Vote Key Maximization',
    tip: 'Vote on all available sites daily. Some players earn 3-5 vote keys per day across multiple voting platforms.',
    category: 'Income',
    icon: Vote
  },
  {
    title: 'Key Trading',
    tip: 'Trade common/rare keys with other players for different types. Diversification often yields better overall returns.',
    category: 'Strategy',
    icon: Gift
  },
  {
    title: 'Bonus Stacking',
    tip: 'Some events stack bonuses. A 2x weekend + special holiday bonus can give 3x or 4x normal rewards.',
    category: 'Events',
    icon: Star
  },
  {
    title: 'Inventory Management',
    tip: 'Set up dedicated storage for crate rewards. Organize by type and track values for future auction sales.',
    category: 'Organization',
    icon: Package
  },
  {
    title: 'Seasonal Planning',
    tip: 'Save superior keys for major server events. Christmas, summer events, and anniversaries have the best reward pools.',
    category: 'Timing',
    icon: Clock
  },
  {
    title: 'Community Intelligence',
    tip: 'Join crate opening parties in Discord. Share information about recent drops and bonus events with other players.',
    category: 'Community',
    icon: Award
  }
]

const rarityColors = {
  common: 'text-gray-500',
  uncommon: 'text-green-500',
  rare: 'text-blue-500',
  epic: 'text-purple-500',
  legendary: 'text-yellow-500',
  mythic: 'text-red-500'
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

function AdvancedCrateCard({ crate }: { crate: typeof advancedCrateTypes[0] }) {
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border ${crate.borderColor} p-6`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg ${crate.bgColor} flex items-center justify-center`}>
              <crate.icon className={`w-5 h-5 ${crate.color}`} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{crate.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${crate.bgColor} ${crate.color} font-medium`}>
                {crate.tier}
              </span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-foreground-muted">{crate.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="font-medium text-foreground mb-1">Average Value:</p>
            <p className="text-green-600 font-mono">{crate.avgValue}</p>
          </div>
          <div>
            <p className="font-medium text-foreground mb-1">Key Source:</p>
            <p className="text-foreground-muted">{crate.keySource}</p>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-medium text-foreground mb-2">Rarity Distribution:</p>
          <div className="space-y-1">
            {Object.entries(crate.rarity).map(([rarity, percentage]) => (
              <div key={`${crate.name}-rarity-${rarity}`} className="flex items-center justify-between text-xs">
                <span className={`capitalize ${rarityColors[rarity as keyof typeof rarityColors]}`}>
                  {rarity}
                </span>
                <span className="text-foreground-muted">{percentage}%</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`${crate.bgColor} rounded-lg p-3`}>
          <p className="text-xs font-medium text-foreground mb-1">Expert Strategy:</p>
          <p className="text-xs text-foreground-muted">{crate.strategy}</p>
        </div>
        
        <div className="border-t pt-3">
          <p className="text-xs font-medium text-foreground mb-1">Opening Tip:</p>
          <p className="text-xs text-foreground-muted">{crate.openingTip}</p>
        </div>
      </div>
    </div>
  )
}

function StrategyCard({ strategy }: { strategy: typeof advancedStrategies[0] }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className={`w-10 h-10 rounded-lg ${strategy.bgColor} flex items-center justify-center`}>
          <strategy.icon className={`w-5 h-5 ${strategy.color}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{strategy.title}</h3>
          <p className="text-sm text-foreground-muted mb-3">{strategy.description}</p>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${strategy.bgColor} ${strategy.color}`}>
            <TrendingUp className="w-3 h-3 mr-1" />
            {strategy.profitBoost}
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">Implementation:</h4>
        <ul className="space-y-2">
          {strategy.strategies.map((item, itemIndex) => (
            <li key={`strategy-${strategy.title.replace(/\s/g, '-')}-item-${itemIndex}`} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function TipCard({ tip }: { tip: typeof expertTips[0] }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-4">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <tip.icon className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-sm font-semibold text-foreground">{tip.title}</h3>
            <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
              {tip.category}
            </span>
          </div>
          <p className="text-xs text-foreground-muted leading-relaxed">{tip.tip}</p>
        </div>
      </div>
    </div>
  )
}

export default function AdvancedCratesPage() {
  const [, _setSelectedCrate] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Breadcrumb */}
        <motion.div 
          className="flex items-center space-x-2 text-sm text-foreground-muted mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/docs" className="hover:text-primary transition-colors">
            Documentation
          </Link>
          <span>/</span>
          <Link href="/docs/advanced" className="hover:text-primary transition-colors">
            Advanced
          </Link>
          <span>/</span>
          <span className="text-foreground">Advanced Crates</span>
        </motion.div>

        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              href="/docs/advanced"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title flex items-center space-x-3">
                <Package className="w-8 h-8 text-purple-600" />
                <span>Advanced Crate Strategies</span>
              </h1>
              <p className="subtitle">
                Master the crate system with expert strategies, market analysis, and advanced opening techniques. 
                Maximize your returns and build wealth through smart crate investments.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Expert Overview */}
        <motion.div 
          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">ROI Optimization</h3>
              <p className="text-sm text-foreground-muted">
                Advanced players can achieve 150-300% ROI through strategic timing and crate selection.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Market Intelligence</h3>
              <p className="text-sm text-foreground-muted">
                Track reward values, event schedules, and seasonal patterns for maximum profit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Risk Management</h3>
              <p className="text-sm text-foreground-muted">
                Balance safe daily income with high-risk, high-reward investments for steady growth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Advanced Crate Analysis */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Advanced Crate Analysis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {advancedCrateTypes.map((crate) => (
              <motion.div key={crate.name} variants={itemVariants}>
                <AdvancedCrateCard crate={crate} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expert Strategies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Expert Investment Strategies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {advancedStrategies.map((strategy) => (
              <motion.div key={strategy.title} variants={itemVariants}>
                <StrategyCard strategy={strategy} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Profit Calculator Section */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            <Calculator className="inline w-5 h-5 mr-2" />
            Expected Value Calculations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-foreground mb-4">Daily Vote Strategy</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Daily vote keys (3x):</span>
                  <span className="font-mono text-green-600">$150-450</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekly total:</span>
                  <span className="font-mono text-green-600">$1,050-3,150</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly earnings:</span>
                  <span className="font-mono text-green-600">$4,500-13,500</span>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-xs text-green-800">
                    <strong>Pro Tip:</strong> Reinvest 30% into rare crates for exponential growth
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-foreground mb-4">Mixed Portfolio Strategy</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Vote keys (70%):</span>
                  <span className="font-mono text-blue-600">$3,150-9,450</span>
                </div>
                <div className="flex justify-between">
                  <span>Rare keys (20%):</span>
                  <span className="font-mono text-blue-600">$800-2,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Epic keys (10%):</span>
                  <span className="font-mono text-blue-600">75-250 coins</span>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>Expected ROI:</strong> 180-250% with event bonuses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expert Tips */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Expert Tips & Tricks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertTips.map((tip, tipIndex) => (
              <motion.div key={`tip-${tipIndex}`} variants={itemVariants}>
                <TipCard tip={tip} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Calendar & Timing */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            <Clock className="inline w-5 h-5 mr-2" />
            Event Calendar & Optimal Timing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-3">Regular Events</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm"><strong>Weekends:</strong> 2x crate rewards</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm"><strong>First Friday:</strong> Epic key giveaways</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm"><strong>Month End:</strong> Superior crate sales</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">Seasonal Events</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-2 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm"><strong>Christmas:</strong> 5x legendary odds</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-orange-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm"><strong>Halloween:</strong> Exclusive cosmetics</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm"><strong>Server Anniversary:</strong> Mythic drops</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            <Lightbulb className="inline w-5 h-5 mr-2" />
            Ready to Master Crates?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Start implementing these advanced strategies today. Begin with consistent daily voting, 
            track your results, and gradually move into higher-tier investments as your experience grows.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/economy/crates"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Package className="w-4 h-4 mr-2" />
              Basic Crates Guide
            </Link>
            <Link 
              href="/docs/advanced"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Trophy className="w-4 h-4 mr-2" />
              More Advanced Guides
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}