'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { ArrowRight, Copy, Users, Info, ArrowLeft, CheckCircle, MessageSquare, Heart, UserPlus, Shield } from 'lucide-react'
import { useState } from 'react'

interface Command {
  command: string
  description: string
  usage: string
  examples?: string[]
  aliases?: string[]
  permissions?: string
  category: 'chat' | 'friends' | 'teams' | 'moderation' | 'emotes'
  cooldown?: string
}

const socialCommands: Command[] = [
  {
    command: '/msg',
    description: 'Send a private message to another player',
    usage: '/msg <player> <message>',
    examples: ['/msg Steve Hello there!', '/msg Alex Want to build together?'],
    aliases: ['/tell', '/whisper', '/w'],
    permissions: 'All players',
    category: 'chat',
    cooldown: '1 second'
  },
  {
    command: '/reply',
    description: 'Reply to the last private message you received',
    usage: '/reply <message>',
    examples: ['/reply Sure, sounds great!', '/reply Thanks for the help!'],
    aliases: ['/r'],
    permissions: 'All players',
    category: 'chat'
  },
  {
    command: '/ignore',
    description: 'Block messages from a specific player',
    usage: '/ignore <player>',
    examples: ['/ignore BadPlayer', '/ignore list'],
    aliases: ['/block'],
    permissions: 'All players',
    category: 'moderation'
  },
  {
    command: '/unignore',
    description: 'Unblock messages from a previously ignored player',
    usage: '/unignore <player>',
    examples: ['/unignore PlayerName'],
    aliases: ['/unblock'],
    permissions: 'All players',
    category: 'moderation'
  },
  {
    command: '/team',
    description: 'Access team management and chat commands',
    usage: '/team [create|join|leave|invite|kick|chat|info]',
    examples: ['/team create MyTeam', '/team join BuilderTeam', '/team chat Hello team!'],
    aliases: ['/t'],
    permissions: 'All players',
    category: 'teams'
  },
  {
    command: '/team create',
    description: 'Create a new team with a custom name',
    usage: '/team create <team_name>',
    examples: ['/team create Builders', '/team create Dragons'],
    permissions: 'All players',
    category: 'teams'
  },
  {
    command: '/team invite',
    description: 'Invite another player to join your team',
    usage: '/team invite <player>',
    examples: ['/team invite Steve', '/team invite Alex'],
    permissions: 'Team leaders',
    category: 'teams',
    cooldown: '10 seconds'
  },
  {
    command: '/party',
    description: 'Create or manage temporary party groups',
    usage: '/party [create|join|leave|invite|disband]',
    examples: ['/party create', '/party invite PlayerName', '/party leave'],
    aliases: ['/p'],
    permissions: 'All players',
    category: 'friends'
  },
  {
    command: '/friend',
    description: 'Manage your friends list',
    usage: '/friend [add|remove|list|online]',
    examples: ['/friend add Steve', '/friend list', '/friend online'],
    aliases: ['/friends'],
    permissions: 'All players',
    category: 'friends'
  },
  {
    command: '/chat',
    description: 'Switch between different chat channels',
    usage: '/chat [global|local|team|trade]',
    examples: ['/chat global', '/chat team', '/chat trade'],
    aliases: ['/ch'],
    permissions: 'All players',
    category: 'chat'
  },
  {
    command: '/emojis',
    description: 'View available emojis and copy them to chat',
    usage: '/emojis [category]',
    examples: ['/emojis', '/emojis hearts', '/emojis animals'],
    aliases: ['/emotes'],
    permissions: 'All players',
    category: 'emotes'
  },
  {
    command: '/tags',
    description: 'Manage and equip cosmetic name tags',
    usage: '/tags [equip|unequip|list]',
    examples: ['/tags', '/tags equip Builder', '/tags unequip'],
    permissions: 'All players',
    category: 'emotes'
  },
  {
    command: '/report',
    description: 'Report a player for rule violations',
    usage: '/report <player> <reason>',
    examples: ['/report BadPlayer griefing my base', '/report Cheater using hacks'],
    permissions: 'All players',
    category: 'moderation',
    cooldown: '60 seconds'
  },
  {
    command: '/mail',
    description: 'Send offline messages to players',
    usage: '/mail [send|read|clear] [player] [message]',
    examples: ['/mail send Steve Check out my base!', '/mail read', '/mail clear'],
    permissions: 'All players',
    category: 'chat'
  },
  {
    command: '/nick',
    description: 'Set or change your display nickname',
    usage: '/nick <nickname>',
    examples: ['/nick &6Builder&r', '/nick MasterCrafter'],
    permissions: 'Donator ranks',
    category: 'emotes'
  },
  {
    command: '/socialspy',
    description: 'Monitor private messages (staff only)',
    usage: '/socialspy [on|off]',
    examples: ['/socialspy on', '/socialspy off'],
    permissions: 'Staff only',
    category: 'moderation'
  }
]

