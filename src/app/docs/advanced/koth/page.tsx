'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Crown, Shield, Swords, Target, Timer, Trophy, Zap, Users, Gift, Calendar, Star, TrendingUp, AlertTriangle, Crosshair } from 'lucide-react'
import { ComponentType } from 'react'

const kothFeatures = [
  {
    title: 'Arena Domination',
    description: 'Control the center point to claim victory',
    icon: Target,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    features: [
      'Stand in the designated center zone',
      'Defend against incoming attackers',
      'Maintain position for required duration',
      'Watch the capture timer countdown',
      'Claim victory when timer reaches zero'
    ]
  },
  {
    title: 'PvP Combat',
    description: 'Intense player vs player battle mechanics',
    icon: Swords,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    features: [
      'Full PvP enabled in arena boundaries',
      'Knockback is the key to victory',
      'Strategic positioning essential',
      'Team up or go solo',
      'Combat skills determine survival'
    ]
  },
  {
    title: 'Knockback Strategy',
    description: 'Master the art of battlefield control',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    features: [
      'Push enemies out of the center zone',
      'Use knockback enchantments effectively',
      'Environmental knockback tactics',
      'Timing your attacks for maximum effect',
      'Counter-knockback defensive strategies'
    ]
  },
  {
    title: 'Victory Rewards',
    description: 'Earn valuable prizes for dominating the hill',
    icon: Trophy,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: [
      'Exclusive KOTH winner rewards',
      'Rare items and materials',
      'Special titles and recognition',
      'Coins and economy benefits',
      'Unique cosmetic unlocks'
    ]
  }
]

const kothStrategies = [
  {
    title: 'Knockback Mastery',
    description: 'Master the most crucial KOTH skill',
    icon: Zap,
    tips: [
      'Use Knockback II enchanted weapons for maximum effect',
      'Fishing rods can pull enemies or push them away',
      'Punch bows provide long-range knockback',
      'Practice sprint-hitting for extra knockback',
      'Use shield blocking to reduce incoming knockback'
    ]
  },
  {
    title: 'Positioning Strategy',
    description: 'Control the battlefield through smart positioning',
    icon: Target,
    tips: [
      'Stay near the center but maintain escape routes',
      'Use walls and barriers to your advantage',
      'High ground provides tactical superiority',
      'Corner enemies to limit their movement',
      'Always know where the center boundary is'
    ]
  },
  {
    title: 'Equipment Setup',
    description: 'Optimize your gear for KOTH dominance',
    icon: Shield,
    tips: [
      'Diamond/Netherite armor with Protection IV',
      'Knockback II sword as primary weapon',
      'Bow with Punch II for ranged knockback',
      'Golden apples for quick healing',
      'Ender pearls for emergency escapes'
    ]
  },
  {
    title: 'Team Coordination',
    description: 'Work together to control the hill',
    icon: Users,
    tips: [
      'Coordinate with teammates via voice chat',
      'Assign roles: defenders and attackers',
      'Share resources and healing items',
      'Create defensive formations around the center',
      'Plan synchronized attacks on enemies'
    ]
  }
]

const kothRules = [
  {
    rule: 'Center Zone Control',
    description: 'You must stand within the designated center area to capture the hill',
    icon: Target
  },
  {
    rule: 'Capture Duration',
    description: 'Maintain control for the full timer duration (usually 30-60 seconds)',
    icon: Timer
  },
  {
    rule: 'PvP Enabled',
    description: 'Full player vs player combat is active within the arena boundaries',
    icon: Swords
  },
  {
    rule: 'No Flying/Cheating',
    description: 'All movement abilities and cheats are disabled during events',
    icon: AlertTriangle
  },
  {
    rule: 'Fair Play Only',
    description: 'Griefing, exploiting, or unsportsmanlike conduct results in disqualification',
    icon: Shield
  },
  {
    rule: 'Timer Resets',
    description: 'If someone else enters the zone, the capture timer resets to zero',
    icon: Timer
  }
]

