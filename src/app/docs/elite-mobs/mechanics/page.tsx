'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Zap, TrendingUp, Eye, Sword, Shield, Target, Crown, Sparkles } from 'lucide-react'

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

const mechanics = [
  {
    title: 'Level Scaling',
    description: 'Elite mobs automatically scale to match player equipment level',
    icon: TrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    details: [
      'Mobs level based on your average gear level',
      'Maximum level cap of 100',
      'Higher levels = better rewards',
      'Dynamic difficulty adjustment'
    ],
    explanation: 'The core mechanic of Elite Mobs is its dynamic scaling system. When an elite mob spawns near you, it automatically adjusts its level based on your average gear level. This ensures that encounters remain challenging and rewarding regardless of your progression stage.'
  },
  {
    title: 'Spawn Conditions',
    description: 'Elite mobs spawn based on specific player and environmental conditions',
    icon: Eye,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    details: [
      'Spawn near players wearing armor',
      'Require minimum light level',
      'Avoid spawning in claimed areas',
      'Random encounter system'
    ],
    explanation: 'Elite mobs have specific spawn requirements. They primarily spawn near players who are wearing armor, indicating active gameplay. They also require adequate lighting and avoid spawning in protected or claimed areas to prevent griefing.'
  },
  {
    title: 'Special Powers',
    description: 'Elite mobs possess unique abilities that make encounters challenging',
    icon: Zap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    details: [
      'Flame attacks and fire immunity',
      'Poison and regeneration abilities',
      'Knockback resistance',
      'Speed and strength buffs'
    ],
    explanation: 'Elite mobs aren\'t just stronger versions of regular mobs - they have special powers that fundamentally change combat dynamics. These can include elemental attacks, status effects, movement abilities, and defensive capabilities.'
  },
  {
    title: 'Elite Defense',
    description: 'Specialized gear requirement system for high-level encounters',
    icon: Shield,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    details: [
      'Required for high-level elite mobs',
      'Prevents excessive damage',
      'Scales with mob level',
      'Found on Elite Mobs gear'
    ],
    explanation: 'Elite Defense is a special stat found on Elite Mobs equipment. It\'s essential for surviving encounters with high-level elite mobs, as it provides protection against their enhanced damage output. Without adequate Elite Defense, players take significantly more damage.'
  }
]

const lootSystem = [
  {
    rarity: 'Common',
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    dropChance: '60%',
    enchants: '1-2',
    description: 'Basic elite equipment with minimal enhancements'
  },
  {
    rarity: 'Uncommon',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    dropChance: '25%',
    enchants: '2-3',
    description: 'Improved equipment with moderate enchantments'
  },
  {
    rarity: 'Rare',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    dropChance: '10%',
    enchants: '3-4',
    description: 'High-quality gear with strong enchantments'
  },
  {
    rarity: 'Epic',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    dropChance: '4%',
    enchants: '4-5',
    description: 'Exceptional equipment with powerful abilities'
  },
  {
    rarity: 'Legendary',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    dropChance: '1%',
    enchants: '5+',
    description: 'Ultimate tier equipment with unique properties'
  }
]

const combatTips = [
  {
    title: 'Preparation',
    tips: [
      'Check your gear level with /em before engaging',
      'Ensure equipment is fully repaired',
      'Stock up on food and potions',
      'Consider the elite mob\'s level and powers'
    ]
  },
  {
    title: 'During Combat',
    tips: [
      'Use terrain to your advantage',
      'Watch for special attack patterns',
      'Manage your health and hunger',
      'Be prepared to retreat if outmatched'
    ]
  },
  {
    title: 'After Combat',
    tips: [
      'Collect all dropped items immediately',
      'Visit the Adventurers Guild for repairs',
      'Scrap unwanted items with Kelly',
      'Plan your next equipment upgrades'
    ]
  }
]

export default function EliteMobsMechanicsPage() {
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
          <span className="text-foreground">Mechanics</span>
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
              <h1 className="hero-title">⚡ Elite Mobs Mechanics</h1>
              <p className="subtitle">
                Deep dive into how elite mobs work: scaling, powers, spawning, and combat systems
              </p>
            </div>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">How Elite Mobs Work</h2>
          <div className="space-y-4 text-foreground-muted">
            <p>
              Elite Mobs fundamentally changes Minecraft combat by introducing dynamic scaling, 
              special powers, and a sophisticated loot system. Unlike vanilla mobs that remain 
              static, elite mobs adapt to your progression and provide appropriately challenging encounters.
            </p>
            <p>
              The system is designed to maintain engagement throughout your gameplay journey. 
              As you acquire better equipment and progress in levels, elite mobs scale accordingly, 
              ensuring that combat remains meaningful and rewarding.
            </p>
          </div>
        </motion.div>

        {/* Core Mechanics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Core Mechanics</h2>
          
          <div className="space-y-6">
            {mechanics.map((mechanic) => (
              <motion.div key={mechanic.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 rounded-xl ${mechanic.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <mechanic.icon className={`w-8 h-8 ${mechanic.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">{mechanic.title}</h3>
                      <p className="text-foreground-muted mb-4">
                        {mechanic.explanation}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {mechanic.details.map((detail, index) => (
                              <li key={index} className="flex items-center space-x-2 text-sm text-foreground-muted">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-2">Quick Summary</h4>
                          <p className="text-sm text-foreground-muted">
                            {mechanic.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Loot System */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Crown className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">Loot Rarity System</h2>
          </div>
          
          <p className="text-foreground-muted mb-6">
            Elite mobs drop equipment based on a tiered rarity system. Higher-level mobs and more 
            challenging encounters yield better loot with more enchantments and superior stats.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lootSystem.map((loot) => (
              <div key={loot.rarity} className={`${loot.bgColor} rounded-lg p-4`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-lg font-bold ${loot.color}`}>
                    {loot.rarity}
                  </h3>
                  <span className="text-sm font-medium text-gray-600">
                    {loot.dropChance}
                  </span>
                </div>
                
                <p className="text-sm text-foreground-muted mb-3">
                  {loot.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground-secondary">Enchantments:</span>
                  <code className="font-mono text-primary bg-white px-2 py-1 rounded">
                    {loot.enchants}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Combat Strategy */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Sword className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-foreground">Combat Strategy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {combatTips.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{section.title}</h3>
                <div className="space-y-3">
                  {section.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Target className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground-muted">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Advanced Mechanics */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">Advanced Mechanics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Prestige System</h3>
              <div className="space-y-3 text-foreground-muted text-sm">
                <p>
                  The prestige system allows players to reset their progress in exchange for permanent buffs:
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Increased maximum health</li>
                  <li>• Coin multiplier bonuses</li>
                  <li>• Enhanced critical hit chance</li>
                  <li>• Improved dodge capabilities</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">World Bosses</h3>
              <div className="space-y-3 text-foreground-muted text-sm">
                <p>
                  Special elite encounters that spawn in designated areas:
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Extremely high difficulty</li>
                  <li>• Unique legendary drops</li>
                  <li>• Require group coordination</li>
                  <li>• Scheduled spawn times</li>
                </ul>
              </div>
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
                Explore Boss Loot and Rewards
              </h3>
              <p className="text-foreground-muted">
                Discover all the legendary items, enchantments, and unique drops available from elite encounters.
              </p>
            </div>
            <Link 
              href="/docs/elite-mobs/loot-dictionary"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium ml-4"
            >
              Loot Dictionary
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}