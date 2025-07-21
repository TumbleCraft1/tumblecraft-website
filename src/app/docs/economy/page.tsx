'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Coins, DollarSign, ShoppingCart, Gavel, Factory, ArrowRight } from 'lucide-react'

const economyPages = [
  {
    title: 'Economy Overview',
    description: 'Understand the dual-currency system and marketplace basics',
    href: '/docs/economy/overview',
    icon: Coins,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    features: ['Money vs Coins', 'Earning methods', 'Spending strategies', 'Quick start guide']
  },
  {
    title: 'Shop System',
    description: 'Learn how to buy and sell items with the server shop',
    href: '/docs/economy/shop',
    icon: ShoppingCart,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    features: ['Item prices', 'Bulk selling', 'Best resources', 'Shop navigation']
  },
  {
    title: 'Auction House',
    description: 'Trade with other players safely and profitably',
    href: '/docs/economy/auction',
    icon: Gavel,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: ['Bidding strategies', 'Listing items', 'Safety tips', 'Price discovery']
  },
  {
    title: 'Factories',
    description: 'Automate production and transform materials',
    href: '/docs/economy/factories',
    icon: Factory,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    features: ['Factory types', 'Production chains', 'Investment strategies', 'Automation']
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

export default function EconomyPage() {
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
          <span className="text-foreground">Economy</span>
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
              <h1 className="hero-title">Economy System</h1>
              <p className="subtitle">
                Master TumbleCraft&apos;s comprehensive economy system featuring dual currencies, 
                multiple marketplaces, and automated production facilities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Overview */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Economy at a Glance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Dual Currency:</strong> Money for daily needs, Coins for premium items</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Multiple Markets:</strong> Server shop, player auctions, and factories</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Safe Trading:</strong> Protected transactions and anti-scam measures</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>Growth Focused:</strong> Multiple income streams and investment options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Economy Topics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Economy Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {economyPages.map((page) => (
              <motion.div key={page.title} variants={itemVariants}>
                <Link href={page.href} className="group block">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-300">
                    <div className="space-y-4">
                      {/* Icon and Title */}
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl ${page.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <page.icon className={`w-6 h-6 ${page.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {page.title}
                          </h3>
                          <p className="text-foreground-muted text-sm leading-relaxed">
                            {page.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Features List */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground-secondary">
                          What you&apos;ll learn:
                        </h4>
                        <div className="space-y-1">
                          {page.features.map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                              <span className="text-xs text-foreground-muted">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-end pt-2">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
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
            New to TumbleCraft&apos;s Economy?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Start with the Economy Overview to understand the basics, then explore specific 
            systems as you become more comfortable with trading and earning.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/docs/economy/overview"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Coins className="w-4 h-4 mr-2" />
              Start with Economy Overview
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}