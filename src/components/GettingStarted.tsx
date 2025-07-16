'use client'

import { motion } from 'framer-motion'
import { Download, User, Server, Play } from 'lucide-react'
import Image from 'next/image'

export default function GettingStarted() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      staggerChildren: 0.2
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  const steps = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Get Minecraft Java Edition",
      description: "Make sure you have Minecraft Java Edition version 1.21 or newer installed on your computer.",
      detail: "Available on minecraft.net"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Connect to Server",
      description: "Open Minecraft, go to Multiplayer, and add our server using the IP address below.",
      detail: "play.tumblecraft.net"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Choose Your Path",
      description: "Decide whether you want to join our SMP survival world or start grinding in Prison mode.",
      detail: "Use /smp or /prison"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Start Playing!",
      description: "Join our Discord, read the rules, and begin your TumbleCraft adventure.",
      detail: "Have fun!"
    }
  ]


  return (
    <section id="getting-started" className="py-20 bg-background-secondary">
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="section-title text-glow mb-6">
            Getting Started
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            New to TumbleCraft? Follow these simple steps to start your adventure. 
            We&apos;ll help you get set up and ready to play in no time!
          </p>
        </motion.div>

        {/* Step-by-step Guide */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="game-card text-center relative"
                whileHover={{ y: -10 }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent-primary text-background rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="text-accent-primary mb-4 flex justify-center mt-4">
                  {step.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-foreground-secondary text-sm mb-3 leading-relaxed">{step.description}</p>
                <div className="text-accent-primary text-xs font-mono bg-background-tertiary px-3 py-1 rounded">
                  {step.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Quick Start CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          {/* Welcome Screenshot */}
          <div className="mb-8 rounded-lg overflow-hidden max-w-4xl mx-auto">
            <Image 
              src="/screenshot-7.png" 
              alt="Welcome to TumbleCraft" 
              width={800}
              height={256}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="game-card inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="text-foreground-secondary mb-6 max-w-md">
              Copy the server IP, fire up Minecraft, and start your TumbleCraft adventure!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                Join Server Now
              </motion.button>
              <motion.a 
                href="https://discord.gg/N7hEkd82"
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-5 h-5" />
                Join Discord First
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}