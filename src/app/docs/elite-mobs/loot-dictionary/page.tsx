'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Crown, Sword, Shield, Bow, Sparkles, Zap, Search, Star } from 'lucide-react'

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

const lootCategories = [
  {
    title: 'Weapons',
    description: 'Swords, bows, and specialized combat tools',
    icon: Sword,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    count: '25+'
  },
  {
    title: 'Armor',
    description: 'Protective gear with elite defense properties',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    count: '20+'
  },
  {
    title: 'Accessories',
    description: 'Rings, charms, and utility items',
    icon: Sparkles,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    count: '15+'
  },
  {
    title: 'Boss Drops',
    description: 'Unique legendary items from world bosses',
    icon: Crown,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    count: '10+'
  }
]

const featuredItems = [
  {
    name: 'Dragonslayer Sword',
    rarity: 'Legendary',
    level: '85-100',
    type: 'Weapon',
    description: 'A legendary blade forged from dragon scales, dealing massive damage to elite mobs.',
    enchantments: ['Sharpness X', 'Fire Aspect V', 'Unbreaking VIII', 'Elite DPS IV'],
    specialAbility: 'Dragon\'s Breath: Chance to create fire explosion on critical hits',
    dropSource: 'Ancient Dragon (World Boss)',
    icon: Sword,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    name: 'Aegis of the Void',
    rarity: 'Legendary',
    level: '80-95',
    type: 'Shield',
    description: 'A mystical shield that provides unparalleled protection against elite attacks.',
    enchantments: ['Elite Defense VI', 'Unbreaking X', 'Thorns VIII', 'Mending'],
    specialAbility: 'Void Ward: Absorbs 50% of incoming elite damage',
    dropSource: 'Void Guardian (World Boss)',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    name: 'Hunter\'s Covenant',
    rarity: 'Epic',
    level: '60-80',
    type: 'Bow',
    description: 'A precision bow favored by elite mob hunters for its accuracy and power.',
    enchantments: ['Power VIII', 'Infinity', 'Hunter V', 'Punch IV'],
    specialAbility: 'Mark of the Hunter: Tagged mobs take additional damage',
    dropSource: 'Elite Rangers',
    icon: Bow,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    name: 'Charm of Fortune',
    rarity: 'Rare',
    level: '40-70',
    type: 'Accessory',
    description: 'A lucky charm that increases coin drops and rare loot chances.',
    enchantments: ['Luck VIII', 'Coin Multiplier III', 'Experience Boost'],
    specialAbility: 'Fortune\'s Favor: Doubles coin drops from elite mobs',
    dropSource: 'Elite Treasure Hunters',
    icon: Sparkles,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50'
  }
]

const enchantmentTypes = [
  {
    category: 'Combat',
    enchants: [
      { name: 'Elite DPS', levels: 'I-X', description: 'Increases damage against elite mobs' },
      { name: 'Elite Defense', levels: 'I-X', description: 'Reduces damage from elite mobs' },
      { name: 'Hunter', levels: 'I-V', description: 'Bonus damage to specific mob types' },
      { name: 'Earthquake', levels: 'I-III', description: 'Chance to create damaging shockwaves' }
    ]
  },
  {
    category: 'Utility',
    enchants: [
      { name: 'Coin Multiplier', levels: 'I-V', description: 'Increases coin drops from elite mobs' },
      { name: 'Experience Boost', levels: 'I-III', description: 'Bonus experience from elite encounters' },
      { name: 'Luck', levels: 'I-X', description: 'Improves loot drop chances' },
      { name: 'Auto-Repair', levels: 'I', description: 'Slowly repairs itself over time' }
    ]
  },
  {
    category: 'Special',
    enchants: [
      { name: 'Void Strike', levels: 'I-V', description: 'Chance to deal void damage' },
      { name: 'Lightning', levels: 'I-III', description: 'Summons lightning on critical hits' },
      { name: 'Frost Walker', levels: 'I-II', description: 'Creates ice paths and slows enemies' },
      { name: 'Phoenix', levels: 'I', description: 'Resurrects player on death (cooldown)' }
    ]
  }
]

