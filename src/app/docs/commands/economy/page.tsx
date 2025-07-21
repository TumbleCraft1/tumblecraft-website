'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { ArrowRight, Copy, Coins, Info, ArrowLeft, CheckCircle, DollarSign, ShoppingCart, Gavel } from 'lucide-react'
import { useState } from 'react'

interface Command {
  command: string
  description: string
  usage: string
  examples?: string[]
  aliases?: string[]
  permissions?: string
  category: 'basic' | 'trading' | 'shop' | 'auction' | 'advanced'
  cooldown?: string
}

const economyCommands: Command[] = [
  {
    command: '/balance',
    description: 'Check your current money and coin balance',
    usage: '/balance [player]',
    examples: ['/balance', '/balance PlayerName'],
    aliases: ['/bal', '/money'],
    permissions: 'All players',
    category: 'basic'
  },
  {
    command: '/pay',
    description: 'Transfer money to another player',
    usage: '/pay <player> <amount>',
    examples: ['/pay Steve 1000', '/pay Alex 500'],
    permissions: 'All players',
    category: 'trading',
    cooldown: '5 seconds'
  },
  {
    command: '/shop',
    description: 'Open the server shop to buy and sell items',
    usage: '/shop [category]',
    examples: ['/shop', '/shop blocks', '/shop food'],
    permissions: 'All players',
    category: 'shop'
  },
  {
    command: '/sell',
    description: 'Sell items from your inventory',
    usage: '/sell <all|hand> [amount]',
    examples: ['/sell hand', '/sell all', '/sell hand 32'],
    aliases: ['/sellall'],
    permissions: 'All players',
    category: 'shop'
  },
  {
    command: '/auction',
    description: 'Access the auction house to buy and sell items with other players',
    usage: '/auction [sell|history|expired]',
    examples: ['/auction', '/auction sell 1000', '/auction history'],
    aliases: ['/ah'],
    permissions: 'All players',
    category: 'auction'
  },
  {
    command: '/auction sell',
    description: 'Put the item in your hand up for auction',
    usage: '/auction sell <price> [duration]',
    examples: ['/auction sell 5000', '/auction sell 1000 7d'],
    permissions: 'All players',
    category: 'auction',
    cooldown: '30 seconds'
  },
  {
    command: '/coinshop',
    description: 'Access the premium coin shop for exclusive items',
    usage: '/coinshop [category]',
    examples: ['/coinshop', '/coinshop cosmetics'],
    aliases: ['/coins'],
    permissions: 'All players',
    category: 'shop'
  },
  {
    command: '/lottery',
    description: 'Participate in the daily lottery for a chance to win big',
    usage: '/lottery [buy|info]',
    examples: ['/lottery', '/lottery buy 5', '/lottery info'],
    permissions: 'All players',
    category: 'advanced'
  },
  {
    command: '/baltop',
    description: 'View the richest players on the server',
    usage: '/baltop [page]',
    examples: ['/baltop', '/baltop 2'],
    aliases: ['/richlist'],
    permissions: 'All players',
    category: 'basic'
  },
  {
    command: '/factories',
    description: 'Access the factory system for automated production',
    usage: '/factories [type]',
    examples: ['/factories', '/factories sawmill'],
    permissions: 'All players',
    category: 'advanced'
  },
  {
    command: '/delivery',
    description: 'Check available delivery missions for extra income',
    usage: '/delivery [accept|complete|list]',
    examples: ['/delivery', '/delivery accept', '/delivery complete'],
    aliases: ['/deliveries'],
    permissions: 'All players',
    category: 'advanced'
  },
  {
    command: '/eco',
    description: 'View detailed economy statistics and information',
    usage: '/eco [stats|info]',
    examples: ['/eco', '/eco stats'],
    aliases: ['/economy'],
    permissions: 'All players',
    category: 'basic'
  }
]

const categoryColors = {
  basic: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  trading: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  shop: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  auction: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  advanced: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' }
}

const categoryIcons = {
  basic: DollarSign,
  trading: ArrowRight,
  shop: ShoppingCart,
  auction: Gavel,
  advanced: Coins
}

