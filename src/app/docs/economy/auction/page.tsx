'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Gavel, Search, DollarSign, TrendingUp, Shield, Clock, Copy, Eye, ShoppingBag, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

const auctionFeatures = [
  {
    title: 'Browse & Search',
    description: 'Find the perfect items with powerful search tools',
    icon: Search,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    features: ['Filter by item type', 'Sort by price or time', 'Search by keyword', 'View item details'],
    tips: ['Use filters to narrow down results', 'Check recently listed items for deals', 'Compare prices before buying']
  },
  {
    title: 'Smart Selling',
    description: 'List your items for maximum profit potential',
    icon: DollarSign,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    features: ['Competitive pricing', 'Instant listing', 'Item preview', 'Sales tracking'],
    tips: ['Research market prices first', 'Price competitively but fairly', 'Rare items command higher prices']
  },
  {
    title: 'Safe Trading',
    description: 'Secure player-to-player transactions',
    icon: Shield,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: ['Automatic payments', 'Item verification', 'Transaction history', 'No scam protection'],
    tips: ['Always verify item details', 'Check seller reputation', 'Use auction for valuable items']
  }
]

const tradingStrategies = [
  {
    title: 'Price Research',
    icon: TrendingUp,
    strategy: 'Check recent sales and current listings to understand market value',
    tips: [
      'Browse similar items before listing',
      'Note price ranges for different qualities',
      'Consider item rarity and demand',
      'Factor in urgency of sale'
    ]
  },
  {
    title: 'Timing Your Sales',
    icon: Clock,
    strategy: 'List items when most players are online for better visibility',
    tips: [
      'Peak hours see more buyers',
      'Weekend activity is often higher',
      'Consider time zones of playerbase',
      'Avoid flooding market with same items'
    ]
  },
  {
    title: 'Smart Buying',
    icon: Eye,
    strategy: 'Find underpriced items and good deals through careful browsing',
    tips: [
      'Check auction regularly for new listings',
      'Look for mispriced rare items',
      'Consider bulk purchases for materials',
      'Don&apos;t overpay for common items'
    ]
  }
]

const safetyTips = [
  {
    title: 'Verify Before Buying',
    description: 'Always check item details, enchantments, and condition before purchasing',
    icon: AlertTriangle,
    importance: 'critical'
  },
  {
    title: 'Research Market Prices',
    description: 'Compare prices across multiple listings to avoid overpaying',
    icon: Search,
    importance: 'high'
  },
  {
    title: 'Check Seller History',
    description: 'Look for established players with good trading reputations',
    icon: Shield,
    importance: 'medium'
  }
]

const quickCommands = [
  { command: '/auction', description: 'Open the auction house browser' },
  { command: '/auction sell <price>', description: 'List the item in your hand for sale' },
  { command: '/auction view <player>', description: 'View a specific player\'s listings' },
  { command: '/auction search <item>', description: 'Search for specific items' },
  { command: '/auction mine', description: 'View your active listings' }
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

export default function AuctionPage() {
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
          <span className="text-foreground">Auction House</span>
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
              <h1 className="hero-title">Auction House</h1>
              <p className="subtitle">
                Master player-to-player trading through TumbleCraft&apos;s secure auction system. 
                Buy rare items, sell for profit, and trade safely with other players.
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
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Gavel className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Why Use the Auction House?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Safest</strong> way to trade with other players</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Better prices</strong> for rare and unique items</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Find deals</strong> on items you can&apos;t get elsewhere</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>Automatic</strong> payment and item transfer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Auction Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Auction Features</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {auctionFeatures.map((feature) => (
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
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Features:
                      </h4>
                      <ul className="space-y-1">
                        {feature.features.map((item) => (
                          <li key={item} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            <span className="text-xs text-foreground-muted">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 text-blue-700">
                        Pro Tips:
                      </h4>
                      <ul className="space-y-1">
                        {feature.tips.map((tip) => (
                          <li key={tip} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1 flex-shrink-0" />
                            <span className="text-xs text-foreground-muted">{tip}</span>
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

        {/* Trading Strategies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Trading Strategies</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tradingStrategies.map((strategy) => (
              <motion.div key={strategy.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                      <strategy.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {strategy.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {strategy.strategy}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Strategy Tips:
                    </h4>
                    <ul className="space-y-1">
                      {strategy.tips.map((tip) => (
                        <li key={tip} className="flex items-start space-x-2">
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

        {/* Safety Tips */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Safety & Best Practices
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {safetyTips.map((tip) => (
              <div key={tip.title} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  tip.importance === 'critical' ? 'bg-red-100' :
                  tip.importance === 'high' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <tip.icon className={`w-4 h-4 ${
                    tip.importance === 'critical' ? 'text-red-600' :
                    tip.importance === 'high' ? 'text-yellow-600' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1">
                    {tip.title}
                  </h4>
                  <p className="text-xs text-foreground-muted">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Commands Section */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Auction Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div 
          className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Start Trading?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Begin by browsing the auction house to understand current market prices, 
            then start selling items you don&apos;t need to build your trading capital.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/economy/overview"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Economy Overview
            </Link>
            <Link 
              href="/docs/economy/shop"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Server Shop Guide
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}