'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function LeaderboardsPage() {
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
          <span className="text-foreground">Leaderboards</span>
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
              <h1 className="hero-title">Leaderboards</h1>
              <p className="subtitle">
                You can use the leaderboards menu to compare yourself to everyone else on the server. This will create some great competition!  ➥ Left-Click to open leaderboards
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              You can use the leaderboards menu to compare yourself to everyone else on the server. This will create some great competition!  ➥ Left-Click to open leaderboards
            </p>
            
            
            <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground-muted">You can use the leaderboards menu to compare yourself to everyone else on the server. This will create some great competition!  ➥ Left-Click to open leaderboards</span>
              </li>
            </ul>
            
            
            
            <h3 className="text-xl font-semibold text-foreground mb-4">Related Commands</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <code className="block bg-white px-3 py-2 rounded border mb-2">/leaderboards</code>
            </div>
            
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
            Need More Help?
          </h3>
          <p className="text-foreground-muted text-center mb-6">
            Explore other documentation sections or return to the main guide.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/docs"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
            >
              Back to Documentation
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}