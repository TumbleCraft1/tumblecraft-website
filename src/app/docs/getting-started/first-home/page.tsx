'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, ArrowRight, Home, MapPin, Zap, Target, 
  AlertTriangle, Clock, Users, Heart, Star, 
  Copy, CheckCircle, XCircle, Info, Compass, Map
} from 'lucide-react'
import { useState } from 'react'

const homeSteps = [
  {
    title: 'Understanding Home Teleportation',
    icon: Home,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    priority: 'critical',
    timeFrame: '2 minutes',
    description: 'Learn what home teleportation is and why it\'s essential',
    actions: [
      'Home teleportation lets you instantly travel to saved locations',
      'You can save multiple home locations for different purposes',
      'Homes persist even if you log off or die',
      'Each home has a unique name to help you organize them'
    ],
    tips: [
      'Think of homes as bookmarks for important locations',
      'Homes are perfect for your base, farms, shops, and resource areas',
      'Unlike beds, homes work from anywhere in any dimension',
      'You can teleport to homes even if the chunks aren\'t loaded'
    ]
  },
  {
    title: 'Setting Your First Home',
    icon: MapPin,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    priority: 'critical',
    timeFrame: '1 minute',
    description: 'Create your first home at your base location',
    actions: [
      'Stand at the exact spot you want to return to',
      'Type /sethome to create your default home',
      'You\'ll see a confirmation message when it\'s set',
      'Your first home is automatically named "home"'
    ],
    tips: [
      'Set your home inside your base, not outside the door',
      'Choose a safe spot away from lava, cliffs, or mob spawners',
      'Consider setting it near your bed and storage chests',
      'You can update your home location by using /sethome again'
    ]
  },
  {
    title: 'Understanding Home Limits',
    icon: Star,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    priority: 'high',
    timeFrame: '3 minutes',
    description: 'Learn about home slots and how to unlock more',
    actions: [
      'New players start with 2 home slots',
      'Each level up grants you 1 additional home slot',
      'Higher ranks may have bonus home slots',
      'Check your current limit with /homes or /sethome'
    ],
    tips: [
      'Level up by playing, mining, building, and completing quests',
      'Plan your homes strategically - you can\'t have unlimited homes',
      'Consider temporary vs permanent home locations',
      'Delete unused homes to make space for new ones'
    ]
  },
  {
    title: 'Teleporting to Your Home',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    priority: 'critical',
    timeFrame: '1 minute',
    description: 'Learn how to return to your saved home locations',
    actions: [
      'Type /home to teleport to your default home',
      'Use /home [name] to go to a specific named home',
      'There\'s a short cooldown between teleportations',
      'You can\'t teleport while in combat or moving'
    ],
    tips: [
      'Stand still for a few seconds before the teleport completes',
      'You can\'t use /home while taking damage from mobs',
      'Home teleportation works from any world or dimension',
      'Keep your inventory organized before teleporting'
    ]
  },
  {
    title: 'Managing Multiple Homes',
    icon: Map,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    priority: 'medium',
    timeFrame: '5 minutes',
    description: 'Set up and organize multiple home locations',
    actions: [
      'Use /sethome [name] to create named homes (e.g., /sethome farm)',
      'Common names: base, farm, mine, shop, nether, end',
      'Type /homes to see all your current home locations',
      'Use descriptive names to remember each home\'s purpose'
    ],
    tips: [
      'Create homes for different activities: mining, farming, trading',
      'Set homes at key infrastructure like XP farms or mob grinders',
      'Consider homes in different biomes for resource gathering',
      'Don\'t forget homes in the Nether for efficient travel'
    ]
  },
  {
    title: 'Deleting Unwanted Homes',
    icon: XCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    priority: 'medium',
    timeFrame: '2 minutes',
    description: 'Clean up your home list and free up slots',
    actions: [
      'Use /delhome [name] to delete a specific home',
      'Use /delhome home to delete your default home',
      'Confirm the deletion when prompted',
      'The home slot becomes available immediately'
    ],
    tips: [
      'Delete temporary homes you no longer need',
      'Clean up homes from old bases or projects',
      'Be careful - deleted homes cannot be recovered',
      'Consider renaming homes instead of deleting them'
    ]
  }
]

const strategicTips = [
  {
    category: 'Essential Home Locations',
    icon: Target,
    tips: [
      'Main Base - Your primary storage and crafting area',
      'Resource Farm - For food, wood, and renewable materials',
      'Mining Operation - Deep underground or in Mining World',
      'Nether Hub - For fast travel across the overworld'
    ]
  },
  {
    category: 'Smart Placement',
    icon: Compass,
    tips: [
      'Place homes near fast travel systems (rails, ice roads)',
      'Set homes at different Y-levels for varied access',
      'Consider proximity to valuable resources or biomes',
      'Plan for future expansion and infrastructure growth'
    ]
  },
  {
    category: 'Organization Tips',
    icon: Map,
    tips: [
      'Use consistent naming: base, farm1, farm2, mine_iron',
      'Update home locations as your builds grow',
      'Keep one "emergency" home in a very safe location',
      'Set homes at both entrance and core areas of large builds'
    ]
  }
]

