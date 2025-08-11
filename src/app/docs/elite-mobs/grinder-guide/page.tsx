'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Cog, Target, Shield, Zap, AlertTriangle, TrendingUp, Clock } from 'lucide-react'

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

const grinderTypes = [
  {
    name: 'Dark Room Spawner',
    difficulty: 'Beginner',
    efficiency: '70%',
    safety: 'High',
    description: 'Traditional mob farm adapted for elite mobs with proper lighting control',
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    requirements: [
      'Large dark room (minimum 20x20x6)',
      'Proper lighting controls',
      'Collection system',
      'Safe viewing area'
    ],
    pros: [
      'Safe and predictable',
      'Works with all elite mob types',
      'Easy to expand',
      'Low maintenance'
    ],
    cons: [
      'Slower spawn rates',
      'Requires significant space',
      'Limited to natural spawns'
    ]
  },
  {
    name: 'Elite Arena Fighter',
    difficulty: 'Intermediate',
    efficiency: '85%',
    safety: 'Medium',
    description: 'Semi-automated arena where you fight elite mobs with tactical advantages',
    icon: Target,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    requirements: [
      'Arena with strategic positioning',
      'Escape routes and safe zones',
      'Healing station nearby',
      'Elite-level combat gear'
    ],
    pros: [
      'Higher spawn rates',
      'More engaging gameplay',
      'Better loot from direct kills',
      'Skill improvement'
    ],
    cons: [
      'Requires active participation',
      'Risk of death',
      'Gear durability concerns'
    ]
  },
  {
    name: 'Trap Chamber Complex',
    difficulty: 'Advanced',
    efficiency: '95%',
    safety: 'Low',
    description: 'Automated killing system using environmental hazards and redstone',
    icon: Cog,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    requirements: [
      'Complex redstone circuits',
      'Environmental kill methods',
      'Elite mob detection systems',
      'Automated collection'
    ],
    pros: [
      'Fully automated operation',
      'Maximum efficiency',
      'No direct combat risk',
      'Scales well'
    ],
    cons: [
      'Complex to build',
      'May not work on all elite types',
      'Requires maintenance',
      'Expensive materials'
    ]
  }
]

const designPrinciples = [
  {
    title: 'Spawn Optimization',
    description: 'Maximize elite mob spawn rates through proper area design',
    icon: Zap,
    tips: [
      'Ensure adequate darkness for mob spawning',
      'Use water flows to guide mobs efficiently',
      'Create spawn platforms at optimal heights',
      'Minimize player distance for spawn activation'
    ]
  },
  {
    title: 'Safety First',
    description: 'Design with player protection and escape routes in mind',
    icon: Shield,
    tips: [
      'Always include emergency escape routes',
      'Build safe observation areas',
      'Use barriers to prevent elite mob escapes',
      'Install panic buttons for immediate safety'
    ]
  },
  {
    title: 'Efficiency Maximization',
    description: 'Optimize kill rates and loot collection systems',
    icon: TrendingUp,
    tips: [
      'Minimize time between spawn and death',
      'Automate loot collection where possible',
      'Design for easy maintenance access',
      'Scale design for future expansion'
    ]
  },
  {
    title: 'Elite Considerations',
    description: 'Account for special elite mob behaviors and abilities',
    icon: AlertTriangle,
    tips: [
      'Plan for elite mob special powers',
      'Consider mob level scaling effects',
      'Design around elite defense requirements',
      'Account for varied elite mob sizes'
    ]
  }
]

const buildingSteps = [
  {
    phase: 'Planning',
    duration: '1-2 hours',
    tasks: [
      'Choose location away from bases',
      'Plan spawn chamber dimensions',
      'Design kill mechanism',
      'Plan collection system',
      'Identify material requirements'
    ]
  },
  {
    phase: 'Foundation',
    duration: '2-4 hours',
    tasks: [
      'Clear and flatten build area',
      'Build main structure framework',
      'Install lighting controls',
      'Create water flow channels',
      'Build safety barriers'
    ]
  },
  {
    phase: 'Mechanics',
    duration: '3-6 hours',
    tasks: [
      'Install kill mechanisms',
      'Build collection system',
      'Add redstone circuits',
      'Test spawn rates',
      'Implement safety features'
    ]
  },
  {
    phase: 'Optimization',
    duration: '1-3 hours',
    tasks: [
      'Fine-tune spawn rates',
      'Optimize kill efficiency',
      'Test safety systems',
      'Add quality of life features',
      'Document operation procedures'
    ]
  }
]

