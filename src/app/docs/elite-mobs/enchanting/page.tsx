'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Sparkles, AlertTriangle, Coins, Book, Target, Zap, Shield, TrendingUp } from 'lucide-react'

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

const enchantingProcess = [
  {
    step: 1,
    title: 'Visit Eden',
    description: 'Go to the Adventurers Guild and find Eden the Enchanter',
    icon: Sparkles,
    details: 'Use /ag to teleport to the guild, then locate Eden who handles all enchanting services.'
  },
  {
    step: 2,
    title: 'Prepare Materials',
    description: 'Bring your item, elite enchanted book, and elite coins',
    icon: Book,
    details: 'Ensure you have enough elite coins for the enchantment cost and risk coverage.'
  },
  {
    step: 3,
    title: 'Choose Enchantment',
    description: 'Select the enchanted book you want to apply',
    icon: Target,
    details: 'Consider the item type, current enchantments, and compatibility before selecting.'
  },
  {
    step: 4,
    title: 'Accept Risk',
    description: 'Understand the failure chance and potential consequences',
    icon: AlertTriangle,
    details: 'Higher level enchantments have higher failure rates that destroy the book.'
  }
]

const enchantmentCategories = [
  {
    category: 'Offensive',
    description: 'Enchantments that increase damage output and combat effectiveness',
    icon: Target,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    enchantments: [
      { name: 'Elite DPS', maxLevel: 'X', description: 'Massive damage bonus against elite mobs', rarity: 'Common-Legendary' },
      { name: 'Hunter', maxLevel: 'V', description: 'Extra damage to specific mob types', rarity: 'Uncommon-Epic' },
      { name: 'Earthquake', maxLevel: 'III', description: 'Chance to create damaging ground tremors', rarity: 'Rare-Legendary' },
      { name: 'Lightning Strike', maxLevel: 'III', description: 'Summons lightning bolts on critical hits', rarity: 'Epic-Legendary' }
    ]
  },
  {
    category: 'Defensive',
    description: 'Enchantments that provide protection and survivability',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    enchantments: [
      { name: 'Elite Defense', maxLevel: 'X', description: 'Reduces damage from all elite mob attacks', rarity: 'Common-Legendary' },
      { name: 'Void Protection', maxLevel: 'V', description: 'Immunity to void and darkness effects', rarity: 'Rare-Legendary' },
      { name: 'Phoenix', maxLevel: 'I', description: 'Automatically resurrect on death with cooldown', rarity: 'Legendary' },
      { name: 'Regeneration', maxLevel: 'III', description: 'Slowly restores health over time', rarity: 'Uncommon-Epic' }
    ]
  },
  {
    category: 'Utility',
    description: 'Enchantments that provide convenience and resource benefits',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    enchantments: [
      { name: 'Coin Multiplier', maxLevel: 'V', description: 'Increases coin drops from elite mobs', rarity: 'Uncommon-Epic' },
      { name: 'Experience Boost', maxLevel: 'III', description: 'Bonus experience from all sources', rarity: 'Rare-Epic' },
      { name: 'Auto-Repair', maxLevel: 'I', description: 'Slowly repairs item durability over time', rarity: 'Epic-Legendary' },
      { name: 'Luck', maxLevel: 'X', description: 'Improves chances of rare loot drops', rarity: 'Common-Legendary' }
    ]
  },
  {
    category: 'Special',
    description: 'Unique enchantments with powerful and unusual effects',
    icon: Zap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    enchantments: [
      { name: 'Void Strike', maxLevel: 'V', description: 'Chance to deal pure void damage ignoring armor', rarity: 'Epic-Legendary' },
      { name: 'Time Dilation', maxLevel: 'II', description: 'Slows nearby enemies during combat', rarity: 'Legendary' },
      { name: 'Soul Bind', maxLevel: 'I', description: 'Item cannot be dropped or lost on death', rarity: 'Legendary' },
      { name: 'Dimensional Rift', maxLevel: 'I', description: 'Teleports player to safety when critically injured', rarity: 'Legendary' }
    ]
  }
]

