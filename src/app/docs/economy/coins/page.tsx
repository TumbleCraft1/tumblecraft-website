'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Coins, ShoppingCart, Trophy, Gift, Star } from 'lucide-react'

export default function CoinsPage() {
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
          <span className="text-foreground">Coins</span>
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
              <h1 className="hero-title flex items-center space-x-3">
                <Coins className="w-8 h-8 text-yellow-500" />
                <span>Coins - Premium Currency</span>
              </h1>
              <p className="subtitle">
                Learn about TumbleCraft&apos;s premium currency system and how to earn and spend coins effectively.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">What are Coins?</h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Coins are TumbleCraft&apos;s premium currency, designed for special purchases and exclusive items. 
              Unlike regular money, coins are more valuable and harder to obtain, making them perfect for 
              premium items, cosmetics, and special perks that aren&apos;t available through normal gameplay.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
                  <p className="text-yellow-700 text-sm">
                    Coins are more difficult to obtain than regular money, so spend them wisely! 
                    Consider your purchases carefully as coins are a valuable resource.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How to Earn Coins */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Earn Coins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Server Store</h3>
                  <p className="text-foreground-muted text-sm">
                    Purchase coins directly from the server store to support TumbleCraft 
                    and get immediate access to premium features.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Leveling Up</h3>
                  <p className="text-foreground-muted text-sm">
                    Earn coins as rewards when you level up your character. Higher levels 
                    provide better coin rewards.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gift className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Daily/Weekly Rewards</h3>
                  <p className="text-foreground-muted text-sm">
                    Claim your daily and weekly rewards to receive coins for consistent 
                    gameplay and server participation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Coins className="w-4 h-4 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">AFK Pond</h3>
                  <p className="text-foreground-muted text-sm">
                    Visit the AFK Pond and earn 2 coins every 15 minutes of AFK time. 
                    A passive way to accumulate coins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Coinshop */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">The Coinshop</h2>
          <p className="text-foreground-muted leading-relaxed mb-6">
            The coinshop is your gateway to premium items and exclusive perks. Here you can spend 
            your hard-earned coins on items that aren&apos;t available anywhere else on the server.
          </p>
          
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">What&apos;s Available in the Coinshop?</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-foreground-muted">Exclusive cosmetic items and appearances</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-foreground-muted">Premium tool skins and customizations</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-foreground-muted">Special perks and abilities</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-foreground-muted">Rare items and collectibles</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">Access the Coinshop</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="block bg-white px-3 py-2 rounded border font-mono">/coinshop</code>
              <p className="text-sm text-foreground-muted mt-2">
                Use this command to open the coinshop interface and browse available items.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tips */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            💡 Coin Management Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="font-medium text-foreground mb-2">Save Wisely</h4>
              <p className="text-sm text-foreground-muted">
                Since coins are rare, plan your purchases and save for items you really want.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Check Regularly</h4>
              <p className="text-sm text-foreground-muted">
                Visit the coinshop frequently as new items and limited-time offers may appear.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">AFK Strategy</h4>
              <p className="text-sm text-foreground-muted">
                Use the AFK Pond during breaks to passively accumulate coins over time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}