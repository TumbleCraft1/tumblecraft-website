'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Target, Calendar, Trophy, CheckCircle, BookOpen, Star, Copy, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const questTypes = [
  {
    title: 'Daily Quests',
    description: 'Most efficient way to gain level XP on the server',
    icon: Calendar,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    features: ['Reset every 24 hours', 'Optimized for XP rewards', 'Quick completion', 'Consistent progression'],
    benefits: ['High XP yield', 'Daily routine building', 'Steady advancement', 'Time-efficient']
  },
  {
    title: 'Regular Quests',
    description: 'Massive collection of 500+ diverse tasks and challenges',
    icon: Target,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    features: ['502 available quests', 'Small fun tasks', 'Variety of objectives', 'Never-ending content'],
    benefits: ['Diverse gameplay', 'Long-term engagement', 'Skill development', 'Exploration rewards']
  }
]

const questFeatures = [
  {
    title: 'Quest Tracking',
    description: 'Monitor your progress across all active quests',
    icon: CheckCircle,
    command: '/quests',
    tips: ['View all available quests', 'Track completion progress', 'See reward information', 'Filter by category'],
    href: '/docs/progression/quests'
  },
  {
    title: 'Daily Challenges',
    description: 'Time-limited quests with enhanced XP rewards',
    icon: Calendar,
    command: '/dailyquests',
    tips: ['Complete before daily reset', 'Focus on XP-heavy tasks first', 'Plan efficient routes', 'Stack with regular quests'],
    href: '/docs/progression/quests'
  },
  {
    title: 'Achievement System',
    description: 'Long-term goals and milestone tracking',
    icon: Trophy,
    command: '/achievements',
    tips: ['Unlock through quest completion', 'Permanent progression markers', 'Show off your accomplishments', 'Unlock special rewards'],
    href: '/docs/progression/levels'
  }
]

const quickCommands = [
  { command: '/quests', description: 'Open the main quest menu' },
  { command: '/dailyquests', description: 'View your daily quest challenges' },
  { command: '/quests active', description: 'Show only active quests' },
  { command: '/quests completed', description: 'View completed quest history' },
  { command: '/achievements', description: 'Check your achievement progress' }
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

export default function QuestsPage() {
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
          <Link href="/docs/progression" className="hover:text-primary transition-colors">
            Progression
          </Link>
          <span>/</span>
          <span className="text-foreground">Quests</span>
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
              href="/docs/progression"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Quests & Challenges</h1>
              <p className="subtitle">
                Master TumbleCraft&apos;s comprehensive quest system with 500+ tasks, 
                daily challenges, and progression tracking to maximize your XP gains.
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
              <Star className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Quest System Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>502</strong> total quests available to complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Daily quests</strong> offer the highest XP efficiency</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Small, fun tasks that never get repetitive</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Perfect for structured progression and exploration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quest Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Quest Types</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {questTypes.map((quest) => (
              <motion.div key={quest.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${quest.bgColor} flex items-center justify-center`}>
                      <quest.icon className={`w-6 h-6 ${quest.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {quest.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {quest.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 text-blue-700">
                        Features:
                      </h4>
                      <ul className="space-y-1">
                        {quest.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            <span className="text-xs text-foreground-muted">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 text-green-700">
                        Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {quest.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                            <span className="text-xs text-foreground-muted">{benefit}</span>
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

        {/* Quest Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Quest Management</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {questFeatures.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <div className="group block h-full">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-300">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-foreground-muted text-sm mb-2">
                          {feature.description}
                        </p>
                        <code className="text-xs bg-gray-100 px-2 py-1 rounded text-primary">
                          {feature.command}
                        </code>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Pro Tips:
                      </h4>
                      <ul className="space-y-1">
                        {feature.tips.map((tip) => (
                          <li key={tip} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-xs text-foreground-muted">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-end pt-4">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
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
            Essential Quest Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Strategy Guide */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Quest Optimization Strategy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-orange-600">Daily Quest Focus:</h4>
                  <ul className="space-y-1 text-foreground-muted">
                    <li>• Complete daily quests first for maximum XP efficiency</li>
                    <li>• Plan your daily routine around quest objectives</li>
                    <li>• Stack daily quests with regular quest goals</li>
                    <li>• Set reminders for daily reset times</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2 text-blue-600">Long-term Planning:</h4>
                  <ul className="space-y-1 text-foreground-muted">
                    <li>• Work on multiple regular quests simultaneously</li>
                    <li>• Choose quests that align with your playstyle</li>
                    <li>• Focus on exploration quests to discover new areas</li>
                    <li>• Use quest rewards to fund other progression activities</li>
                  </ul>
                </div>
              </div>
            </div>
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
            Ready to Start Your Quest Journey?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Begin with daily quests for immediate XP gains, then explore the vast collection 
            of regular quests to discover all TumbleCraft has to offer.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/progression/levels"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Target className="w-4 h-4 mr-2" />
              Level System
            </Link>
            <Link 
              href="/docs/economy/overview"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Trophy className="w-4 h-4 mr-2" />
              Economy Guide
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}