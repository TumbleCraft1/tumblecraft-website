'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Zap, 
  Pickaxe, 
  Target, 
  Users, 
  Heart, 
  Sword,
  Wrench,
  Hammer,
  FlaskConical,
  Fish,
  Wheat,
  Activity,
  Copy,
  TrendingUp,
  Star,
  Award
} from 'lucide-react'
import { useState } from 'react'

const skillCategories = [
  {
    title: 'Combat Skills',
    description: 'Master the art of battle and survival',
    icon: Sword,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    skills: [
      {
        name: 'Swords',
        icon: Sword,
        description: 'Increase damage and unlock special abilities with swords',
        training: 'Fight mobs and players with swords',
        abilities: ['Serrated Strikes', 'Counter Attack', 'Bleeding']
      },
      {
        name: 'Axes',
        icon: Hammer,
        description: 'Deal massive damage and break armor with axes',
        training: 'Combat with axes and chopping wood',
        abilities: ['Skull Splitter', 'Critical Strikes', 'Armor Impact']
      },
      {
        name: 'Archery',
        icon: Target,
        description: 'Improve bow accuracy and damage from range',
        training: 'Shoot arrows at mobs and players',
        abilities: ['Skill Shot', 'Daze', 'Arrow Retrieval']
      },
      {
        name: 'Taming',
        icon: Heart,
        description: 'Tame more wolves and unlock pet abilities',
        training: 'Tame animals and use them in combat',
        abilities: ['Beast Lore', 'Call of the Wild', 'Fast Food Service']
      }
    ]
  },
  {
    title: 'Gathering Skills',
    description: 'Harvest resources more efficiently',
    icon: Pickaxe,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    skills: [
      {
        name: 'Mining',
        icon: Pickaxe,
        description: 'Extract more materials and find rare ores',
        training: 'Mine stone, ores, and other blocks',
        abilities: ['Super Breaker', 'Double Drops', 'Blast Mining']
      },
      {
        name: 'Excavation',
        icon: Target,
        description: 'Dig faster and find hidden treasures',
        training: 'Dig dirt, sand, gravel with shovels',
        abilities: ['Giga Drill Breaker', 'Treasure Hunter', 'Terra Formation']
      },
      {
        name: 'Woodcutting',
        icon: Hammer,
        description: 'Chop trees faster and get more wood',
        training: 'Cut down trees and wooden blocks',
        abilities: ['Tree Feller', 'Double Drops', 'Leaf Blower']
      },
      {
        name: 'Fishing',
        icon: Fish,
        description: 'Catch rare fish and find underwater treasures',
        training: 'Fish in any body of water',
        abilities: ['Treasure Hunter', 'Magic Hunter', 'Shake']
      },
      {
        name: 'Herbalism',
        icon: Wheat,
        description: 'Harvest crops instantly and get bonus drops',
        training: 'Harvest crops and use hoes',
        abilities: ['Green Terra', 'Double Drops', 'Farmer\'s Diet']
      }
    ]
  },
  {
    title: 'Utility Skills',
    description: 'Support abilities for everyday survival',
    icon: Wrench,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    skills: [
      {
        name: 'Repair',
        icon: Wrench,
        description: 'Fix your tools and armor without anvils',
        training: 'Repair items on iron blocks',
        abilities: ['Repair Mastery', 'Super Repair', 'Arcane Forging']
      },
      {
        name: 'Alchemy',
        icon: FlaskConical,
        description: 'Brew potions faster with better effects',
        training: 'Brew potions at brewing stands',
        abilities: ['Catalysis', 'Concoctions', 'Ingredients']
      },
      {
        name: 'Acrobatics',
        icon: Activity,
        description: 'Reduce fall damage and dodge attacks',
        training: 'Take fall damage and dodge attacks',
        abilities: ['Roll', 'Graceful Roll', 'Dodge']
      }
    ]
  }
]

const trainingTips = [
  {
    title: 'Focus on Daily Activities',
    description: 'Skills train naturally as you play. Mine, farm, and fight as usual for steady progress.',
    icon: Target,
    priority: 'Beginner'
  },
  {
    title: 'Use Skill Abilities Wisely',
    description: 'Active abilities have cooldowns. Time them well for maximum efficiency.',
    icon: Zap,
    priority: 'Important'
  },
  {
    title: 'Train Multiple Skills',
    description: 'Different activities train different skills. Vary your gameplay for balanced progression.',
    icon: Users,
    priority: 'Pro Tip'
  },
  {
    title: 'Higher Levels = Better Rewards',
    description: 'Each skill level increases your chances for double drops and ability effectiveness.',
    icon: TrendingUp,
    priority: 'Strategy'
  }
]

