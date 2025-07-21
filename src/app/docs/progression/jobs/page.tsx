'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Briefcase, Star, TrendingUp, Coins, Copy, Target, Award } from 'lucide-react'
import { useState } from 'react'

const jobCategories = [
  {
    title: 'Resource Gathering',
    description: 'Earn money from mining, farming, and collecting materials',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    jobs: ['Miner', 'Woodcutter', 'Digger', 'Farmer'],
    bestFor: ['New players', 'Steady income', 'Basic materials'],
    earnings: 'Low-Medium'
  },
  {
    title: 'Combat & Hunting',
    description: 'Get paid for fighting mobs and protecting the server',
    icon: Award,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    jobs: ['Hunter', 'Slayer', 'Warrior'],
    bestFor: ['Combat lovers', 'High-level players', 'Adventure seekers'],
    earnings: 'Medium-High'
  },
  {
    title: 'Specialized Trades',
    description: 'Advanced jobs for experienced players with specific skills',
    icon: Star,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    jobs: ['Builder', 'Enchanter', 'Brewer', 'Fisherman', 'Crafter'],
    bestFor: ['Experienced players', 'Specialized builds', 'Unique rewards'],
    earnings: 'High'
  }
]

const pointshopRewards = [
  {
    category: 'Tools & Equipment',
    items: ['Enchanted tools', 'Rare materials', 'Special armor'],
    pointRange: '50-500 points'
  },
  {
    category: 'Consumables',
    items: ['XP bottles', 'Food items', 'Potions'],
    pointRange: '10-100 points'
  },
  {
    category: 'Cosmetics',
    items: ['Job titles', 'Special effects', 'Decorative items'],
    pointRange: '25-200 points'
  },
  {
    category: 'Exclusive Items',
    items: ['Job-specific gear', 'Rare blocks', 'Limited edition items'],
    pointRange: '100-1000 points'
  }
]

const jobTips = [
  {
    title: 'Start with Resource Jobs',
    description: 'Mining and farming jobs are perfect for beginners and provide steady income.',
    icon: Target,
    priority: 'Beginner'
  },
  {
    title: 'Focus on One Job First',
    description: 'Leveling up a single job provides better rewards than spreading across multiple jobs.',
    icon: TrendingUp,
    priority: 'Important'
  },
  {
    title: 'Use Job-Specific Areas',
    description: 'Some server areas provide bonus job XP and payment multipliers.',
    icon: Star,
    priority: 'Pro Tip'
  },
  {
    title: 'Save Points for Big Purchases',
    description: 'Pointshop\'s best items require significant point investment - save up!',
    icon: Coins,
    priority: 'Strategy'
  }
]

const quickCommands = [
  { command: '/jobs', description: 'Open the jobs menu and browse available positions' },
  { command: '/jobs join <jobname>', description: 'Join a specific job (e.g., /jobs join miner)' },
  { command: '/jobs leave <jobname>', description: 'Leave a job you no longer want' },
  { command: '/jobs stats', description: 'View your job statistics and progress' },
  { command: '/jobs pointshop', description: 'Open the pointshop to spend your earned points' },
  { command: '/jobs top', description: 'See the top players in each job category' }
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

export default function JobsPage() {
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
          <span className="text-foreground">Jobs</span>
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
              <h1 className="hero-title">Jobs System</h1>
              <p className="subtitle">
                Earn reliable income by working in one of 12 available jobs. 
                Complete normal survival tasks and unlock valuable pointshop rewards.
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
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Jobs Quick Facts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>12 Jobs Available</strong> - Something for every playstyle</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Reliable Income</strong> - Get paid for normal survival tasks</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Pointshop System</strong> - Earn points to buy valuable items</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span><strong>Level Up</strong> - Higher job levels = better rewards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Job Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Job Categories</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {jobCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {category.title}
                      </h3>
                      <p className="text-foreground-muted text-sm mb-3">
                        {category.description}
                      </p>
                      <div className="inline-flex items-center px-2 py-1 bg-gray-100 rounded-full">
                        <span className="text-xs font-medium text-gray-700">
                          Earnings: {category.earnings}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Available Jobs:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {category.jobs.map((job) => (
                          <span key={job} className="inline-block px-2 py-1 bg-gray-50 text-xs text-gray-600 rounded">
                            {job}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Best For:
                      </h4>
                      <ul className="space-y-1">
                        {category.bestFor.map((item) => (
                          <li key={item} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            <span className="text-xs text-foreground-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pointshop System */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Pointshop Rewards</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pointshopRewards.map((reward) => (
              <motion.div key={reward.category} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">
                      {reward.category}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {reward.pointRange}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {reward.items.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Tips */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Pro Tips for Success</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobTips.map((tip) => (
              <motion.div key={tip.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {tip.title}
                        </h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          tip.priority === 'Beginner' ? 'bg-green-100 text-green-700' :
                          tip.priority === 'Important' ? 'bg-blue-100 text-blue-700' :
                          tip.priority === 'Pro Tip' ? 'bg-purple-100 text-purple-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {tip.priority}
                        </span>
                      </div>
                      <p className="text-foreground-muted text-sm">
                        {tip.description}
                      </p>
                    </div>
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
            Essential Jobs Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Getting Started Guide */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Start Your Career?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Use <code className="px-2 py-1 bg-white/50 rounded text-primary">/jobs</code> to browse 
            all available positions. Start with resource gathering jobs for steady income, 
            then explore specialized trades as you gain experience.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/economy/overview"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Coins className="w-4 h-4 mr-2" />
              Learn Economy Basics
            </Link>
            <Link 
              href="/docs/progression/levels"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Player Levels
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}