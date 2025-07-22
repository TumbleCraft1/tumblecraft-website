'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShoppingCart, Coins, Target, DollarSign, Star, CheckCircle, ArrowLeft, TrendingUp, Package } from 'lucide-react'

const quickSteps = [
  {
    step: 1,
    title: 'Open Shop',
    description: 'Use /shop command',
    time: '5 seconds',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    step: 2,
    title: 'Find Sell Section',
    description: 'Navigate to selling interface',
    time: '10 seconds',
    color: 'bg-green-50 border-green-200'
  },
  {
    step: 3,
    title: 'Sell Resources',
    description: 'Start with wood, stone, crops',
    time: '30 seconds',
    color: 'bg-yellow-50 border-yellow-200'
  },
  {
    step: 4,
    title: 'Earn Money',
    description: 'Watch your balance grow!',
    time: 'Ongoing',
    color: 'bg-purple-50 border-purple-200'
  }
]

const bestItems = [
  {
    category: 'Wood & Logs',
    items: ['Oak Wood', 'Birch Wood', 'Spruce Wood', 'Any Wood Type'],
    profit: 'High',
    effort: 'Low',
    icon: '🌲',
    tip: 'Easy to gather, always in demand'
  },
  {
    category: 'Stone & Ores',
    items: ['Cobblestone', 'Stone', 'Coal', 'Iron Ore'],
    profit: 'Medium',
    effort: 'Medium',
    icon: '⛏️',
    tip: 'Mining gives good variety of sellables'
  },
  {
    category: 'Food & Crops',
    items: ['Wheat', 'Carrots', 'Potatoes', 'Bread'],
    profit: 'Medium',
    effort: 'Low',
    icon: '🌾',
    tip: 'Set up a farm for steady income'
  },
  {
    category: 'Mob Drops',
    items: ['String', 'Bones', 'Gunpowder', 'Leather'],
    profit: 'High',
    effort: 'High',
    icon: '⚔️',
    tip: 'Fight monsters at night for valuable drops'
  }
]

const commands = [
  {
    command: '/shop',
    description: 'Open the main shop interface',
    usage: 'Basic access to buying and selling'
  },
  {
    command: '/sell all',
    description: 'Sell all sellable items in inventory',
    usage: 'Quick way to sell everything at once'
  },
  {
    command: '/sell hand',
    description: 'Sell the item currently in your hand',
    usage: 'Sell specific items one by one'
  },
  {
    command: '/balance',
    description: 'Check your current money balance',
    usage: 'Monitor your wealth progress'
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

export default function UsingShopPage() {
  void containerVariants // Suppress unused warning
  void itemVariants // Suppress unused warning
  
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
          <Link href="/docs/getting-started" className="hover:text-primary transition-colors">
            Getting Started
          </Link>
          <span>/</span>
          <span className="text-foreground">Using the Shop</span>
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
              href="/docs/getting-started"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title flex items-center space-x-3">
                <ShoppingCart className="w-8 h-8 text-green-600" />
                <span>Using the Shop</span>
              </h1>
              <p className="subtitle">
                Learn how to use TumbleCraft&apos;s shop system to sell resources and earn money for your survival journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Start */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-2">
            <Target className="w-6 h-6 text-green-600" />
            <span>Quick Start: First Sale in 60 Seconds</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {quickSteps.map((step) => (
              <div key={step.step} className={`border-2 rounded-lg p-4 ${step.color}`}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <span className="font-semibold text-foreground">{step.title}</span>
                </div>
                <p className="text-sm text-foreground-muted mb-1">{step.description}</p>
                <span className="text-xs text-green-600 font-medium">{step.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <Coins className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Why the Shop Matters</h4>
                <p className="text-green-700 text-sm">
                  The shop is your primary source of income on TumbleCraft. Unlike other servers, 
                  you can&apos;t just mine for diamonds - you need to sell resources to earn money for 
                  equipment, land claims, and other essential features.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Best Items to Sell */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Best Items to Sell as a Beginner</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestItems.map((category) => (
              <div key={category.category} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{category.category}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        category.profit === 'High' ? 'bg-green-100 text-green-800' :
                        category.profit === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {category.profit} Profit
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        category.effort === 'Low' ? 'bg-green-100 text-green-800' :
                        category.effort === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {category.effort} Effort
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-foreground-muted">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-sm text-blue-700">
                    <strong>💡 Tip:</strong> {category.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Shop Navigation */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Navigate the Shop</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span>Selling Items</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Find the Sell Section</p>
                    <p className="text-xs text-foreground-muted">Usually clearly labeled in the shop GUI</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Check Item Prices</p>
                    <p className="text-xs text-foreground-muted">Prices are shown when you hover over items</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sell in Bulk</p>
                    <p className="text-xs text-foreground-muted">Drag full stacks for maximum efficiency</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                <Package className="w-5 h-5 text-blue-600" />
                <span>Buying Items</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Essential Items First</p>
                    <p className="text-xs text-foreground-muted">Food, tools, and basic supplies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Compare Prices</p>
                    <p className="text-xs text-foreground-muted">Some items might be cheaper to craft</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-1" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Save for Big Purchases</p>
                    <p className="text-xs text-foreground-muted">Enchanted gear, rare items, etc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Essential Shop Commands</h2>
          
          <div className="grid gap-4">
            {commands.map((cmd) => (
              <div key={cmd.command} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <code className="bg-white px-3 py-1 rounded border font-mono text-sm">
                      {cmd.command}
                    </code>
                    <span className="text-sm text-foreground-muted">{cmd.description}</span>
                  </div>
                  <p className="text-xs text-foreground-muted mt-1 ml-20">{cmd.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Money Management Tips */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center flex items-center justify-center space-x-2">
            <DollarSign className="w-6 h-6" />
            <span>Beginner Money Management</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Start Small</h4>
              <p className="text-sm text-foreground-muted">
                Focus on gathering and selling basic resources before investing in expensive items.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Set Goals</h4>
              <p className="text-sm text-foreground-muted">
                Save money for specific purchases like land claims, better tools, or rare items.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Reinvest</h4>
              <p className="text-sm text-foreground-muted">
                Use earnings to buy better tools that help you gather resources more efficiently.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/docs/getting-started/joining-community"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              Next: Join the Community
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}