'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sword, Crown, Coins, Zap, Shield, Users, ArrowLeft } from 'lucide-react'
import Image from 'next/image'

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

const features = [
  {
    title: 'Dynamic Scaling',
    description: 'Elite mobs scale with your gear level, providing balanced challenge progression',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
  },
  {
    title: 'Custom Loot',
    description: 'Randomly generated armor and weapons with unique enchantments',
    icon: Sword,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20'
  },
  {
    title: 'World Bosses',
    description: 'Epic boss encounters with legendary rewards and dungeon challenges',
    icon: Crown,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    title: 'Adventurers Guild',
    description: 'Central hub for repairs, enchanting, scrapping, and character progression',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    title: 'Prestige System',
    description: 'Reset progress for permanent buffs and enhanced capabilities',
    icon: Crown,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20'
  },
  {
    title: 'Elite Defense',
    description: 'Specialized gear required to survive encounters with high-level elite mobs',
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  }
]

const sections = [
  {
    title: 'Commands Reference',
    description: 'Essential commands for interacting with Elite Mobs',
    href: '/docs/elite-mobs/commands',
    icon: Sword
  },
  {
    title: 'Adventurers Guild',
    description: 'Complete guide to the guild NPCs and their services',
    href: '/docs/elite-mobs/adventurers-guild',
    icon: Users
  },
  {
    title: 'Elite Mob Mechanics',
    description: 'How scaling, powers, and spawn mechanics work',
    href: '/docs/elite-mobs/mechanics',
    icon: Zap
  },
  {
    title: 'Boss Loot Dictionary',
    description: 'Comprehensive guide to all boss drops and rarities',
    href: '/docs/elite-mobs/loot-dictionary',
    icon: Crown
  },
  {
    title: 'Enchanting System',
    description: 'Custom enchantments and enhancement mechanics',
    href: '/docs/elite-mobs/enchanting',
    icon: Zap
  },
  {
    title: 'Grinder Design Guide',
    description: 'Optimize your elite mob farming strategies',
    href: '/docs/elite-mobs/grinder-guide',
    icon: Shield
  }
]

export default function EliteMobsPage() {
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
          <span className="text-foreground">Elite Mobs</span>
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
              <h1 className="hero-title">⚔️ Elite Mobs System</h1>
              <p className="subtitle">
                Advanced combat encounters with scaling difficulty, custom loot, and epic boss battles
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image 
            src="/images/elite-mobs/elite-mobs-1.png" 
            alt="Elite Mobs Interface" 
            width={600} 
            height={400} 
            className="mx-auto rounded-lg"
          />
        </motion.div>

        {/* Introduction */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">What are Elite Mobs?</h2>
          <div className="space-y-4 text-foreground-muted">
            <p>
              Elite Mobs is an advanced combat system developed by Magmaguy that transforms ordinary Minecraft 
              encounters into challenging, rewarding experiences. The system features dynamically scaling mobs, 
              custom equipment, and a comprehensive progression system.
            </p>
            <p>
              Unlike vanilla Minecraft mobs, Elite Mobs adapt to your gear level and provide rewards that scale 
              with the challenge. The system includes world bosses, dungeons, random encounters, and a central 
              hub called the Adventurers Guild where you can enhance your equipment and progress your character.
            </p>
          </div>
        </motion.div>

        {/* Quick Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Essential Commands</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Sword className="w-5 h-5 text-red-600" />
                <code className="text-primary font-mono text-lg">/em</code>
              </div>
              <p className="text-foreground-muted text-sm">
                Opens the Elite Mobs interface showing your stats, gear level, coins, and rank
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <code className="text-primary font-mono text-lg">/ag</code>
              </div>
              <p className="text-foreground-muted text-sm">
                Teleports you to the Adventurers Guild hub for repairs, enchanting, and upgrades
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Core Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-foreground-muted">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Screenshots */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">System Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Image 
                src="/images/elite-mobs/elite-mobs-2.png" 
                alt="Elite Mobs Combat" 
                width={300} 
                height={200} 
                className="mx-auto rounded-lg mb-3"
              />
              <p className="text-sm text-foreground-muted">Elite mob combat encounter</p>
            </div>
            <div className="text-center">
              <Image 
                src="/images/elite-mobs/elite-mobs-3.png" 
                alt="Adventurers Guild" 
                width={300} 
                height={200} 
                className="mx-auto rounded-lg mb-3"
              />
              <p className="text-sm text-foreground-muted">Adventurers Guild interior</p>
            </div>
          </div>
        </motion.div>

        {/* Section Navigation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Detailed Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sections.map((section) => (
              <motion.div key={section.href} variants={itemVariants}>
                <Link href={section.href} className="group block">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-5 h-5 text-gray-600 group-hover:text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {section.title}
                        </h3>
                        <p className="text-sm text-foreground-muted mb-3">
                          {section.description}
                        </p>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Getting Started CTA */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to Face Elite Challenges?
              </h3>
              <p className="text-foreground-muted">
                Start with the commands guide to learn the basics, then explore the Adventurers Guild.
              </p>
            </div>
            <Link 
              href="/docs/elite-mobs/commands"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium ml-4"
            >
              Start Here
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}