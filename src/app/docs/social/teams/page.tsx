'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Users, Crown, Shield, Star, MessageSquare, Copy, Plus, UserPlus } from 'lucide-react'
import { useState } from 'react'

const teamBenefits = [
  {
    title: 'Shared Achievements',
    description: 'Unlock team-based achievements and rewards together',
    icon: Star,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    benefits: [
      'Bonus XP for team activities',
      'Exclusive team achievements',
      'Shared progress tracking',
      'Team leaderboard positions'
    ]
  },
  {
    title: 'Collaborative Building',
    description: 'Work together on massive projects and shared bases',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    benefits: [
      'Shared land claims',
      'Team-based permissions',
      'Resource pooling',
      'Coordinated building projects'
    ]
  },
  {
    title: 'Enhanced Communication',
    description: 'Private team chat and coordination features',
    icon: MessageSquare,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    benefits: [
      'Private team chat channel',
      'Team announcements',
      'Coordinate activities',
      'Share strategies and tips'
    ]
  },
  {
    title: 'Competitive Advantages',
    description: 'Better performance in events and competitions',
    icon: Crown,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    benefits: [
      'Team-based event participation',
      'Coordinated PvP strategies',
      'Shared resource access',
      'Enhanced trading power'
    ]
  }
]

const teamRoles = [
  {
    role: 'Leader',
    description: 'Manages team settings and member permissions',
    permissions: ['Invite players', 'Remove members', 'Set team settings', 'Promote members', 'Disband team'],
    icon: Crown,
    color: 'text-yellow-600'
  },
  {
    role: 'Officer',
    description: 'Helps manage the team and moderate activities',
    permissions: ['Invite players', 'Moderate team chat', 'Organize events', 'Assist with management'],
    icon: Shield,
    color: 'text-blue-600'
  },
  {
    role: 'Member',
    description: 'Standard team member with basic privileges',
    permissions: ['Participate in team activities', 'Use team chat', 'Access team resources', 'View team stats'],
    icon: Users,
    color: 'text-green-600'
  }
]

const teamCommands = [
  { command: '/team create <name>', description: 'Create a new team with the specified name' },
  { command: '/team invite <player>', description: 'Invite a player to join your team' },
  { command: '/team join <team>', description: 'Join a team (requires invitation)' },
  { command: '/team leave', description: 'Leave your current team' },
  { command: '/team info', description: 'View information about your team' },
  { command: '/team chat <message>', description: 'Send a message in team chat' },
  { command: '/team list', description: 'View all available teams to join' },
  { command: '/team promote <player>', description: 'Promote a team member (leaders only)' }
]

const teamStrategies = [
  {
    category: 'Team Formation',
    icon: Plus,
    tips: [
      'Start with 2-3 close friends for better coordination',
      'Look for players with complementary skills',
      'Consider time zones for better activity overlap',
      'Choose a memorable and appropriate team name'
    ]
  },
  {
    category: 'Team Management',
    icon: Crown,
    tips: [
      'Establish clear roles and responsibilities',
      'Create team goals and objectives together',
      'Regular team meetings for coordination',
      'Fair distribution of resources and rewards'
    ]
  },
  {
    category: 'Growth & Recruitment',
    icon: UserPlus,
    tips: [
      'Recruit active and friendly players',
      'Look for skilled players in different areas',
      'Maintain a good team reputation',
      'Consider team size vs. coordination balance'
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

export default function TeamsPage() {
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
          <span className="text-foreground">Teams</span>
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
              <h1 className="hero-title">Teams System</h1>
              <p className="subtitle">
                Team up with friends to become a stronger force on TumbleCraft. 
                Share resources, coordinate activities, and achieve greatness together.
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
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Getting Started with Teams
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Creating a Team</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Use <code className="bg-gray-100 px-1 rounded text-xs">/team create &lt;name&gt;</code></span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Joining a Team</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Get invited or use <code className="bg-gray-100 px-1 rounded text-xs">/team join</code></span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Team Communication</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Use <code className="bg-gray-100 px-1 rounded text-xs">/team chat</code> for private chat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Form a Team?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {teamBenefits.map((benefit) => (
              <motion.div key={benefit.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {benefit.benefits.map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        <span className="text-sm text-foreground-muted">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Roles */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Team Roles & Permissions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {teamRoles.map((role) => (
              <div key={role.role} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <role.icon className={`w-4 h-4 ${role.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{role.role}</h3>
                    <p className="text-sm text-foreground-muted">{role.description}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">Permissions:</h4>
                  <div className="space-y-2">
                    {role.permissions.map((permission) => (
                      <div key={permission} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                        <span className="text-xs text-foreground-muted">{permission}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team Strategies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Team Success Strategies</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {teamStrategies.map((strategy) => (
              <motion.div key={strategy.category} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <strategy.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {strategy.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {strategy.tips.map((tip) => (
                      <div key={tip} className="flex items-start space-x-2">
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

        {/* Team Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Essential Team Commands
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamCommands.map((cmd) => (
              <CommandCard key={cmd.command} command={cmd.command} description={cmd.description} />
            ))}
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Ready to Build Your Team?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Whether you&apos;re creating a new team or looking to join one, teamwork makes 
            everything better on TumbleCraft. Start building lasting friendships today!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Create a Team</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Start your own team and invite friends to join your adventure.
              </p>
              <div className="bg-gray-100 px-3 py-2 rounded text-sm font-mono text-primary">
                /team create &lt;name&gt;
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Find Players</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Connect with other players looking for team members.
              </p>
              <Link 
                href="/docs/social/communication"
                className="inline-flex items-center px-4 py-2 bg-white text-foreground rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Communication Guide
              </Link>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Join Events</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Participate in team-based events and competitions.
              </p>
              <Link 
                href="/docs/advanced/pvp"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                <Crown className="w-4 h-4 mr-2" />
                PvP & Events
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}