const rarityInfo = [
  { rarity: 'Common', color: 'text-gray-600', chance: '60%', description: '1-2 enchantments, basic stats' },
  { rarity: 'Uncommon', color: 'text-green-600', chance: '25%', description: '2-3 enchantments, improved stats' },
  { rarity: 'Rare', color: 'text-blue-600', chance: '10%', description: '3-4 enchantments, high stats' },
  { rarity: 'Epic', color: 'text-purple-600', chance: '4%', description: '4-5 enchantments, very high stats' },
  { rarity: 'Legendary', color: 'text-orange-600', chance: '1%', description: '5+ enchantments, maximum stats, special abilities' }
]

export default function LootDictionaryPage() {
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
          <span className="text-foreground">Loot Dictionary</span>
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
              <h1 className="hero-title">👑 Boss Loot Dictionary</h1>
              <p className="subtitle">
                Comprehensive catalog of all elite mob drops, legendary items, and enchantments
              </p>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <Search className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-foreground">Loot Categories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lootCategories.map((category) => (
              <div key={category.title} className={`${category.bgColor} rounded-lg p-4 text-center`}>
                <category.icon className={`w-8 h-8 ${category.color} mx-auto mb-3`} />
                <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
                <p className="text-sm text-foreground-muted mb-2">{category.description}</p>
                <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded">
                  {category.count} items
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Legendary Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Star className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-foreground">Featured Legendary Items</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                        <span className={`px-2 py-1 text-xs font-medium ${item.color} bg-opacity-20 rounded-full`}>
                          {item.rarity}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-foreground-muted mb-3">
                        <span>Level: {item.level}</span>
                        <span>Type: {item.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-foreground-muted mb-4">{item.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Enchantments:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.enchantments.map((enchant) => (
                          <span key={enchant} className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                            {enchant}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="font-semibold text-foreground mb-1">Special Ability:</h4>
                      <p className="text-sm text-foreground-muted">{item.specialAbility}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-foreground-secondary">Drop Source:</span>
                      <code className="font-mono text-primary bg-gray-100 px-2 py-1 rounded">
                        {item.dropSource}
                      </code>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Rarity System */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Rarity System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rarityInfo.map((rarity) => (
              <div key={rarity.rarity} className="border-2 border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-lg font-bold ${rarity.color}`}>
                    {rarity.rarity}
                  </h3>
                  <span className="text-sm font-medium text-gray-600">
                    {rarity.chance}
                  </span>
                </div>
                <p className="text-sm text-foreground-muted">
                  {rarity.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Elite Enchantments */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-foreground">Elite Enchantments</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enchantmentTypes.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.enchants.map((enchant) => (
                    <div key={enchant.name} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{enchant.name}</h4>
                        <span className="text-xs font-mono text-gray-600 bg-white px-2 py-1 rounded">
                          {enchant.levels}
                        </span>
                      </div>
                      <p className="text-sm text-foreground-muted">
                        {enchant.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Loot Tips */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Loot Optimization Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Maximizing Drops</h3>
              <div className="space-y-3 text-foreground-muted text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Fight higher-level elite mobs for better loot chances</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Use Luck enchantments to increase rare drop rates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Target world bosses for guaranteed legendary drops</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Always pick up items immediately after kills</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Item Management</h3>
              <div className="space-y-3 text-foreground-muted text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Keep useful items, scrap the rest with Kelly</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Compare item levels and enchantments before scrapping</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Store legendary items in secure containers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Plan enchantments before applying to avoid waste</p>
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
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Master Elite Enchanting
              </h3>
              <p className="text-foreground-muted">
                Learn how to safely apply enchantments and combine effects for maximum power.
              </p>
            </div>
            <Link 
              href="/docs/elite-mobs/enchanting"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium ml-4"
            >
              Enchanting Guide
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}