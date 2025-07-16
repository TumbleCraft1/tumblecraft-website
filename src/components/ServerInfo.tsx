'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users2, Trophy, Pickaxe, Crown, Coins } from 'lucide-react'
import Image from 'next/image'
import { useBetaForm } from '@/context/BetaFormContext'

export default function ServerInfo() {
  const { openForm } = useBetaForm()
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      staggerChildren: 0.1
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  const smpFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Grief Protection",
      description: "Advanced claim system to protect your builds and items"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Community Events",
      description: "Regular building contests, treasure hunts, and group projects"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Quality of Life",
      description: "Custom plugins for enhanced gameplay and convenience"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Achievements",
      description: "Unlock rewards and show off your accomplishments"
    }
  ]

  const prisonFeatures = [
    {
      icon: <Pickaxe className="w-8 h-8" />,
      title: "Progressive Mining",
      description: "Start in A Block and work your way to freedom through different mines"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Economy System",
      description: "Buy, sell, and trade with other players in a dynamic market"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Ranking System",
      description: "Climb the ranks from Prisoner to Free with unique perks"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Custom Enchants",
      description: "Powerful pickaxe enchantments to boost your mining efficiency"
    }
  ]

  return (
    <section id="server-info" className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/screenshot-1.png)',
          filter: 'brightness(0.1) blur(2px)'
        }}
      ></div>
      <div className="absolute inset-0 bg-background-secondary/80"></div>
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title mb-6">
            Choose Your Adventure
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Whether you prefer collaborative building in our SMP or the competitive grind of Prison mode, 
            TumbleCraft offers unique experiences tailored to every playstyle.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* SMP Section */}
          <motion.div variants={itemVariants}>
            <div className="game-card h-full">
              {/* SMP Preview Image */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="/screenshot-6.png" 
                  alt="SMP Server Preview" 
                  width={800}
                  height={192}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent-primary rounded-xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent-primary mb-2">SMP Server</h3>
                  <p className="text-foreground-secondary">Survival Multiplayer Paradise</p>
                </div>
              </div>
              
              <p className="text-foreground-secondary mb-8 leading-relaxed">
                Join our thriving survival community where creativity meets collaboration. Build magnificent 
                structures, explore vast landscapes, and form lasting friendships in a carefully moderated 
                environment designed for players who love authentic Minecraft survival.
              </p>

              <div className="space-y-6">
                {smpFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="text-accent-primary mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-foreground-secondary text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-8 p-4 bg-background-tertiary border border-accent-primary/20 rounded-lg"
                whileHover={{ borderColor: "var(--accent-primary)" }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-foreground-secondary">Current Season:</span>
                  <span className="text-accent-primary font-semibold">Season 3</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-foreground-secondary">World Border:</span>
                  <span className="text-accent-primary font-semibold">50,000 x 50,000</span>
                </div>
              </motion.div>

              <motion.button
                onClick={openForm}
                className="mt-6 w-full px-6 py-3 bg-accent-primary text-background rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply For Beta
              </motion.button>
            </div>
          </motion.div>

          {/* Prison Section */}
          <motion.div variants={itemVariants}>
            <div className="game-card h-full">
              {/* Prison Preview Image - Placeholder */}
              <div className="mb-6 rounded-lg overflow-hidden bg-background-tertiary border-2 border-dashed border-border-color">
                <div className="w-full h-48 flex items-center justify-center">
                  <span className="text-foreground-muted">Prison Server Preview Coming Soon</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent-secondary rounded-xl flex items-center justify-center">
                  <Gamepad2 className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-accent-secondary mb-2">Prison Server</h3>
                  <p className="text-foreground-secondary">Grind Your Way to Freedom</p>
                </div>
              </div>
              
              <p className="text-foreground-secondary mb-8 leading-relaxed">
                Start as a prisoner and work your way to freedom through our progressive ranking system. 
                Mine blocks, earn money, upgrade your gear, and compete with other players in this 
                addictive gamemode that will keep you coming back for more.
              </p>

              <div className="space-y-6">
                {prisonFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4"
                    whileHover={{ x: 10 }}
                  >
                    <div className="text-accent-secondary mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-foreground-secondary text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-8 p-4 bg-background-tertiary border border-accent-secondary/20 rounded-lg"
                whileHover={{ borderColor: "var(--accent-secondary)" }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-foreground-secondary">Prison Ranks:</span>
                  <span className="text-accent-secondary font-semibold">A → Z → Free</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-foreground-secondary">Total Mines:</span>
                  <span className="text-accent-secondary font-semibold">26 Unique Mines</span>
                </div>
              </motion.div>

              <motion.button
                onClick={openForm}
                className="mt-6 w-full px-6 py-3 bg-accent-secondary text-background rounded-lg font-semibold hover:bg-accent-secondary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Apply For Beta
              </motion.button>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}

// Need to import Sparkles and Gamepad2 icons
import { Sparkles, Gamepad2 } from 'lucide-react'