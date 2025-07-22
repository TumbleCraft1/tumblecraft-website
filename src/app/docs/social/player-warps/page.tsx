'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  Store, 
  Compass, 
  Copy,
  Star,
  Eye,
  Plus,
  Shield,
  Crown,
  Building,
  Palette,
  Pickaxe,
  Heart,
} from 'lucide-react'
import { useState } from 'react'

const warpCategories = [
  {
    title: 'Player Shops',
    description: 'Unique player-run stores offering specialized items and services',
    icon: Store,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    examples: [
      'Enchanted gear emporiums',
      'Building material suppliers',
      'Food and farming goods',
      'Rare item collections'
    ]
  },
  {
    title: 'Showcase Builds',
    description: 'Impressive creations and architectural masterpieces',
    icon: Building,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    examples: [
      'Massive castles and fortresses',
      'Modern city districts',
      'Pixel art galleries',
      'Recreation of famous landmarks'
    ]
  },
  {
    title: 'Community Hubs',
    description: 'Social gathering places and activity centers',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    examples: [
      'Meeting halls and amphitheaters',
      'Game arenas and racing tracks',
      'Social clubs and hangouts',
      'Team headquarters'
    ]
  },
  {
    title: 'Resource Areas',
    description: 'Farms, mining sites, and resource gathering locations',
    icon: Pickaxe,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    examples: [
      'Automated farms and crop fields',
      'Mining operations and quarries',
      'Tree farms and forests',
      'Mob grinders and XP farms'
    ]
  },
  {
    title: 'Creative Spaces',
    description: 'Art installations, gardens, and aesthetic locations',
    icon: Palette,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    examples: [
      'Beautiful gardens and parks',
      'Art galleries and museums',
      'Themed attractions',
      'Peaceful meditation spots'
    ]
  },
  {
    title: 'Adventure Sites',
    description: 'Challenges, mazes, and exploration destinations',
    icon: Compass,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    examples: [
      'Parkour courses and challenges',
      'Mazes and puzzle rooms',
      'Treasure hunts and quests',
      'PvP training areas'
    ]
  }
]

const warpCommands = [
  { command: '/pw set <name>', description: 'Create your own player warp at your current location' },
  { command: '/playerwarps', description: 'Open the player warps menu to browse all available warps' },
  { command: '/pw <warpname>', description: 'Teleport directly to a specific player warp' },
  { command: '/pw list', description: 'View a list of all available player warps' },
  { command: '/pw delete <name>', description: 'Remove your own player warp (owner only)' },
  { command: '/pw info <name>', description: 'Get detailed information about a specific warp' }
]

const warpTips = [
  {
    category: 'Creating Great Warps',
    icon: Plus,
    tips: [
      'Choose memorable and descriptive names',
      'Build something unique worth visiting',
      'Add clear signs explaining your warp\'s purpose',
      'Make sure the warp location is safe and accessible'
    ]
  },
  {
    category: 'Growing Your Community',
    icon: Heart,
    tips: [
      'Promote your warp in chat respectfully',
      'Collaborate with other players on projects',
      'Update and maintain your warp regularly',
      'Welcome visitors and be helpful'
    ]
  },
  {
    category: 'Exploring Others\' Warps',
    icon: Eye,
    tips: [
      'Be respectful of other players\' property',
      'Follow any posted rules or guidelines',
      'Leave positive feedback and appreciation',
      'Support player shops by making purchases'
    ]
  }
]

