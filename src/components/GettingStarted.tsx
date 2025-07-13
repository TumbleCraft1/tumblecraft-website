'use client'

import { motion } from 'framer-motion'
import { Download, User, Server, Play, Shield, BookOpen, AlertCircle } from 'lucide-react'

export default function GettingStarted() {
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
      description: "Join our Discord, read the rules, and begin your TumbleCraft adventure with the community.",
      detail: "Have fun!"
    }
  ]

  const rules = [
    "No griefing or stealing from other players",
    "Be respectful and kind to all community members",
    "No inappropriate language or behavior",
    "No cheating, hacking, or exploiting bugs",
    "Follow staff instructions and server guidelines",
    "Build responsibly and respect the environment"
  ]

  const commands = [
    { command: "/spawn", description: "Return to the main spawn area" },
    { command: "/smp", description: "Join the SMP survival world" },
    { command: "/prison", description: "Enter the Prison gamemode" },
    { command: "/rules", description: "View the complete server rules" },
    { command: "/discord", description: "Get our Discord server link" },
    { command: "/vote", description: "Vote for the server and get rewards" }
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
            New to TumbleCraft? Follow these simple steps to join our community and start your adventure. 
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Server Rules */}
          <motion.div variants={itemVariants}>
            <div className="game-card h-full">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-accent-danger" />
                <h3 className="text-2xl font-bold">Server Rules</h3>
              </div>
              
              <p className="text-foreground-secondary mb-6">
                To maintain a fun and safe environment for everyone, please follow these essential rules:
              </p>

              <div className="space-y-3">
                {rules.map((rule, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-6 h-6 bg-accent-danger rounded-full flex items-center justify-center text-background text-xs font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-foreground-secondary text-sm flex-1">{rule}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-6 p-4 bg-accent-danger/10 border border-accent-danger/20 rounded-lg"
                whileHover={{ borderColor: "var(--accent-danger)" }}
              >
                <div className="flex items-center gap-2 text-accent-danger mb-2">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-semibold">Important</span>
                </div>
                <p className="text-foreground-secondary text-sm">
                  Breaking these rules may result in warnings, temporary bans, or permanent removal from the server. 
                  When in doubt, ask a staff member!
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Useful Commands */}
          <motion.div variants={itemVariants}>
            <div className="game-card h-full">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 text-accent-secondary" />
                <h3 className="text-2xl font-bold">Useful Commands</h3>
              </div>
              
              <p className="text-foreground-secondary mb-6">
                Here are some essential commands to help you navigate and enjoy the server:
              </p>

              <div className="space-y-4">
                {commands.map((cmd, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-background-tertiary rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div>
                      <code className="text-accent-primary font-mono text-sm">{cmd.command}</code>
                      <p className="text-foreground-secondary text-xs mt-1">{cmd.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-6 p-4 bg-accent-secondary/10 border border-accent-secondary/20 rounded-lg"
                whileHover={{ borderColor: "var(--accent-secondary)" }}
              >
                <div className="flex items-center gap-2 text-accent-secondary mb-2">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-semibold">Pro Tip</span>
                </div>
                <p className="text-foreground-secondary text-sm">
                  Type <code className="text-accent-secondary">/help</code> in-game to see a full list of available 
                  commands and get more detailed information about server features.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quick Start CTA */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="game-card inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="text-foreground-secondary mb-6 max-w-md">
              Copy the server IP, fire up Minecraft, and join thousands of players in the TumbleCraft universe!
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
                href="#community"
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