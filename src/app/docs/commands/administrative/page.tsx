'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { ArrowRight, Copy, Settings, Info, ArrowLeft, CheckCircle, HelpCircle, Book, AlertTriangle, Wrench } from 'lucide-react'
import { useState } from 'react'

interface Command {
  command: string
  description: string
  usage: string
  examples?: string[]
  aliases?: string[]
  permissions?: string
  category: 'settings' | 'help' | 'rules' | 'moderation' | 'utility'
  cooldown?: string
}

const administrativeCommands: Command[] = [
  {
    command: '/help',
    description: 'Get help information about commands and server features',
    usage: '/help [command|page]',
    examples: ['/help', '/help spawn', '/help sethome', '/help 2'],
    aliases: ['/h', '/?'],
    permissions: 'All players',
    category: 'help'
  },
  {
    command: '/rules',
    description: 'View the server rules and guidelines',
    usage: '/rules [page]',
    examples: ['/rules', '/rules 2'],
    aliases: ['/serverrules'],
    permissions: 'All players',
    category: 'rules'
  },
  {
    command: '/settings',
    description: 'Access your personal server settings and preferences',
    usage: '/settings [category]',
    examples: ['/settings', '/settings chat', '/settings privacy'],
    aliases: ['/prefs', '/preferences'],
    permissions: 'All players',
    category: 'settings'
  },
  {
    command: '/report',
    description: 'Report a player for rule violations or inappropriate behavior',
    usage: '/report <player> <reason>',
    examples: ['/report BadPlayer griefing my base', '/report Cheater using hacks'],
    permissions: 'All players',
    category: 'moderation',
    cooldown: '60 seconds'
  },
  {
    command: '/ticket',
    description: 'Create a support ticket for staff assistance',
    usage: '/ticket <message>',
    examples: ['/ticket I lost my items due to a bug', '/ticket Need help with my claim'],
    aliases: ['/support'],
    permissions: 'All players',
    category: 'moderation',
    cooldown: '300 seconds'
  },
  {
    command: '/motd',
    description: 'View the message of the day and server announcements',
    usage: '/motd',
    examples: ['/motd'],
    aliases: ['/messageoftheday'],
    permissions: 'All players',
    category: 'help'
  },
  {
    command: '/info',
    description: 'Get detailed information about the server',
    usage: '/info [topic]',
    examples: ['/info', '/info economy', '/info claiming'],
    aliases: ['/serverinfo'],
    permissions: 'All players',
    category: 'help'
  },
  {
    command: '/ping',
    description: 'Check your connection latency to the server',
    usage: '/ping [player]',
    examples: ['/ping', '/ping PlayerName'],
    permissions: 'All players',
    category: 'utility'
  },
  {
    command: '/list',
    description: 'View all online players and server population',
    usage: '/list [page]',
    examples: ['/list', '/list 2'],
    aliases: ['/who', '/online'],
    permissions: 'All players',
    category: 'utility'
  },
  {
    command: '/afk',
    description: 'Mark yourself as away from keyboard',
    usage: '/afk [message]',
    examples: ['/afk', '/afk eating dinner'],
    aliases: ['/away'],
    permissions: 'All players',
    category: 'utility'
  },
  {
    command: '/suicide',
    description: 'Eliminate your character (useful when stuck)',
    usage: '/suicide',
    examples: ['/suicide'],
    aliases: ['/kill'],
    permissions: 'All players',
    category: 'utility',
    cooldown: '30 seconds'
  },
  {
    command: '/discord',
    description: 'Get the Discord server invite link',
    usage: '/discord',
    examples: ['/discord'],
    permissions: 'All players',
    category: 'help'
  },
  {
    command: '/store',
    description: 'Access the server store for ranks and perks',
    usage: '/store',
    examples: ['/store'],
    aliases: ['/buy', '/donate'],
    permissions: 'All players',
    category: 'help'
  },
  {
    command: '/vote',
    description: 'View voting sites to support the server and earn rewards',
    usage: '/vote',
    examples: ['/vote'],
    permissions: 'All players',
    category: 'help'
  },
  {
    command: '/lag',
    description: 'Check server performance and your connection status',
    usage: '/lag',
    examples: ['/lag'],
    aliases: ['/tps'],
    permissions: 'All players',
    category: 'utility'
  },
  {
    command: '/playtime',
    description: 'View your total time played on the server',
    usage: '/playtime [player]',
    examples: ['/playtime', '/playtime PlayerName'],
    aliases: ['/pt'],
    permissions: 'All players',
    category: 'utility'
  }
]

