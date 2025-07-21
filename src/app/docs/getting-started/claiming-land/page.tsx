'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, ArrowRight, Shield, MapPin, Users, Lock, 
  AlertTriangle, Pickaxe, Target, Copy, CheckCircle, 
  Home, Zap, Settings, Eye, HelpCircle
} from 'lucide-react'
import { useState } from 'react'

const whyClaimLand = [
  {
    title: 'Protect Your Builds',
    description: 'Keep your house, farms, and creations completely safe from griefing and theft',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    examples: [
      'No one can break your blocks or steal your items',
      'Your chests are completely secure',
      'Animals and pets are protected in your claim',
      'Fire and explosions can\'t damage your builds'
    ]
  },
  {
    title: 'Control Your Space',
    description: 'Decide who can visit, build, or use items in your territory',
    icon: Users,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    examples: [
      'Invite friends to build with you',
      'Keep strangers out of private areas',
      'Create public spaces for community use',
      'Set different permissions for different areas'
    ]
  },
  {
    title: 'Peace of Mind',
    description: 'Build freely without worrying about losing your progress',
    icon: Home,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    examples: [
      'Take breaks without fear of grief',
      'Work on large projects confidently',
      'Store valuable items safely',
      'Focus on creativity, not security'
    ]
  }
]

const claimingSteps = [
  {
    step: 1,
    title: 'Get Your Golden Shovel',
    description: 'This special tool is your land claiming device',
    icon: Pickaxe,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    details: [
      'You get a free golden shovel when you first join the server',
      'If you lose it, craft one with 2 sticks + 3 gold ingots',
      'Hold the shovel to see how many claimblocks you have',
      'The shovel only works for claiming - you can\'t dig with it'
    ],
    tips: [
      'Keep your golden shovel safe - store it in a chest when not claiming',
      'You can have multiple golden shovels if needed',
      'The shovel will show green particle effects when claiming'
    ]
  },
  {
    step: 2,
    title: 'Choose Your Location',
    description: 'Find the perfect spot to call home',
    icon: MapPin,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    details: [
      'Look for flat or interesting terrain that suits your build style',
      'Make sure you\'re at least 100 blocks from other players\' claims',
      'Consider access to resources like water, trees, and caves',
      'Think about room for future expansion'
    ],
    tips: [
      'Use F3 (Java) or coordinates display to remember your location',
      'Walk around the area first to make sure you like it',
      'Check nearby for other players\' builds to avoid conflicts'
    ]
  },
  {
    step: 3,
    title: 'Mark Your First Corner',
    description: 'Right-click with your golden shovel to start',
    icon: Target,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    details: [
      'Right-click any block with your golden shovel',
      'You\'ll see green particles and a message about claiming',
      'This marks the first corner of your rectangular claim',
      'Don\'t worry about getting it perfect - you can always expand later'
    ],
    tips: [
      'Choose a corner that gives you room to expand in all directions',
      'The claim will go from bedrock to sky, so think in 2D',
      'You can claim in any shape, but rectangular is easiest to start'
    ]
  },
  {
    step: 4,
    title: 'Mark Your Second Corner',
    description: 'Complete your claim by marking the opposite corner',
    icon: CheckCircle,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    details: [
      'Walk to the diagonal opposite corner of where you want to claim',
      'Right-click with the golden shovel again',
      'You\'ll see more particles and a confirmation message',
      'Your land is now protected!'
    ],
    tips: [
      'Make your first claim larger than you think you need',
      'A good starter size is 50x50 blocks or bigger',
      'You can always abandon and reclaim if you make a mistake'
    ]
  }
]

const claimblockInfo = {
  whatAre: [
    'Claimblocks are like "currency" for claiming land',
    'Each block of claimed area costs 1 claimblock',
    'You start with enough claimblocks for a decent-sized base',
    'They\'re automatically earned just by playing on the server'
  ],
  howMany: [
    'New players start with 2,500 claimblocks',
    'That\'s enough for a 50x50 area (2,500 blocks)',
    'You earn more claimblocks every hour you play',
    'Voting for the server gives bonus claimblocks'
  ],
  howToGet: [
    'Automatically earned: ~100 per hour of active play',
    'Voting rewards: Extra claimblocks for voting',
    'Server events: Bonus claimblocks during special events',
    'Donor ranks: Higher ranks earn claimblocks faster'
  ]
}

