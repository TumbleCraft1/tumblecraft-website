'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Users, Home, Sword, MessageCircle, AlertTriangle, Copy, BookOpen, Scale } from 'lucide-react'
import { useState } from 'react'

const ruleCategories = [
  {
    title: 'Community Behavior',
    description: 'Guidelines for interacting with other players respectfully',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    rules: [
      'Be respectful to all players and staff members',
      'No harassment, bullying, or discrimination',
      'Use appropriate language - no excessive profanity',
      'Respect personal boundaries and consent',
      'Help new players when possible'
    ]
  },
  {
    title: 'Chat Conduct',
    description: 'Rules for maintaining a positive chat environment',
    icon: MessageCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    rules: [
      'No spam or excessive caps lock',
      'English only in public chat',
      'No advertising other servers',
      'Keep conversations appropriate for all ages',
      'No sharing personal information'
    ]
  },
  {
    title: 'Building Guidelines',
    description: 'Standards for construction and land use',
    icon: Home,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    rules: [
      'Build at least 100 blocks from other players without permission',
      'No griefing or destroying others\' builds',
      'Keep builds appropriate and family-friendly',
      'No excessive redstone lag machines',
      'Clean up temporary structures'
    ]
  },
  {
    title: 'PvP & Combat',
    description: 'Rules governing player versus player interactions',
    icon: Sword,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    rules: [
      'PvP only in designated areas or with consent',
      'No killing in safe zones or spawn areas',
      'Return items if killed due to lag or glitches',
      'No trapping players without their agreement',
      'Respect "no PvP" requests'
    ]
  }
]

const serverPolicies = [
  {
    title: 'Griefing & Theft',
    severity: 'Major Offense',
    consequences: ['Immediate ban', 'Rollback of damage'],
    description: 'Taking or destroying other players\' items or builds without permission'
  },
  {
    title: 'Cheating & Hacking',
    severity: 'Major Offense', 
    consequences: ['Permanent ban', 'No appeals'],
    description: 'Using unauthorized modifications, x-ray, or exploiting game mechanics'
  },
  {
    title: 'Toxic Behavior',
    severity: 'Moderate Offense',
    consequences: ['Warning', 'Temporary mute', 'Temporary ban'],
    description: 'Harassment, excessive arguing, or creating a negative environment'
  },
  {
    title: 'Chat Violations',
    severity: 'Minor Offense',
    consequences: ['Warning', 'Temporary mute'],
    description: 'Spam, inappropriate language, or off-topic discussions'
  }
]

const quickCommands = [
  { command: '/rules', description: 'View complete server rules in-game' },
  { command: '/report <player> <reason>', description: 'Report rule violations to staff' },
  { command: '/msg <player> <message>', description: 'Send private message to another player' },
  { command: '/ignore <player>', description: 'Block messages from a specific player' },
  { command: '/spawn', description: 'Return to safe spawn area' }
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

function PolicyCard({ title, severity, consequences, description }: { 
  title: string
  severity: string
  consequences: string[]
  description: string
}) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Major Offense': return 'text-red-600 bg-red-50'
      case 'Moderate Offense': return 'text-orange-600 bg-orange-50'
      case 'Minor Offense': return 'text-yellow-600 bg-yellow-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-foreground-muted mb-3">{description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(severity)}`}>
          {severity}
        </span>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-foreground mb-2">Consequences:</h4>
        <ul className="space-y-1">
          {consequences.map((consequence) => (
            <li key={consequence} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              <span className="text-xs text-foreground-muted">{consequence}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ServerRulesPage() {
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
          <span className="text-foreground">Rules</span>
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
              <h1 className="hero-title">Server Rules</h1>
              <p className="subtitle">
                Community guidelines and standards that ensure everyone can enjoy 
                playing on TumbleCraft in a safe and positive environment.
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
              <Shield className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Rules Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Purpose:</strong> Ensure everyone can enjoy playing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Approach:</strong> Easy to follow using logic and common sense</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Enforcement:</strong> Fair and consistent moderation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>Community:</strong> Focus on respect and positivity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rule Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Community Guidelines</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ruleCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
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
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-3">
                      Rules:
                    </h4>
                    <ul className="space-y-2">
                      {category.rules.map((rule) => (
                        <li key={rule} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-foreground-muted">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Violations & Consequences */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Scale className="w-6 h-6 text-foreground" />
            <h2 className="text-2xl font-bold text-foreground">Violations & Consequences</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serverPolicies.map((policy) => (
              <motion.div key={policy.title} variants={itemVariants}>
                <PolicyCard {...policy} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reporting System */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Reporting Rule Violations
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      When to Report:
                    </h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Griefing or theft</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Harassment or toxic behavior</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Suspected cheating</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Inappropriate builds or chat</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      How to Report:
                    </h4>
                    <ul className="space-y-1">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Use <code className="text-xs bg-gray-100 px-1 rounded">/report</code> command in-game</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Contact staff members directly</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Join our Discord for urgent issues</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-sm text-foreground-muted">Provide evidence when possible</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="w-5 h-5 text-foreground" />
            <h3 className="text-lg font-semibold text-foreground">
              Essential Rule Commands
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Appeal Process */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Appeal Process
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            If you believe you were wrongfully punished, you can appeal through our Discord server. 
            Be honest, respectful, and provide any relevant evidence for your case.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/discord"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Discord
            </Link>
            <Link 
              href="/docs/server"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Shield className="w-4 h-4 mr-2" />
              Back to Server Info
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}