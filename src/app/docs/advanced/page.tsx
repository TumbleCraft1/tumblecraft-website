'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Zap, Sword, Factory, Package, Palette, Shield, ArrowRight } from 'lucide-react'

const advancedPages = [
  {
    title: 'PvP & Arena Combat',
    description: 'Master combat in the arena and King of the Hill events',
    href: '/docs/advanced/pvp',
    icon: Sword,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    features: ['Arena combat', 'KOTH events', 'Supply crates', 'Combat strategies']
  },
  {
    title: 'Factory System',
    description: 'Automate production and create complex manufacturing chains',
    href: '/docs/advanced/factories',
    icon: Factory,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    features: ['Factory types', 'Production automation', 'Resource transformation', 'Investment strategies']
  },
  {
    title: 'Crate System',
    description: 'Unlock valuable rewards from various crate types',
    href: '/docs/advanced/crates',
    icon: Package,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: ['5 crate types', 'Crate keys', 'Reward tiers', 'Opening strategies']
  },
  {
    title: 'Customization',
    description: 'Personalize your experience with cosmetics and tool skins',
    href: '/docs/advanced/customization',
    icon: Palette,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    features: ['Tool skins', 'Cosmetics', 'Player tags', 'Emojis']
  },
  {
    title: 'Land Claiming',
    description: 'Protect your builds with advanced claiming strategies',
    href: '/docs/advanced/claiming',
    icon: Shield,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    features: ['Claim blocks', 'Protection zones', 'Permissions', 'Advanced techniques']
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

export default function AdvancedPage() {
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
          <span className="text-foreground">Advanced</span>
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
              <h1 className="hero-title">Advanced Features</h1>
              <p className="subtitle">
                Explore TumbleCraft&apos;s most complex and rewarding systems including PvP combat, 
                automation, customization, and advanced gameplay mechanics.
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
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-orange-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Advanced Systems Overview
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span><strong>Combat:</strong> Arena PvP with supply crates and KOTH events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span><strong>Automation:</strong> Factory systems for resource production</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span><strong>Rewards:</strong> Advanced crate system with rare loot</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <span><strong>Customization:</strong> Tool skins, cosmetics, and personalization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span><strong>Protection:</strong> Advanced land claiming strategies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span><strong>Complexity:</strong> Systems requiring experience and strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advanced Topics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Advanced Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedPages.map((page, index) => (
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
                          Key features:
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
            Ready for Advanced Gameplay?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            These systems require some server experience and knowledge. Make sure you&apos;re comfortable 
            with the basics before diving into advanced features.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/docs/advanced/pvp"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              <Sword className="w-4 h-4 mr-2" />
              Start with PvP
            </Link>
            <Link 
              href="/docs/getting-started"
              className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-xl hover:bg-gray-50 transition-colors font-medium border border-gray-200"
            >
              <Shield className="w-4 h-4 mr-2" />
              Review Basics
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}