const basicCommands = [
  {
    command: '/trust <player>',
    description: 'Give a friend full permissions in your claim',
    example: '/trust Steve - Steve can now build in your claim'
  },
  {
    command: '/untrust <player>',
    description: 'Remove all permissions from a player',
    example: '/untrust Steve - Steve loses access to your claim'
  },
  {
    command: '/claiminfo',
    description: 'See information about the claim you\'re standing in',
    example: 'Shows owner, size, and trusted players'
  },
  {
    command: '/abandonclaim',
    description: 'Delete the claim you\'re standing in (get claimblocks back)',
    example: 'Use when you want to move your claim somewhere else'
  }
]

const commonMistakes = [
  {
    mistake: 'Claiming Too Small',
    why: 'Many new players claim tiny areas and quickly run out of space',
    solution: 'Start with at least 50x50 blocks, you can always abandon and reclaim larger',
    icon: Target,
    severity: 'Medium'
  },
  {
    mistake: 'Not Trusting Friends',
    why: 'Forgetting to trust friends means they can\'t help you build',
    solution: 'Use /trust <playername> to let friends build in your claim',
    icon: Users,
    severity: 'Low'
  },
  {
    mistake: 'Claiming in Bad Location',
    why: 'Claiming in someone else\'s area or too close to spawn',
    solution: 'Explore first, make sure you\'re 100+ blocks from other claims',
    icon: MapPin,
    severity: 'High'
  },
  {
    mistake: 'Losing Your Golden Shovel',
    why: 'Without the shovel, you can\'t expand or create new claims',
    solution: 'Store spare shovels in chests, or craft new ones with gold',
    icon: Pickaxe,
    severity: 'Medium'
  },
  {
    mistake: 'Not Understanding Claimblocks',
    why: 'Running out of claimblocks and not knowing how to get more',
    solution: 'Play actively to earn more, vote for the server, or buy them',
    icon: Zap,
    severity: 'Low'
  }
]

