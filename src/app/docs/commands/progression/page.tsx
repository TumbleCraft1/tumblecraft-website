'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { ArrowRight, Copy, TrendingUp, Info, ArrowLeft, CheckCircle, Star, Briefcase, Target, Award } from 'lucide-react'
import { useState } from 'react'

interface Command {
  command: string
  description: string
  usage: string
  examples?: string[]
  aliases?: string[]
  permissions?: string
  category: 'levels' | 'skills' | 'jobs' | 'quests' | 'rewards'
  cooldown?: string
}

const progressionCommands: Command[] = [
  {
    command: '/levels',
    description: 'View your current level and progression information',
    usage: '/levels [player]',
    examples: ['/levels', '/levels PlayerName'],
    aliases: ['/level', '/lvl'],
    permissions: 'All players',
    category: 'levels'
  },
  {
    command: '/skills',
    description: 'Access the skills menu to view and manage your abilities',
    usage: '/skills [skill_name]',
    examples: ['/skills', '/skills mining', '/skills combat'],
    aliases: ['/skill'],
    permissions: 'All players',
    category: 'skills'
  },
  {
    command: '/jobs',
    description: 'Join, leave, and manage your employment',
    usage: '/jobs [join|leave|info|stats]',
    examples: ['/jobs', '/jobs join Miner', '/jobs leave', '/jobs stats'],
    aliases: ['/job'],
    permissions: 'All players',
    category: 'jobs'
  },
  {
    command: '/jobs join',
    description: 'Join a specific job to earn money and experience',
    usage: '/jobs join <job_name>',
    examples: ['/jobs join Miner', '/jobs join Builder', '/jobs join Farmer'],
    permissions: 'All players',
    category: 'jobs'
  },
  {
    command: '/jobs leave',
    description: 'Leave your current job (you can have multiple jobs)',
    usage: '/jobs leave [job_name]',
    examples: ['/jobs leave', '/jobs leave Miner'],
    permissions: 'All players',
    category: 'jobs'
  },
  {
    command: '/quests',
    description: 'View available quests and track your progress',
    usage: '/quests [active|completed|available]',
    examples: ['/quests', '/quests active', '/quests completed'],
    aliases: ['/quest'],
    permissions: 'All players',
    category: 'quests'
  },
  {
    command: '/dailyquests',
    description: 'Access daily quests for bonus experience and rewards',
    usage: '/dailyquests',
    examples: ['/dailyquests'],
    aliases: ['/daily', '/dq'],
    permissions: 'All players',
    category: 'quests'
  },
  {
    command: '/rewards',
    description: 'Claim your hourly, daily, and weekly rewards',
    usage: '/rewards [hourly|daily|weekly]',
    examples: ['/rewards', '/rewards daily', '/rewards weekly'],
    aliases: ['/reward'],
    permissions: 'All players',
    category: 'rewards'
  },
  {
    command: '/pointshop',
    description: 'Spend job points on exclusive items and perks',
    usage: '/pointshop [category]',
    examples: ['/pointshop', '/pointshop tools', '/pointshop consumables'],
    aliases: ['/points'],
    permissions: 'All players',
    category: 'jobs'
  },
  {
    command: '/xp',
    description: 'View detailed experience information for levels and skills',
    usage: '/xp [levels|skill_name]',
    examples: ['/xp', '/xp levels', '/xp mining'],
    aliases: ['/experience'],
    permissions: 'All players',
    category: 'levels'
  },
  {
    command: '/leaderboards',
    description: 'View server leaderboards for various statistics',
    usage: '/leaderboards [category]',
    examples: ['/leaderboards', '/leaderboards levels', '/leaderboards money'],
    aliases: ['/lb', '/top'],
    permissions: 'All players',
    category: 'levels'
  },
  {
    command: '/achievements',
    description: 'View your earned achievements and progress',
    usage: '/achievements [player]',
    examples: ['/achievements', '/achievements PlayerName'],
    aliases: ['/achieve'],
    permissions: 'All players',
    category: 'rewards'
  },
  {
    command: '/codex',
    description: 'Access the discovery codex to learn about server features',
    usage: '/codex [category]',
    examples: ['/codex', '/codex economy', '/codex combat'],
    aliases: ['/discovery'],
    permissions: 'All players',
    category: 'quests'
  },
  {
    command: '/stats',
    description: 'View comprehensive statistics about your gameplay',
    usage: '/stats [player] [category]',
    examples: ['/stats', '/stats PlayerName', '/stats mining'],
    aliases: ['/statistics'],
    permissions: 'All players',
    category: 'levels'
  },
  {
    command: '/prestige',
    description: 'Reset your level for permanent bonuses (high-level players)',
    usage: '/prestige [confirm]',
    examples: ['/prestige', '/prestige confirm'],
    permissions: 'Level 100+ players',
    category: 'levels'
  }
]

