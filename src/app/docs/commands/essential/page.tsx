'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Copy, Terminal, Info, ArrowLeft, CheckCircle } from 'lucide-react'
import { useState } from 'react'

interface Command {
  command: string
  description: string
  usage: string
  examples?: string[]
  aliases?: string[]
  permissions?: string
  category: 'movement' | 'basic' | 'economy' | 'help'
}

const essentialCommands: Command[] = [
  {
    command: '/spawn',
    description: 'Teleport back to the server spawn point',
    usage: '/spawn',
    examples: ['/spawn'],
    permissions: 'All players',
    category: 'movement'
  },
  {
    command: '/rtp',
    description: 'Random teleport to a safe location in the survival world',
    usage: '/rtp [world]',
    examples: ['/rtp', '/rtp survival'],
    aliases: ['randomtp'],
    permissions: 'All players',
    category: 'movement'
  },
  {
    command: '/sethome',
    description: 'Set a home location that you can teleport back to',
    usage: '/sethome [name]',
    examples: ['/sethome', '/sethome base', '/sethome farm'],
    permissions: 'All players',
    category: 'basic'
  },
  {
    command: '/home',
    description: 'Teleport to one of your set home locations',
    usage: '/home [name]',
    examples: ['/home', '/home base', '/home farm'],
    permissions: 'All players',
    category: 'movement'
  },
  {
    command: '/delhome',
    description: 'Delete a previously set home location',
    usage: '/delhome <name>',
    examples: ['/delhome base', '/delhome farm'],
    permissions: 'All players',
    category: 'basic'
  },
  {
    command: '/worlds',
    description: 'Open the worlds menu to travel between different worlds',
    usage: '/worlds',
    examples: ['/worlds'],
    aliases: ['world'],
    permissions: 'All players',
    category: 'movement'
  },
  {
    command: '/warps',
    description: 'View and access public warp locations',
    usage: '/warps',
    examples: ['/warps'],
    aliases: ['warp'],
    permissions: 'All players',
    category: 'movement'
  },
  {
    command: '/balance',
    description: 'Check your current money and coin balance',
    usage: '/balance [player]',
    examples: ['/balance', '/balance PlayerName'],
    aliases: ['/bal', '/money'],
    permissions: 'All players',
    category: 'economy'
  },
  {
    command: '/shop',
    description: 'Open the server shop to buy and sell items',
    usage: '/shop',
    examples: ['/shop'],
    permissions: 'All players',
    category: 'economy'
  },
  {
    command: '/help',
    description: 'Get help information about commands and server features',
    usage: '/help [command]',
    examples: ['/help', '/help spawn', '/help sethome'],
    permissions: 'All players',
    category: 'help'
  }
]

const categoryColors = {
  movement: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  basic: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  economy: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' },
  help: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' }
}

function CommandCard({ command }: { command: Command }) {
  const [copied, setCopied] = useState<string | null>(null)
  const colors = categoryColors[command.category]

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
              <code className="text-lg font-mono font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded">
                {command.command}
              </code>
              <span className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} ${colors.border} border`}>
                {command.category}
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
                {command.examples.map((example, index) => (
                  <div key={index} className="flex items-center justify-between">
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

export default function EssentialCommandsPage() {
  const groupedCommands = {
    movement: essentialCommands.filter(cmd => cmd.category === 'movement'),
    basic: essentialCommands.filter(cmd => cmd.category === 'basic'),
    economy: essentialCommands.filter(cmd => cmd.category === 'economy'),
    help: essentialCommands.filter(cmd => cmd.category === 'help')
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
          <span className="text-foreground">Essential</span>
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
              <h1 className="hero-title">Essential Commands</h1>
              <p className="subtitle">
                Master these fundamental commands to navigate TumbleCraft effectively. 
                These are the most important commands every player should know.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Terminal className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Quick Start Commands
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600 font-medium">1.</span>
                    <span>Use <code className="bg-blue-100 px-2 py-1 rounded text-xs">/rtp</code> to get to the survival world</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600 font-medium">2.</span>
                    <span>Use <code className="bg-green-100 px-2 py-1 rounded text-xs">/sethome</code> once you find a good location</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-600 font-medium">3.</span>
                    <span>Use <code className="bg-yellow-100 px-2 py-1 rounded text-xs">/shop</code> to sell resources for money</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-600 font-medium">4.</span>
                    <span>Use <code className="bg-purple-100 px-2 py-1 rounded text-xs">/spawn</code> to return to the main hub</span>
                  </div>
                </div>
              </div>
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
            <motion.div key={category} variants={itemVariants}>
              <h2 className="text-xl font-bold text-foreground mb-4 capitalize">
                {category} Commands
              </h2>
              <div className="grid gap-4">
                {commands.map((command) => (
                  <CommandCard key={command.command} command={command} />
                ))}
              </div>
            </motion.div>
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
            💡 Pro Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Home Management</h4>
              <p className="text-foreground-muted text-sm">
                Your home limit increases as you level up! Start with 2 homes and unlock more through progression.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Command Shortcuts</h4>
              <p className="text-foreground-muted text-sm">
                Many commands have shorter aliases. For example, use <code className="bg-white px-2 py-1 rounded text-xs">/bal</code> instead of <code className="bg-white px-2 py-1 rounded text-xs">/balance</code>.
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
                Ready for More?
              </h3>
              <p className="text-foreground-muted">
                Explore teleportation commands to move around the server more efficiently.
              </p>
            </div>
            <Link 
              href="/docs/commands/teleportation"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              Teleportation Commands
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}