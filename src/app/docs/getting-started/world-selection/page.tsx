'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Globe, Pickaxe, Sword, Map, Copy, ArrowRight, Eye, TreePine } from 'lucide-react'
import { useState } from 'react'

const worlds = [
  {
    name: 'Survival World',
    description: 'Main survival world where you build your base',
    icon: TreePine,
    size: '30k x 30k',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    features: ['Player bases', 'Claiming system', 'No resets', 'Protected terrain'],
    purpose: 'Your permanent home for building and living',
    command: '/rtp',
    warp: '/worlds → Survival'
  },
  {
    name: 'Mining World',
    description: 'Resource gathering world that resets regularly',
    icon: Pickaxe,
    size: '5k x 5k',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    features: ['Rich ore deposits', 'Regular resets', 'No claiming', 'Optimized for mining'],
    purpose: 'Gather resources without damaging the main world',
    command: '/worlds',
    warp: '/worlds → Mining'
  },
  {
    name: 'Nether World',
    description: 'Dangerous realm with unique resources',
    icon: Sword,
    size: '10k x 10k',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    features: ['Nether fortresses', 'Blaze spawners', 'Nether wart farms', 'Ancient debris'],
    purpose: 'Access nether-exclusive materials and structures',
    command: 'Nether portal',
    warp: '/worlds → Nether'
  },
  {
    name: 'End World',
    description: 'Challenge the Ender Dragon and explore End Cities',
    icon: Eye,
    size: '5k x 5k',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: ['Ender Dragon', 'End Cities', 'Elytra', 'Shulker boxes'],
    purpose: 'End-game content and unique rewards',
    command: 'End portal',
    warp: '/worlds → End'
  }
]

const quickCommands = [
  { command: '/worlds', description: 'Open the worlds menu' },
  { command: '/rtp', description: 'Random teleport to survival world' },
  { command: '/spawn', description: 'Return to the server spawn' },
  { command: '/warp <name>', description: 'Teleport to a specific warp point' }
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

export default function WorldSelectionPage() {
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
          <span className="text-foreground">World Selection</span>
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
              <h1 className="hero-title">World Selection Guide</h1>
              <p className="subtitle">
                Learn about TumbleCraft&apos;s four unique worlds and choose the right one for your adventure.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Start Info */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Globe className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Quick Start: Getting to Survival World
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Use <code className="bg-gray-100 px-1 rounded text-primary">/rtp</code> for instant random teleport</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Use <code className="bg-gray-100 px-1 rounded text-primary">/worlds</code> to browse all worlds</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>Visit the Worlds NPC at spawn for interactive access</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Each world serves a specific purpose - choose wisely!</span>
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
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Available Worlds</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {worlds.map((world) => (
              <motion.div key={world.name} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${world.bgColor} flex items-center justify-center`}>
                      <world.icon className={`w-6 h-6 ${world.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {world.name}
                      </h3>
                      <p className="text-foreground-muted text-sm mb-2">
                        {world.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">
                          Size: {world.size}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-primary">
                          {world.command}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Purpose:
                    </h4>
                    <p className="text-xs text-foreground-muted mb-3">
                      {world.purpose}
                    </p>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {world.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          <span className="text-xs text-foreground-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground-muted">
                        Access via: {world.warp}
                      </span>
                      <Map className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* World Selection Tips */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            World Selection Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-green-700 mb-2">
                For New Players:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  <span className="text-sm text-foreground-muted">
                    Start in the <strong>Survival World</strong> to establish your base
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  <span className="text-sm text-foreground-muted">
                    Use <strong>Mining World</strong> for resource gathering
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                  <span className="text-sm text-foreground-muted">
                    Claim your land in Survival to protect your builds
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-blue-700 mb-2">
                For Resource Gathering:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                  <span className="text-sm text-foreground-muted">
                    <strong>Mining World</strong> for ores and stone materials
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                  <span className="text-sm text-foreground-muted">
                    <strong>Nether</strong> for blaze rods, nether wart, and ancient debris
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                  <span className="text-sm text-foreground-muted">
                    <strong>End</strong> for shulker shells and elytra
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Essential Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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

        {/* Next Steps */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Now that you know about the worlds, use /rtp to start your survival adventure 
            or explore the other worlds when you&apos;re ready for specific resources.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/server/worlds"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Globe className="w-4 h-4 mr-2" />
              Learn More About Worlds
            </Link>
            <Link 
              href="/docs/getting-started"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Continue Getting Started
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}