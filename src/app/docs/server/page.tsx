'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Globe, Shield, Crown, BookOpen, ArrowRight } from 'lucide-react'

const serverPages = [
  {
    title: 'Server Worlds',
    description: 'Explore the four distinct worlds: Survival, Nether, End, and Mining',
    href: '/docs/server/worlds',
    icon: Globe,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    features: ['4 unique worlds', 'World purposes', 'Navigation tips', 'Safety guidelines']
  },
  {
    title: 'Server Rules',
    description: 'Community guidelines and rules for a positive experience',
    href: '/docs/server/rules',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    features: ['Community standards', 'Behavior guidelines', 'Consequences', 'Reporting system']
  },
  {
    title: 'Rank System',
    description: 'Donator ranks and their exclusive benefits',
    href: '/docs/server/ranks',
    icon: Crown,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: ['5 donator ranks', 'Rank benefits', 'Exclusive perks', 'Upgrade paths']
  },
  {
    title: 'Server Warps',
    description: 'Public teleportation points and important locations',
    href: '/docs/server/warps',
    icon: BookOpen,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    features: ['Public warps', 'Special locations', 'Access requirements', 'Warp navigation']
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

export default function ServerPage() {
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
          <span className="text-foreground">Server</span>
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
              <h1 className="hero-title">Server Information</h1>
              <p className="subtitle">
                Learn about TumbleCraft&apos;s server structure, rules, ranks, and important 
                locations to make the most of your experience.
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
              <Globe className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Server Quick Facts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Version:</strong> 1.21+ (Latest Minecraft)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Worlds:</strong> 4 unique dimensions to explore</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Community:</strong> Friendly, well-moderated environment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>Support:</strong> 5 donator ranks with exclusive benefits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Server Topics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Server Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serverPages.map((page, index) => (
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
                          What you&apos;ll learn:
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
            New to the Server?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Start by understanding the server worlds and basic rules, then explore 
            the rank system to see what exclusive benefits await.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/server/worlds"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Globe className="w-4 h-4 mr-2" />
              Explore Worlds
            </Link>
            <Link 
              href="/docs/server/rules"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Shield className="w-4 h-4 mr-2" />
              Read Rules
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}