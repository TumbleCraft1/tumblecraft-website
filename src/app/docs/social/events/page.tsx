'use client'

import Navigation from '@/components/Navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Trophy, 
  Crown, 
  Sword,
  Gift,
  MessageSquare,
  Star,
  Shield,
  Flame
} from 'lucide-react'

const eventTypes = [
  {
    title: 'King of the Hill (KOTH)',
    description: 'Fight to claim and hold the hill against all challengers',
    icon: Crown,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    details: {
      objective: 'Stay in the center of the arena longer than anyone else',
      duration: 'Varies by event announcement',
      rewards: 'Exclusive loot, coins, and bragging rights',
      tips: ['Knockback is key - focus on pushing enemies away', 'Bring plenty of food and potions', 'Watch for coordinated team attacks', 'Use terrain to your advantage']
    }
  },
  {
    title: 'Arena Battles',
    description: 'PvP combat in the dedicated arena with supply crates',
    icon: Sword,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    details: {
      objective: 'Defeat other players and collect their loot',
      duration: 'Always active - fight anytime',
      rewards: 'Player drops, supply crate loot, combat XP',
      tips: ['Supply crates spawn every hour', 'Form temporary alliances strategically', 'Learn different combat styles', 'Keep spare gear in your base']
    }
  },
  {
    title: 'Server Events',
    description: 'Special community events hosted by staff members',
    icon: Star,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    details: {
      objective: 'Varies by event - building contests, races, hunts',
      duration: 'Announced in advance with specific times',
      rewards: 'Unique items, coins, ranks, and recognition',
      tips: ['Follow Discord for event announcements', 'Prepare materials in advance when possible', 'Be creative and have fun', 'Help other players when appropriate']
    }
  },
  {
    title: 'Community Competitions',
    description: 'Player-organized competitions and friendly rivalries',
    icon: Trophy,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    details: {
      objective: 'Participate in community-driven challenges',
      duration: 'Organized by players - varies widely',
      rewards: 'Community recognition, player-funded prizes',
      tips: ['Organize your own events', 'Be respectful to all participants', 'Share screenshots and celebrate wins', 'Support community initiatives']
    }
  }
]

const eventSchedule = [
  {
    event: 'Supply Crates',
    frequency: 'Every Hour',
    location: 'Arena',
    icon: Gift,
    color: 'text-green-600'
  },
  {
    event: 'KOTH Events',
    frequency: 'Staff Announced',
    location: 'KOTH Arena',
    icon: Crown,
    color: 'text-yellow-600'
  },
  {
    event: 'Chat Games',
    frequency: 'Random',
    location: 'Global Chat',
    icon: MessageSquare,
    color: 'text-blue-600'
  },
  {
    event: 'Special Events',
    frequency: 'Weekly/Monthly',
    location: 'Various',
    icon: Star,
    color: 'text-purple-600'
  }
]

const participationTips = [
  {
    category: 'Getting Involved',
    icon: Users,
    tips: [
      'Join the Discord server for event announcements',
      'Check chat regularly for impromptu events',
      'Ask other players about upcoming events',
      'Follow community leaders and active players'
    ]
  },
  {
    category: 'Preparation',
    icon: Shield,
    tips: [
      'Keep a set of PvP gear ready at all times',
      'Stock up on food, potions, and arrows',
      'Learn the arena layout and supply crate locations',
      'Practice combat skills in safe areas first'
    ]
  },
  {
    category: 'Community Spirit',
    icon: Star,
    tips: [
      'Congratulate winners even when you lose',
      'Help organize events for other players',
      'Share tips and strategies with newcomers',
      'Create content like screenshots or stories'
    ]
  }
]

