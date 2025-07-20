'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BookOpen, Map, Home, Shield, Coins, Users, ArrowLeft } from 'lucide-react'

const steps = [
  {
    title: 'Welcome to TumbleCraft',
    description: 'Learn about the server and what makes it special',
    href: '/docs/getting-started/welcome',
    icon: BookOpen,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    time: '2 min read'
  },
  {
    title: 'World Selection',
    description: 'Choose your world and understand the different areas',
    href: '/docs/getting-started/world-selection',
    icon: Map,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    time: '3 min read'
  },
  {
    title: 'Basic Survival',
    description: 'Gather resources and start your survival journey',
    href: '/docs/getting-started/basic-survival',
    icon: Shield,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    time: '5 min read'
  },
  {
    title: 'Claiming Land',
    description: 'Protect your builds with land claiming',
    href: '/docs/getting-started/claiming-land',
    icon: Shield,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    time: '4 min read'
  },
  {
    title: 'Setting Your Home',
    description: 'Create checkpoints you can teleport to',
    href: '/docs/getting-started/first-home',
    icon: Home,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50',
    time: '2 min read'
  },
  {
    title: 'Using the Shop',
    description: 'Sell resources and earn money',
    href: '/docs/getting-started/using-shop',
    icon: Coins,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    time: '3 min read'
  },
  {
    title: 'Joining Community',
    description: 'Connect with other players and join the community',
    href: '/docs/getting-started/joining-community',
    icon: Users,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    time: '2 min read'
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

export default function GettingStartedPage() {
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
          <span className="text-foreground">Getting Started</span>
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
              <h1 className="hero-title">Getting Started with TumbleCraft</h1>
              <p className="subtitle">
                Welcome to TumbleCraft! This comprehensive guide will help you get started 
                and make the most of your survival multiplayer experience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Start Card */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Quick Start Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Use <code className="bg-gray-100 px-2 py-1 rounded text-xs">/rtp</code> to teleport to the survival world</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Start by gathering basic resources and selling them in the shop</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span>Claim land to protect your builds from other players</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span>Join our Discord community for help and events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step-by-Step Guide */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Step-by-Step Guide</h2>
          
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={step.href} className="group block">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.01] hover:border-gray-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                            {index + 1}
                          </div>
                          <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center`}>
                            <step.icon className={`w-6 h-6 ${step.color}`} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>
                            <span className="text-xs text-foreground-muted bg-gray-100 px-2 py-1 rounded">
                              {step.time}
                            </span>
                          </div>
                          <p className="text-foreground-muted text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Need Help?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Join our Discord</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Connect with other players and get real-time help from our community.
              </p>
              <a 
                href="https://discord.gg/HYrTBqMKCM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors"
              >
                Join Discord
              </a>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">In-Game Commands</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Use <code className="bg-gray-200 px-2 py-1 rounded text-xs">/help</code> for a list of available commands.
              </p>
              <Link 
                href="/docs/commands"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                View Commands
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}