const nextStepsAfterClaiming = [
  'Expand your claim as your builds grow larger',
  'Learn about subdivisions for organizing different areas',
  'Understand different trust levels (container, access, build)',
  'Explore the advanced claiming guide for complex setups',
  'Join or create a town with other players',
  'Learn about the economy system and shops'
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

function CommandCard({ command, description, example }: { 
  command: string; 
  description: string;
  example: string;
}) {
  const [copied, setCopied] = useState(false)

  const copyCommand = () => {
    navigator.clipboard.writeText(command.split(' ')[0])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <code className="text-sm font-mono text-primary font-bold">{command}</code>
        <button
          onClick={copyCommand}
          className="p-1 text-gray-400 hover:text-primary transition-colors"
          title={copied ? 'Copied!' : 'Copy command'}
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>
      <p className="text-sm text-foreground-muted mb-2">{description}</p>
      <p className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
        <strong>Example:</strong> {example}
      </p>
    </div>
  )
}

function ClaimingStep({ step, index }: { step: typeof claimingSteps[0]; index: number }) {
  return (
    <motion.div variants={itemVariants}>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
              {step.step}
            </div>
            <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center`}>
              <step.icon className={`w-6 h-6 ${step.color}`} />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-foreground-muted text-sm mb-4">
              {step.description}
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">What to do:</h4>
            <ul className="space-y-1">
              {step.details.map((detail, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground-muted">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-2">Pro tips:</h4>
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

function MistakeCard({ mistake: mistakeData }: { mistake: typeof commonMistakes[0] }) {
  const severityColors = {
    Low: 'bg-blue-100 text-blue-800',
    Medium: 'bg-orange-100 text-orange-800',
    High: 'bg-red-100 text-red-800'
  }

  return (
    <div className="bg-white rounded-lg p-4 border border-amber-200">
      <div className="flex items-start space-x-3 mb-3">
        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
          <mistakeData.icon className="w-5 h-5 text-amber-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-medium text-foreground">{mistakeData.mistake}</h4>
            <span className={`px-2 py-1 rounded text-xs font-medium ${severityColors[mistakeData.severity]}`}>
              {mistakeData.severity}
            </span>
          </div>
          <p className="text-sm text-foreground-muted mb-2">{mistakeData.why}</p>
          <p className="text-sm text-green-700 bg-green-50 px-2 py-1 rounded">
            <strong>Solution:</strong> {mistakeData.solution}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ClaimingLandPage() {
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
          <span className="text-foreground">Claiming Land</span>
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
              <h1 className="hero-title">Claiming Your Land</h1>
              <p className="subtitle">
                Learn how to protect your builds and create your own safe space on TumbleCraft. 
                This beginner's guide covers everything you need to get started with land claiming.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div 
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Quick Start: Claiming in 4 Steps
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold text-sm mx-auto">1</div>
                  <div className="text-center">
                    <p className="font-medium text-foreground">Get Golden Shovel</p>
                    <p className="text-xs text-foreground-muted">Free on first join</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm mx-auto">2</div>
                  <div className="text-center">
                    <p className="font-medium text-foreground">Find Good Spot</p>
                    <p className="text-xs text-foreground-muted">100+ blocks from others</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm mx-auto">3</div>
                  <div className="text-center">
                    <p className="font-medium text-foreground">Right-Click Corner</p>
                    <p className="text-xs text-foreground-muted">First corner with shovel</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold text-sm mx-auto">4</div>
                  <div className="text-center">
                    <p className="font-medium text-foreground">Right-Click Opposite</p>
                    <p className="text-xs text-foreground-muted">Complete the claim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Claim Land */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Should You Claim Land?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {whyClaimLand.map((reason) => (
              <motion.div key={reason.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${reason.bgColor} flex items-center justify-center`}>
                      <reason.icon className={`w-6 h-6 ${reason.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {reason.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">What this means:</h4>
                    <ul className="space-y-1">
                      {reason.examples.map((example) => (
                        <li key={example} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-foreground-muted">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Step by Step Guide */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Step-by-Step Claiming Guide</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {claimingSteps.map((step, index) => (
              <ClaimingStep key={step.step} step={step} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Understanding Claimblocks */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Understanding Claimblocks
              </h3>
              <p className="text-foreground-muted">
                Claimblocks are the "currency" used to claim land. Think of them like money for buying territory.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3 text-blue-600">
                What Are Claimblocks?
              </h4>
              <ul className="space-y-2">
                {claimblockInfo.whatAre.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                    <span className="text-sm text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3 text-green-600">
                How Many Do You Get?
              </h4>
              <ul className="space-y-2">
                {claimblockInfo.howMany.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                    <span className="text-sm text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-foreground mb-3 text-purple-600">
                How to Get More?
              </h4>
              <ul className="space-y-2">
                {claimblockInfo.howToGet.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                    <span className="text-sm text-foreground-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Pro Tip:</strong> Hold your golden shovel to see exactly how many claimblocks you have remaining. 
              The game will show you this information in your chat!
            </p>
          </div>
        </motion.div>

        {/* Basic Trust Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-6 h-6 text-foreground" />
            <h3 className="text-lg font-semibold text-foreground">
              Basic Commands for Managing Your Claim
            </h3>
          </div>
          
          <p className="text-foreground-muted mb-6">
            Once you've claimed your land, you'll want to invite friends to build with you. 
            Here are the essential commands every new player should know:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {basicCommands.map((cmd) => (
              <CommandCard 
                key={cmd.command} 
                command={cmd.command} 
                description={cmd.description}
                example={cmd.example}
              />
            ))}
          </div>
        </motion.div>

        {/* Common Mistakes */}
        <motion.div 
          className="bg-amber-50 rounded-2xl shadow-lg border border-amber-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            <h3 className="text-lg font-semibold text-foreground">
              Common Mistakes to Avoid
            </h3>
          </div>
          
          <p className="text-foreground-muted mb-6">
            Learn from other players' mistakes! Here are the most common issues new players face when claiming land:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonMistakes.map((mistake) => (
              <MistakeCard key={mistake.mistake} mistake={mistake} />
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Next Steps After Claiming Your Land
          </h3>
          <p className="text-foreground-muted mb-6">
            Congratulations on claiming your first piece of land! Here's what you can explore next:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-primary mb-3">
                Expand Your Claiming Knowledge:
              </h4>
              <ul className="space-y-2">
                {nextStepsAfterClaiming.slice(0, 3).map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                    <span className="text-sm text-foreground-muted">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium text-accent mb-3">
                Explore Server Features:
              </h4>
              <ul className="space-y-2">
                {nextStepsAfterClaiming.slice(3).map((step, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
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
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to Claim Your Land?
              </h3>
              <p className="text-foreground-muted">
                You now know everything you need to protect your builds and create your own safe space on TumbleCraft!
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
                href="/docs/server/claiming"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
              >
                Advanced Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}