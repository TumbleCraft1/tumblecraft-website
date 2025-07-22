'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Home, MapPin, Users, Zap, Target, Copy, BookOpen, Settings, Lock } from 'lucide-react'
import { useState } from 'react'
import React from 'react'

const claimFeatures = [
  {
    title: 'Land Protection',
    description: 'Secure your builds from griefing and theft',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    features: [
      'Complete protection from block breaking/placing',
      'Chest and container security',
      'Animal and entity protection',
      'Fire and explosion resistance',
      'Automatic grief prevention'
    ]
  },
  {
    title: 'Easy Management',
    description: 'Simple tools to control your claimed territory',
    icon: Settings,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    features: [
      'Visual claim boundaries with particles',
      'Easy expansion and subdivision',
      'Permission system for friends',
      'Claim information at a glance',
      'Abandon unused claims easily'
    ]
  },
  {
    title: 'Trust System',
    description: 'Share your land with friends and build together',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: [
      'Grant building permissions to friends',
      'Container access control',
      'Button and switch permissions',
      'Public access for specific areas',
      'Temporary trust options'
    ]
  },
  {
    title: 'Smart Expansion',
    description: 'Grow your territory as your builds expand',
    icon: Target,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    features: [
      'Automatic claim growth with claimblocks',
      'Strategic claim placement',
      'Connect multiple claim areas',
      'Optimize claimblock usage',
      'Plan for future expansions'
    ]
  }
]

const claimingSteps = [
  {
    step: 1,
    title: 'Get Your Golden Shovel',
    description: 'The golden shovel is your claiming tool',
    details: [
      'Craft with 2 sticks and 3 gold ingots',
      'Received automatically on first join',
      'Hold to see remaining claimblocks',
      'Right-click to start claiming process'
    ]
  },
  {
    step: 2,
    title: 'Choose Your Location',
    description: 'Find the perfect spot for your base',
    details: [
      'Must be at least 100 blocks from other claims',
      'Consider access to resources and terrain',
      'Think about future expansion needs',
      'Check claim limits in the area'
    ]
  },
  {
    step: 3,
    title: 'Mark Your Corners',
    description: 'Define your claim boundaries',
    details: [
      'Right-click first corner with golden shovel',
      'Move to opposite corner diagonally',
      'Right-click second corner to complete',
      'Watch for the claiming confirmation message'
    ]
  },
  {
    step: 4,
    title: 'Manage Your Claim',
    description: 'Configure permissions and settings',
    details: [
      'Use /trust to add friends to your claim',
      'Set up container and build permissions',
      'Expand or subdivide as needed',
      'Monitor your claimblock usage'
    ]
  }
]

const claimCommands = [
  { 
    command: '/claiminfo', 
    description: 'View detailed information about the claim you\'re standing in' 
  },
  { 
    command: '/trust <player>', 
    description: 'Give a player full permissions in your claim' 
  },
  { 
    command: '/untrust <player>', 
    description: 'Remove all permissions from a player in your claim' 
  },
  { 
    command: '/containertrust <player>', 
    description: 'Allow a player to use containers but not build' 
  },
  { 
    command: '/accesstrust <player>', 
    description: 'Allow a player to use buttons, levers, beds, etc.' 
  },
  { 
    command: '/permissiontrust <player>', 
    description: 'Allow a player to manage permissions in your claim' 
  },
  { 
    command: '/abandonclaim', 
    description: 'Abandon the claim you\'re standing in (get claimblocks back)' 
  },
  { 
    command: '/abandonallclaims', 
    description: 'Abandon ALL your claims (use with caution!)' 
  },
  { 
    command: '/claimlist', 
    description: 'List all your claims with coordinates' 
  },
  { 
    command: '/subdivideclaim', 
    description: 'Create a subdivision within your existing claim' 
  },
  { 
    command: '/restrictsubclaim', 
    description: 'Set different permissions for a subdivision' 
  },
  { 
    command: '/claimbook', 
    description: 'Get a book with claiming instructions and tips' 
  }
]

