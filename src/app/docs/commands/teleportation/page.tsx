'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MapPin, Home, Users, Navigation as NavigationIcon, Zap, Copy } from 'lucide-react'
import { useState } from 'react'

const teleportationSystems = [
  {
    title: 'Player Teleportation',
    description: 'Teleport to other players with request system',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    commands: ['/tpa <player>', '/tpaccept', '/tpdeny'],
    features: ['Request-based system', 'Accept/deny requests', 'Safe teleportation']
  },
  {
    title: 'Home System',
    description: 'Set and teleport to your personal home location',
    icon: Home,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    commands: ['/sethome', '/home', '/delhome'],
    features: ['Personal home location', 'Quick access', 'Easy management']
  },
  {
    title: 'Server Locations',
    description: 'Access important server locations and warps',
    icon: MapPin,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    commands: ['/spawn', '/warps'],
    features: ['Server spawn point', 'Public warp locations', 'Quick navigation']
  }
]

const detailedCommands = [
  {
    title: 'Player Teleportation',
    icon: Users,
    commands: [
      {
        command: '/tpa <player>',
        description: 'Send a teleport request to another player',
        example: '/tpa Steve',
        tips: ['Player must be online', 'Request expires after 30 seconds', 'Be respectful when requesting']
      },
      {
        command: '/tpaccept',
        description: 'Accept an incoming teleport request',
        example: '/tpaccept',
        tips: ['Use this when someone wants to teleport to you', 'Make sure you&apos;re in a safe location']
      },
      {
        command: '/tpdeny',
        description: 'Deny an incoming teleport request',
        example: '/tpdeny',
        tips: ['Politely decline if you&apos;re busy', 'No notification sent to requester']
      }
    ]
  },
  {
    title: 'Home Management',
    icon: Home,
    commands: [
      {
        command: '/sethome',
        description: 'Set your home location at your current position',
        example: '/sethome',
        tips: ['Choose a safe, accessible location', 'Can be changed anytime', 'Consider placing near resources']
      },
      {
        command: '/home',
        description: 'Teleport to your set home location',
        example: '/home',
        tips: ['Quick way to return to base', 'Works from any world', 'No cooldown restrictions']
      },
      {
        command: '/delhome',
        description: 'Delete your current home location',
        example: '/delhome',
        tips: ['Removes your home permanently', 'Use /sethome to set a new one', 'Be careful - no confirmation']
      }
    ]
  },
  {
    title: 'Server Navigation',
    icon: NavigationIcon,
    commands: [
      {
        command: '/spawn',
        description: 'Teleport to the server spawn point',
        example: '/spawn',
        tips: ['Main hub of the server', 'Safe location', 'Access to portals and shops']
      },
      {
        command: '/warps',
        description: 'Open the warps menu to view public locations',
        example: '/warps',
        tips: ['Browse all public warps', 'Click to teleport instantly', 'Discover new areas']
      }
    ]
  }
]

const quickCommands = [
  { command: '/tpa <player>', description: 'Request to teleport to a player' },
  { command: '/tpaccept', description: 'Accept teleport request' },
  { command: '/tpdeny', description: 'Deny teleport request' },
  { command: '/home', description: 'Teleport to your home' },
  { command: '/sethome', description: 'Set your home location' },
  { command: '/spawn', description: 'Teleport to server spawn' },
  { command: '/warps', description: 'Open warps menu' }
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

function DetailedCommandCard({ command, description, example, tips }: { 
  command: string; 
  description: string; 
  example: string; 
  tips: string[] 
}) {
  const [, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <code className="text-base font-mono text-primary font-semibold">{command}</code>
            <button
              onClick={copyCommand}
              className="p-1 text-gray-400 hover:text-primary transition-colors"
              title="Copy command"
            >
              <Copy className="w-3 h-3" />
            </button>
          </div>
          <p className="text-sm text-foreground-muted mb-2">{description}</p>
          <div className="bg-white rounded-lg p-2 mb-3">
            <span className="text-xs text-gray-500">Example:</span>
            <code className="text-xs font-mono text-gray-700 ml-2">{example}</code>
          </div>
        </div>
      </div>
      
      <div>
        <h5 className="text-xs font-medium text-foreground mb-2">Tips:</h5>
        <ul className="space-y-1">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start space-x-2">
              <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-xs text-foreground-muted">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function TeleportationCommandsPage() {
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
          <span className="text-foreground">Teleportation</span>
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
              <h1 className="hero-title">Teleportation Commands</h1>
              <p className="subtitle">
                Master teleportation systems to navigate TumbleCraft efficiently. 
                Learn player teleports, home management, and server navigation.
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
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Teleportation Quick Facts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Player Teleports</strong> - Request-based system for safety</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Home System</strong> - Set one personal home location</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Warps provide access to public locations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>Spawn is the main server hub and safe zone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Teleportation Systems */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Teleportation Systems</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {teleportationSystems.map((system, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${system.bgColor} flex items-center justify-center`}>
                      <system.icon className={`w-6 h-6 ${system.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {system.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {system.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Commands:
                      </h4>
                      <div className="space-y-1">
                        {system.commands.map((cmd, i) => (
                          <code key={i} className="block text-xs bg-gray-100 px-2 py-1 rounded text-primary">
                            {cmd}
                          </code>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Features:
                      </h4>
                      <ul className="space-y-1">
                        {system.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            <span className="text-xs text-foreground-muted">{feature}</span>
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

        {/* Detailed Commands */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Command Details</h2>
          
          <div className="space-y-6">
            {detailedCommands.map((section, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {section.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {section.commands.map((cmd, i) => (
                      <DetailedCommandCard
                        key={i}
                        command={cmd.command}
                        description={cmd.description}
                        example={cmd.example}
                        tips={cmd.tips}
                      />
                    ))}
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
            Quick Command Reference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd, index) => (
              <CommandCard key={index} command={cmd.command} description={cmd.description} />
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
            Master Teleportation Tips
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-3xl mx-auto">
            Start by setting your home in a safe, accessible location. Use /spawn to navigate to the main hub, 
            and explore warps to discover new areas. Always be respectful when requesting player teleports.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/getting-started/world-selection"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Explore Worlds
            </Link>
            <Link 
              href="/docs/commands/essential"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Zap className="w-4 h-4 mr-2" />
              Essential Commands
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}