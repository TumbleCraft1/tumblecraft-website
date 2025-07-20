'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Sword, Shield, Crown, Package, Clock, Zap, Trophy, AlertTriangle, Copy } from 'lucide-react'
import { useState } from 'react'

const pvpAreas = [
  {
    name: 'Arena',
    description: 'The main PvP combat zone where players can fight for loot and glory',
    icon: Sword,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    features: [
      'PvP enabled combat zone',
      'Drop items on death',
      'Supply crates spawn hourly',
      'Safe entry/exit zones',
      'Combat logging protection',
      'Spectator areas available'
    ],
    strategies: [
      'Bring expendable gear, not your best items',
      'Learn the arena layout for tactical advantages',
      'Time your visits with supply crate spawns',
      'Practice combat mechanics before entering'
    ],
    rewards: [
      'Player dropped loot',
      'Supply crate contents',
      'Combat experience',
      'PvP achievements'
    ]
  },
  {
    name: 'King of the Hill (KOTH)',
    description: 'Competitive event where players fight to control the center zone',
    icon: Crown,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: [
      'Timed competitive events',
      'Control point gameplay',
      'Winner takes all rewards',
      'Knockback-focused combat',
      'Strategic positioning required',
      'Spectator viewing areas'
    ],
    strategies: [
      'Master knockback mechanics - key to winning',
      'Control high ground when possible',
      'Use shield blocking effectively',
      'Time your attacks to push opponents out'
    ],
    rewards: [
      'Exclusive KOTH prizes',
      'Rare items and materials',
      'Bragging rights',
      'Special titles and achievements'
    ]
  }
]

const supplyCrates = [
  { item: 'Enchanted Weapons', rarity: 'Common', description: 'Iron and diamond weapons with basic enchantments' },
  { item: 'Armor Sets', rarity: 'Common', description: 'Protection gear for immediate use' },
  { item: 'Healing Items', rarity: 'Common', description: 'Golden apples, potions, and food' },
  { item: 'Rare Enchanted Gear', rarity: 'Rare', description: 'High-level enchanted equipment' },
  { item: 'Special Weapons', rarity: 'Epic', description: 'Unique weapons with powerful enchantments' },
  { item: 'Exclusive Items', rarity: 'Legendary', description: 'One-of-a-kind items and materials' }
]

const combatTips = [
  {
    category: 'Preparation',
    icon: Shield,
    tips: [
      'Never bring your best gear to PvP areas',
      'Stock up on food and healing potions',
      'Enchant backup gear specifically for PvP',
      'Practice combat mechanics in safe areas first'
    ]
  },
  {
    category: 'Combat Mechanics',
    icon: Sword,
    tips: [
      'Master shield timing for blocking attacks',
      'Use knockback to control positioning',
      'Learn attack timing and critical hits',
      'Utilize terrain for tactical advantages'
    ]
  },
  {
    category: 'Strategy',
    icon: Zap,
    tips: [
      'Time your arena visits with supply crate spawns',
      'Form temporary alliances during KOTH events',
      'Know when to retreat and regroup',
      'Study other players&apos; combat styles'
    ]
  }
]

const quickCommands = [
  { command: '/warp arena', description: 'Teleport to the PvP arena' },
  { command: '/spawn', description: 'Quick escape to safety (outside combat)' },
  { command: '/koth', description: 'Check KOTH event status and schedule' },
  { command: '/back', description: 'Return to your death location (if safe)' }
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

function CommandCard({ command, description }: { command: string; description: string }) {
  const [, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div>
        <code className="text-sm font-mono text-primary">{command}</code>
        <p className="text-xs text-foreground-muted mt-1">{description}</p>
      </div>
      <button
        onClick={copyCommand}
        className="p-2 text-gray-400 hover:text-primary transition-colors"
        title="Copy command"
      >
        <Copy className="w-4 h-4" />
      </button>
    </div>
  )
}

function RarityBadge({ rarity }: { rarity: string }) {
  const colors = {
    Common: 'bg-gray-100 text-gray-700',
    Rare: 'bg-blue-100 text-blue-700',
    Epic: 'bg-purple-100 text-purple-700',
    Legendary: 'bg-yellow-100 text-yellow-700'
  }
  
  return (
    <span className={`text-xs px-2 py-1 rounded ${colors[rarity as keyof typeof colors] || colors.Common}`}>
      {rarity}
    </span>
  )
}

export default function PvPPage() {
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
          <span className="text-foreground">PvP & Arena</span>
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
              <h1 className="hero-title">PvP & Arena Combat</h1>
              <p className="subtitle">
                Master TumbleCraft&apos;s PvP systems, compete in arena battles, and dominate 
                King of the Hill events for exclusive rewards and glory.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Warning Card */}
        <motion.div 
          className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                ⚠️ PvP Safety Warning
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span><strong>You will drop items when you die in PvP areas</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>Never bring your best gear or valuable items</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>Use expendable gear designed for PvP combat</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Practice combat mechanics in safe areas first</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PvP Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">PvP Combat Areas</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pvpAreas.map((area, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 ${area.borderColor} p-6 h-full`}>
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${area.bgColor} flex items-center justify-center`}>
                      <area.icon className={`w-8 h-8 ${area.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {area.name}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Area Features
                    </h4>
                    <div className="space-y-2">
                      {area.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          <span className="text-xs text-foreground-muted">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Strategies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Winning Strategies
                    </h4>
                    <div className="space-y-2">
                      {area.strategies.map((strategy, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-xs text-foreground-muted">{strategy}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rewards */}
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Potential Rewards
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {area.rewards.map((reward, i) => (
                        <span key={i} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          {reward}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Supply Crates */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
              <Package className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Supply Crates</h3>
              <p className="text-sm text-foreground-muted">
                <Clock className="w-4 h-4 inline mr-1" />
                Spawn every hour in the arena with valuable loot
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supplyCrates.map((crate, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-foreground">{crate.item}</h4>
                  <RarityBadge rarity={crate.rarity} />
                </div>
                <p className="text-xs text-foreground-muted">{crate.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Combat Tips */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Combat Mastery Tips</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {combatTips.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <category.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.tips.map((tip, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground-muted">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            PvP Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd, index) => (
              <CommandCard key={index} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div 
          className="bg-gradient-to-r from-red-500/10 to-purple-500/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready for Combat?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Start with basic PvP gear and work your way up. Remember: it&apos;s not about the gear you lose, 
            but the experience you gain and the loot you earn!
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/economy/shop"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Shield className="w-4 h-4 mr-2" />
              Get PvP Gear
            </Link>
            <Link 
              href="/docs/social/teams"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Form a Team
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}