const categoryColors = {
  settings: { bg: 'bg-gray-50', text: 'text-gray-700', border: 'border-gray-200' },
  help: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  rules: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  moderation: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  utility: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' }
}

const categoryIcons = {
  settings: Settings,
  help: HelpCircle,
  rules: Book,
  moderation: AlertTriangle,
  utility: Wrench
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
              <code className="text-lg font-mono font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded">
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

export default function AdministrativeCommandsPage() {
  const groupedCommands = {
    help: administrativeCommands.filter(cmd => cmd.category === 'help'),
    settings: administrativeCommands.filter(cmd => cmd.category === 'settings'),
    utility: administrativeCommands.filter(cmd => cmd.category === 'utility'),
    moderation: administrativeCommands.filter(cmd => cmd.category === 'moderation'),
    rules: administrativeCommands.filter(cmd => cmd.category === 'rules')
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
          <span className="text-foreground">Administrative</span>
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
                <Settings className="w-8 h-8 text-gray-600" />
                <span>Administrative Commands</span>
              </h1>
              <p className="subtitle">
                Essential commands for server settings, getting help, moderation tools, and utility functions. 
                These commands help you manage your experience and get support when needed.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Administrative Overview */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-4 h-4 text-gray-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Server Management & Support
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Getting Help</h4>
                  <p className="text-foreground-muted text-sm mb-3">
                    Comprehensive help system with command documentation, server information, and support channels.
                  </p>
                  <h4 className="font-medium text-foreground mb-2">Personal Settings</h4>
                  <p className="text-foreground-muted text-sm">
                    Customize your server experience with privacy, chat, and gameplay preference settings.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Community Tools</h4>
                  <ul className="text-sm text-foreground-muted space-y-1">
                    <li>• Player reporting and moderation</li>
                    <li>• Support ticket system</li>
                    <li>• Server rules and guidelines</li>
                    <li>• Connection and performance utilities</li>
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
              <h4 className="font-medium text-blue-800 mb-2">Get Help</h4>
              <code className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">/help</code>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">Settings</h4>
              <code className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">/settings</code>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-medium text-red-800 mb-2">View Rules</h4>
              <code className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">/rules</code>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-medium text-orange-800 mb-2">Report Issue</h4>
              <code className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded">/report</code>
            </div>
          </div>
        </motion.div>

        {/* Support Guidelines */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-12 border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            🆘 Getting Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Use /help First</h4>
              <p className="text-foreground-muted text-sm">
                Check the help system for command information and common questions before asking for assistance.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Report Properly</h4>
              <p className="text-foreground-muted text-sm">
                When reporting players, provide specific details about what happened and where.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Use Tickets for Issues</h4>
              <p className="text-foreground-muted text-sm">
                Create support tickets for bugs, lost items, or technical issues that need staff attention.
              </p>
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

        {/* Server Etiquette */}
        <motion.div 
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mt-12 border border-red-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            📋 Server Etiquette
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Read the Rules</h4>
              <p className="text-foreground-muted text-sm">
                Use <code className="bg-white px-2 py-1 rounded text-xs">/rules</code> to familiarize yourself with server guidelines and expectations.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Be Patient</h4>
              <p className="text-foreground-muted text-sm">
                Staff and other players are volunteers. Allow time for responses to tickets and questions.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Stay Informed</h4>
              <p className="text-foreground-muted text-sm">
                Check <code className="bg-white px-2 py-1 rounded text-xs">/motd</code> regularly for server updates and important announcements.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final Navigation */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Complete Command Reference
              </h3>
              <p className="text-foreground-muted">
                You&apos;ve explored all command categories. Return to the main commands page for a complete overview.
              </p>
            </div>
            <Link 
              href="/docs/commands"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              All Commands
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}