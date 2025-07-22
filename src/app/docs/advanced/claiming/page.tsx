'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, MapPin, Users, Target, Copy, BookOpen, Lock, Compass, Calculator, TrendingUp, Crown, AlertTriangle, XCircle, Clock, Building, Gem, Coins } from 'lucide-react'
import { useState } from 'react'

const advancedClaimingStrategies = [
  {
    title: 'Claimblock Investment Portfolio',
    description: 'Treat claimblocks as investment currency for maximum efficiency',
    icon: Calculator,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    strategies: [
      'Allocate 60% for main base, 30% for resource claims, 10% for strategic locations',
      'Calculate ROI for each claim based on resource value and strategic importance',
      'Monitor claimblock market prices and buy during low-demand periods',
      'Track earnings per claimblock to optimize expansion decisions'
    ],
    expertTip: 'Advanced players earn 15-25 claimblocks per hour played - factor this into expansion timing'
  },
  {
    title: 'Territory Network Strategy',
    description: 'Build interconnected claim networks for maximum control',
    icon: MapPin,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    strategies: [
      'Create claim corridors connecting major bases and resources',
      'Use minimum-width strips to maximize coverage with fewer blocks',
      'Establish buffer zones around valuable resources before others discover them',
      'Build claim bridges over water and difficult terrain'
    ],
    expertTip: 'A 3-block wide claim can secure transportation routes with minimal cost'
  },
  {
    title: 'Advanced Permission Architecture',
    description: 'Design sophisticated trust systems for complex operations',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    strategies: [
      'Layer permissions with multiple subdivisions for different access levels',
      'Create public, semi-public, and private zones within large claims',
      'Implement rotating access for temporary projects and contractors',
      'Design failsafe systems for removing problematic users quickly'
    ],
    expertTip: 'Use subdivision hierarchies: Public → Members → Officers → Leadership → Private'
  },
  {
    title: 'Resource Claim Optimization',
    description: 'Maximize resource extraction while minimizing claim costs',
    icon: Gem,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    strategies: [
      'Analyze ore distribution patterns to claim most valuable areas first',
      'Use temporary claims for resource extraction, then abandon to recover blocks',
      'Coordinate with other players to share large resource deposits',
      'Time resource claims during server resets for maximum yields'
    ],
    expertTip: 'Temporary mining claims can pay for themselves within 24-48 hours'
  }
]

const claimTypes = [
  {
    name: 'Fortress Base',
    description: 'Ultimate protection for your main base and valuables',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    size: '200x200 blocks',
    cost: '40,000 claimblocks',
    features: [
      'Multiple subdivision layers',
      'Advanced permission systems',
      'Redundant security zones',
      'Emergency access protocols',
      'Visitor management areas'
    ],
    bestFor: 'Guild leaders, wealthy players, major builds',
    roi: 'High long-term security value'
  },
  {
    name: 'Resource Empire',
    description: 'Network of claims covering valuable resource areas',
    icon: Gem,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    size: '5-10 separate claims',
    cost: '15,000-30,000 blocks',
    features: [
      'Strategic resource control',
      'Mining operation security',
      'Transportation corridors',
      'Temporary expansion capability',
      'Market manipulation potential'
    ],
    bestFor: 'Resource tycoons, trading empires',
    roi: 'Very high - controls server resources'
  },
  {
    name: 'City Development',
    description: 'Large-scale urban planning with complex zoning',
    icon: Building,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    size: '500x500+ blocks',
    cost: '250,000+ claimblocks',
    features: [
      'Municipal zoning systems',
      'Public infrastructure',
      'Residential subdivisions',
      'Commercial districts',
      'Government buildings'
    ],
    bestFor: 'Community builders, server mayors',
    roi: 'Community prestige and influence'
  },
  {
    name: 'Stealth Operations',
    description: 'Hidden bases with minimal claim footprint',
    icon: Lock,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    size: '50x50 blocks',
    cost: '2,500 claimblocks',
    features: [
      'Underground construction',
      'Camouflaged entrances',
      'Minimal surface visibility',
      'Quick abandon capability',
      'Anonymous ownership'
    ],
    bestFor: 'PvP players, secret operations',
    roi: 'Strategic advantage and secrecy'
  }
]