const skillCommands = [
  { command: '/skills', description: 'Open your skills menu to view progress and abilities' },
  { command: '/stats', description: 'View detailed statistics for all your skills' },
  { command: '/mcstats', description: 'Check comprehensive skill and ability information' },
  { command: '/mctop', description: 'View server leaderboards for each skill' },
  { command: '/inspect', description: 'View another player\'s skill levels and stats' }
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

export default function SkillsPage() {
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
          <span className="text-foreground">Skills</span>
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
              <h1 className="hero-title">Skills System</h1>
              <p className="subtitle">
                Train 14 different skills through normal gameplay and unlock powerful abilities. 
                Level up naturally by mining, farming, fighting, and more.
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
              <Zap className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Skills Quick Facts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>14 Skills Available</strong> - Combat, gathering, and utility</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Passive Training</strong> - Level up through normal gameplay</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Active Abilities</strong> - Unlock powerful skills as you progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span><strong>Passive Bonuses</strong> - Double drops and enhanced efficiency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How Skills Work */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">How Skills Work</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Training Skills</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Play Naturally</p>
                    <p className="text-sm text-foreground-muted">Skills train automatically as you perform related activities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Gain XP</p>
                    <p className="text-sm text-foreground-muted">Each action gives skill XP based on difficulty and block type</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Level Up</p>
                    <p className="text-sm text-foreground-muted">Higher levels unlock new abilities and increase effectiveness</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Skill Benefits</h3>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Active Abilities</h4>
                  <p className="text-sm text-foreground-muted">Special abilities you can activate manually for powerful effects</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Passive Bonuses</h4>
                  <p className="text-sm text-foreground-muted">Automatic benefits like double drops, increased damage, and efficiency</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">Progressive Scaling</h4>
                  <p className="text-sm text-foreground-muted">Higher skill levels provide better chances and stronger effects</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">All 14 Skills</h2>
          
          <div className="space-y-8">
            {skillCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-foreground-muted">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <skill.icon className="w-5 h-5 text-gray-600" />
                          <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        </div>
                        
                        <p className="text-sm text-foreground-muted mb-3">
                          {skill.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Training:</span>
                            <p className="text-xs text-foreground-muted">{skill.training}</p>
                          </div>
                          
                          <div>
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Abilities:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {skill.abilities.map((ability) => (
                                <span key={ability} className="inline-block px-2 py-1 bg-white text-xs text-gray-600 rounded">
                                  {ability}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Training Tips */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Skill Training Tips</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trainingTips.map((tip) => (
              <motion.div key={tip.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">
                          {tip.title}
                        </h3>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          tip.priority === 'Beginner' ? 'bg-green-100 text-green-700' :
                          tip.priority === 'Important' ? 'bg-blue-100 text-blue-700' :
                          tip.priority === 'Pro Tip' ? 'bg-purple-100 text-purple-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {tip.priority}
                        </span>
                      </div>
                      <p className="text-foreground-muted text-sm">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Essential Skills Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Skills Integration */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">How Skills Connect to Other Systems</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-4 h-4 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Jobs System</h3>
              <p className="text-sm text-foreground-muted">
                Higher skill levels make jobs more profitable. Many job activities also train relevant skills, creating a beneficial cycle.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-4 h-4 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Player Levels</h3>
              <p className="text-sm text-foreground-muted">
                Some skills contribute to overall player experience. Combat skills especially help with leveling through mob fighting.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="w-8 h-8 bg-purple-200 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-4 h-4 text-purple-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Economy</h3>
              <p className="text-sm text-foreground-muted">
                Skill abilities like double drops significantly boost your resource gathering and shop income potential.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Getting Started Guide */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Master Your Skills?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Use <code className="px-2 py-1 bg-white/50 rounded text-primary">/skills</code> to open 
            your skills menu and start tracking your progress. Skills train automatically as you play, 
            so just focus on enjoying the game!
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/progression/jobs"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Users className="w-4 h-4 mr-2" />
              Explore Jobs System
            </Link>
            <Link 
              href="/docs/progression/levels"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Star className="w-4 h-4 mr-2" />
              Player Levels
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}