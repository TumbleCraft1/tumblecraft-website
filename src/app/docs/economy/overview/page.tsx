'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Coins, DollarSign, ShoppingCart, Gavel, Factory, TrendingUp, Copy, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const economyFeatures = [
  {
    title: 'Money System',
    description: 'Primary currency for most transactions',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    earning: ['Shop sales', 'Job completion', 'Auction sales', 'Levels', 'Deliveries'],
    spending: ['Auction purchases', 'Factory operations', 'Lottery tickets']
  },
  {
    title: 'Coins (Premium)',
    description: 'Premium currency for special items and perks',
    icon: Coins,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    earning: ['Server Store', 'Level rewards', 'Reward claims', 'AFK Pond'],
    spending: ['Coinshop items', 'Premium perks', 'Cosmetics', 'Special kits']
  }
]

const marketplaces = [
  {
    title: 'Server Shop',
    description: 'Sell items to the server for guaranteed money',
    icon: ShoppingCart,
    command: '/shop',
    tips: ['Focus on farming and mining resources', 'Check prices regularly', 'Some items have better rates than others'],
    href: '/docs/economy/shop'
  },
  {
    title: 'Auction House',
    description: 'Player-to-player trading marketplace',
    icon: Gavel,
    command: '/auction',
    tips: ['Research prices before buying', 'Use /auction sell <price> to list items', 'Great for rare items'],
    href: '/docs/economy/auction'
  },
  {
    title: 'Factories',
    description: 'Transform materials into new resources',
    icon: Factory,
    command: '/factories',
    tips: ['Invest money to produce materials', 'Higher tier factories = better profits', 'Plan your production chains'],
    href: '/docs/economy/factories'
  }
]

const quickCommands = [
  { command: '/balance', description: 'Check your money and coins' },
  { command: '/pay <player> <amount>', description: 'Transfer money to another player' },
  { command: '/shop', description: 'Open the server shop' },
  { command: '/auction', description: 'Browse the auction house' },
  { command: '/coinshop', description: 'Open the premium coinshop' }
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

export default function EconomyOverviewPage() {
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
          <Link href="/docs/economy" className="hover:text-primary transition-colors">
            Economy
          </Link>
          <span>/</span>
          <span className="text-foreground">Overview</span>
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
              href="/docs"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Economy Overview</h1>
              <p className="subtitle">
                Master TumbleCraft&apos;s dual-currency economy system and learn how to 
                earn and spend money and coins effectively.
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
              <TrendingUp className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Economy Quick Facts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Money</strong> - Primary currency for daily transactions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span><strong>Coins</strong> - Premium currency for special items</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Shop selling is the most reliable income source</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Auction house offers better prices for rare items</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Currency Systems */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Currency Systems</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {economyFeatures.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 text-green-700">
                        How to Earn:
                      </h4>
                      <ul className="space-y-1">
                        {feature.earning.map((method) => (
                          <li key={method} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            <span className="text-xs text-foreground-muted">{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 text-blue-700">
                        How to Spend:
                      </h4>
                      <ul className="space-y-1">
                        {feature.spending.map((method) => (
                          <li key={method} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <span className="text-xs text-foreground-muted">{method}</span>
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

        {/* Marketplaces */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Trading & Marketplaces</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {marketplaces.map((marketplace) => (
              <motion.div key={marketplace.title} variants={itemVariants}>
                <Link href={marketplace.href} className="group block h-full">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-300">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                        <marketplace.icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {marketplace.title}
                        </h3>
                        <p className="text-foreground-muted text-sm mb-2">
                          {marketplace.description}
                        </p>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded text-primary">
                          {marketplace.command}
                        </code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Pro Tips:
                      </h4>
                      <ul className="space-y-1">
                        {marketplace.tips.map((tip) => (
                          <li key={tip} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-xs text-foreground-muted">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-end pt-4">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
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
            Essential Economy Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Start Earning?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            The best way to start earning money is by gathering and selling resources. 
            Focus on farming and mining to build your initial wealth.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/economy/shop"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Learn About Shop
            </Link>
            <Link 
              href="/docs/progression/jobs"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Explore Jobs
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}