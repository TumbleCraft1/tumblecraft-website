'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Zap, Shield, Trophy, ArrowLeft } from 'lucide-react'

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

export default function WelcomePage() {
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
          <span className="text-foreground">Welcome</span>
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
              <h1 className="hero-title">Welcome to TumbleCraft</h1>
              <p className="subtitle">
                Built by software veterans with deep ties to tech creators and gaming culture, 
                TumbleCraft is redefining what SMP should feel like.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Start Your Adventure</h2>
          <p className="text-foreground-muted">
            TumbleCraft offers a unique survival multiplayer experience that combines classic 
            Minecraft gameplay with modern server features. Whether you&apos;re a veteran player 
            or just starting out, our server provides something for everyone.
          </p>
        </motion.div>

        {/* What Makes TumbleCraft Special */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">What Makes TumbleCraft Special?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Active Community
                  </h3>
                </div>
                <p className="text-foreground-muted">
                  Join a thriving community of players who are passionate about Minecraft 
                  and love to collaborate on amazing builds and adventures.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Modern Features
                  </h3>
                </div>
                <p className="text-foreground-muted">
                  Experience cutting-edge server features including advanced economy systems, 
                  skill progression, jobs, and interactive quest systems.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Protected Builds
                  </h3>
                </div>
                <p className="text-foreground-muted">
                  Your creations are safe with our comprehensive land claiming system. 
                  Build with confidence knowing your work is protected.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Progression System
                  </h3>
                </div>
                <p className="text-foreground-muted">
                  Level up, unlock new abilities, complete quests, and earn rewards 
                  as you progress through your TumbleCraft journey.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Server Information */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Getting Connected</h3>
          <p className="text-foreground-muted mb-6">
            Before diving into the gameplay, here are the essential ways to connect with TumbleCraft:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="text-md font-semibold text-foreground mb-4">Server Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-foreground-secondary mb-2">Server IP</h5>
                <code className="text-sm bg-white border border-gray-200 px-3 py-2 rounded block font-mono text-primary">
                  play.tumblecraft.net
                </code>
              </div>
              <div>
                <h5 className="font-medium text-foreground-secondary mb-2">Version</h5>
                <code className="text-sm bg-white border border-gray-200 px-3 py-2 rounded block font-mono text-primary">
                  1.21+ (Latest)
                </code>
              </div>
            </div>
          </div>
        </motion.div>

        {/* First Steps */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Your First Steps</h3>
          <div className="space-y-4 text-foreground-muted">
            <p>
              Once you join the server, you&apos;ll spawn in our beautiful spawn area. From here, 
              you can explore different worlds, visit the shop, open crates, and begin your 
              survival adventure.
            </p>
            <p>
              The most important first step is to teleport to the Survival World where you&apos;ll 
              begin gathering resources and building your base. You can do this by using the 
              <code className="bg-gray-100 px-2 py-1 rounded text-primary mx-1">/rtp</code> 
              command or talking to the Worlds NPC at spawn.
            </p>
          </div>
        </motion.div>

        {/* Next Step */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to Start?
              </h3>
              <p className="text-foreground-muted">
                Continue to the next step to learn about world selection and how to enter the survival world.
              </p>
            </div>
            <Link 
              href="/docs/getting-started/world-selection"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium ml-4"
            >
              Next: World Selection
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}