'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, ArrowRight, Shield, Pickaxe, TreePine, Home, 
  AlertTriangle, Moon, Apple, Hammer,
  Mountain, Copy, Heart, Eye
} from 'lucide-react'
import { useState } from 'react'

const survivalSteps = [
  {
    title: 'Spawning & First Steps',
    icon: Eye,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    priority: 'critical',
    timeFrame: '0-5 minutes',
    description: 'Your first moments on TumbleCraft',
    actions: [
      'You\'ll spawn at the beautiful TumbleCraft hub',
      'Look around to get your bearings and see other players',
      'Open chat and type /rtp to teleport to survival world',
      'Alternatively, find the Worlds NPC and click on Survival World'
    ],
    tips: [
      'Don\'t panic if there are many players around - you\'ll teleport away soon',
      'Take a moment to read any server messages or announcements',
      'The spawn area is completely safe, so no rush'
    ]
  },
  {
    title: 'Getting to Survival World',
    icon: Mountain,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    priority: 'critical',
    timeFrame: '5-10 minutes',
    description: 'Enter the survival world where your adventure begins',
    actions: [
      'Use /rtp command for random teleportation',
      'You\'ll be placed randomly in the survival world',
      'Look around - you might spawn near other players\' builds',
      'If needed, walk away from populated areas to find your own space'
    ],
    tips: [
      'You can use /rtp again if you don\'t like your location (limited uses)',
      'Remember your coordinates by pressing F3 (Java) or checking your map',
      'Look for a good mix of biomes nearby for varied resources'
    ]
  },
  {
    title: 'Immediate Resource Gathering',
    icon: TreePine,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    priority: 'critical',
    timeFrame: '10-30 minutes',
    description: 'Gather essential resources before nightfall',
    actions: [
      'Punch trees to collect wood (start with at least 20 logs)',
      'Craft a workbench and wooden tools immediately',
      'Gather stone by mining with wooden pickaxe (need 11+ cobblestone)',
      'Collect some food: kill animals, find berries, or harvest crops'
    ],
    tips: [
      'Always craft stone tools as soon as possible - they\'re much faster',
      'Look for sheep for wool to make a bed (need 3 wool + 3 wood planks)',
      'Collect extra wood - you\'ll need lots for crafting and fuel'
    ]
  },
  {
    title: 'Food & Hunger Management',
    icon: Apple,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    priority: 'high',
    timeFrame: '20-45 minutes',
    description: 'Secure a reliable food source',
    actions: [
      'Hunt animals: cows, pigs, chickens, sheep (cook the meat!)',
      'Look for naturally spawning crops in villages',
      'Collect seeds and plant wheat, carrots, or potatoes',
      'Consider fishing if near water (peaceful and reliable)'
    ],
    tips: [
      'Cooked food restores more hunger than raw food',
      'Bread is efficient early game food (3 wheat = 1 bread)',
      'Keep some food in your hotbar at all times',
      'Don\'t let your hunger bar get too low or you\'ll take damage'
    ]
  },
  {
    title: 'Building Your First Shelter',
    icon: Home,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    priority: 'critical',
    timeFrame: '30-60 minutes',
    description: 'Create a safe haven before the monsters come out',
    actions: [
      'Find a suitable location (flat area, near water, good views)',
      'Start simple: 7x7 or 9x9 square with 3 block high walls',
      'Add a door and windows for light and visibility',
      'Place your bed inside to set your spawn point'
    ],
    tips: [
      'Light up your shelter with torches to prevent monster spawns',
      'Build on solid ground, not over caves or ravines',
      'Consider proximity to resources but also build away from other players',
      'You can always expand later - start functional, make it pretty later'
    ]
  },
  {
    title: 'Essential Crafting Setup',
    icon: Hammer,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    priority: 'high',
    timeFrame: '45-90 minutes',
    description: 'Set up your basic crafting and storage systems',
    actions: [
      'Craft and place chests for storage (organize by material type)',
      'Set up a furnace for cooking food and smelting ores',
      'Make a full set of stone tools (sword, pickaxe, axe, shovel)',
      'Craft armor if you have enough materials (leather or iron)'
    ],
    tips: [
      'Label your chests or organize them logically',
      'Keep your workbench and furnace easily accessible',
      'Stock up on torches - you\'ll need many for mining',
      'Consider making a shield for extra protection'
    ]
  },
  {
    title: 'Mining Your First Ores',
    icon: Pickaxe,
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    priority: 'medium',
    timeFrame: '60+ minutes',
    description: 'Venture underground for better materials',
    actions: [
      'Dig a staircase down to Y-level 11-16 (best for iron and coal)',
      'Bring plenty of torches, food, and backup tools',
      'Look for iron ore (cook in furnace to make iron ingots)',
      'Mine coal for fuel and torches'
    ],
    tips: [
      'Never dig straight down - you might fall into lava or a cave',
      'Place torches on the right wall when exploring to find your way back',
      'Listen for water, lava, or monster sounds',
      'Consider using the Mining World (/worlds) to preserve the main world'
    ]
  },
  {
    title: 'Avoiding Common Dangers',
    icon: Shield,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    priority: 'critical',
    timeFrame: 'Always',
    description: 'Stay safe and avoid losing your items',
    actions: [
      'Never go out at night without armor and weapons',
      'Always carry food and torches when exploring',
      'Be extremely careful around lava and deep drops',
      'Don\'t venture too far from your base without marking the path'
    ],
    tips: [
      'Write down your base coordinates or use a map',
      'Keep spare tools and armor in chests at base',
      'If you die, you have 5 minutes to get back to your items',
      'Consider making your bed the first priority to set spawn'
    ]
  }
]

