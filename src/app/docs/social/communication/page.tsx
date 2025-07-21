'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, MessageSquare, Smile, Users, Mail, Heart, Copy, Hash, Globe, Shield } from 'lucide-react'
import { useState } from 'react'

const communicationFeatures = [
  {
    title: 'Global Chat',
    description: 'Communicate with all players across the server',
    icon: Globe,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    features: ['Server-wide messages', 'Real-time communication', 'Cross-world chat', 'Color formatting'],
    commands: ['/g <message>', '/global <message>']
  },
  {
    title: 'Local Chat',
    description: 'Talk to nearby players in your current area',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    features: ['Proximity-based chat', 'Roleplay friendly', 'World-specific', 'Quieter conversations'],
    commands: ['/l <message>', '/local <message>']
  },
  {
    title: 'Private Messages',
    description: 'Send direct messages to other players',
    icon: Mail,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: ['One-on-one communication', 'Privacy guaranteed', 'Message history', 'Offline delivery'],
    commands: ['/msg <player> <message>', '/tell <player> <message>', '/w <player> <message>']
  }
]

const emojiCategories = [
  {
    title: 'Emotions',
    description: 'Express your feelings and reactions',
    icon: Heart,
    emojis: ['😊', '😢', '😡', '😍', '🤔', '😴', '🎉', '😱'],
    examples: ['Happy moments', 'Sad occasions', 'Angry reactions', 'Love and appreciation']
  },
  {
    title: 'Actions',
    description: 'Show what you\'re doing or planning',
    icon: Users,
    emojis: ['⚔️', '🏠', '🍎', '⛏️', '🎣', '🌱', '🔨', '🎯'],
    examples: ['Combat activities', 'Building projects', 'Farming work', 'Mining expeditions']
  },
  {
    title: 'Objects',
    description: 'Reference items and blocks in chat',
    icon: Hash,
    emojis: ['💎', '🪙', '🏰', '🌳', '⭐', '🔥', '💧', '🌙'],
    examples: ['Valuable items', 'Structures', 'Natural elements', 'Special occasions']
  }
]

const chatCommands = [
  { command: '/emojis', description: 'View all available emojis and copy them' },
  { command: '/msg <player> <message>', description: 'Send a private message to a player' },
  { command: '/r <message>', description: 'Reply to the last private message' },
  { command: '/ignore <player>', description: 'Block messages from a specific player' },
  { command: '/unignore <player>', description: 'Unblock messages from a player' },
  { command: '/clear', description: 'Clear your chat window' }
]

const chatTips = [
  {
    title: 'Be Respectful',
    description: 'Treat all players with kindness and respect',
    icon: Shield,
    tips: [
      'Use appropriate language at all times',
      'Avoid spam or excessive caps',
      'Respect others\' opinions and playstyles',
      'Help new players learn the ropes'
    ]
  },
  {
    title: 'Use Emojis Effectively',
    description: 'Enhance your messages with expressive emojis',
    icon: Smile,
    tips: [
      'Copy emojis from /emojis command',
      'Use emojis to convey tone and emotion',
      'Don\'t overuse emojis in single messages',
      'Match emojis to your message context'
    ]
  },
  {
    title: 'Chat Etiquette',
    description: 'Follow best practices for server communication',
    icon: MessageSquare,
    tips: [
      'Keep global chat relevant to all players',
      'Use local chat for area-specific discussion',
      'Ask questions in appropriate channels',
      'Be patient when waiting for responses'
    ]
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

function EmojiCard({ emoji }: { emoji: string }) {
  const [copied, setCopied] = useState(false)

  const copyEmoji = () => {
    navigator.clipboard.writeText(emoji)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={copyEmoji}
      className="w-12 h-12 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-200 flex items-center justify-center text-xl relative group"
      title={`Copy ${emoji}`}
    >
      {emoji}
      {copied && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded">
          Copied!
        </div>
      )}
    </button>
  )
}

export default function CommunicationPage() {
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
          <Link href="/docs/social" className="hover:text-primary transition-colors">
            Social
          </Link>
          <span>/</span>
          <span className="text-foreground">Communication</span>
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
              href="/docs/social"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Communication Guide</h1>
              <p className="subtitle">
                Master chat systems, emojis, and player interaction tools to 
                connect with the TumbleCraft community effectively.
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
              <MessageSquare className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Communication Quick Facts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Global Chat</strong> - Reach all players across worlds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Local Chat</strong> - Talk to nearby players only</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Emojis</strong> - Express emotions with /emojis command</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span><strong>Private Messages</strong> - Direct player-to-player chat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Communication Systems */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Chat Systems</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {communicationFeatures.map((feature) => (
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
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {feature.features.map((item) => (
                        <li key={item} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                          <span className="text-xs text-foreground-muted">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Commands:
                    </h4>
                    <div className="space-y-1">
                      {feature.commands.map((cmd) => (
                        <code key={cmd} className="block text-xs bg-gray-100 px-2 py-1 rounded text-primary">
                          {cmd}
                        </code>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emoji System */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Emoji System</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {emojiCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Available Emojis:
                    </h4>
                    <div className="grid grid-cols-4 gap-2">
                      {category.emojis.map((emoji) => (
                        <EmojiCard key={emoji} emoji={emoji} />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Use Cases:
                    </h4>
                    <ul className="space-y-1">
                      {category.examples.map((example) => (
                        <li key={example} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full" />
                          <span className="text-xs text-foreground-muted">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Communication Best Practices */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Best Practices</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {chatTips.map((tip) => (
              <motion.div key={tip.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                      <tip.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {tip.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {tip.tips.map((item) => (
                      <li key={item} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Essential Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Essential Communication Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chatCommands.map((cmd) => (
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
            Ready to Start Chatting?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Jump into the community! Use /emojis to get started with expressive chat, 
            and remember to be respectful and welcoming to all players.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/social/teams"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Users className="w-4 h-4 mr-2" />
              Explore Teams
            </Link>
            <Link 
              href="/docs/commands/essential"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Essential Commands
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}