const arenaFeatures = [
  {
    name: 'Supply Crates',
    description: 'Hourly loot drops containing valuable items and gear',
    benefits: ['Free equipment and resources', 'Rare items and materials', 'Competitive advantage'],
    timing: 'Every hour on the hour'
  },
  {
    name: 'Open PvP',
    description: 'Free-for-all combat zone where anything goes',
    benefits: ['Test your combat skills', 'Earn loot from defeated players', 'Improve PvP abilities'],
    timing: 'Always active'
  },
  {
    name: 'Event Hosting',
    description: 'Special events and competitions held in the arena',
    benefits: ['Unique rewards and prizes', 'Community interaction', 'Memorable experiences'],
    timing: 'Staff announced'
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

export default function EventsPage() {
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
          <span className="text-foreground">Events</span>
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
              <h1 className="hero-title">Server Events</h1>
              <p className="subtitle">
                Join thrilling community events, epic battles, and competitions that bring 
                players together for unforgettable experiences and amazing rewards.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Quick Info */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Calendar className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Event Participation
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Stay Informed</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Join Discord for announcements</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Be Prepared</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Keep PvP gear and supplies ready</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Have Fun</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span>Focus on community and enjoyment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Event Types */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Types of Events</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {eventTypes.map((event) => (
              <motion.div key={event.title} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${event.bgColor} flex items-center justify-center`}>
                      <event.icon className={`w-6 h-6 ${event.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-foreground-muted text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Objective:</h4>
                      <p className="text-sm text-foreground-muted">{event.details.objective}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Duration:</h4>
                        <p className="text-xs text-foreground-muted">{event.details.duration}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Rewards:</h4>
                        <p className="text-xs text-foreground-muted">{event.details.rewards}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Success Tips:</h4>
                      <div className="space-y-1">
                        {event.details.tips.map((tip, tipIndex) => (
                          <div key={`event-${event.title.replace(/\s/g, '-')}-tip-${tipIndex}`} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-xs text-foreground-muted">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Schedule */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Event Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {eventSchedule.map((schedule, scheduleIndex) => (
              <div key={`schedule-${scheduleIndex}`} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <schedule.icon className={`w-4 h-4 ${schedule.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{schedule.event}</h3>
                    <div className="text-xs text-foreground-muted">{schedule.location}</div>
                  </div>
                </div>
                <div className="text-xs">
                  <span className="text-primary font-medium">{schedule.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Arena Features */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sword className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Arena Features
              </h3>
              <p className="text-foreground-muted text-sm mb-4">
                The arena is TumbleCraft&apos;s dedicated PvP zone where combat is always enabled 
                and excitement never stops. Use <code className="bg-gray-100 px-1 rounded text-xs">/warp arena</code> to get there instantly.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {arenaFeatures.map((feature, featureIndex) => (
              <div key={`arena-feature-${featureIndex}`} className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-foreground mb-2">{feature.name}</h4>
                <p className="text-sm text-foreground-muted mb-3">{feature.description}</p>
                
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Benefits:</div>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={`feature-${feature.name.replace(/\s/g, '-')}-benefit-${benefitIndex}`} className="flex items-start space-x-2">
                      <div className="w-1 h-1 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs text-foreground-muted">{benefit}</span>
                    </div>
                  ))}
                  
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <span className="text-xs font-medium text-primary">{feature.timing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Participation Tips */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">How to Get Involved</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {participationTips.map((tipCategory) => (
              <motion.div key={tipCategory.category} variants={itemVariants}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-6 h-full">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <tipCategory.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {tipCategory.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {tipCategory.tips.map((tip, tipIndex) => (
                      <div key={`category-${tipCategory.category.replace(/\s/g, '-')}-tip-${tipIndex}`} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground-muted">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Spotlight */}
        <motion.div 
          className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-start space-x-3">
            <Flame className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Community Events Spotlight</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-orange-700 mb-2">Upcoming Events</h4>
                  <div className="space-y-2 text-sm text-orange-600">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Weekly KOTH tournaments every Saturday</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Monthly building competitions</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Special holiday events and celebrations</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-orange-700 mb-2">How to Stay Updated</h4>
                  <div className="space-y-2 text-sm text-orange-600">
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Join our Discord server for instant notifications</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Follow server announcements in chat</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Check the leaderboards for event results</span>
                    </div>
                  </div>
                </div>
              </div>
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
            Ready to Join the Action?
          </h3>
          <p className="text-foreground-muted text-center mb-6 max-w-2xl mx-auto">
            Events are the heart of TumbleCraft&apos;s community spirit. Whether you&apos;re a peaceful 
            builder or a fierce warrior, there&apos;s an event for everyone!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Enter the Arena</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Jump into PvP action and claim your share of supply crates.
              </p>
              <div className="bg-gray-100 px-3 py-2 rounded text-sm font-mono text-primary">
                /warp arena
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Join Teams</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Team up with friends for coordinated event participation.
              </p>
              <Link 
                href="/docs/social/teams"
                className="inline-flex items-center px-4 py-2 bg-white text-foreground rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 text-sm"
              >
                <Users className="w-4 h-4 mr-2" />
                Teams Guide
              </Link>
            </div>
            <div className="text-center">
              <h4 className="font-medium text-foreground mb-2">Chat Games</h4>
              <p className="text-foreground-muted text-sm mb-4">
                Participate in quick chat-based competitions for instant rewards.
              </p>
              <Link 
                href="/docs/social/chat-games"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat Games
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}