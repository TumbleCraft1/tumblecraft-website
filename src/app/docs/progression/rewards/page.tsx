'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Gift, Clock, Calendar, CalendarDays, Coins, Copy, Star, Timer, Award } from 'lucide-react'
import { useState } from 'react'

const rewardTypes = [
  {
    title: 'Hourly Rewards',
    description: 'Quick rewards for active players every hour',
    icon: Clock,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    frequency: 'Every 60 minutes',
    requirements: ['Must be online', 'Minimum 5 minutes of activity'],
    rewards: ['50-200 money', '1-5 coins', 'Basic items', 'XP bottles'],
    strategy: 'Perfect for regular play sessions'
  },
  {
    title: 'Daily Rewards',
    description: 'Substantial daily bonuses for consistent players',
    icon: Calendar,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    frequency: 'Every 24 hours',
    requirements: ['Daily login', 'Claim previous reward'],
    rewards: ['500-1500 money', '10-25 coins', 'Rare materials', 'Enchanted items'],
    strategy: 'Login daily to maintain streak bonuses'
  },
  {
    title: 'Weekly Rewards',
    description: 'Premium rewards for dedicated weekly players',
    icon: CalendarDays,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    frequency: 'Every 7 days',
    requirements: ['Weekly activity', 'Consistent playtime'],
    rewards: ['2000-5000 money', '50-100 coins', 'Exclusive items', 'Job materials'],
    strategy: 'Maintain consistent weekly activity'
  }
]

const rewardBenefits = [
  {
    title: 'No Effort Required',
    description: 'Simply play on the server normally to become eligible',
    icon: Star,
    color: 'text-yellow-600'
  },
  {
    title: 'Stackable Bonuses',
    description: 'Streak bonuses increase reward values over time',
    icon: Award,
    color: 'text-orange-600'
  },
  {
    title: 'Multiple Currencies',
    description: 'Earn both money and coins from the reward system',
    icon: Coins,
    color: 'text-green-600'
  },
  {
    title: 'Exclusive Items',
    description: 'Access to special items only available through rewards',
    icon: Gift,
    color: 'text-pink-600'
  }
]

const claimingStrategies = [
  {
    title: 'Set Regular Reminders',
    description: 'Use phone alarms or in-game timers to remember hourly claims.',
    icon: Timer,
    priority: 'Essential'
  },
  {
    title: 'Login Before Bed',
    description: 'Claim daily rewards right before logging off to maintain streaks.',
    icon: Calendar,
    priority: 'Important'
  },
  {
    title: 'Weekend Planning',
    description: 'Plan your weekend sessions around weekly reward availability.',
    icon: CalendarDays,
    priority: 'Strategy'
  },
  {
    title: 'Check Streak Status',
    description: 'Monitor your reward streaks to avoid missing valuable bonus multipliers.',
    icon: Award,
    priority: 'Pro Tip'
  }
]

const quickCommands = [
  { command: '/rewards', description: 'Open the main rewards menu and claim interface' },
  { command: '/rewards claim', description: 'Quickly claim all available rewards' },
  { command: '/rewards status', description: 'Check your current reward streak status' },
  { command: '/rewards help', description: 'View detailed information about the reward system' }
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

export default function RewardsPage() {
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
          <span className="text-foreground">Rewards</span>
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
              <h1 className="hero-title">Rewards System</h1>
              <p className="subtitle">
                Earn hourly, daily, and weekly rewards just by playing on TumbleCraft. 
                Get money, coins, and exclusive items with no extra effort required.
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
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Gift className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Reward System Quick Facts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Hourly</strong> - Available every 60 minutes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Daily</strong> - Reset every 24 hours with streak bonuses</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Weekly</strong> - Premium rewards for consistent players</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>Use <code>/rewards</code> to claim all available rewards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reward Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Reward Categories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {rewardTypes.map((reward, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${reward.bgColor} flex items-center justify-center`}>
                      <reward.icon className={`w-6 h-6 ${reward.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {reward.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {reward.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-foreground">
                          {reward.frequency}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 text-orange-700">
                        Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {reward.requirements.map((req, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                            <span className="text-xs text-foreground-muted">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 text-green-700">
                        Typical Rewards:
                      </h4>
                      <ul className="space-y-1">
                        {reward.rewards.map((item, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            <span className="text-xs text-foreground-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3 mt-4">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs font-medium text-foreground">Strategy:</span>
                      </div>
                      <p className="text-xs text-foreground-muted mt-1">{reward.strategy}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reward Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Use Rewards?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewardBenefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-foreground-muted">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Claiming Strategies */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Maximizing Your Rewards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {claimingStrategies.map((strategy, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <strategy.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-sm font-semibold text-foreground">
                      {strategy.title}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      strategy.priority === 'Essential' ? 'bg-red-100 text-red-700' :
                      strategy.priority === 'Important' ? 'bg-orange-100 text-orange-700' :
                      strategy.priority === 'Strategy' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {strategy.priority}
                    </span>
                  </div>
                  <p className="text-xs text-foreground-muted">
                    {strategy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Essential Reward Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd, index) => (
              <CommandCard key={index} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Start Earning Rewards Today!
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            The reward system is completely automatic - just play on TumbleCraft normally 
            and remember to claim your rewards regularly. Set up reminders to never miss out!
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/economy/overview"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Coins className="w-4 h-4 mr-2" />
              Learn Economy
            </Link>
            <Link 
              href="/docs/progression/levels"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Star className="w-4 h-4 mr-2" />
              Level System
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}