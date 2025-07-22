'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Star, Trophy, Target, Clock, Zap, CheckCircle, Copy, TrendingUp, Gift } from 'lucide-react'
import { useState } from 'react'

const dailyQuestTypes = [
  {
    title: 'Combat Challenges',
    description: 'Battle mobs and prove your fighting prowess',
    icon: Trophy,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    examples: ['Kill 15 zombies', 'Defeat 10 skeletons', 'Slay 5 creepers', 'Hunt endermen'],
    xp: '75-150 XP',
    difficulty: 'Easy-Medium'
  },
  {
    title: 'Gathering Quests',
    description: 'Collect resources and materials from the world',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    examples: ['Mine 64 iron ore', 'Collect 32 logs', 'Harvest 20 wheat', 'Fish 10 salmon'],
    xp: '50-125 XP',
    difficulty: 'Easy'
  },
  {
    title: 'Exploration Tasks',
    description: 'Discover new locations and complete travel objectives',
    icon: Zap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    examples: ['Visit 3 biomes', 'Travel 1000 blocks', 'Find a village', 'Explore caves'],
    xp: '100-200 XP',
    difficulty: 'Medium'
  },
  {
    title: 'Crafting Objectives',
    description: 'Create items and demonstrate your crafting skills',
    icon: Star,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    examples: ['Craft 16 torches', 'Make 8 bread', 'Create iron tools', 'Brew potions'],
    xp: '60-140 XP',
    difficulty: 'Easy-Medium'
  }
]

const completionStrategies = [
  {
    title: 'Priority Planning',
    icon: Clock,
    color: 'text-orange-600',
    strategies: [
      'Complete high-XP quests first for maximum efficiency',
      'Stack similar objectives (e.g., mining + crafting)',
      'Save exploration quests for when you need to travel',
      'Do combat quests in areas with high mob density'
    ]
  },
  {
    title: 'Resource Management',
    icon: CheckCircle,
    color: 'text-green-600',
    strategies: [
      'Keep common quest items stocked in your base',
      'Use efficient tools to speed up gathering',
      'Combine daily quests with your regular activities',
      'Plan inventory space for quest rewards'
    ]
  },
  {
    title: 'Time Optimization',
    icon: TrendingUp,
    color: 'text-blue-600',
    strategies: [
      'Complete quests during peak playtime hours',
      'Use warps and teleports for quick travel',
      'Group location-based quests together',
      'Set daily reminders for quest completion'
    ]
  }
]

const rewardBenefits = [
  {
    benefit: 'Level XP',
    amount: '50-200 XP',
    description: 'Primary reward - most efficient XP source',
    icon: Star,
    color: 'text-yellow-600'
  },
  {
    benefit: 'Coins',
    amount: '5-25 coins',
    description: 'Premium currency for special purchases',
    icon: Trophy,
    color: 'text-purple-600'
  },
  {
    benefit: 'Money',
    amount: '$100-$1000',
    description: 'Server currency for economy activities',
    icon: Gift,
    color: 'text-green-600'
  },
  {
    benefit: 'Items',
    amount: 'Various',
    description: 'Useful materials and rare items',
    icon: Target,
    color: 'text-blue-600'
  }
]

const quickCommands = [
  { command: '/dailyquests', description: 'Open your daily quest menu' },
  { command: '/quests', description: 'View all available quests' },
  { command: '/levels', description: 'Check your level progress and XP' },
  { command: '/rewards', description: 'Claim your hourly/daily rewards' }
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

export default function DailyQuestsPage() {
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
          <span className="text-foreground">Daily Quests</span>
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
              <h1 className="hero-title">Daily Quests</h1>
              <p className="subtitle">
                Master TumbleCraft&apos;s most efficient Level XP source with daily challenges 
                that reset every 24 hours and provide consistent progression rewards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits Overview */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Why Daily Quests Are Essential
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>Highest XP efficiency</strong> - Best time investment for leveling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Daily reset</strong> - Fresh challenges every 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Consistent rewards</strong> - Reliable progression path</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Variety of tasks</strong> - Never gets repetitive</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span><strong>Quick completion</strong> - Designed for efficient play</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span><strong>Bonus rewards</strong> - Coins, money, and items</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How to Access Daily Quests */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Accessing Your Daily Quests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-medium text-foreground">Use the Command</h4>
                  <p className="text-sm text-foreground-muted">Type <code className="bg-gray-100 px-2 py-1 rounded text-primary">/dailyquests</code> in chat to open your quest menu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-medium text-foreground">View Available Quests</h4>
                  <p className="text-sm text-foreground-muted">Browse through your current daily quest objectives and their rewards</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-medium text-foreground">Track Progress</h4>
                  <p className="text-sm text-foreground-muted">Monitor your completion status and see exactly what&apos;s left to do</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-medium text-foreground">Claim Rewards</h4>
                  <p className="text-sm text-foreground-muted">Automatically receive XP, coins, money, and items upon completion</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Types of Daily Quests */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Types of Daily Quests</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dailyQuestTypes.map((quest) => (
              <motion.div key={quest.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${quest.bgColor} flex items-center justify-center`}>
                      <quest.icon className={`w-6 h-6 ${quest.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {quest.title}
                      </h3>
                      <p className="text-foreground-muted text-sm mb-2">
                        {quest.description}
                      </p>
                      <div className="flex gap-4 text-xs">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                          {quest.xp}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                          {quest.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Example Quests:
                    </h4>
                    <ul className="space-y-1">
                      {quest.examples.map((example) => (
                        <li key={example} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          <span className="text-xs text-foreground-muted">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* XP Rewards and Benefits */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Daily Quest Rewards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rewardBenefits.map((reward) => (
              <div key={reward.benefit} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <reward.icon className={`w-5 h-5 ${reward.color}`} />
                  </div>
                </div>
                <h4 className="font-medium text-foreground">{reward.benefit}</h4>
                <p className="text-primary font-semibold text-sm">{reward.amount}</p>
                <p className="text-xs text-foreground-muted mt-1">{reward.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Completion Strategies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Quest Completion Strategies</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {completionStrategies.map((strategy) => (
              <motion.div key={strategy.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                      <strategy.icon className={`w-6 h-6 ${strategy.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {strategy.title}
                      </h3>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {strategy.strategies.map((tip) => (
                      <li key={tip} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground-muted">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Essential Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Essential Daily Quest Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Integration with Progression */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            How Daily Quests Fit Into Your Progression Strategy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-foreground text-blue-600">Daily Routine Integration</h4>
              <ul className="space-y-2 text-sm text-foreground-muted">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Start each play session by checking daily quests</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Combine quest objectives with your planned activities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Use quest rewards to fund other progression systems</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Stack with hourly rewards for maximum efficiency</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-foreground text-green-600">Long-term Benefits</h4>
              <ul className="space-y-2 text-sm text-foreground-muted">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Consistent Level XP gain accelerates all unlocks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Coin rewards support premium feature access</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Money earnings boost economy participation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Item rewards reduce resource gathering time</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Maximize Your Daily XP?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Start incorporating daily quests into your routine today for the most efficient 
            leveling experience on TumbleCraft. Every day you skip is XP left on the table!
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/progression/levels"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Level System Guide
            </Link>
            <Link 
              href="/docs/progression/rewards"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Gift className="w-4 h-4 mr-2" />
              Reward System
            </Link>
            <Link 
              href="/docs/progression/quests"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Target className="w-4 h-4 mr-2" />
              All Quests
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}