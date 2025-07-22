'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Package, Gift, Key, Star, Trophy, Zap, Vote, ShoppingCart } from 'lucide-react'

const crateTypes = [
  {
    name: 'Vote Crate',
    icon: Vote,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Free crates obtained by voting for the server',
    rewards: ['Common resources', 'Basic cosmetics', 'Small money rewards', 'Tool upgrades'],
    keySource: 'Free from /vote command'
  },
  {
    name: 'Common Crate',
    icon: Package,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    description: 'Entry-level crates with useful everyday items',
    rewards: ['Building materials', 'Food items', 'Basic tools', 'Money rewards'],
    keySource: 'Purchase from shop or events'
  },
  {
    name: 'Rare Crate',
    icon: Gift,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Higher quality rewards with better items',
    rewards: ['Rare materials', 'Enhanced tools', 'Cosmetic items', 'Larger money rewards'],
    keySource: 'Shop purchase or special events'
  },
  {
    name: 'Epic Crate',
    icon: Star,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Premium crates with excellent rewards',
    rewards: ['Epic materials', 'Powerful tools', 'Exclusive cosmetics', 'Coins'],
    keySource: 'Premium shop or achievements'
  },
  {
    name: 'Superior Crate',
    icon: Trophy,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    description: 'The highest tier crates with the best rewards',
    rewards: ['Legendary items', 'Rare cosmetics', 'Large coin rewards', 'Exclusive perks'],
    keySource: 'Special events or premium purchases'
  }
]

export default function CratesPage() {
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
          <span className="text-foreground">Crates</span>
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
                <Package className="w-8 h-8 text-purple-600" />
                <span>Crates & Keys</span>
              </h1>
              <p className="subtitle">
                Unlock amazing rewards with crate keys! From free vote crates to premium superior crates, discover what treasures await.
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
            <h2 className="text-2xl font-bold text-foreground mb-6">What are Crates?</h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Crates are special reward boxes that contain various items, materials, cosmetics, and currencies. 
              Each crate requires a specific key to open and offers different tiers of rewards based on the crate type. 
              From free vote crates to premium superior crates, there&apos;s something for every player.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Vote className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Free Vote Keys!</h4>
                  <p className="text-green-700 text-sm">
                    Use the <code className="bg-green-100 px-2 py-1 rounded text-green-800">/vote</code> command to get free vote keys! 
                    This is the easiest way to start opening crates and earning rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Crate Types */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Types of Crates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crateTypes.map((crate, index) => (
              <motion.div
                key={crate.name}
                className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border ${crate.borderColor} p-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg ${crate.bgColor} flex items-center justify-center`}>
                      <crate.icon className={`w-5 h-5 ${crate.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{crate.name}</h3>
                  </div>
                  
                  <p className="text-sm text-foreground-muted">{crate.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Possible Rewards:</h4>
                    <ul className="space-y-1">
                      {crate.rewards.map((reward) => (
                        <li key={reward} className="flex items-center space-x-2 text-xs text-foreground-muted">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          <span>{reward}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`${crate.bgColor} rounded-lg p-3`}>
                    <p className="text-xs font-medium text-foreground">Key Source:</p>
                    <p className="text-xs text-foreground-muted">{crate.keySource}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Get Keys */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Get Crate Keys</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Vote className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Voting (Free!)</h3>
                  <p className="text-foreground-muted text-sm">
                    Use <code className="bg-gray-100 px-2 py-1 rounded text-gray-700">/vote</code> to get free vote keys. 
                    Support the server and earn rewards at the same time!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShoppingCart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Server Shop</h3>
                  <p className="text-foreground-muted text-sm">
                    Purchase keys directly from the server shop using coins or money. 
                    Higher tier keys cost more but offer better rewards.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gift className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Special Events</h3>
                  <p className="text-foreground-muted text-sm">
                    Participate in server events, competitions, and seasonal activities 
                    to earn rare and epic crate keys.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Achievements</h3>
                  <p className="text-foreground-muted text-sm">
                    Complete major milestones and achievements to unlock special 
                    crate keys as rewards for your progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Crate Area */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Opening Crates - The Crate Area</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">How to Access</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <code className="block bg-white px-3 py-2 rounded border font-mono">/warp crates</code>
                <p className="text-sm text-foreground-muted mt-2">
                  Teleports you directly to the Crate Area where you can open all your crate keys.
                </p>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-4">What You&apos;ll Find</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-foreground-muted text-sm">Interactive crate opening stations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-foreground-muted text-sm">Different areas for each crate type</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-foreground-muted text-sm">Safe and organized environment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-foreground-muted text-sm">Other players opening crates</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Opening Process</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600">1</div>
                  <p className="text-sm text-foreground-muted">Arrive at the Crate Area using <code>/warp crates</code></p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600">2</div>
                  <p className="text-sm text-foreground-muted">Find the station for your crate type</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600">3</div>
                  <p className="text-sm text-foreground-muted">Right-click with your key to open the crate</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-bold text-purple-600">4</div>
                  <p className="text-sm text-foreground-muted">Enjoy your rewards!</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tips for Maximizing Rewards */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            <Zap className="inline w-5 h-5 mr-2" />
            Tips for Maximizing Crate Rewards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Vote className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Vote Daily</h4>
              <p className="text-sm text-foreground-muted">
                Use <code>/vote</code> every day to get free vote keys. It&apos;s the most cost-effective way to get rewards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Key className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Save for Better Crates</h4>
              <p className="text-sm text-foreground-muted">
                Sometimes it&apos;s worth saving up for rare or epic keys instead of spending on many common keys.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Watch for Events</h4>
              <p className="text-sm text-foreground-muted">
                Special events often offer bonus crate keys or increased drop rates for better rewards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}