const kothSchedule = [
  {
    time: 'Daily Events',
    description: 'Multiple KOTH events throughout the day',
    frequency: 'Every 4-6 hours',
    icon: Calendar
  },
  {
    time: 'Weekend Specials',
    description: 'Extended events with better rewards',
    frequency: 'Saturday & Sunday',
    icon: Star
  },
  {
    time: 'Peak Hours',
    description: 'More frequent events during server peak times',
    frequency: 'Evening hours',
    icon: TrendingUp
  },
  {
    time: 'Announcements',
    description: 'All events announced 5 minutes before start',
    frequency: 'Pre-event warnings',
    icon: AlertTriangle
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

function FeatureCard({ title, description, icon: Icon, color, bgColor, features }: {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
  color: string
  bgColor: string
  features: string[]
}) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
      <div className="flex items-start space-x-4 mb-4">
        <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-foreground-muted text-sm">
            {description}
          </p>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-foreground mb-3">
          Key Features:
        </h4>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function StrategyCard({ title, description, icon: Icon, tips }: {
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
  tips: string[]
}) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-foreground-muted text-sm mb-3">{description}</p>
        </div>
      </div>
      
      <ul className="space-y-2">
        {tips.map((tip) => (
          <li key={tip} className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm text-foreground-muted">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RuleCard({ rule, description, icon: Icon }: {
  rule: string
  description: string
  icon: ComponentType<{ className?: string }>
}) {
  return (
    <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-red-600" />
      </div>
      <div>
        <h4 className="text-sm font-medium text-foreground">{rule}</h4>
        <p className="text-xs text-foreground-muted mt-1">{description}</p>
      </div>
    </div>
  )
}

function ScheduleCard({ time, description, frequency, icon: Icon }: {
  time: string
  description: string
  frequency: string
  icon: ComponentType<{ className?: string }>
}) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{time}</h3>
          <p className="text-foreground-muted text-sm mb-2">{description}</p>
          <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            {frequency}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function KOTHPage() {
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
          <span className="text-foreground">King of the Hill</span>
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
              <h1 className="hero-title">King of the Hill (KOTH)</h1>
              <p className="subtitle">
                Intense PvP events where players battle to control the center of an arena. 
                Master knockback tactics and strategic positioning to claim victory and earn exclusive rewards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Info Card */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Crown className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                KOTH Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span><strong>Objective:</strong> Control the center zone to win</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>Strategy:</strong> Knockback is the key to victory</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Duration:</strong> 30-60 seconds of center control</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Rewards:</strong> Exclusive items and recognition</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Next KOTH Event:</strong> Check /koth for current schedule and upcoming events
                </p>
                <p className="text-xs text-yellow-600 mt-1">
                  Events are announced 5 minutes before they start
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What is KOTH Section */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Crown className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                What is King of the Hill?
              </h3>
              <div className="space-y-4 text-sm text-foreground-muted">
                <p>
                  King of the Hill (KOTH) is an intense PvP event where players battle to control a designated center area 
                  within a special arena. The goal is simple: stand in the middle zone and defend your position against 
                  all other players trying to knock you out.
                </p>
                <p>
                  Unlike traditional PvP combat, KOTH emphasizes <strong>knockback tactics</strong> over eliminating opponents. 
                  Players use knockback enchantments, environmental hazards, and strategic positioning to push enemies 
                  out of the capture zone while maintaining their own control.
                </p>
                <p>
                  Events are scheduled throughout the day with advance announcements. When an event starts, players 
                  teleport to the arena and compete for exclusive rewards that can only be obtained through KOTH victories.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* KOTH Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">KOTH Event Features</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {kothFeatures.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Participate */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How to Participate in KOTH Events
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Before the Event:
                    </h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Use /koth to check event schedule</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Prepare your PvP gear and enchantments</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Stock up on golden apples and potions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Wait for the 5-minute warning announcement</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      During the Event:
                    </h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Type /koth join to enter the arena</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Rush to the center zone quickly</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Defend your position using knockback</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Maintain center control for full timer</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Arena Rules */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Shield className="w-5 h-5 text-foreground" />
            <h3 className="text-lg font-semibold text-foreground">
              Arena Rules & Mechanics
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {kothRules.map((rule) => (
              <RuleCard key={rule.rule} {...rule} />
            ))}
          </div>
        </motion.div>

        {/* PvP Strategies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Winning Strategies</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {kothStrategies.map((strategy) => (
              <motion.div key={strategy.title} variants={itemVariants}>
                <StrategyCard {...strategy} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rewards Section */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Gift className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Victory Rewards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2 text-yellow-600">
                    Exclusive Items
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Rare enchanted weapons</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Special armor pieces</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Unique building materials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">KOTH-exclusive items</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2 text-green-600">
                    Economy Rewards
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Substantial coin rewards</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Bonus claimblocks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Experience points</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Crate keys</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2 text-blue-600">
                    Recognition
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">KOTH Winner title</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Leaderboard placement</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Server announcements</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Special cosmetics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Event Schedule */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Event Schedule</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {kothSchedule.map((schedule) => (
              <motion.div key={schedule.time} variants={itemVariants}>
                <ScheduleCard {...schedule} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Tips */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Crosshair className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Pro Tips for KOTH Success
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Combat Preparation:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      <span className="text-foreground-muted">Always bring Knockback II weapons</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      <span className="text-foreground-muted">Use Protection IV armor for survivability</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      <span className="text-foreground-muted">Bring fishing rods for versatile knockback</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      <span className="text-foreground-muted">Pack plenty of golden apples</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Tactical Advice:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-foreground-muted">Learn the arena layout before events</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-foreground-muted">Practice sprint-hitting for extra knockback</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-foreground-muted">Use walls and barriers strategically</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-foreground-muted">Stay calm under pressure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Claim the Hill?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Join the next KOTH event and prove your PvP skills! Master knockback tactics, 
            control the center, and earn exclusive rewards available nowhere else.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/advanced"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Shield className="w-4 h-4 mr-2" />
              Back to Advanced
            </Link>
            <Link 
              href="/docs/advanced/pvp"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Swords className="w-4 h-4 mr-2" />
              PvP Guide
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}