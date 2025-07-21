'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Star, Coins, DollarSign, Gift, Zap, Copy, Home } from 'lucide-react'
import { useState } from 'react'

const levelBenefits = [
  { level: '1-10', coins: 5, money: 500, homes: 2, perks: ['Basic survival perks', 'Access to starter kits'] },
  { level: '11-25', coins: 10, money: 1000, homes: 3, perks: ['Increased job rewards', 'Additional kit access', 'Shop discounts'] },
  { level: '26-50', coins: 15, money: 2000, homes: 4, perks: ['Premium features unlock', 'Factory bonuses', 'Special commands'] },
  { level: '51-75', coins: 25, money: 3500, homes: 5, perks: ['Elite player benefits', 'Exclusive areas access', 'Custom titles'] },
  { level: '76-100', coins: 40, money: 5000, homes: 6, perks: ['Master player status', 'All premium features', 'Leadership privileges'] }
]

const xpSources = [
  {
    category: 'Daily Activities',
    icon: Star,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    sources: [
      { activity: 'Daily Quest Completion', xp: '100-500 XP', frequency: 'Daily' },
      { activity: 'Hourly Rewards Claim', xp: '25-50 XP', frequency: 'Hourly' },
      { activity: 'Playtime Bonus', xp: '10 XP', frequency: 'Per 10 minutes' }
    ]
  },
  {
    category: 'Discovery & Exploration',
    icon: Zap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    sources: [
      { activity: 'Discovery Codex Completion', xp: '50-200 XP', frequency: 'Per discovery' },
      { activity: 'First-time Warp Usage', xp: '25 XP', frequency: 'One-time' },
      { activity: 'New Area Exploration', xp: '15-30 XP', frequency: 'Per area' }
    ]
  },
  {
    category: 'Economic Activities',
    icon: Coins,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    sources: [
      { activity: 'Shop Sales Milestone', xp: '20-100 XP', frequency: 'Per milestone' },
      { activity: 'Auction Participation', xp: '15-40 XP', frequency: 'Per transaction' },
      { activity: 'Factory Production', xp: '5-25 XP', frequency: 'Per batch' }
    ]
  },
  {
    category: 'Social & Events',
    icon: Gift,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    sources: [
      { activity: 'Event Participation', xp: '100-300 XP', frequency: 'Per event' },
      { activity: 'Chat Game Victory', xp: '20-50 XP', frequency: 'Per win' },
      { activity: 'Team Achievement', xp: '30-80 XP', frequency: 'Per achievement' }
    ]
  }
]

const quickCommands = [
  { command: '/levels', description: 'View your level progress and rewards' },
  { command: '/rewards', description: 'Check available hourly/daily/weekly rewards' },
  { command: '/dailyquests', description: 'View and track daily quest progress' },
  { command: '/codex', description: 'Open the Discovery Codex for bonus XP' }
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

export default function LevelsPage() {
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
          <Link href="/docs/progression" className="hover:text-primary transition-colors">
            Progression
          </Link>
          <span>/</span>
          <span className="text-foreground">Levels</span>
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
              href="/docs/progression"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Level System</h1>
              <p className="subtitle">
                Progress through TumbleCraft&apos;s level system to unlock premium perks, 
                coins, money, and exclusive features by earning Level XP.
              </p>
            </div>
          </div>
        </motion.div>

        {/* How Levels Work */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How the Level System Works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Earn <strong>Level XP</strong> through various activities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Each level requires more XP than the previous</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>Unlock rewards automatically when leveling up</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Higher levels grant access to premium features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Level Rewards Table */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Level Rewards</h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Level Range</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Coins Reward</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Money Reward</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Home Limit</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-foreground">Special Perks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {levelBenefits.map((benefit) => (
                    <tr key={benefit.level} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-foreground">{benefit.level}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <Coins className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm text-foreground">{benefit.coins}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-foreground">${benefit.money}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <Home className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-foreground">{benefit.homes}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {benefit.perks.map((perk) => (
                            <div key={perk} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                              <span className="text-xs text-foreground-muted">{perk}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* XP Sources */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Earn Level XP</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {xpSources.map((source) => (
              <motion.div key={source.category} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${source.bgColor} flex items-center justify-center`}>
                      <source.icon className={`w-6 h-6 ${source.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {source.category}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {source.sources.map((activity) => (
                      <div key={activity.activity} className="flex justify-between items-start p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-foreground">{activity.activity}</div>
                          <div className="text-xs text-foreground-muted mt-1">{activity.frequency}</div>
                        </div>
                        <div className="text-sm font-medium text-primary">{activity.xp}</div>
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
            Level System Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Pro Tips */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Level Up Faster - Pro Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Daily Optimization</h4>
              <ul className="space-y-2 text-sm text-foreground-muted">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Complete all daily quests for maximum XP gain</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Claim hourly rewards consistently throughout the day</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Explore the Discovery Codex for bonus XP opportunities</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Activity Focus</h4>
              <ul className="space-y-2 text-sm text-foreground-muted">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Participate in server events for large XP bonuses</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Stay active with economic activities like trading</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Join a team for additional achievement opportunities</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <Link 
              href="/docs/progression/quests"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Star className="w-4 h-4 mr-2" />
              Daily Quests Guide
            </Link>
            <Link 
              href="/docs/progression/rewards"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Gift className="w-4 h-4 mr-2" />
              Rewards System
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}