function CommandCard({ command }: { command: Command }) {
  const [copied, setCopied] = useState<string | null>(null)
  const colors = categoryColors[command.category]
  const IconComponent = categoryIcons[command.category]

  const copyCommand = (cmd: string) => {
    navigator.clipboard?.writeText(cmd)
    setCopied(cmd)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <motion.div 
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="flex items-center space-x-3">
              <code className="text-lg font-mono font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded">
                {command.command}
              </code>
              <span className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} ${colors.border} border flex items-center space-x-1`}>
                <IconComponent className="w-3 h-3" />
                <span>{command.category}</span>
              </span>
              {command.aliases && (
                <div className="flex space-x-1">
                  {command.aliases.map((alias) => (
                    <code key={alias} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      {alias}
                    </code>
                  ))}
                </div>
              )}
            </div>
            <p className="text-foreground-muted">
              {command.description}
            </p>
          </div>
          <button 
            onClick={() => copyCommand(command.command)}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative"
            title="Copy command"
          >
            {copied === command.command ? (
              <CheckCircle className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-1">Usage:</h4>
            <code className="text-sm bg-gray-100 text-gray-800 px-3 py-2 rounded block">
              {command.usage}
            </code>
          </div>

          {command.examples && (
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Examples:</h4>
              <div className="space-y-1">
                {command.examples.map((example) => (
                  <div key={example} className="flex items-center justify-between">
                    <code className="text-sm bg-green-50 text-green-800 px-3 py-1 rounded flex-1">
                      {example}
                    </code>
                    <button 
                      onClick={() => copyCommand(example)}
                      className="ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                      title="Copy example"
                    >
                      {copied === example ? (
                        <CheckCircle className="w-3 h-3 text-green-500" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-foreground-muted">
              <Info className="w-4 h-4" />
              <span>Available to: {command.permissions}</span>
            </div>
            {command.cooldown && (
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                Cooldown: {command.cooldown}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

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

export default function EconomyCommandsPage() {
  const groupedCommands = {
    basic: economyCommands.filter(cmd => cmd.category === 'basic'),
    trading: economyCommands.filter(cmd => cmd.category === 'trading'),
    shop: economyCommands.filter(cmd => cmd.category === 'shop'),
    auction: economyCommands.filter(cmd => cmd.category === 'auction'),
    advanced: economyCommands.filter(cmd => cmd.category === 'advanced')
  }

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
          <Link href="/docs/commands" className="hover:text-primary transition-colors">
            Commands
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
              href="/docs/commands"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title flex items-center space-x-3">
                <Coins className="w-8 h-8 text-yellow-500" />
                <span>Economy Commands</span>
              </h1>
              <p className="subtitle">
                Master TumbleCraft&apos;s economy system with commands for money management, trading, shopping, 
                and advanced economic features like auctions and factories.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Economy Overview */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Economy System Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Primary Currency</h4>
                  <p className="text-foreground-muted text-sm mb-3">
                    Money ($) is the main currency earned through selling items, jobs, and quests.
                  </p>
                  <h4 className="font-medium text-foreground mb-2">Premium Currency</h4>
                  <p className="text-foreground-muted text-sm">
                    Coins are premium currency for exclusive items and cosmetics.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Trading Systems</h4>
                  <ul className="text-sm text-foreground-muted space-y-1">
                    <li>• Direct player-to-player payments</li>
                    <li>• Server shop for buying/selling</li>
                    <li>• Player auction house</li>
                    <li>• Factory automation system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Reference */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">Check Balance</h4>
              <code className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">/balance</code>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">Send Money</h4>
              <code className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">/pay &lt;player&gt; &lt;$&gt;</code>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-medium text-purple-800 mb-2">Open Shop</h4>
              <code className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">/shop</code>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-medium text-orange-800 mb-2">Auction House</h4>
              <code className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded">/auction</code>
            </div>
          </div>
        </motion.div>

        {/* Commands by Category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {Object.entries(groupedCommands).map(([category, commands]) => (
            commands.length > 0 && (
              <motion.div key={category} variants={itemVariants}>
                <h2 className="text-xl font-bold text-foreground mb-4 capitalize flex items-center space-x-2">
                  {React.createElement(categoryIcons[category as keyof typeof categoryIcons], { className: "w-5 h-5" })}
                  <span>{category} Commands</span>
                </h2>
                <div className="grid gap-4">
                  {commands.map((command) => (
                    <CommandCard key={command.command} command={command} />
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </motion.div>

        {/* Pro Tips */}
        <motion.div 
          className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mt-12 border border-yellow-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            💰 Economy Pro Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Start Small</h4>
              <p className="text-foreground-muted text-sm">
                Begin by selling basic materials like wood, cobblestone, and crops in the shop to build your initial wealth.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Use the Auction</h4>
              <p className="text-foreground-muted text-sm">
                List rare or valuable items on the auction for higher profits than the static shop prices.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Invest in Factories</h4>
              <p className="text-foreground-muted text-sm">
                Once you have capital, invest in factory automation for passive income generation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Continue Learning
              </h3>
              <p className="text-foreground-muted">
                Explore social commands to interact with other players and build your trading network.
              </p>
            </div>
            <Link 
              href="/docs/commands/social"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              Social Commands
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}