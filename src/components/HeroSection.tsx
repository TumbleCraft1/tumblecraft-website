'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useBetaForm } from '@/context/BetaFormContext'

export default function HeroSection() {
  const { openForm } = useBetaForm()

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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
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
      
      {/* Animated Background Grid - InvestorFuse Enhanced */}
      <div className="absolute inset-0 grid-pattern opacity-15"></div>
      <div className="absolute inset-0 grid-pattern-accent opacity-5"></div>
      
      {/* Floating Particles - Enhanced InvestorFuse Colors */}
      <motion.div 
        className="absolute top-20 left-20 w-4 h-4 rounded-full"
        style={{ 
          background: 'var(--color-primary)',
          boxShadow: '0 0 12px var(--color-primary-30)'
        }}
        variants={floatingVariants}
        animate="float"
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0 
        }}
      ></motion.div>
      <motion.div 
        className="absolute top-40 right-32 w-3 h-3 rounded-full"
        style={{ 
          background: 'var(--color-accent)',
          boxShadow: '0 0 10px var(--color-accent-30)'
        }}
        variants={floatingVariants}
        animate="float"
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5 
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-40 left-32 w-5 h-5 rounded-full"
        style={{ 
          background: 'var(--color-primary-light)',
          boxShadow: '0 0 15px var(--color-primary-20)'
        }}
        variants={floatingVariants}
        animate="float"
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-20 w-2 h-2 rounded-full"
        style={{ 
          background: 'var(--color-accent-dark)',
          boxShadow: '0 0 8px var(--color-accent-20)'
        }}
        variants={floatingVariants}
        animate="float"
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5 
        }}
      ></motion.div>
      {/* Additional Brand Particles */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full"
        style={{ 
          background: 'var(--color-primary-hover)',
          boxShadow: '0 0 10px var(--color-primary-20)'
        }}
        variants={floatingVariants}
        animate="float"
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2 
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full"
        style={{ 
          background: 'var(--color-accent-light)',
          boxShadow: '0 0 12px var(--color-accent-20)'
        }}
        variants={floatingVariants}
        animate="float"
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5 
        }}
      ></motion.div>

      {/* Main Hero Content */}
      <motion.div 
        className="container mx-auto px-6 text-center z-10 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Main Title */}
        <motion.h1 
          className="hero-title mb-6"
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
          <span className="primary-text">SMP community</span> and challenging{' '}
          <span className="accent-text">Prison gamemode</span>. 
          Modern survival, custom features, and an active community await you.
        </motion.p>

        {/* CTA Section */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          variants={itemVariants}
        >
          <motion.a
            href="https://discord.gg/HYrTBqMKCM"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-or-discord min-w-[200px]"
            whileHover={{ 
              scale: 1.02
            }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            Join Discord
          </motion.a>
          <motion.button
            onClick={openForm}
            className="btn-or-server min-w-[200px]"
            whileHover={{ 
              scale: 1.02
            }}
            whileTap={{ scale: 0.98 }}
          >
            Apply For Beta
          </motion.button>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator - Enhanced InvestorFuse Styling */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: 'var(--color-primary)' }}
          animate={{ 
            boxShadow: [
              "0 0 8px var(--color-primary-30)",
              "0 0 24px var(--color-primary-50)",
              "0 0 8px var(--color-primary-30)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div 
            className="w-1 h-2 rounded-full mt-2"
            style={{ background: 'var(--color-primary)' }}
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