const claimingTips = [
  {
    title: 'Start Small, Expand Later',
    tip: 'Begin with a modest claim around your initial build. You can always expand as you gather more claimblocks.',
    icon: Home
  },
  {
    title: 'Claim High-Value Areas First',
    tip: 'Prioritize claiming areas with rare resources, strategic locations, or significant builds.',
    icon: MapPin
  },
  {
    title: 'Use Subdivisions Wisely',
    tip: 'Create subdivisions for different purposes - public areas, private storage, or guest sections.',
    icon: Target
  },
  {
    title: 'Monitor Your Claimblocks',
    tip: 'Check your remaining claimblocks regularly. You earn more by playing and can buy additional ones.',
    icon: Zap
  },
  {
    title: 'Trust Carefully',
    tip: 'Only give full trust to players you know well. Use container or access trust for casual friends.',
    icon: Lock
  },
  {
    title: 'Plan for the Future',
    tip: 'Leave space between claims for roads, public projects, or community areas.',
    icon: Settings
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

function CommandCard({ command, description }: { command: string; description: string }) {
  const [copied, setCopied] = useState(false)

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
        title={copied ? "Copied!" : "Copy command"}
      >
        <Copy className="w-4 h-4" />
      </button>
    </div>
  )
}

function StepCard({ step, title, description, details }: {
  step: number
  title: string
  description: string
  details: string[]
}) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
          {step}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-foreground-muted text-sm">{description}</p>
        </div>
      </div>
      
      <ul className="space-y-2 ml-12">
        {details.map((detail) => (
          <li key={detail} className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-sm text-foreground-muted">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function TipCard({ title, tip, icon: Icon }: {
  title: string
  tip: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-foreground-muted text-sm">{tip}</p>
        </div>
      </div>
    </div>
  )
}

export default function ClaimingPage() {
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
          <span className="text-foreground">Claiming</span>
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
              <h1 className="hero-title">Land Claiming</h1>
              <p className="subtitle">
                Protect your builds and territory using the GriefPrevention claiming system. 
                Use your golden shovel to claim land and keep your creations safe from grief.
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
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Claiming Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Tool:</strong> Golden Shovel (crafted or given on join)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Claimblocks:</strong> Your available claiming currency</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Method:</strong> Right-click corners to define area</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>Protection:</strong> Complete grief prevention in claims</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Your Current Claimblocks:</strong> %griefprevention_remainingclaims_formatted%
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  Hold your golden shovel to see this information in-game
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How to Claim Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Claim Land</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {claimingSteps.map((step) => (
              <motion.div key={step.step} variants={itemVariants}>
                <StepCard {...step} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Claim Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Claiming Features</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {claimFeatures.map((feature) => (
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
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-foreground-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Claimblocks Information */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Understanding Claimblocks
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    What are Claimblocks?
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-sm text-foreground-muted">Currency used to claim land area</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-sm text-foreground-muted">Each block of claimed area costs 1 claimblock</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-sm text-foreground-muted">Automatically earned by playing on the server</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-sm text-foreground-muted">Returned when you abandon claims</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">
                    How to Get More:
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-sm text-foreground-muted">Earn automatically by playing actively</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-sm text-foreground-muted">Voting for the server rewards claimblocks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-sm text-foreground-muted">Purchase additional blocks from the store</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-sm text-foreground-muted">Receive bonuses from donor ranks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Claiming Tips */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Claiming Strategy Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {claimingTips.map((tip) => (
              <motion.div key={tip.title} variants={itemVariants}>
                <TipCard {...tip} />
              </motion.div>
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
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="w-5 h-5 text-foreground" />
            <h3 className="text-lg font-semibold text-foreground">
              Essential Claiming Commands
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {claimCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Permission Levels Explanation */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Trust Permission Levels
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2 text-green-600">
                    Access Trust
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Use buttons and switches</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Sleep in beds</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Ride vehicles</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2 text-blue-600">
                    Container Trust
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Access trust permissions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Open chests and containers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Kill/harm animals</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2 text-purple-600">
                    Build Trust
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Container trust permissions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Build and break blocks</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      <span className="text-xs text-foreground-muted">Full building permissions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Start Claiming?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Join the server, get your golden shovel, and start protecting your builds today! 
            Remember to claim responsibly and be respectful of other players&apos; territories.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/server"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Shield className="w-4 h-4 mr-2" />
              Back to Server Info
            </Link>
            <Link 
              href="/docs"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              All Documentation
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}