const expertTechniques = [
  {
    title: 'Claim Timing Optimization',
    technique: 'Time your claims based on server activity patterns and economic cycles',
    icon: Clock,
    details: [
      'Claim during low-population hours to avoid competition',
      'Expand before major server events that bring new players',
      'Buy claimblocks during economic downturns when prices are low',
      'Abandon temporary claims during high-activity periods for maximum recovery'
    ]
  },
  {
    title: 'Psychological Territory Control',
    technique: 'Use claim placement to influence player behavior and server dynamics',
    icon: Crown,
    details: [
      'Place claims near spawn to control new player access to resources',
      'Create claim barriers that funnel players through your territory',
      'Use unclaimed \"buffer zones\" to create the illusion of larger territories',
      'Strategic abandonment can manipulate resource accessibility'
    ]
  },
  {
    title: 'Advanced Subdivision Mastery',
    technique: 'Design complex subdivision systems for maximum control and flexibility',
    icon: Target,
    details: [
      'Create nested subdivisions with different permission levels',
      'Use subdivisions as \"airlock\" systems for visitor management',
      'Design modular subdivisions that can be easily reconfigured',
      'Implement subdivision-based rental systems for income generation'
    ]
  },
  {
    title: 'Claimblock Arbitrage',
    technique: 'Profit from claimblock value differences and market inefficiencies',
    icon: TrendingUp,
    details: [
      'Buy claimblocks when prices are low, sell when demand spikes',
      'Identify undervalued territories and claim for resale',
      'Use temporary claims to corner resource markets',
      'Trade claim access for services and materials'
    ]
  }
]

const commonMistakes = [
  {
    mistake: 'Over-claiming Too Early',
    consequence: 'Wastes claimblocks on areas you won&apos;t use immediately',
    solution: 'Start small, expand strategically as your needs grow',
    severity: 'high',
    icon: AlertTriangle
  },
  {
    mistake: 'Ignoring Subdivision Strategy',
    consequence: 'Poor organization leads to security vulnerabilities',
    solution: 'Plan subdivision structure before building',
    severity: 'medium',
    icon: XCircle
  },
  {
    mistake: 'Trusting Too Freely',
    consequence: 'Griefing, theft, or unauthorized modifications',
    solution: 'Use tiered trust levels and monitor trusted players',
    severity: 'high',
    icon: Users
  },
  {
    mistake: 'No Backup Plans',
    consequence: 'Unable to recover from trust betrayal or accidents',
    solution: 'Always have emergency access protocols',
    severity: 'medium',
    icon: Shield
  },
  {
    mistake: 'Irregular Claim Shapes',
    consequence: 'Wastes claimblocks and creates defensive weaknesses',
    solution: 'Use rectangular claims for maximum efficiency',
    severity: 'low',
    icon: Compass
  }
]

const advancedCommands = [
  {
    command: '/claimexplosions',
    description: 'Toggle explosion damage in your claims (useful for controlled demolition)',
    usage: 'Stand in claim, run command to toggle',
    expertUse: 'Temporarily allow TNT for large construction projects'
  },
  {
    command: '/trapped',
    description: 'Escape if you\'re trapped in someone else\'s claim',
    usage: 'Emergency teleport to safe location',
    expertUse: 'Quick escape during PvP or exploration'
  },
  {
    command: '/claimbook',
    description: 'Get detailed claiming manual with advanced techniques',
    usage: 'Run anywhere to receive comprehensive guide',
    expertUse: 'Reference for complex permission configurations'
  },
  {
    command: '/buyclaimblocks <amount>',
    description: 'Purchase additional claimblocks with in-game currency',
    usage: '/buyclaimblocks 1000 (costs vary)',
    expertUse: 'Strategic bulk purchases during low-cost periods'
  },
  {
    command: '/giveclaimblocks <player> <amount>',
    description: 'Transfer your claimblocks to another player',
    usage: 'Used for partnerships or sales transactions',
    expertUse: 'Claimblock trading and investment management'
  }
]

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