const commonIssues = [
  {
    problem: 'Low Spawn Rates',
    causes: ['Too much ambient light', 'Player too far away', 'Spawn cap reached'],
    solutions: ['Check lighting levels', 'Adjust AFK position', 'Clear surrounding areas']
  },
  {
    problem: 'Elite Mobs Escaping',
    causes: ['Insufficient barriers', 'Special mob abilities', 'Design flaws'],
    solutions: ['Strengthen containment', 'Research mob powers', 'Add backup barriers']
  },
  {
    problem: 'System Breaking',
    causes: ['Redstone failures', 'Block updates', 'Server lag'],
    solutions: ['Simplify circuits', 'Add backup systems', 'Regular maintenance']
  },
  {
    problem: 'Poor Efficiency',
    causes: ['Slow kill times', 'Loot not collected', 'Spawn bottlenecks'],
    solutions: ['Optimize kill method', 'Improve collection', 'Expand spawn areas']
  }
]

const safetyGuidelines = [
  'Never build grinders near inhabited areas',
  'Always test systems before full operation',
  'Keep emergency supplies nearby (food, potions)',
  'Have multiple escape routes planned',
  'Monitor for elite mob power changes',
  'Regular maintenance checks are essential'
]

export default function GrinderGuidePage() {
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
          <span className="text-foreground">Grinder Guide</span>
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
              <h1 className="hero-title">⚙️ Elite Mob Grinder Guide</h1>
              <p className="subtitle">
                Design and build efficient elite mob farms for optimal resource generation
              </p>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div 
          className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            <h3 className="text-lg font-semibold text-orange-800">Server Guidelines</h3>
          </div>
          <p className="text-orange-700">
            Elite mob grinders must comply with server rules and may be subject to restrictions. 
            Always check current server policies before building large-scale automated systems. 
            Consider the impact on server performance and other players.
          </p>
        </motion.div>

        {/* Grinder Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Grinder Designs</h2>
          
          <div className="space-y-8">
            {grinderTypes.map((grinder) => (
              <motion.div key={grinder.name} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 rounded-xl ${grinder.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <grinder.icon className={`w-8 h-8 ${grinder.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{grinder.name}</h3>
                        <div className="flex items-center space-x-3 text-sm">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                            {grinder.difficulty}
                          </span>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">
                            {grinder.efficiency} efficiency
                          </span>
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                            {grinder.safety} safety
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-foreground-muted mb-6">
                        {grinder.description}
                      </p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                          <ul className="space-y-1">
                            {grinder.requirements.map((req) => (
                              <li key={req} className="flex items-center space-x-2 text-sm text-foreground-muted">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Advantages:</h4>
                          <ul className="space-y-1">
                            {grinder.pros.map((pro) => (
                              <li key={pro} className="flex items-center space-x-2 text-sm text-green-600">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Disadvantages:</h4>
                          <ul className="space-y-1">
                            {grinder.cons.map((con) => (
                              <li key={con} className="flex items-center space-x-2 text-sm text-red-600">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Principles */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Design Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designPrinciples.map((principle) => (
              <div key={principle.title} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <principle.icon className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                </div>
                
                <p className="text-foreground-muted text-sm">
                  {principle.description}
                </p>
                
                <ul className="space-y-2">
                  {principle.tips.map((tip) => (
                    <li key={tip} className="flex items-start space-x-2 text-sm text-foreground-muted">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Building Process */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Clock className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-foreground">Building Process</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buildingSteps.map((step, index) => (
              <div key={step.phase} className="relative">
                {index < buildingSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-6 h-px bg-gray-300 transform translate-x-3" />
                )}
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-foreground">{step.phase}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    Duration: {step.duration}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.tasks.map((task) => (
                      <li key={task} className="flex items-start space-x-2 text-sm text-foreground-muted">
                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Troubleshooting */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Common Issues & Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonIssues.map((issue) => (
              <div key={issue.problem} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-600 mb-3">{issue.problem}</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-foreground-secondary mb-2">Common Causes:</h4>
                    <ul className="space-y-1">
                      {issue.causes.map((cause) => (
                        <li key={cause} className="text-sm text-foreground-muted">
                          • {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-foreground-secondary mb-2">Solutions:</h4>
                    <ul className="space-y-1">
                      {issue.solutions.map((solution) => (
                        <li key={solution} className="text-sm text-green-600">
                          ✓ {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Safety Guidelines */}
        <motion.div 
          className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-red-800">Safety Guidelines</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {safetyGuidelines.map((guideline) => (
              <div key={guideline} className="flex items-start space-x-3">
                <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-red-700">{guideline}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Completion */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              🎉 Elite Mobs Mastery Complete!
            </h3>
            <p className="text-foreground-muted mb-6">
              You&apos;ve now learned everything needed to master the Elite Mobs system. From basic commands 
              to advanced grinding strategies, you&apos;re ready to take on any challenge.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link 
                href="/docs/elite-mobs"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
              >
                Back to Overview
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/docs"
                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Explore More Docs
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}