const warpBenefits = [
  {
    title: 'Share Your Creations',
    description: 'Showcase your builds and projects to the entire community',
    icon: Star,
    benefits: [
      'Get recognition for your hard work',
      'Inspire other players with your creativity',
      'Receive feedback and suggestions',
      'Build your reputation on the server'
    ]
  },
  {
    title: 'Create Economic Opportunities',
    description: 'Set up shops and services to earn money and resources',
    icon: Store,
    benefits: [
      'Generate passive income from your creations',
      'Trade specialized goods with other players',
      'Build business relationships',
      'Contribute to the server economy'
    ]
  },
  {
    title: 'Build Community Connections',
    description: 'Bring players together through shared spaces and activities',
    icon: Users,
    benefits: [
      'Make new friends and allies',
      'Host events and gatherings',
      'Create collaborative projects',
      'Strengthen the server community'
    ]
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

function CommandCard({ command, description }: { command: string; description: string }) {
  const [, _setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText(command)
    _setCopied(true)
    setTimeout(() => _setCopied(false), 2000)
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

export default function PlayerWarpsPage() {
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
          <Link href="/docs/social" className="hover:text-primary transition-colors">
            Social
          </Link>
          <span>/</span>
          <span className="text-foreground">Player Warps</span>
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
              href="/docs/social"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Player Warps</h1>
              <p className="subtitle">
                Create and share custom warp points to showcase your builds, run shops, 
                and bring the community together at amazing player-created destinations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Start */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                How Player Warps Work
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Create a Warp</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Use <code className="bg-gray-100 px-1 rounded text-xs">/pw set &lt;name&gt;</code> at your location</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Browse Warps</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Open <code className="bg-gray-100 px-1 rounded text-xs">/playerwarps</code> menu to explore</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Visit & Share</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Teleport with <code className="bg-gray-100 px-1 rounded text-xs">/pw &lt;name&gt;</code></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Warp Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Types of Player Warps</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {warpCategories.map((category) => (
              <motion.div key={category.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-foreground mb-2">Popular Examples:</h4>
                    {category.examples.map((example) => (
                      <div key={`category-${category.title.replace(/\s/g, '-')}-example-${example.substring(0, 15).replace(/\s/g, '-')}`} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <span className="text-sm text-foreground-muted">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits of Player Warps */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Create Player Warps?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {warpBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-foreground-muted">{benefit.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {benefit.benefits.map((item) => (
                    <div key={`benefit-${benefit.title.replace(/\s/g, '-')}-item-${item.substring(0, 15).replace(/\s/g, '-')}`} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground-muted">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Tips */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Player Warp Success Tips</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {warpTips.map((tipCategory) => (
              <motion.div key={tipCategory.category} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <tipCategory.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {tipCategory.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {tipCategory.tips.map((tip) => (
                      <div key={`category-${tipCategory.category.replace(/\s/g, '-')}-tip-${tip.substring(0, 20).replace(/\s/g, '-')}`} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground-muted">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Player Warp Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Player Warp Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {warpCommands.map((cmd) => (
              <CommandCard key={`warp-command-${cmd.command.replace(/[^a-zA-Z0-9]/g, '-')}`} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Community Guidelines */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">Community Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Creating Warps</h4>
                  <div className="space-y-2 text-sm text-green-600">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Choose appropriate and family-friendly names</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Make sure your build is complete before creating the warp</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Provide clear signs explaining your warp&apos;s purpose</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Don&apos;t create warps just to teleport to random locations</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Visiting Warps</h4>
                  <div className="space-y-2 text-sm text-green-600">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Respect other players&apos; property and builds</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Don&apos;t grief or damage anything at player warps</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Follow any posted rules or instructions</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Be kind and supportive to warp creators</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integration with Other Systems */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Player Warps & Other Systems</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
              <div className="w-8 h-8 bg-yellow-200 rounded-lg flex items-center justify-center mb-4">
                <Store className="w-4 h-4 text-yellow-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Economy Integration</h3>
              <p className="text-sm text-foreground-muted">
                Set up shops at your warps to generate income. Use the auction system to advertise 
                your warp-based business and attract more customers.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="w-8 h-8 bg-blue-200 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-4 h-4 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Team Projects</h3>
              <p className="text-sm text-foreground-muted">
                Create team-based warps for collaborative projects. Team members can work together 
                on massive builds and share the recognition.
              </p>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="w-8 h-8 bg-green-200 rounded-lg flex items-center justify-center mb-4">
                <Crown className="w-4 h-4 text-green-700" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Event Hosting</h3>
              <p className="text-sm text-foreground-muted">
                Use your warps to host community events, competitions, and gatherings. 
                Create dedicated spaces for server activities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Share Your Creations?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Player warps are one of the best ways to showcase your builds and contribute to 
            the TumbleCraft community. Start creating your own warp destinations today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Create Your First Warp</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Build something amazing, then set a warp to share it with everyone.
              </p>
              <div className="bg-gray-100 px-3 py-2 rounded text-sm font-mono text-primary">
                /pw set &lt;name&gt;
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Explore Other Warps</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Browse the amazing creations other players have shared.
              </p>
              <div className="bg-gray-100 px-3 py-2 rounded text-sm font-mono text-primary">
                /playerwarps
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Connect & Collaborate</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Join teams and work on collaborative warp projects together.
              </p>
              <Link 
                href="/docs/social/teams"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                <Users className="w-4 h-4 mr-2" />
                Teams Guide
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}