const riskLevels = [
  {
    level: 'Low Risk (Levels I-III)',
    failureChance: '5-15%',
    cost: '10-50 Elite Coins',
    description: 'Safe enchantments with minimal failure chance',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    level: 'Medium Risk (Levels IV-VI)',
    failureChance: '20-40%',
    cost: '60-150 Elite Coins',
    description: 'Moderate risk with substantial power gains',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  },
  {
    level: 'High Risk (Levels VII-X)',
    failureChance: '45-70%',
    cost: '200-500 Elite Coins',
    description: 'Dangerous but extremely powerful enchantments',
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
]

const enchantingTips = [
  {
    title: 'Start Small',
    description: 'Begin with low-level enchantments to minimize risk and learn the system.',
    icon: TrendingUp
  },
  {
    title: 'Save Rare Books',
    description: 'Only use legendary enchanted books on your best equipment.',
    icon: Book
  },
  {
    title: 'Plan Combinations',
    description: 'Research which enchantments stack well together before applying.',
    icon: Target
  },
  {
    title: 'Budget for Failures',
    description: 'Always have extra coins and books in case of enchantment failures.',
    icon: Coins
  }
]

export default function EnchantingPage() {
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
          <span className="text-foreground">Enchanting</span>
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
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                  <Sparkles size={32} className="text-white" />
                </div>
                <h1 className="hero-title">Elite Enchanting System</h1>
              </div>
              <p className="subtitle">
                Master the art of applying elite enchantments with risk management and strategy
              </p>
            </div>
          </div>
        </motion.div>

        {/* Warning Box */}
        <motion.div 
          className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600" />
            <h3 className="text-lg font-semibold text-yellow-800">Important Warning</h3>
          </div>
          <p className="text-yellow-700">
            Elite enchanting carries a risk of failure that increases with enchantment level. 
            Failed attempts will destroy the enchanted book and consume elite coins. Always 
            ensure you can afford to lose the materials before attempting high-level enchantments.
          </p>
        </motion.div>

        {/* Enchanting Process */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Enchanting Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {enchantingProcess.map((step) => (
              <motion.div key={step.step} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-blue-600">{step.step}</span>
                  </div>
                  <step.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-foreground-muted text-sm mb-3">{step.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-foreground-muted">{step.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Risk Levels */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">Risk Assessment</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {riskLevels.map((risk) => (
              <div key={risk.level} className={`${risk.bgColor} rounded-lg p-6`}>
                <h3 className={`text-lg font-bold ${risk.color} mb-3`}>
                  {risk.level}
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-foreground-secondary">Failure Rate:</span>
                    <code className="text-sm font-mono text-primary bg-white px-2 py-1 rounded">
                      {risk.failureChance}
                    </code>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-foreground-secondary">Cost Range:</span>
                    <code className="text-sm font-mono text-primary bg-white px-2 py-1 rounded">
                      {risk.cost}
                    </code>
                  </div>
                  <p className="text-sm text-foreground-muted pt-2 border-t border-white">
                    {risk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enchantment Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Elite Enchantments</h2>
          
          <div className="space-y-8">
            {enchantmentCategories.map((category) => (
              <motion.div key={category.category} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                      <p className="text-foreground-muted">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.enchantments.map((enchant) => (
                      <div key={enchant.name} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{enchant.name}</h4>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-mono text-gray-600 bg-white px-2 py-1 rounded">
                              Max: {enchant.maxLevel}
                            </span>
                            <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                              {enchant.rarity}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-foreground-muted">
                          {enchant.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enchanting Tips */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Pro Enchanting Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enchantingTips.map((tip) => (
              <div key={tip.title} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <tip.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-foreground-muted text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enchantment Combinations */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Recommended Combinations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Weapon Builds</h3>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 mb-2">DPS Focused</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded">Elite DPS X</span>
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded">Hunter V</span>
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded">Lightning III</span>
                    <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-700 rounded">Void Strike V</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">Utility Focused</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded">Coin Multiplier V</span>
                    <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded">Luck X</span>
                    <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded">Experience Boost III</span>
                    <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded">Auto-Repair I</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Armor Builds</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-blue-800 mb-2">Tank Build</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">Elite Defense X</span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">Void Protection V</span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">Regeneration III</span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">Phoenix I</span>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">Balanced Build</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">Elite Defense VII</span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">Luck V</span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">Coin Multiplier III</span>
                    <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">Auto-Repair I</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Optimize Your Elite Mob Farm
              </h3>
              <p className="text-foreground-muted">
                Learn advanced strategies for efficient elite mob grinding and resource farming.
              </p>
            </div>
            <Link 
              href="/docs/elite-mobs/grinder-guide"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium ml-4"
            >
              Grinder Guide
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}