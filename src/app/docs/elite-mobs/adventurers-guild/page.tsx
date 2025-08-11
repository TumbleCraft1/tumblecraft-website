'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Users, Wrench, Recycle, Sparkles, MapPin, Coins, Crown, Shield } from 'lucide-react'
import Image from 'next/image'

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

const npcs = [
  {
    name: 'Reggie',
    title: 'The Repairman',
    description: 'Repairs damaged Elite Mobs equipment using elite scrap materials',
    icon: Wrench,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    services: [
      'Repairs all Elite Mobs gear',
      'Uses Elite Scrap as currency',
      'Prevents gear from breaking',
      'Essential for maintenance'
    ],
    details: 'Reggie is your go-to NPC for keeping your elite equipment in top condition. As you battle elite mobs, your gear will take damage and eventually break if not maintained. Reggie uses Elite Scrap (obtained by scrapping unwanted elite items with Kelly) to restore your equipment to full durability.',
    cost: 'Elite Scrap (varies by item level and damage)'
  },
  {
    name: 'Kelly',
    title: 'The Scrapper',
    description: 'Breaks down unwanted Elite Mobs equipment into valuable scrap materials',
    icon: Recycle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    services: [
      'Scraps Elite Mobs items',
      'Converts gear to Elite Scrap',
      'Handles all item rarities',
      'Essential for resource management'
    ],
    details: 'Kelly transforms your unwanted elite equipment into Elite Scrap, which is used by Reggie for repairs and other guild services. This creates a sustainable economy where nothing goes to waste. Higher-level and rarer items provide more scrap when broken down.',
    cost: 'Free (provides Elite Scrap as reward)'
  },
  {
    name: 'Eden',
    title: 'The Enchanter',
    description: 'Applies Elite Mobs enchanted books and enhances equipment with magical properties',
    icon: Sparkles,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    services: [
      'Applies Elite enchanted books',
      'Combines multiple enchants',
      'Handles custom Elite enchantments',
      'Risk of enchantment failure'
    ],
    details: 'Eden specializes in applying Elite Mobs enchanted books to your equipment. Unlike vanilla enchanting, Elite enchantments can be stacked and combined in unique ways. However, higher-level enchanting carries a risk of failure, which can destroy the enchanted book.',
    cost: 'Elite Coins + risk of failure'
  },
  {
    name: 'Hermes',
    title: 'The Transporter',
    description: 'Provides teleportation services to leave the Adventurers Guild',
    icon: MapPin,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    services: [
      'Teleports you out of the guild',
      'Returns to previous location',
      'Quick exit service',
      'No cost transportation'
    ],
    details: 'Hermes offers a convenient way to leave the Adventurers Guild and return to your previous location. This is particularly useful when you need to quickly get back to your adventure after completing guild business.',
    cost: 'Free service'
  }
]

const guildFeatures = [
  {
    title: 'Central Hub',
    description: 'One-stop location for all Elite Mobs related services',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Equipment Cycle',
    description: 'Complete gear lifecycle from repair to enhancement',
    icon: Shield,
    color: 'text-green-600'
  },
  {
    title: 'Resource Economy',
    description: 'Sustainable system using Elite Scrap and Elite Coins',
    icon: Coins,
    color: 'text-yellow-600'
  },
  {
    title: 'Character Progression',
    description: 'Track your advancement and unlock new capabilities',
    icon: Crown,
    color: 'text-purple-600'
  }
]

export default function AdventurersGuildPage() {
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
          <span className="text-foreground">Adventurers Guild</span>
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
              <h1 className="hero-title">🏛️ The Adventurers Guild</h1>
              <p className="subtitle">
                Central hub for Elite Mobs services including repairs, enchanting, and character progression
              </p>
            </div>
          </div>
        </motion.div>

        {/* Access Information */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-foreground">Accessing the Guild</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Quick Access</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <code className="text-primary font-mono text-lg bg-white px-3 py-2 rounded border block text-center">
                  /ag
                </code>
                <p className="text-foreground-muted text-sm mt-2 text-center">
                  Instantly teleport to the Adventurers Guild from anywhere
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Guild Location</h3>
              <p className="text-foreground-muted">
                The Adventurers Guild is a special dimension accessible only through the <code>/ag</code> command. 
                It serves as the central hub for all Elite Mobs-related services and activities.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Guild Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Guild Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guildFeatures.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 text-center h-full">
                  <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-foreground-muted text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guild Image */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image 
            src="/images/elite-mobs/elite-mobs-3.png" 
            alt="Adventurers Guild Interior" 
            width={600} 
            height={400} 
            className="mx-auto rounded-lg"
          />
          <p className="text-sm text-foreground-muted mt-3">The Adventurers Guild interior with all NPCs</p>
        </motion.div>

        {/* NPCs Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Guild NPCs</h2>
          
          <div className="space-y-6">
            {npcs.map((npc) => (
              <motion.div key={npc.name} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6">
                  <div className="flex items-start space-x-6">
                    {/* NPC Icon */}
                    <div className={`w-16 h-16 rounded-xl ${npc.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <npc.icon className={`w-8 h-8 ${npc.color}`} />
                    </div>
                    
                    {/* NPC Details */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{npc.name}</h3>
                        <span className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                          {npc.title}
                        </span>
                      </div>
                      
                      <p className="text-foreground-muted mb-4">
                        {npc.details}
                      </p>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Services */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Services Offered:</h4>
                          <ul className="space-y-2">
                            {npc.services.map((service) => (
                              <li key={service} className="flex items-center space-x-2 text-sm text-foreground-muted">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                                <span>{service}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Cost */}
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Service Cost:</h4>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <code className="text-sm text-primary font-mono">
                              {npc.cost}
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Economy Guide */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Coins className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-foreground">Guild Economy</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Elite Scrap</h3>
              <div className="space-y-3 text-foreground-muted text-sm">
                <p>Primary currency for repairs and maintenance:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Obtained by scrapping items with Kelly</li>
                  <li>• Used by Reggie for equipment repairs</li>
                  <li>• Higher-level items give more scrap</li>
                  <li>• Essential for gear maintenance</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Elite Coins</h3>
              <div className="space-y-3 text-foreground-muted text-sm">
                <p>Premium currency for advanced services:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Earned from elite mob kills</li>
                  <li>• Used for enchanting services</li>
                  <li>• Required for premium upgrades</li>
                  <li>• Check balance with /em command</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tips and Strategy */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Guild Strategy Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Resource Management</h3>
              <div className="space-y-3 text-foreground-muted text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Always scrap unwanted items before they pile up in your inventory</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Keep a reserve of Elite Scrap for emergency repairs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Repair gear before it breaks completely to avoid penalties</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Enchanting Strategy</h3>
              <div className="space-y-3 text-foreground-muted text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Start with lower-level enchantments to minimize failure risk</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Save rare enchanted books for your best equipment</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <p>Consider the failure cost before attempting high-level enchants</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Understand Elite Mob Mechanics
              </h3>
              <p className="text-foreground-muted">
                Learn how elite mobs scale, their special powers, and the loot system mechanics.
              </p>
            </div>
            <Link 
              href="/docs/elite-mobs/mechanics"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium ml-4"
            >
              Mechanics Guide
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}