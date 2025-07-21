'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Globe, Mountain, Zap, Pickaxe, Copy, Compass, Shield, Coins } from 'lucide-react'
import { useState } from 'react'

const worlds = [
  {
    name: 'Survival World',
    size: '30k x 30k',
    description: 'The main survival world where you build your base and live your TumbleCraft adventure.',
    icon: Globe,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    features: [
      'Permanent builds and bases',
      'Land claiming enabled',
      'PvP disabled (peaceful survival)',
      'Resource preservation prioritized',
      'Spawn protection zone',
      'Warp points available'
    ],
    bestFor: ['Building permanent bases', 'Long-term projects', 'Safe resource storage', 'Community areas'],
    commands: ['/rtp', '/worlds', '/spawn'],
    tips: [
      'Use /rtp to find a good location for your base',
      'Claim your land immediately to protect builds',
      'The world border prevents infinite exploration',
      'Perfect for showcasing builds and creating towns'
    ]
  },
  {
    name: 'Nether World',
    size: '10k x 10k',
    description: 'The dangerous Nether dimension for gathering unique resources and materials.',
    icon: Zap,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    features: [
      'Access to Nether-exclusive resources',
      'Dangerous hostile environment',
      'Nether fortresses and structures',
      'Fast travel via Nether portals',
      'Limited size for performance',
      'Respawn mechanics different'
    ],
    bestFor: ['Gathering Nether resources', 'Blaze rod farming', 'Fast travel network', 'Potion brewing materials'],
    commands: ['/worlds', '/warp nether'],
    tips: [
      'Bring fire protection and healing items',
      'Build safe pathways to avoid lava',
      'Nether travel is 8x faster than overworld',
      'Mark your portal locations carefully'
    ]
  },
  {
    name: 'End World',
    size: '5k x 5k',
    description: 'The mysterious End dimension, home to the Ender Dragon and End Cities.',
    icon: Mountain,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    features: [
      'Ender Dragon boss fight',
      'End Cities and End Ships',
      'Elytra and rare loot access',
      'Chorus fruit farming',
      'Shulker shell collection',
      'Void danger zones'
    ],
    bestFor: ['Dragon fighting', 'End City raiding', 'Elytra collection', 'Advanced late-game content'],
    commands: ['/worlds', '/warp end'],
    tips: [
      'Defeat the dragon first for easier exploration',
      'Bring ender pearls for safe travel',
      'End Cities contain the best loot',
      'Be very careful near void edges'
    ]
  },
  {
    name: 'Mining World',
    size: '5k x 5k',
    description: 'A dedicated resource gathering world that resets periodically to ensure fresh resources.',
    icon: Pickaxe,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200',
    features: [
      'Periodic world resets',
      'Fresh ore generation',
      'No permanent builds allowed',
      'Resource gathering focused',
      'Strip mining friendly',
      'Temporary storage only'
    ],
    bestFor: ['Resource gathering', 'Mining operations', 'Bulk material collection', 'Preserving main world'],
    commands: ['/rtp mining', '/worlds', '/warp mining'],
    tips: [
      'Never build permanent structures here',
      'Focus on gathering, not building',
      'Use temporary storage solutions',
      'Great for bulk mining operations'
    ]
  }
]

const quickCommands = [
  { command: '/worlds', description: 'Open the worlds selection menu' },
  { command: '/rtp', description: 'Random teleport in survival world' },
  { command: '/rtp mining', description: 'Random teleport in mining world' },
  { command: '/spawn', description: 'Return to the main server spawn' }
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

export default function WorldsPage() {
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
          <Link href="/docs/server" className="hover:text-primary transition-colors">
            Server
          </Link>
          <span>/</span>
          <span className="text-foreground">Worlds</span>
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
              href="/docs/server"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Server Worlds</h1>
              <p className="subtitle">
                Explore TumbleCraft&apos;s four distinct worlds, each designed for specific 
                purposes and offering unique adventures and opportunities.
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
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Compass className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                World Navigation Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Survival:</strong> Main world for building and living</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full" />
                    <span><strong>Mining:</strong> Resource gathering without world damage</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span><strong>Nether:</strong> Dangerous dimension with unique resources</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>End:</strong> Late-game content and rare materials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Worlds Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {worlds.map((world) => (
            <motion.div key={world.name} variants={itemVariants}>
              <div className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border-2 ${world.borderColor} p-6 h-full`}>
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${world.bgColor} flex items-center justify-center`}>
                    <world.icon className={`w-8 h-8 ${world.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {world.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-foreground-secondary">Size:</span>
                      <span className="text-sm font-mono bg-gray-100 px-2 py-1 rounded text-primary">
                        {world.size}
                      </span>
                    </div>
                    <p className="text-foreground-muted text-sm">
                      {world.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    World Features
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {world.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <span className="text-xs text-foreground-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3 flex items-center">
                    <Coins className="w-4 h-4 mr-2" />
                    Best For
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {world.bestFor.map((use) => (
                      <span key={use} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {use}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Commands */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Quick Access Commands</h4>
                  <div className="space-y-2">
                    {world.commands.map((cmd) => (
                      <code key={cmd} className="block text-xs bg-gray-100 text-primary px-2 py-1 rounded font-mono">
                        {cmd}
                      </code>
                    ))}
                  </div>
                </div>

                {/* Tips */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Pro Tips</h4>
                  <div className="space-y-2">
                    {world.tips.map((tip) => (
                      <div key={tip} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-xs text-foreground-muted">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            World Navigation Commands
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
            Ready to Explore?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Start your adventure in the Survival World, then venture into other dimensions 
            as you progress. Use the Mining World to gather resources without affecting your main builds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">New Players</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Start in the Survival World with <code className="bg-gray-200 px-2 py-1 rounded text-xs">/rtp</code>
              </p>
              <Link 
                href="/docs/getting-started"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                Getting Started Guide
              </Link>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Resource Gathering</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Use Mining World for bulk resource collection
              </p>
              <Link 
                href="/docs/economy/shop"
                className="inline-flex items-center px-4 py-2 bg-white text-foreground rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 text-sm"
              >
                Shop Guide
              </Link>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Advanced Players</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Explore Nether and End for rare materials
              </p>
              <Link 
                href="/docs/advanced"
                className="inline-flex items-center px-4 py-2 bg-white text-foreground rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 text-sm"
              >
                Advanced Features
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}