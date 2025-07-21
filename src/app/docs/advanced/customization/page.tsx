'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Palette, Pickaxe, Tag, Smile, Sparkles, Wand2, Heart, Trophy, Target, Crown, Copy, Lightbulb, Star } from 'lucide-react'
import { useState } from 'react'

const customizationSystems = [
  {
    name: 'Tool Skins',
    description: 'Transform your tools with unique CSGO-style skins',
    icon: Pickaxe,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    features: [
      'Over 50+ unique skin designs',
      'Rarity tiers: Common to Mythic',
      'Apply to any tool type',
      'No stat changes - purely cosmetic',
      'Show off in multiplayer'
    ],
    commands: ['/toolskins', '/ts apply <skin>', '/ts remove'],
    sources: ['Coinshop', 'Crates', 'Level rewards', 'Special events'],
    rarityCount: {
      common: 25,
      rare: 15,
      epic: 8,
      legendary: 4,
      mythic: 2
    }
  },
  {
    name: 'Cosmetics',
    description: 'Stand out with visible player effects and accessories',
    icon: Sparkles,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    features: [
      'Particle effects around player',
      'Unique walking trails',
      'Special aura effects',
      'Animated accessories',
      'Seasonal and limited cosmetics'
    ],
    commands: ['/cosmetics', '/cosmetic equip <item>', '/cosmetic remove'],
    sources: ['Coinshop purchases', 'Crate rewards', 'Donor perks', 'Achievement unlocks'],
    categories: ['Trails', 'Auras', 'Hats', 'Wings', 'Particles']
  },
  {
    name: 'Player Tags',
    description: 'Express personality with 100+ unique chat tags',
    icon: Tag,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: [
      '100+ unique tag designs',
      'Emoji and symbol integration',
      'Color customization',
      'Multiple tag slots',
      'Category-based organization'
    ],
    commands: ['/tags', '/tag set <tag>', '/tag clear'],
    sources: ['Free unlocks', 'Level progression', 'Achievement rewards', 'Special purchases'],
    categories: ['Emotions', 'Animals', 'Gaming', 'Food', 'Objects', 'Symbols']
  },
  {
    name: 'Chat Emojis',
    description: 'Enhance communication with custom emoji system',
    icon: Smile,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    features: [
      'Easy copy-paste emoji system',
      'Categories for quick finding',
      'Custom server emojis',
      'Expression enhancement',
      'Community favorites'
    ],
    commands: ['/emojis', '/emoji copy <name>', '/emoji list'],
    sources: ['Free to all players', 'No purchase required', 'Instant access'],
    usage: 'Copy emojis from /emojis menu and paste in chat'
  }
]

const advancedTechniques = [
  {
    title: 'Aesthetic Coordination',
    description: 'Create cohesive looks across all customization systems',
    icon: Palette,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    techniques: [
      'Match tool skin colors to your cosmetic aura',
      'Choose tags that complement your playstyle theme',
      'Coordinate seasonal themes across all systems',
      'Create signature looks that become your brand'
    ],
    example: 'Ocean theme: Blue tool skins + water trail cosmetic + wave emoji tag'
  },
  {
    title: 'Market Intelligence',
    description: 'Track values and make smart customization investments',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    techniques: [
      'Monitor which skins are trending in popularity',
      'Track cosmetic prices in auction house',
      'Identify upcoming seasonal items early',
      'Invest in rare items before demand spikes'
    ],
    example: 'Christmas cosmetics spike in value during December - buy in summer'
  },
  {
    title: 'Social Psychology',
    description: 'Use customization to enhance social interactions',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    techniques: [
      'Use friendly emojis to appear more approachable',
      'Match team themes for guild coordination',
      'Seasonal customization shows server engagement',
      'Rare items demonstrate dedication and status'
    ],
    example: 'Team leaders often use crown tags and golden cosmetics for authority'
  },
  {
    title: 'Collection Strategy',
    description: 'Build valuable and complete customization collections',
    icon: Trophy,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    techniques: [
      'Focus on complete sets rather than random items',
      'Prioritize limited-time and event exclusives',
      'Trade duplicates for missing collection pieces',
      'Document collection progress for goal tracking'
    ],
    example: 'Complete the "Elemental" tool skin set for special unlock bonuses'
  }
]