const essentialCommands = [
  { command: '/rtp', description: 'Random teleport to survival world (limited uses)' },
  { command: '/spawn', description: 'Return to the server spawn area' },
  { command: '/sethome', description: 'Set your home location' },
  { command: '/home', description: 'Teleport to your set home' },
  { command: '/worlds', description: 'Access the worlds menu' },
  { command: '/help', description: 'View available commands' }
]

const dangerWarnings = [
  {
    danger: 'Nighttime Monsters',
    icon: Moon,
    severity: 'High',
    description: 'Zombies, skeletons, and spiders spawn in the dark',
    prevention: 'Stay indoors at night, light up your area with torches, sleep in a bed'
  },
  {
    danger: 'Fall Damage',
    icon: AlertTriangle,
    severity: 'Medium',
    description: 'Falling from heights can kill you and you\'ll lose all items',
    prevention: 'Be careful near cliffs, place blocks when building up, carry water buckets'
  },
  {
    danger: 'Lava',
    icon: AlertTriangle,
    severity: 'Extreme',
    description: 'Lava destroys items and can kill you instantly',
    prevention: 'Always carry a water bucket when mining, dig carefully, have fire resistance potions'
  },
  {
    danger: 'Getting Lost',
    icon: Mountain,
    severity: 'Medium',
    description: 'Easy to lose your base location and wander aimlessly',
    prevention: 'Write down coordinates, use /sethome command, place landmarks, craft maps'
  }
]

const nextSteps = [
  'Set up farms for sustainable food production',
  'Explore and claim land to protect your builds',
  'Join or create a town with other players',
  'Learn about the server\'s economy and jobs system',
  'Explore other worlds (Mining, Nether, End)',
  'Participate in server events and competitions'
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
  const [copied, setCopied] = useState(false)

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
        title={copied ? 'Copied!' : 'Copy command'}
      >
        <Copy className="w-4 h-4" />
      </button>
    </div>
  )
}

function SurvivalStep({ step, index }: { step: typeof survivalSteps[0]; index: number }) {
  const priorityColors: { [key: string]: string } = {
    critical: 'bg-red-100 text-red-800',
    high: 'bg-orange-100 text-orange-800',
    medium: 'bg-blue-100 text-blue-800'
  }

  return (
    <motion.div variants={itemVariants}>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
              {index + 1}
            </div>
            <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center`}>
              <step.icon className={`w-6 h-6 ${step.color}`} />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[step.priority]}`}>
                  {step.priority}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                  {step.timeFrame}
                </span>
              </div>
            </div>
            <p className="text-foreground-muted text-sm mb-4">
              {step.description}
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Actions:</h4>
            <ul className="space-y-1">
              {step.actions.map((action) => (
                <li key={action} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground-muted">{action}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Tips:</h4>
            <ul className="space-y-1">
              {step.tips.map((tip) => (
                <li key={tip} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground-muted">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function BasicSurvivalPage() {
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
          <Link href="/docs/getting-started" className="hover:text-primary transition-colors">
            Getting Started
          </Link>
          <span>/</span>
          <span className="text-foreground">Basic Survival</span>
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
              href="/docs/getting-started"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Basic Survival Guide</h1>
              <p className="subtitle">
                Everything you need to know to survive your first day on TumbleCraft and build a strong foundation for your adventure.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Overview */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Your Survival Priority Checklist
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-red-700">Critical (First Hour):</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Get to survival world with /rtp</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Collect 20+ wood logs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>Build basic shelter with bed</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-orange-700">High (First 2 Hours):</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span>Secure sustainable food source</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span>Set up crafting area with chests</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span>Mine for iron and coal</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-blue-700">Medium (First Day):</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Explore and claim your land</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Set up basic farms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Learn server commands</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Survival Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Step-by-Step Survival Guide</h2>
          
          <div className="space-y-6">
            {survivalSteps.map((step, index) => (
              <SurvivalStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Danger Warnings */}
        <motion.div 
          className="bg-amber-50 rounded-2xl shadow-lg border border-amber-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h3 className="text-lg font-semibold text-foreground">
              Common Dangers to Avoid
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dangerWarnings.map((warning) => (
              <div key={warning.danger} className="bg-white rounded-lg p-4 border border-amber-200">
                <div className="flex items-start space-x-3 mb-2">
                  <warning.icon className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-foreground">{warning.danger}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        warning.severity === 'Extreme' ? 'bg-red-100 text-red-800' :
                        warning.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {warning.severity}
                      </span>
                    </div>
                    <p className="text-sm text-foreground-muted mb-2">{warning.description}</p>
                    <p className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded">
                      <strong>Prevention:</strong> {warning.prevention}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Essential Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Essential Commands for New Players
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {essentialCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            After Basic Survival: What&apos;s Next?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-primary mb-3">
                Building & Development:
              </h4>
              <ul className="space-y-2">
                {nextSteps.slice(0, 3).map((step) => (
                  <li key={step} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span className="text-sm text-foreground-muted">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-accent mb-3">
                Server Features & Community:
              </h4>
              <ul className="space-y-2">
                {nextSteps.slice(3).map((step) => (
                  <li key={step} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2" />
                    <span className="text-sm text-foreground-muted">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to Explore More?
              </h3>
              <p className="text-foreground-muted">
                Now that you know the survival basics, learn about server features, land claiming, and the economy system.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/docs/getting-started/world-selection"
                className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                World Selection
              </Link>
              <Link 
                href="/docs/getting-started/claiming-land"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
              >
                Next: Land Claiming
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}