const categoryColors = {
  levels: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  skills: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  jobs: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  quests: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
  rewards: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' }
}

const categoryIcons = {
  levels: TrendingUp,
  skills: Star,
  jobs: Briefcase,
  quests: Target,
  rewards: Award
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
              <code className="text-lg font-mono font-bold bg-purple-100 text-purple-800 px-3 py-1 rounded">
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

export default function ProgressionCommandsPage() {
  const groupedCommands = {
    levels: progressionCommands.filter(cmd => cmd.category === 'levels'),
    skills: progressionCommands.filter(cmd => cmd.category === 'skills'),
    jobs: progressionCommands.filter(cmd => cmd.category === 'jobs'),
    quests: progressionCommands.filter(cmd => cmd.category === 'quests'),
    rewards: progressionCommands.filter(cmd => cmd.category === 'rewards')
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
          <span className="text-foreground">Progression</span>
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
                <TrendingUp className="w-8 h-8 text-purple-500" />
                <span>Progression Commands</span>
              </h1>
              <p className="subtitle">
                Advance your character through TumbleCraft&apos;s comprehensive progression systems. 
                Level up, master skills, join jobs, and complete quests to unlock new abilities and rewards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Progression Overview */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Star className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Progression Systems Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Level System</h4>
                  <p className="text-foreground-muted text-sm mb-3">
                    Gain Level XP through various activities to increase your overall level and unlock perks.
                  </p>
                  <h4 className="font-medium text-foreground mb-2">Skills System</h4>
                  <p className="text-foreground-muted text-sm">
                    Train 14 different skills to unlock abilities and improve your gameplay efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Jobs & Quests</h4>
                  <ul className="text-sm text-foreground-muted space-y-1">
                    <li>• 12 different jobs for steady income</li>
                    <li>• 500+ quests with varied objectives</li>
                    <li>• Daily quests for bonus rewards</li>
                    <li>• Discovery codex for learning</li>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-medium text-purple-800 mb-2">Check Level</h4>
              <code className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">/levels</code>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">View Skills</h4>
              <code className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">/skills</code>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-medium text-green-800 mb-2">Browse Jobs</h4>
              <code className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">/jobs</code>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-medium text-orange-800 mb-2">Active Quests</h4>
              <code className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded">/quests</code>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-medium text-yellow-800 mb-2">Claim Rewards</h4>
              <code className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">/rewards</code>
            </div>
          </div>
        </motion.div>

        {/* Progression Path */}
        <motion.div 
          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 mb-12 border border-purple-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
            🚀 Recommended Progression Path
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-700 font-bold">1</span>
              </div>
              <h4 className="font-medium text-foreground mb-2">Join a Job</h4>
              <p className="text-sm text-foreground-muted">Start with Miner or Farmer for steady income while learning the game.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-700 font-bold">2</span>
              </div>
              <h4 className="font-medium text-foreground mb-2">Daily Quests</h4>
              <p className="text-sm text-foreground-muted">Complete daily quests for efficient Level XP and bonus rewards.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-700 font-bold">3</span>
              </div>
              <h4 className="font-medium text-foreground mb-2">Train Skills</h4>
              <p className="text-sm text-foreground-muted">Focus on skills that complement your job for maximum efficiency.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-700 font-bold">4</span>
              </div>
              <h4 className="font-medium text-foreground mb-2">Advanced Content</h4>
              <p className="text-sm text-foreground-muted">Explore complex quests and multiple jobs for diverse gameplay.</p>
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

        {/* Progression Tips */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mt-12 border border-green-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            📈 Progression Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Optimize Your Time</h4>
              <p className="text-foreground-muted text-sm">
                Focus on activities that give both job experience and skill training simultaneously.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Set Daily Goals</h4>
              <p className="text-foreground-muted text-sm">
                Complete daily quests and rewards every day for consistent progression and bonuses.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Join Multiple Jobs</h4>
              <p className="text-foreground-muted text-sm">
                You can have multiple jobs - diversify your income and experience sources.
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
                Server Management
              </h3>
              <p className="text-foreground-muted">
                Learn administrative commands for server settings and moderation tools.
              </p>
            </div>
            <Link 
              href="/docs/commands/administrative"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              Administrative Commands
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}