const toolSkinRarities = [
  { 
    name: 'Common', 
    color: 'text-gray-500', 
    bgColor: 'bg-gray-100', 
    description: 'Simple recolors and basic patterns',
    dropRate: '70%',
    examples: ['Red Steel', 'Blue Iron', 'Green Wood']
  },
  { 
    name: 'Rare', 
    color: 'text-blue-500', 
    bgColor: 'bg-blue-100', 
    description: 'Detailed textures and patterns',
    dropRate: '20%',
    examples: ['Dragon Scale', 'Lightning Strike', 'Ocean Depth']
  },
  { 
    name: 'Epic', 
    color: 'text-purple-500', 
    bgColor: 'bg-purple-100', 
    description: 'Animated effects and special details',
    dropRate: '8%',
    examples: ['Flame Wreath', 'Crystal Formation', 'Void Walker']
  },
  { 
    name: 'Legendary', 
    color: 'text-yellow-500', 
    bgColor: 'bg-yellow-100', 
    description: 'Complex animations and unique models',
    dropRate: '2%',
    examples: ['Phoenix Feather', 'Galaxy Spiral', 'Time Distortion']
  },
  { 
    name: 'Mythic', 
    color: 'text-red-500', 
    bgColor: 'bg-red-100', 
    description: 'Server-wide announcements and special effects',
    dropRate: '<1%',
    examples: ['Reality Breaker', 'Admin\'s Choice', 'Server Legend']
  }
]

const cosmeticCategories = [
  {
    name: 'Particle Trails',
    description: 'Effects that follow you as you move',
    icon: Sparkles,
    items: ['Heart Trail', 'Fire Trail', 'Magic Sparkles', 'Smoke Path', 'Rainbow Trail'],
    cost: '5-25 coins',
    rarity: 'Common to Epic'
  },
  {
    name: 'Player Auras',
    description: 'Constant effects around your character',
    icon: Crown,
    items: ['Golden Glow', 'Electric Field', 'Frost Aura', 'Shadow Ring', 'Divine Light'],
    cost: '15-50 coins',
    rarity: 'Rare to Legendary'
  },
  {
    name: 'Head Accessories',
    description: 'Visible items worn on your head',
    icon: Star,
    items: ['Crown', 'Halo', 'Top Hat', 'Wizard Hat', 'Flower Crown'],
    cost: '10-35 coins',
    rarity: 'Common to Epic'
  },
  {
    name: 'Wings & Cloaks',
    description: 'Back accessories and flying effects',
    icon: Wand2,
    items: ['Angel Wings', 'Dragon Wings', 'Shadow Cloak', 'Magic Cape', 'Fairy Wings'],
    cost: '20-75 coins',
    rarity: 'Epic to Mythic'
  }
]