function StrategyCard({ strategy }: { strategy: typeof advancedClaimingStrategies[0] }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className={`w-10 h-10 rounded-lg ${strategy.bgColor} flex items-center justify-center`}>
          <strategy.icon className={`w-5 h-5 ${strategy.color}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{strategy.title}</h3>
          <p className="text-sm text-foreground-muted mb-3">{strategy.description}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-foreground mb-3">Implementation Strategies:</h4>
        <ul className="space-y-2">
          {strategy.strategies.map((item) => (
            <li key={`${strategy.title.replace(/\s/g, '-')}-item-${item}`} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`${strategy.bgColor} rounded-lg p-3`}>
        <h4 className="text-xs font-medium text-foreground mb-1">Expert Insight:</h4>
        <p className="text-xs text-foreground-muted italic">{strategy.expertTip}</p>
      </div>
    </div>
  )
}

function ClaimTypeCard({ claim }: { claim: typeof claimTypes[0] }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className={`w-12 h-12 rounded-xl ${claim.bgColor} flex items-center justify-center`}>
          <claim.icon className={`w-6 h-6 ${claim.color}`} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">{claim.name}</h3>
          <p className="text-sm text-foreground-muted mb-3">{claim.description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs font-medium text-foreground mb-1">Typical Size:</p>
          <p className="text-sm text-green-600 font-mono">{claim.size}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-foreground mb-1">Investment:</p>
          <p className="text-sm text-red-600 font-mono">{claim.cost}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-foreground mb-2">Key Features:</p>
        <ul className="space-y-1">
          {claim.features.map((feature) => (
            <li key={`${claim.name.replace(/\s/g, '-')}-feature-${feature}`} className="flex items-center space-x-2 text-xs text-foreground-muted">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="border-t pt-3">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs font-medium text-foreground mb-1">Best For:</p>
            <p className="text-xs text-foreground-muted">{claim.bestFor}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-foreground mb-1">ROI:</p>
            <p className="text-xs text-blue-600">{claim.roi}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TechniqueCard({ technique }: { technique: typeof expertTechniques[0] }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
          <technique.icon className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{technique.title}</h3>
          <p className="text-sm text-foreground-muted">{technique.technique}</p>
        </div>
      </div>
      
      <ul className="space-y-2">
        {technique.details.map((detail) => (
          <li key={`${technique.title.replace(/\s/g, '-')}-detail-${detail}`} className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm text-foreground-muted">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function MistakeCard({ mistake }: { mistake: typeof commonMistakes[0] }) {
  const severityColors: { [key: string]: string } = {
    high: 'text-red-600 bg-red-50 border-red-200',
    medium: 'text-orange-600 bg-orange-50 border-orange-200',
    low: 'text-yellow-600 bg-yellow-50 border-yellow-200'
  }

  return (
    <div className={`rounded-xl shadow border p-4 ${severityColors[mistake.severity]}`}>
      <div className="flex items-start space-x-3 mb-3">
        <mistake.icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-semibold mb-1">{mistake.mistake}</h3>
          <p className="text-sm opacity-90 mb-2">{mistake.consequence}</p>
          <div className="bg-white/50 rounded-lg p-2">
            <p className="text-sm font-medium mb-1">Solution:</p>
            <p className="text-sm">{mistake.solution}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function CommandCard({ cmd }: { cmd: typeof advancedCommands[0] }) {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText(cmd.command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <code className="text-sm font-mono text-primary font-bold">{cmd.command}</code>
        <button
          onClick={copyCommand}
          className="p-1 text-gray-400 hover:text-primary transition-colors"
          title={copied ? "Copied!" : "Copy command"}
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
      <p className="text-sm text-foreground-muted mb-2">{cmd.description}</p>
      <div className="bg-gray-50 rounded p-2 mb-2">
        <p className="text-xs font-medium text-foreground mb-1">Usage:</p>
        <p className="text-xs text-foreground-muted">{cmd.usage}</p>
      </div>
      <div className="bg-blue-50 rounded p-2">
        <p className="text-xs font-medium text-blue-800 mb-1">Expert Application:</p>
        <p className="text-xs text-blue-700">{cmd.expertUse}</p>
      </div>
    </div>
  )
}

export default function AdvancedClaimingPage() {
  // Active section state for navigation
  const [activeSection] = useState('strategies')
  void activeSection // Prevent unused variable warning

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
          <span className="text-foreground">Advanced Claiming</span>
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
                <Shield className="w-8 h-8 text-green-600" />
                <span>Advanced Land Claiming</span>
              </h1>
              <p className="subtitle">
                Master territorial control with expert claiming strategies, advanced permission systems, 
                and sophisticated land management techniques. Build your empire with precision and efficiency.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Expert Overview */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Strategic Investment</h3>
              <p className="text-sm text-foreground-muted">
                Expert players optimize claimblock investments for 300-500% returns through strategic claiming.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Territory Control</h3>
              <p className="text-sm text-foreground-muted">
                Advanced claiming can control server resources, trade routes, and influence player behavior.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Complex Organizations</h3>
              <p className="text-sm text-foreground-muted">
                Sophisticated permission systems enable guilds, cities, and complex collaborative projects.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Advanced Claiming Strategies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Master-Level Strategies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {advancedClaimingStrategies.map((strategy) => (
              <motion.div key={strategy.title} variants={itemVariants}>
                <StrategyCard strategy={strategy} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Claim Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Specialized Claim Architectures</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {claimTypes.map((claim) => (
              <motion.div key={claim.name} variants={itemVariants}>
                <ClaimTypeCard claim={claim} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expert Techniques */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Expert Techniques</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {expertTechniques.map((technique) => (
              <motion.div key={technique.title} variants={itemVariants}>
                <TechniqueCard technique={technique} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advanced Economics */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            <Coins className="inline w-5 h-5 mr-2" />
            Claimblock Economics & ROI Analysis
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-foreground mb-4">Investment Categories</h4>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">High ROI (300-500%)</h5>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• Rare resource control (diamonds, ancient debris)</li>
                    <li>• Strategic choke points and transportation routes</li>
                    <li>• Prime real estate near spawn or popular areas</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-semibold text-blue-800 mb-2">Medium ROI (150-300%)</h5>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Large-scale farming operations</li>
                    <li>• Mob spawner claim monopolies</li>
                    <li>• Strategic PvP positioning</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 className="font-semibold text-yellow-800 mb-2">Security ROI (Priceless)</h5>
                  <ul className="space-y-1 text-sm text-yellow-700">
                    <li>• Main base protection</li>
                    <li>• Valuables and storage security</li>
                    <li>• Long-term build preservation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-foreground mb-4">Advanced Calculations</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-semibold text-foreground mb-2">Claimblock Value Metrics</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Base earning rate:</span>
                      <span className="font-mono">15-25 blocks/hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Purchase rate:</span>
                      <span className="font-mono">$10-15 per block</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Donor bonus multiplier:</span>
                      <span className="font-mono">1.5x - 3x</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-purple-800 mb-2">Expert Portfolio</h5>
                  <div className="space-y-1 text-sm text-purple-700">
                    <p>• 50% main base security</p>
                    <p>• 30% resource claim investments</p>
                    <p>• 15% strategic/speculative claims</p>
                    <p>• 5% emergency reserve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Common Mistakes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">
            <AlertTriangle className="inline w-6 h-6 mr-2 text-red-600" />
            Critical Mistakes to Avoid
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonMistakes.map((mistake) => (
              <motion.div key={mistake.mistake.replace(/\s/g, '-')} variants={itemVariants}>
                <MistakeCard mistake={mistake} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advanced Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            <BookOpen className="inline w-5 h-5 mr-2" />
            Advanced Claiming Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advancedCommands.map((cmd) => (
              <CommandCard key={cmd.command} cmd={cmd} />
            ))}
          </div>
        </motion.div>

        {/* Master Class Summary */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            <Crown className="inline w-5 h-5 mr-2" />
            Claiming Mastery Checklist
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Strategic Planning</h4>
              <p className="text-sm text-foreground-muted">
                Calculate ROI, plan expansions, and optimize claimblock investments for maximum returns.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Territory Control</h4>
              <p className="text-sm text-foreground-muted">
                Establish networks, control resources, and influence server dynamics through strategic claiming.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Organization Design</h4>
              <p className="text-sm text-foreground-muted">
                Create sophisticated permission systems for guilds, cities, and collaborative projects.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Risk Management</h4>
              <p className="text-sm text-foreground-muted">
                Implement security protocols, backup systems, and emergency procedures for total protection.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/server/claiming"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Shield className="w-4 h-4 mr-2" />
              Basic Claiming Guide
            </Link>
            <Link 
              href="/docs/advanced"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Crown className="w-4 h-4 mr-2" />
              More Advanced Guides
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}