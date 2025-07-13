'use client'

import { motion } from 'framer-motion'
import { Copy } from 'lucide-react'
import { useState } from 'react'

interface ServerStatus {
  online: boolean
  players: number
  maxPlayers: number
}

export default function HeroSection() {
  const [serverStatus] = useState<ServerStatus>({
    online: true,
    players: 42,
    maxPlayers: 100
  })
  const [copied, setCopied] = useState(false)
  
  const serverIP = "play.tumblecraft.net"

  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/screenshot-2.png)',
          filter: 'brightness(0.3) blur(1px)'
        }}
      ></div>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Floating Particles */}
      <motion.div 
        className="absolute top-20 left-20 w-4 h-4 bg-accent-primary rounded-full"
        variants={floatingVariants}
        animate="float"
      ></motion.div>
      <motion.div 
        className="absolute top-40 right-32 w-3 h-3 bg-accent-secondary rounded-full"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 left-32 w-5 h-5 bg-accent-tertiary rounded-full"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-20 w-2 h-2 bg-accent-warning rounded-full"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 3 }}
      ></motion.div>

      {/* Main Hero Content */}
      <motion.div 
        className="container mx-auto px-6 text-center z-10 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Server Status Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-background-secondary border border-border-color rounded-full"
          variants={itemVariants}
        >
          <div className={`w-3 h-3 rounded-full ${serverStatus.online ? 'bg-accent-primary shadow-[0_0_10px_var(--accent-primary)]' : 'bg-accent-danger'}`}></div>
          <span className="text-sm font-medium">
            {serverStatus.online ? 'Server Online' : 'Server Offline'} • {serverStatus.players}/{serverStatus.maxPlayers} Players
          </span>
        </motion.div>


        {/* Main Title */}
        <motion.h1 
          className="hero-title mb-6 text-glow"
          variants={itemVariants}
        >
          TUMBLECRAFT
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-foreground-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Experience the ultimate Minecraft adventure with our thriving{' '}
          <span className="text-accent-primary font-semibold">SMP community</span> and challenging{' '}
          <span className="text-accent-secondary font-semibold">Prison gamemode</span>. 
          Modern survival, custom features, and an active community await you.
        </motion.p>

        {/* Server IP Section */}
        <motion.div 
          className="mb-10"
          variants={itemVariants}
        >
          <p className="text-foreground-muted mb-3">Server IP</p>
          <div className="inline-flex items-center gap-3 bg-background-secondary border border-border-color rounded-lg px-6 py-4">
            <code className="text-accent-primary font-mono text-lg">{serverIP}</code>
            <button
              onClick={copyServerIP}
              className="flex items-center gap-2 px-3 py-1 bg-accent-primary text-background rounded-md hover:bg-opacity-80 transition-all"
            >
              <Copy size={16} />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </motion.div>



      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-accent-primary rounded-full flex justify-center"
          animate={{ 
            boxShadow: [
              "0 0 5px var(--accent-primary)",
              "0 0 20px var(--accent-primary)",
              "0 0 5px var(--accent-primary)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-1 h-2 bg-accent-primary rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}