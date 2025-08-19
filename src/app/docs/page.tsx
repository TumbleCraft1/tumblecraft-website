'use client'

import Navigation from '@/components/Navigation'
import PardonAppearanceModal from '@/components/PardonAppearanceModal'
import { shouldShowRenovationModal } from '@/utils/modalUtils'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BookOpen, Command, Coins, Users, TrendingUp, Zap, Info, ArrowRight, Sword } from 'lucide-react'

const categories = [
  {
    title: 'Getting Started',
    description: 'Essential guide for new players to begin their TumbleCraft adventure',
    icon: BookOpen,
    href: '/docs/getting-started',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    features: ['World Selection', 'Basic Survival', 'Land Claiming', 'First Home']
  },
  {
    title: 'Commands Reference',
    description: 'Complete list of server commands and their usage',
    icon: Command,
    href: '/docs/commands',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    features: ['Essential Commands', 'Teleportation', 'Economy', 'Social']
  },
  {
    title: 'Economy System',
    description: 'Learn about money, coins, trading, and the marketplace',
    icon: Coins,
    href: '/docs/economy',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    features: ['Money & Coins', 'Shop System', 'Auction House', 'Trading']
  },
  {
    title: 'Player Progression',
    description: 'Levels, skills, jobs, and achievement systems',
    icon: TrendingUp,
    href: '/docs/progression',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    features: ['Leveling', 'Skills', 'Jobs', 'Quests & Rewards']
  },
  {
    title: 'Social Features',
    description: 'Teams, communication, and community features',
    icon: Users,
    href: '/docs/social',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    features: ['Teams', 'Communication', 'Chat Games', 'Events']
  },
  {
    title: 'Advanced Features',
    description: 'Complex systems, PvP, events, and customization',
    icon: Zap,
    href: '/docs/advanced',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    features: ['PvP & Arena', 'Factories', 'Crates', 'Customization']
  },
  {
    title: 'Elite Mobs System',
    description: 'Advanced combat with scaling mobs, custom loot, and epic boss battles',
    icon: Sword,
    href: '/docs/elite-mobs',
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    features: ['Commands & Guild', 'Mechanics & Powers', 'Boss Loot', 'Enchanting']
  }
]

const quickLinks = [
  { title: 'Essential Commands', href: '/docs/commands/essential', icon: Command },
  { title: 'How to Start', href: '/docs/getting-started/welcome', icon: BookOpen },
  { title: 'Elite Mobs Guide', href: '/docs/elite-mobs', icon: Sword },
  { title: 'Server Rules', href: '/docs/server/rules', icon: Info }
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

export default function DocsPage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(shouldShowRenovationModal())
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <PardonAppearanceModal show={showModal} onClose={() => setShowModal(false)} />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title mb-6">
            📚 TumbleCraft Documentation
          </h1>
          <p className="subtitle max-w-3xl mx-auto">
            Your comprehensive guide to mastering TumbleCraft. Learn about server features, 
            commands, and gameplay mechanics to make the most of your experience.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Quick Start</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <link.icon className="w-4 h-4 text-gray-600 group-hover:text-primary" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary">
                  {link.title}
                </span>
                <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-primary ml-auto" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Documentation Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.href} variants={itemVariants}>
              <Link href={category.href} className="group block">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-300">
                  <div className="space-y-4">
                    {/* Icon and Title */}
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <category.icon className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-foreground-muted text-sm leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground-secondary">
                        Includes:
                      </h4>
                      <div className="space-y-1">
                        {category.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            <span className="text-xs text-foreground-muted">
                              {feature}
                            </span>
                          </div>
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
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-3">
            New to TumbleCraft?
          </h3>
          <p className="text-foreground-muted mb-6 max-w-2xl mx-auto">
            Start with our comprehensive getting started guide to learn the basics and begin your adventure.
          </p>
          <Link 
            href="/docs/getting-started"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Get Started
          </Link>
        </motion.div>
      </div>
    </main>
  )
}