'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, DollarSign, TrendingUp, Copy, Wheat, Pickaxe, Star, Target, Clock, Trophy } from 'lucide-react'
import { useState } from 'react'

const bestResources = [
  {
    category: 'Farming Resources',
    icon: Wheat,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    items: ['Wheat', 'Carrots', 'Potatoes', 'Beetroot', 'Sugar Cane', 'Pumpkins', 'Melons'],
    tips: ['Set up automated farms for consistent income', 'Harvest regularly for maximum profit', 'Plant crops in large quantities']
  },
  {
    category: 'Mining Resources',
    icon: Pickaxe,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    items: ['Coal', 'Iron Ore', 'Gold Ore', 'Diamonds', 'Redstone', 'Lapis Lazuli', 'Emeralds'],
    tips: ['Use Fortune enchanted tools for better yields', 'Mine at optimal levels for each ore', 'Strip mining is most efficient']
  }
]

const shopStrategies = [
  {
    title: 'Price Monitoring',
    description: 'Check shop prices regularly as they can fluctuate',
    icon: TrendingUp,
    tip: 'Use /shop to see current selling prices before gathering resources'
  },
  {
    title: 'Bulk Selling',
    description: 'Gather large quantities before selling for efficiency',
    icon: Target,
    tip: 'Fill your inventory with one resource type for maximum profit per trip'
  },
  {
    title: 'Regular Income',
    description: 'Make shop selling a daily routine for steady earnings',
    icon: Clock,
    tip: 'Dedicate 30 minutes daily to resource gathering and selling'
  },
  {
    title: 'Market Timing',
    description: 'Some items may have better prices at certain times',
    icon: Star,
    tip: 'Keep an eye on price changes and sell when rates are favorable'
  }
]

const quickCommands = [
  { command: '/shop', description: 'Open the server shop interface' },
  { command: '/shop sell all', description: 'Sell all sellable items in your inventory' },
  { command: '/shop info [item]', description: 'Check the selling price of a specific item' },
  { command: '/shop search [item]', description: 'Search for items you can sell' },
  { command: '/balance', description: 'Check your current money balance' }
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

export default function ShopPage() {
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
          <span className="text-foreground">Shop</span>
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
              href="/docs/economy"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Server Shop</h1>
              <p className="subtitle">
                The most reliable source of income on TumbleCraft. Learn how to maximize 
                your profits by selling farming and mining resources efficiently.
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
              <ShoppingCart className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Shop Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Most reliable</strong> source of income on the server</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Instant payment</strong> - no waiting for buyers</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>Farming & mining</strong> resources sell for great prices</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Available 24/7</strong> - sell anytime you want</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Best Resources to Sell */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Best Resources to Sell</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bestResources.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.category}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        High-value resources that sell for excellent prices
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Profitable Items:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Pro Tips:
                    </h4>
                    <ul className="space-y-1">
                      {category.tips.map((tip, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-xs text-foreground-muted">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selling Strategies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Selling Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shopStrategies.map((strategy, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center">
                      <strategy.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {strategy.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground-muted text-sm mb-4">
                    {strategy.description}
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-xs text-blue-700 font-medium">
                      💡 {strategy.tip}
                    </p>
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
            Essential Shop Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd, index) => (
              <CommandCard key={index} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Start Earning?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Start by setting up a basic farm or going mining. Focus on gathering large quantities 
            of farming or mining resources - they sell for great prices in the shop!
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/progression/jobs"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Explore Jobs
            </Link>
            <Link 
              href="/docs/economy/auction"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              Learn Auction House
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}