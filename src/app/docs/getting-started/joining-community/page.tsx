'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Users, MessageCircle, Heart, Star, Shield, HelpCircle, Trophy, Calendar, Zap } from 'lucide-react'

const communityFeatures = [
  {
    title: 'Active Discord Server',
    description: 'Join our Discord for real-time chat, events, and community support',
    icon: MessageCircle,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    action: 'Join Discord',
    link: 'https://discord.gg/N7hEkd82'
  },
  {
    title: 'Helpful Community',
    description: 'Get help from experienced players and friendly staff members',
    icon: HelpCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    action: 'Ask for Help',
    link: '/docs/commands/essential'
  },
  {
    title: 'Server Events',
    description: 'Participate in competitions, building contests, and special events',
    icon: Calendar,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    action: 'View Events',
    link: '/docs/social'
  },
  {
    title: 'Team Up',
    description: 'Find teammates, create groups, and build together',
    icon: Users,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    action: 'Learn Teams',
    link: '/docs/social/teams'
  }
]

const chatCommands = [
  {
    command: '/msg <player> <message>',
    description: 'Send a private message to another player',
    example: '/msg Steve Hello! Need any help?'
  },
  {
    command: '/r <message>',
    description: 'Reply to the last private message you received',
    example: '/r Thanks for the help!'
  },
  {
    command: '/ignore <player>',
    description: 'Block messages from a player (if needed)',
    example: '/ignore SpammerPlayer'
  },
  {
    command: '/mail send <player> <message>',
    description: 'Send a message to offline players',
    example: '/mail send Friend See you tomorrow!'
  }
]

const etiquetteRules = [
  {
    rule: 'Be Respectful',
    description: 'Treat all players with kindness and respect',
    icon: Heart,
    severity: 'essential'
  },
  {
    rule: 'No Spam',
    description: 'Avoid repetitive messages or excessive caps',
    icon: Shield,
    severity: 'important'
  },
  {
    rule: 'Help Others',
    description: 'Share knowledge and assist new players',
    icon: Star,
    severity: 'encouraged'
  },
  {
    rule: 'Stay Positive',
    description: 'Keep conversations friendly and constructive',
    icon: Zap,
    severity: 'encouraged'
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

export default function JoiningCommunityPage() {
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
          <span className="text-foreground">Joining Community</span>
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
              <h1 className="hero-title flex items-center space-x-3">
                <Users className="w-8 h-8 text-blue-600" />
                <span>Joining the Community</span>
              </h1>
              <p className="subtitle">
                Connect with other players, make friends, and become part of the TumbleCraft family.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Community Matters */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Why Community Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Get Help</h3>
              <p className="text-sm text-foreground-muted">
                Experienced players are always willing to help newcomers learn the ropes and overcome challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Make Friends</h3>
              <p className="text-sm text-foreground-muted">
                Find like-minded players to team up with, share adventures, and build lasting friendships.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Join Events</h3>
              <p className="text-sm text-foreground-muted">
                Participate in server events, competitions, and special activities for rewards and fun.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Community Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Community Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityFeatures.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-foreground-muted text-sm mb-4">
                        {feature.description}
                      </p>
                      {feature.link.startsWith('http') ? (
                        <a 
                          href={feature.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                        >
                          {feature.action}
                        </a>
                      ) : (
                        <Link 
                          href={feature.link}
                          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm font-medium"
                        >
                          {feature.action}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chat Commands */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Essential Chat Commands</h2>
          
          <div className="space-y-4">
            {chatCommands.map((cmd) => (
              <div key={cmd.command} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <code className="bg-gray-100 px-3 py-2 rounded font-mono text-sm flex-shrink-0">
                    {cmd.command}
                  </code>
                  <div className="flex-1">
                    <p className="text-sm text-foreground-muted mb-2">{cmd.description}</p>
                    <div className="bg-blue-50 border border-blue-200 rounded p-2">
                      <span className="text-xs text-blue-700 font-medium">Example: </span>
                      <code className="text-xs text-blue-800">{cmd.example}</code>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Community Etiquette */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Community Etiquette</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {etiquetteRules.map((rule) => (
              <div key={rule.rule} className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  rule.severity === 'essential' ? 'bg-red-100' :
                  rule.severity === 'important' ? 'bg-yellow-100' :
                  'bg-green-100'
                }`}>
                  <rule.icon className={`w-5 h-5 ${
                    rule.severity === 'essential' ? 'text-red-600' :
                    rule.severity === 'important' ? 'text-yellow-600' :
                    'text-green-600'
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{rule.rule}</h3>
                  <p className="text-sm text-foreground-muted mb-2">{rule.description}</p>
                  <span className={`text-xs px-2 py-1 rounded font-medium ${
                    rule.severity === 'essential' ? 'bg-red-100 text-red-800' :
                    rule.severity === 'important' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {rule.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Getting Help */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            🎉 Welcome to the TumbleCraft Community!
          </h3>
          
          <div className="text-center space-y-4">
            <p className="text-foreground-muted">
              You&apos;ve completed the getting started guide! You now have all the knowledge needed to thrive on TumbleCraft. 
              Remember, the community is here to help you grow and succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://discord.gg/N7hEkd82"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#5865F2] text-white rounded-xl hover:bg-[#4752C4] transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Discord
              </a>
              
              <Link 
                href="/docs"
                className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
              >
                Explore More Guides
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}