const tagCategories = [
  {
    name: 'Emotions & Expressions',
    count: 25,
    examples: ['😊', '😎', '😍', '😂', '🥳', '😴', '😡'],
    color: 'text-pink-500',
    usage: 'Express your current mood or personality'
  },
  {
    name: 'Animals & Nature',
    count: 30,
    examples: ['🐺', '🦅', '🐱', '🌲', '🌊', '🦋', '🔥'],
    color: 'text-green-500',
    usage: 'Show connection to nature or favorite animals'
  },
  {
    name: 'Gaming & Achievements',
    count: 20,
    examples: ['🏆', '👑', '⚔️', '🛡️', '💎', '🎯', '⚡'],
    color: 'text-yellow-500',
    usage: 'Display gaming skills or achievements'
  },
  {
    name: 'Food & Objects',
    count: 25,
    examples: ['🍕', '🍔', '🍰', '☕', '🎨', '🎵', '📚'],
    color: 'text-orange-500',
    usage: 'Share interests and hobbies'
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

function CustomizationSystemCard({ system }: { system: typeof customizationSystems[0] }) {
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border ${system.borderColor} p-6 h-full`}>
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 rounded-lg ${system.bgColor} flex items-center justify-center`}>
            <system.icon className={`w-5 h-5 ${system.color}`} />
          </div>
          <h3 className="text-lg font-semibold text-foreground">{system.name}</h3>
        </div>
        
        <p className="text-sm text-foreground-muted">{system.description}</p>
        
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {system.features.map((feature, featureIndex) => (
              <li key={`system-${system.name.replace(/\s/g, '-')}-feature-${featureIndex}`} className="flex items-center space-x-2 text-xs text-foreground-muted">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Essential Commands:</h4>
          <div className="space-y-1">
            {system.commands.map((cmd, cmdIndex) => (
              <code key={`system-${system.name.replace(/\s/g, '-')}-cmd-${cmdIndex}`} className="block text-xs bg-gray-100 px-2 py-1 rounded font-mono text-gray-700">
                {cmd}
              </code>
            ))}
          </div>
        </div>
        
        <div className={`${system.bgColor} rounded-lg p-3`}>
          <h4 className="text-sm font-medium text-foreground mb-2">How to Obtain:</h4>
          <div className="space-y-1">
            {system.sources.map((source, sourceIndex) => (
              <div key={`system-${system.name.replace(/\s/g, '-')}-source-${sourceIndex}`} className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <span className="text-xs text-foreground-muted">{source}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TechniqueCard({ technique }: { technique: typeof advancedTechniques[0] }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className={`w-10 h-10 rounded-lg ${technique.bgColor} flex items-center justify-center`}>
          <technique.icon className={`w-5 h-5 ${technique.color}`} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">{technique.title}</h3>
          <p className="text-sm text-foreground-muted">{technique.description}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-foreground mb-3">Advanced Techniques:</h4>
        <ul className="space-y-2">
          {technique.techniques.map((item, itemIndex) => (
            <li key={`technique-${technique.title.replace(/\s/g, '-')}-item-${itemIndex}`} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={`${technique.bgColor} rounded-lg p-3`}>
        <h4 className="text-xs font-medium text-foreground mb-1">Example:</h4>
        <p className="text-xs text-foreground-muted italic">{technique.example}</p>
      </div>
    </div>
  )
}

function RarityCard({ rarity }: { rarity: typeof toolSkinRarities[0] }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className={`w-4 h-4 rounded ${rarity.bgColor}`}></div>
          <h4 className={`font-semibold ${rarity.color}`}>{rarity.name}</h4>
        </div>
        <span className="text-xs text-foreground-muted">{rarity.dropRate}</span>
      </div>
      
      <p className="text-sm text-foreground-muted mb-3">{rarity.description}</p>
      
      <div>
        <h5 className="text-xs font-medium text-foreground mb-2">Examples:</h5>
        <div className="flex flex-wrap gap-1">
          {rarity.examples.map((example, exampleIndex) => (
            <span key={`rarity-${rarity.name.replace(/\s/g, '-')}-example-${exampleIndex}`} className={`text-xs px-2 py-1 rounded ${rarity.bgColor} ${rarity.color}`}>
              {example}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function CategoryCard({ category }: { category: typeof cosmeticCategories[0] }) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow border border-gray-200 p-4">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
          <category.icon className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{category.name}</h4>
          <p className="text-xs text-foreground-muted">{category.description}</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-foreground-muted">Cost Range:</span>
          <span className="text-green-600 font-mono">{category.cost}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-foreground-muted">Rarity:</span>
          <span className="text-purple-600">{category.rarity}</span>
        </div>
      </div>
      
      <div className="mt-3">
        <h5 className="text-xs font-medium text-foreground mb-2">Popular Items:</h5>
        <div className="flex flex-wrap gap-1">
          {category.items.slice(0, 3).map((item, itemIndex) => (
            <span key={`category-${category.name.replace(/\s/g, '-')}-item-${itemIndex}`} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AdvancedCustomizationPage() {
  const [, setActiveTab] = useState('overview')
  const [, setSearchTerm] = useState('')

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
          <Link href="/docs/advanced" className="hover:text-primary transition-colors">
            Advanced
          </Link>
          <span>/</span>
          <span className="text-foreground">Advanced Customization</span>
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
              href="/docs/advanced"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title flex items-center space-x-3">
                <Palette className="w-8 h-8 text-pink-600" />
                <span>Advanced Customization</span>
              </h1>
              <p className="subtitle">
                Master TumbleCraft's complete customization ecosystem. Create unique looks with tool skins, 
                cosmetics, player tags, and emojis. Build your personal brand and stand out in the community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Customization Systems Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Customization Systems</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {customizationSystems.map((system) => (
              <motion.div key={system.name} variants={itemVariants}>
                <CustomizationSystemCard system={system} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advanced Techniques */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Advanced Techniques</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {advancedTechniques.map((technique) => (
              <motion.div key={technique.title} variants={itemVariants}>
                <TechniqueCard technique={technique} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tool Skins Deep Dive */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            <Pickaxe className="inline w-5 h-5 mr-2" />
            Tool Skins Rarity System
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toolSkinRarities.map((rarity) => (
              <RarityCard key={rarity.name} rarity={rarity} />
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-orange-50 rounded-lg">
            <h4 className="font-semibold text-orange-800 mb-2">Pro Investment Tips:</h4>
            <ul className="space-y-1">
              <li className="text-sm text-orange-700">• Epic+ skins often increase in value over time</li>
              <li className="text-sm text-orange-700">• Mythic skins are announced server-wide when obtained</li>
              <li className="text-sm text-orange-700">• Holiday/seasonal skins become more valuable post-event</li>
              <li className="text-sm text-orange-700">• Some skins have hidden bonus effects or prestige value</li>
            </ul>
          </div>
        </motion.div>

        {/* Cosmetics Categories */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            <Sparkles className="inline w-5 h-5 mr-2" />
            Cosmetic Categories & Pricing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cosmeticCategories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Budget Strategy:</h4>
              <p className="text-sm text-green-700 mb-2">
                Start with trails and basic auras (5-15 coins) before investing in expensive wings.
              </p>
              <p className="text-xs text-green-600">
                Monthly cosmetic budget: 25-50 coins for casual players
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Premium Strategy:</h4>
              <p className="text-sm text-purple-700 mb-2">
                Focus on legendary wings and unique auras for maximum visual impact.
              </p>
              <p className="text-xs text-purple-600">
                Premium budget: 75-150 coins for exclusive collections
              </p>
            </div>
          </div>
        </motion.div>

        {/* Player Tags Guide */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            <Tag className="inline w-5 h-5 mr-2" />
            Player Tags Categories (100+ Available)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tagCategories.map((category) => (
              <div key={category.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className={`font-semibold ${category.color}`}>{category.name}</h4>
                  <span className="text-xs text-foreground-muted">{category.count} tags</span>
                </div>
                <p className="text-sm text-foreground-muted">{category.usage}</p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example, exampleIndex) => (
                    <span key={`category-${category.name.replace(/\s/g, '-')}-example-${exampleIndex}`} className="text-lg">{example}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Tag Strategy Tips:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
              <div>
                <p className="font-medium mb-1">Social Benefits:</p>
                <ul className="space-y-1">
                  <li>• Friendly emojis make you more approachable</li>
                  <li>• Achievement tags show your skills</li>
                  <li>• Seasonal tags show server engagement</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-1">Collection Goals:</p>
                <ul className="space-y-1">
                  <li>• Unlock all tags in one category for completionist reward</li>
                  <li>• Rare tags from achievements are prestigious</li>
                  <li>• Match tags to your current activities or mood</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chat Emojis System */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            <Smile className="inline w-5 h-5 mr-2" />
            Advanced Emoji Usage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-3">Quick Access Tips:</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">/emojis</code>
                  <span className="text-sm text-foreground-muted">Opens emoji browser</span>
                </div>
                <div className="flex items-center space-x-2">
                  <code className="bg-gray-100 px-2 py-1 rounded text-sm">/emoji &lt;name&gt;</code>
                  <span className="text-sm text-foreground-muted">Direct emoji lookup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-foreground-muted">Click to copy any emoji</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-3">Communication Enhancement:</h4>
              <div className="space-y-2 text-sm text-foreground-muted">
                <p>• Use emojis to convey tone in text messages</p>
                <p>• Express emotions that words can't capture</p>
                <p>• Add personality to announcements and signs</p>
                <p>• Create visual emphasis in important messages</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2">
              <Lightbulb className="inline w-4 h-4 mr-1" />
              Pro Communication Tips:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-yellow-700">
              <div>
                <p className="font-medium">Welcoming New Players:</p>
                <p>😊👋 Welcome to TumbleCraft!</p>
              </div>
              <div>
                <p className="font-medium">Celebrating Achievements:</p>
                <p>🎉🏆 Congratulations on your promotion!</p>
              </div>
              <div>
                <p className="font-medium">Trading & Business:</p>
                <p>💰🤝 Fair trades, honest deals!</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Complete Customization Strategy */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            <Crown className="inline w-5 h-5 mr-2" />
            Complete Customization Mastery
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Pickaxe className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Tool Mastery</h4>
              <p className="text-sm text-foreground-muted">
                Collect all rarity tiers and create themed tool sets for different activities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Visual Impact</h4>
              <p className="text-sm text-foreground-muted">
                Combine cosmetics strategically for maximum visual appeal and social recognition.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Tag className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Social Identity</h4>
              <p className="text-sm text-foreground-muted">
                Use tags to express personality and build recognition within the community.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Smile className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Communication</h4>
              <p className="text-sm text-foreground-muted">
                Master emoji usage for enhanced social interactions and clearer communication.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/economy/cosmetics"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Basic Cosmetics
            </Link>
            <Link 
              href="/docs/advanced"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Crown className="w-4 h-4 mr-2" />
              More Advanced Guides
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}