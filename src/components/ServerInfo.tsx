'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users2, Trophy } from 'lucide-react'
import Image from 'next/image'

export default function ServerInfo() {
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
            Our Server
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Join our thriving survival multiplayer community where creativity meets collaboration in 
            TumbleCraft&apos;s carefully crafted survival experience.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* SMP Section */}
          <motion.div variants={itemVariants} className="max-w-2xl">
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
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-2">SMP Server</h3>
                  <p className="text-foreground-secondary">Survival Multiplayer Paradise</p>
                </div>
              </div>
              
              <p className="text-foreground-secondary mb-8 leading-relaxed">
                Join our thriving survival community where creativity meets collaboration. Build magnificent 
                structures, explore vast landscapes, and form lasting friendships in a carefully moderated 
                environment designed for players who love authentic Minecraft survival.
              </p>

              <div className="space-y-6">
                {smpFeatures.map((feature) => (
                  <div 
                    key={feature.title}
                    className="flex items-start gap-4"
                  >
                    <div className="text-primary mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-foreground-secondary text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div 
                className="mt-8 p-4 bg-background-tertiary border border-primary/20 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <span className="text-foreground-secondary">Current Season:</span>
                  <span className="text-primary font-semibold">Beta Season</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-foreground-secondary">World Border:</span>
                  <span className="text-primary font-semibold">30,000 x 30,000</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}