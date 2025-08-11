'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Sword, Users, Info, Settings, Crown, Zap } from 'lucide-react'

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

const commands = [
  {
    command: '/em',
    category: 'Essential',
    description: 'Opens the Elite Mobs interface showing your character statistics',
    usage: '/em',
    details: 'Displays your average gear level, current coins, rank, and other important player statistics. This is your main hub for tracking Elite Mobs progression.',
    icon: Sword,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  },
  {
    command: '/ag',
    category: 'Essential',
    description: 'Teleports you to the Adventurers Guild Hub',
    usage: '/ag',
    details: 'Instantly transports you to the Adventurers Guild where you can access repair services, enchanting, equipment scrapping, and other guild services.',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    command: '/elitemobs',
    category: 'Information',
    description: 'Shows Elite Mobs plugin information and version',
    usage: '/elitemobs',
    details: 'Displays general information about the Elite Mobs plugin including version number and basic help text.',
    icon: Info,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50'
  },
  {
    command: '/em menu',
    category: 'Interface',
    description: 'Alternative way to open the Elite Mobs interface',
    usage: '/em menu',
    details: 'Opens the same interface as /em command, providing access to your character statistics and progression information.',
    icon: Settings,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    command: '/em stats',
    category: 'Information',
    description: 'Displays detailed Elite Mobs statistics',
    usage: '/em stats',
    details: 'Shows comprehensive statistics about your Elite Mobs experience including kills, deaths, gear level progression, and other metrics.',
    icon: Info,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    command: '/em rank',
    category: 'Progression',
    description: 'Shows your current Elite Mobs rank and progression',
    usage: '/em rank',
    details: 'Displays your current rank in the Elite Mobs system and progress towards the next rank tier.',
    icon: Crown,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  }
]

const adminCommands = [
  {
    command: '/em reload',
    description: 'Reloads Elite Mobs configuration files',
    usage: '/em reload',
    permission: 'elitemobs.admin'
  },
  {
    command: '/em debug',
    description: 'Toggles debug mode for troubleshooting',
    usage: '/em debug [on|off]',
    permission: 'elitemobs.admin'
  },
  {
    command: '/em spawncustom',
    description: 'Spawns a custom elite mob',
    usage: '/em spawncustom <filename>',
    permission: 'elitemobs.admin'
  }
]

export default function EliteMobsCommandsPage() {
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
          <Link href="/docs/elite-mobs" className="hover:text-primary transition-colors">
            Elite Mobs
          </Link>
          <span>/</span>
          <span className="text-foreground">Commands</span>
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
              href="/docs/elite-mobs"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Elite Mobs Commands</h1>
              <p className="subtitle">
                Complete reference guide for all Elite Mobs commands and their usage
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Reference */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Sword className="w-5 h-5 text-red-600" />
                <code className="text-primary font-mono text-lg">/em</code>
              </div>
              <p className="text-foreground-muted text-sm">
                Most important command - opens your Elite Mobs interface
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <code className="text-primary font-mono text-lg">/ag</code>
              </div>
              <p className="text-foreground-muted text-sm">
                Access the Adventurers Guild for repairs and upgrades
              </p>
            </div>
          </div>
        </motion.div>

        {/* Player Commands */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Player Commands</h2>
          
          <div className="space-y-4">
            {commands.map((cmd) => (
              <motion.div key={cmd.command} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl ${cmd.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <cmd.icon className={`w-6 h-6 ${cmd.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <code className="text-lg font-mono text-primary bg-gray-100 px-3 py-1 rounded">
                          {cmd.command}
                        </code>
                        <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
                          {cmd.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {cmd.description}
                      </h3>
                      <p className="text-foreground-muted mb-3">
                        {cmd.details}
                      </p>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-foreground-secondary mb-1">Usage:</h4>
                        <code className="text-sm font-mono text-primary">
                          {cmd.usage}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Admin Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
              <Settings className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Administrator Commands</h2>
              <p className="text-foreground-muted">Commands for server administrators and moderators</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {adminCommands.map((cmd) => (
              <div key={cmd.command} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <code className="text-primary font-mono bg-white px-3 py-1 rounded border">
                    {cmd.command}
                  </code>
                  <span className="px-2 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
                    Admin Only
                  </span>
                </div>
                <p className="text-foreground-muted mb-2">
                  {cmd.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground-secondary">Usage:</span>
                    <code className="ml-2 text-primary font-mono">
                      {cmd.usage}
                    </code>
                  </div>
                  <div>
                    <span className="font-medium text-foreground-secondary">Permission:</span>
                    <code className="ml-2 text-orange-600 font-mono">
                      {cmd.permission}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Command Tips */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Pro Tips</h3>
          </div>
          <div className="space-y-3 text-foreground-muted">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <p>
                Use <code className="bg-gray-100 px-2 py-1 rounded text-primary mx-1">/em</code> regularly 
                to check your gear level and track your progression through the Elite Mobs system.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <p>
                The <code className="bg-gray-100 px-2 py-1 rounded text-primary mx-1">/ag</code> command 
                is essential for equipment maintenance. Visit regularly to repair damaged gear.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <p>
                Commands are case-insensitive, so both <code className="bg-gray-100 px-2 py-1 rounded text-primary mx-1">/EM</code> 
                and <code className="bg-gray-100 px-2 py-1 rounded text-primary mx-1">/em</code> will work.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to Explore the Adventurers Guild?
              </h3>
              <p className="text-foreground-muted">
                Learn about the central hub where you can repair, enhance, and upgrade your elite equipment.
              </p>
            </div>
            <Link 
              href="/docs/elite-mobs/adventurers-guild"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium ml-4"
            >
              Adventurers Guild
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}