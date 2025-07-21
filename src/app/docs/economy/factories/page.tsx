'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Factory, Cog, TrendingUp, Package, ArrowRight, Clock } from 'lucide-react'

export default function FactoriesPage() {
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
          <Link href="/docs/economy" className="hover:text-primary transition-colors">
            Economy
          </Link>
          <span>/</span>
          <span className="text-foreground">Factories</span>
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
              href="/docs/economy"
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="hero-title flex items-center space-x-3">
                <Factory className="w-8 h-8 text-orange-500" />
                <span>Factories - Automated Production</span>
              </h1>
              <p className="subtitle">
                Master TumbleCraft's automated production system to transform materials and generate passive income.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">What are Factories?</h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              Factories represent a revolutionary way of obtaining materials on TumbleCraft. This sophisticated 
              system allows you to produce certain materials from other materials, creating an entirely new 
              universe of production chains and automation possibilities.
            </p>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Cog className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-orange-800 mb-2">Advanced Economy System</h4>
                  <p className="text-orange-700 text-sm">
                    Factories open up complex production chains, investment opportunities, and passive income 
                    streams for dedicated players willing to learn the system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How Factories Work */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">How Factories Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Input Materials</h3>
              <p className="text-sm text-foreground-muted">
                Provide raw materials or basic items to your factory as input for processing.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Processing</h3>
              <p className="text-sm text-foreground-muted">
                The factory processes your materials over time, transforming them into new products.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Output Products</h3>
              <p className="text-sm text-foreground-muted">
                Collect valuable processed materials that can be sold or used in other factories.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">Production Chain Example</h3>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-brown-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">LOG</span>
                </div>
                <span className="text-foreground-muted">Wood Logs</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                  <Factory className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-foreground-muted">Sawmill</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">PLK</span>
                </div>
                <span className="text-foreground-muted">Planks</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Factory Types */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Types of Factories</h2>
          <p className="text-foreground-muted leading-relaxed mb-6">
            Different factory types specialize in different production chains. Each offers unique 
            opportunities and requires different input materials.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">🏭 Processing Factories</h3>
              <p className="text-sm text-foreground-muted mb-3">
                Transform raw materials into processed goods
              </p>
              <ul className="space-y-1 text-sm text-foreground-muted">
                <li>• Sawmill (Wood → Planks)</li>
                <li>• Smeltery (Ores → Ingots)</li>
                <li>• Grinder (Materials → Powder)</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">🔧 Manufacturing Factories</h3>
              <p className="text-sm text-foreground-muted mb-3">
                Create complex items from processed materials
              </p>
              <ul className="space-y-1 text-sm text-foreground-muted">
                <li>• Workshop (Tools & Equipment)</li>
                <li>• Textile Mill (Cloth & Fabric)</li>
                <li>• Electronics (Redstone Components)</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">🌾 Agricultural Factories</h3>
              <p className="text-sm text-foreground-muted mb-3">
                Process farm products into consumables
              </p>
              <ul className="space-y-1 text-sm text-foreground-muted">
                <li>• Bakery (Wheat → Bread)</li>
                <li>• Brewery (Crops → Potions)</li>
                <li>• Food Processing (Preservation)</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-foreground mb-3">⚡ Energy Factories</h3>
              <p className="text-sm text-foreground-muted mb-3">
                Generate power for other factory operations
              </p>
              <ul className="space-y-1 text-sm text-foreground-muted">
                <li>• Coal Plant (Coal → Energy)</li>
                <li>• Wind Farm (Renewable Energy)</li>
                <li>• Nuclear Reactor (Advanced Power)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Investment Strategy */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Investment Strategies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-600" />
                <span>Short-term Profits</span>
              </h3>
              <ul className="space-y-2 text-sm text-foreground-muted">
                <li>• Focus on high-demand, fast-processing items</li>
                <li>• Monitor market prices for optimal timing</li>
                <li>• Invest in basic processing factories first</li>
                <li>• Reinvest profits into scaling operations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <span>Long-term Growth</span>
              </h3>
              <ul className="space-y-2 text-sm text-foreground-muted">
                <li>• Build complex production chains</li>
                <li>• Automate multiple factory types</li>
                <li>• Corner specific market niches</li>
                <li>• Create passive income streams</li>
              </ul>
            </div>
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
            🚀 Ready to Start Your Factory Empire?
          </h3>
          <p className="text-foreground-muted text-center mb-6">
            Access the factories menu to explore available production chains and begin your industrial journey.
          </p>
          <div className="flex justify-center">
            <div className="bg-gray-50 rounded-lg p-4">
              <code className="block bg-white px-3 py-2 rounded border font-mono text-center">/factories</code>
              <p className="text-sm text-foreground-muted mt-2 text-center">
                Open the factories interface to get started
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}