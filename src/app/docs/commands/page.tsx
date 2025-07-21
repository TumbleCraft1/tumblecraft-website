'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Command, Navigation as NavIcon, Coins, Users, TrendingUp, Settings, ArrowLeft, ArrowRight } from 'lucide-react'

const commandCategories = [
  {
    title: 'Essential Commands',
    description: 'Basic commands every player should know for survival',
    href: '/docs/commands/essential',
    icon: Command,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    commands: ['/spawn', '/home', '/sethome', '/rtp'],
    count: '10 commands'
  },
  {
    title: 'Teleportation',
    description: 'Movement and teleportation commands for getting around',
    href: '/docs/commands/teleportation',
    icon: NavIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    commands: ['/tpa', '/tpaccept', '/warps', '/back'],
    count: '8 commands'
  },
  {
    title: 'Economy',
    description: 'Money, trading, and marketplace commands',
    href: '/docs/commands/economy',
    icon: Coins,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    commands: ['/balance', '/pay', '/shop', '/auction'],
    count: '12 commands'
  },
  {
    title: 'Social',
    description: 'Communication and team interaction commands',
    href: '/docs/commands/social',
    icon: Users,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    commands: ['/msg', '/team', '/party', '/ignore'],
    count: '6 commands'
  },
  {
    title: 'Progression',
    description: 'Level, skills, jobs, and quest related commands',
    href: '/docs/commands/progression',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    commands: ['/levels', '/skills', '/jobs', '/quests'],
    count: '15 commands'
  },
  {
    title: 'Administrative',
    description: 'Settings, moderation, and server management commands',
    href: '/docs/commands/administrative',
    icon: Settings,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    commands: ['/settings', '/report', '/help', '/rules'],
    count: '7 commands'
  }
]

const popularCommands = [
  { command: '/spawn', description: 'Return to spawn', category: 'Essential' },
  { command: '/home', description: 'Go to your home', category: 'Essential' },
  { command: '/shop', description: 'Open the shop', category: 'Economy' },
  { command: '/rtp', description: 'Random teleport', category: 'Essential' },
  { command: '/levels', description: 'View your level', category: 'Progression' },
  { command: '/balance', description: 'Check your money', category: 'Economy' }
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

export default function CommandsPage() {
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
              href="/docs"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Commands Reference</h1>
              <p className="subtitle">
                Complete guide to all available commands on TumbleCraft server. 
                Learn how to use essential commands to enhance your gameplay experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Command Syntax Info */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Command className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Command Syntax
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <code className="bg-yellow-100 px-2 py-1 rounded text-xs">&lt;required&gt;</code>
                  <span className="text-foreground-muted">Required parameter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="bg-blue-100 px-2 py-1 rounded text-xs">[optional]</code>
                  <span className="text-foreground-muted">Optional parameter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="bg-gray-100 px-2 py-1 rounded text-xs">/help &lt;command&gt;</code>
                  <span className="text-foreground-muted">Get command help</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Popular Commands Quick Reference */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Most Used Commands</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {popularCommands.map((cmd) => (
              <div key={cmd.command} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <code className="text-sm font-medium text-primary">{cmd.command}</code>
                  <p className="text-xs text-foreground-muted">{cmd.description}</p>
                </div>
                <span className="text-xs text-foreground-muted bg-white px-2 py-1 rounded">
                  {cmd.category}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Command Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Command Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commandCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <Link href={category.href} className="group block">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-300">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                          <category.icon className={`w-6 h-6 ${category.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {category.title}
                            </h3>
                            <span className="text-xs text-foreground-muted bg-gray-100 px-2 py-1 rounded">
                              {category.count}
                            </span>
                          </div>
                          <p className="text-foreground-muted text-sm mb-4">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Popular Commands */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground-secondary">
                          Popular Commands:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {category.commands.map((cmd) => (
                            <code 
                              key={cmd}
                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                            >
                              {cmd}
                            </code>
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

        {/* Bottom CTA */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Need Help with Commands?
          </h3>
          <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
            Start with the essential commands to learn the basics, or explore specific categories 
            based on what you want to do.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/docs/commands/essential"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Command className="w-4 h-4 mr-2" />
              Essential Commands
            </Link>
            <Link 
              href="/docs/getting-started"
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium"
            >
              Getting Started Guide
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}