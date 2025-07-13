'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Users, Calendar, Star, ExternalLink, Hash } from 'lucide-react'
import Image from 'next/image'

export default function CommunityHub() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }


  const recentEvents = [
    {
      title: "Building Contest",
      description: "Medieval Castle Theme - $100 Prize Pool",
      date: "Dec 15",
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "Prison Season Reset",
      description: "New mines, new ranks, fresh start!",
      date: "Dec 10",
      icon: <Calendar className="w-5 h-5" />
    },
    {
      title: "Community Meet & Greet",
      description: "Get to know your fellow players",
      date: "Dec 5",
      icon: <Users className="w-5 h-5" />
    }
  ]

  const communityStats = [
    { label: "Discord Members", value: "1,200+", color: "text-accent-primary" },
    { label: "Total Players", value: "5,000+", color: "text-accent-secondary" },
    { label: "Staff Members", value: "15", color: "text-accent-tertiary" },
    { label: "Community Rating", value: "4.9/5", color: "text-accent-warning" }
  ]

  return (
    <section id="community" className="py-20 bg-background">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title text-glow-blue mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Connect with fellow players, stay updated on events, and be part of the TumbleCraft family. 
            Our community is the heart of what makes this server special.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Discord Widget */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="discord-widget h-full">
              <div className="flex items-center gap-4 mb-6">
                <MessageCircle className="w-8 h-8" />
                <div>
                  <h3 className="text-2xl font-bold mb-1">Discord Community</h3>
                  <p className="opacity-90">The central hub for all TumbleCraft players</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Hash className="w-4 h-4" />
                    Key Channels
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      #general-chat
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      #server-updates
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      #trading-post
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      #build-showcase
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Community Features
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Voice channels for team play</li>
                    <li>• Event announcements</li>
                    <li>• Player support tickets</li>
                    <li>• Giveaways & contests</li>
                  </ul>
                </div>
              </div>
              
              <motion.a 
                href="#" 
                className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                Join Discord Server
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Community Stats */}
          <motion.div variants={itemVariants}>
            <div className="game-card h-full">
              <h3 className="text-xl font-bold text-accent-primary mb-6">Community Stats</h3>
              <div className="space-y-6">
                {communityStats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-foreground-secondary text-sm">{stat.label}</span>
                    <span className={`font-bold text-lg ${stat.color}`}>{stat.value}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-background-tertiary rounded-lg">
                <div className="flex items-center justify-center gap-2 text-accent-primary">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Currently Online: 42 players</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Events */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Recent Events & News</h3>
          {/* Community Showcase Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <Image 
              src="/screenshot-3.png" 
              alt="Community Event Showcase" 
              width={800}
              height={256}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentEvents.map((event, index) => (
              <motion.div 
                key={index}
                className="game-card text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-accent-primary mb-4 flex justify-center">
                  {event.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                <p className="text-foreground-secondary text-sm mb-3">{event.description}</p>
                <span className="text-accent-primary text-xs font-mono">{event.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}