const commonMistakes = [
  {
    mistake: 'Setting Homes in Dangerous Locations',
    icon: AlertTriangle,
    severity: 'High',
    description: 'Placing homes near lava, cliffs, or mob spawners',
    solution: 'Always test the safety of a location before setting a home. Ensure good lighting and stable ground.'
  },
  {
    mistake: 'Not Updating Old Homes',
    icon: Clock,
    severity: 'Medium',
    description: 'Keeping homes at outdated or abandoned locations',
    solution: 'Regularly review your home list with /homes and update or delete unused locations.'
  },
  {
    mistake: 'Poor Naming Conventions',
    icon: Info,
    severity: 'Low',
    description: 'Using unclear names like "home1", "place", or random words',
    solution: 'Use descriptive names that clearly indicate the location\'s purpose: farm, mine, shop, etc.'
  },
  {
    mistake: 'Not Planning for Growth',
    icon: Users,
    severity: 'Medium',
    description: 'Using all home slots without considering future needs',
    solution: 'Save some home slots for new projects. Level up to unlock more slots, or delete temporary homes.'
  }
]

const homeCommands = [
  { command: '/sethome', description: 'Set your default home at current location' },
  { command: '/sethome [name]', description: 'Set a named home (e.g., /sethome farm)' },
  { command: '/home', description: 'Teleport to your default home' },
  { command: '/home [name]', description: 'Teleport to a specific named home' },
  { command: '/homes', description: 'List all your current home locations' },
  { command: '/delhome [name]', description: 'Delete a specific home location' }
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

function HomeStep({ step, index }: { step: typeof homeSteps[0]; index: number }) {
  const priorityColors = {
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
            <h4 className="text-sm font-medium text-foreground mb-2">Key Points:</h4>
            <ul className="space-y-1">
              {step.actions.map((action, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground-muted">{action}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Pro Tips:</h4>
            <ul className="space-y-1">
              {step.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start space-x-2">
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

export default function FirstHomePage() {
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
          <span className="text-foreground">Setting Your Home</span>
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
              <h1 className="hero-title">Setting Your First Home</h1>
              <p className="subtitle">
                Master TumbleCraft's home teleportation system - your key to efficient travel and never getting lost again.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div 
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Quick Start: Set Your First Home in 30 Seconds
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span>Stand at your base</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span>Type <code className="bg-white px-1 rounded">/sethome</code></span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span>See confirmation message</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                  <span>Use <code className="bg-white px-1 rounded">/home</code> to return</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Home System Guide */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Complete Home System Guide</h2>
          
          <div className="space-y-6">
            {homeSteps.map((step, index) => (
              <HomeStep key={step.title} step={step} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Strategic Placement Tips */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Strategic Home Placement
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategicTips.map((section) => (
              <div key={section.category} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <section.icon className="w-5 h-5 text-primary" />
                  <h4 className="font-medium text-foreground">{section.category}</h4>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground-muted">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Common Mistakes */}
        <motion.div 
          className="bg-amber-50 rounded-2xl shadow-lg border border-amber-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h3 className="text-lg font-semibold text-foreground">
              Common Mistakes to Avoid
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonMistakes.map((mistake) => (
              <div key={mistake.mistake} className="bg-white rounded-lg p-4 border border-amber-200">
                <div className="flex items-start space-x-3 mb-2">
                  <mistake.icon className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-foreground">{mistake.mistake}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        mistake.severity === 'High' ? 'bg-red-100 text-red-800' :
                        mistake.severity === 'Medium' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {mistake.severity}
                      </span>
                    </div>
                    <p className="text-sm text-foreground-muted mb-2">{mistake.description}</p>
                    <p className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded">
                      <strong>Solution:</strong> {mistake.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Command Reference */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Complete Home Command Reference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {homeCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Advanced Tips */}
        <motion.div 
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Pro Tips for Advanced Home Management
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-purple-700 mb-2">Naming Strategies:</h4>
                  <ul className="space-y-1 text-sm text-foreground-muted">
                    <li>• Use prefixes: "farm_wheat", "mine_iron", "shop_main"</li>
                    <li>• Include coordinates for remote locations</li>
                    <li>• Use numbers for similar locations: "outpost1", "outpost2"</li>
                    <li>• Keep names short but descriptive</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-pink-700 mb-2">Efficiency Tips:</h4>
                  <ul className="space-y-1 text-sm text-foreground-muted">
                    <li>• Set homes before starting big projects</li>
                    <li>• Update home locations as builds expand</li>
                    <li>• Use homes to create travel networks</li>
                    <li>• Consider cooldowns when planning routes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to Explore More?
              </h3>
              <p className="text-foreground-muted">
                Now that you know how to set up homes, learn about claiming land to protect your builds and territory.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="/docs/getting-started/basic-survival"
                className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Basic Survival
              </Link>
              <Link 
                href="/docs/getting-started/claiming-land"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
              >
                Next: Claiming Land
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}