const categoryColors = {
  chat: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  friends: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  teams: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  moderation: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  emotes: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200' }
}

const categoryIcons = {
  chat: MessageSquare,
  friends: Heart,
  teams: Users,
  moderation: Shield,
  emotes: UserPlus
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
              <code className="text-lg font-mono font-bold bg-pink-100 text-pink-800 px-3 py-1 rounded">
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

export default function SocialCommandsPage() {
  const groupedCommands = {
    chat: socialCommands.filter(cmd => cmd.category === 'chat'),
    friends: socialCommands.filter(cmd => cmd.category === 'friends'),
    teams: socialCommands.filter(cmd => cmd.category === 'teams'),
    emotes: socialCommands.filter(cmd => cmd.category === 'emotes'),
    moderation: socialCommands.filter(cmd => cmd.category === 'moderation')
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
          <span className="text-foreground">Social</span>
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
                <Users className="w-8 h-8 text-pink-500" />
                <span>Social Commands</span>
              </h1>
              <p className="subtitle">
                Connect with other players through chat, teams, and social features. 
                Build friendships and collaborate with the TumbleCraft community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Features Overview */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-4 h-4 text-pink-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Social System Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Communication</h4>
                  <p className="text-foreground-muted text-sm mb-3">
                    Multiple chat channels, private messaging, and offline mail system for staying connected.
                  </p>
                  <h4 className="font-medium text-foreground mb-2">Teams & Friends</h4>
                  <p className="text-foreground-muted text-sm">
                    Form lasting teams, build friend networks, and create temporary parties for activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Community Features</h4>
                  <ul className="text-sm text-foreground-muted space-y-1">
                    <li>• Custom name tags and emojis</li>
                    <li>• Chat channels for different purposes</li>
                    <li>• Player moderation tools</li>
                    <li>• Social reputation system</li>
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
              <h4 className="font-medium text-blue-800 mb-2">Private Message</h4>
              <code className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">/msg &lt;player&gt;</code>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-medium text-purple-800 mb-2">Join Team</h4>
              <code className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">/team join</code>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">Add Friend</h4>
              <code className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">/friend add</code>
            </div>
            <div className="bg-pink-50 rounded-lg p-4">
              <h4 className="font-medium text-pink-800 mb-2">View Emojis</h4>
              <code className="text-sm bg-pink-100 text-pink-700 px-2 py-1 rounded">/emojis</code>
            </div>
          </div>
        </motion.div>

        {/* Chat Etiquette */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-12 border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            💬 Chat Etiquette Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Be Respectful</h4>
              <p className="text-foreground-muted text-sm">
                Treat all players with respect. No harassment, hate speech, or offensive language.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Use Appropriate Channels</h4>
              <p className="text-foreground-muted text-sm">
                Trade channel for selling, team chat for team discussions, global for general conversation.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Avoid Spam</h4>
              <p className="text-foreground-muted text-sm">
                Don&apos;t repeat messages or flood chat. Use private messages for personal conversations.
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

        {/* Community Tips */}
        <motion.div 
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mt-12 border border-purple-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            👥 Building Community
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Start a Team</h4>
              <p className="text-foreground-muted text-sm">
                Create a team with friends to work on big projects together and share resources.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Make Friends</h4>
              <p className="text-foreground-muted text-sm">
                Add friendly players to your friends list to easily see when they&apos;re online and stay in touch.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Use Emojis</h4>
              <p className="text-foreground-muted text-sm">
                Express yourself with the wide variety of emojis available to make conversations more fun.
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
                Level Up Your Gameplay
              </h3>
              <p className="text-foreground-muted">
                Learn progression commands to advance your character and unlock new abilities.
              </p>
            </div>
            <Link 
              href="/docs/commands/progression"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              Progression Commands
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}