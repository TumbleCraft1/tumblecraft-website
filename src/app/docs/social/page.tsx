'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Users, MessageSquare, Trophy, Gamepad2, MapPin, ArrowRight } from 'lucide-react'

const socialPages = [
  {
    title: 'Teams System',
    description: 'Form teams with friends for shared achievements and collaboration',
    href: '/docs/social/teams',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    features: ['Team creation', 'Role management', 'Shared benefits', 'Team achievements']
  },
  {
    title: 'Communication',
    description: 'Master chat systems, channels, and community interaction',
    href: '/docs/social/communication',
    icon: MessageSquare,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    features: ['Chat channels', 'Private messaging', 'Emojis', 'Communication etiquette']
  },
  {
    title: 'Chat Games',
    description: 'Participate in interactive chat competitions and win prizes',
    href: '/docs/social/chat-games',
    icon: Gamepad2,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: ['Game types', 'Competition rules', 'Rewards', 'Winning strategies']
  },
  {
    title: 'Events & Competitions',
    description: 'Join server events and community competitions',
    href: '/docs/social/events',
    icon: Trophy,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    features: ['Event schedule', 'Competition types', 'Participation rules', 'Exclusive rewards']
  },
  {
    title: 'Player Warps',
    description: 'Create and manage your own public teleportation points',
    href: '/docs/social/player-warps',
    icon: MapPin,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    features: ['Warp creation', 'Management tools', 'Publicity options', 'Usage tracking']
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

export default function SocialPage() {
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
          <span className="text-foreground">Social</span>
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
              href="/docs"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title">Social Features</h1>
              <p className="subtitle">
                Connect with the TumbleCraft community through teams, communication systems, 
                events, and collaborative features designed to enhance your multiplayer experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Overview */}
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
                Community Engagement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Teams:</strong> Form groups with friends for shared benefits</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Communication:</strong> Rich chat systems and messaging</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Games:</strong> Interactive chat competitions with rewards</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span><strong>Events:</strong> Regular competitions and special occasions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>Sharing:</strong> Player warps and community spaces</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span><strong>Community:</strong> Friendly, welcoming environment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Social Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPages.map((page, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={page.href} className="group block">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-300">
                    <div className="space-y-4">
                      {/* Icon and Title */}
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl ${page.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <page.icon className={`w-6 h-6 ${page.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {page.title}
                          </h3>
                          <p className="text-foreground-muted text-sm leading-relaxed">
                            {page.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Features List */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground-secondary">
                          Features:
                        </h4>
                        <div className="space-y-1">
                          {page.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                              <span className="text-xs text-foreground-muted">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-end pt-2">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
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
            Ready to Connect?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            TumbleCraft is all about community. Start by joining our Discord, then explore 
            teams and events to become part of our amazing player community.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/social/teams"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Users className="w-4 h-4 mr-2" />
              Join a Team
            </Link>
            <a
              href="https://discord.gg/HYrTBqMKCM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#5865F2] text-white rounded-xl hover:bg-[#4752C4] transition-colors font-medium"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Join Discord
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}