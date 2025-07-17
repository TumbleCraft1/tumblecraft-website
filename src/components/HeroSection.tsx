'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Sparkles } from 'lucide-react'
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
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
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
            <Sparkles className="w-5 h-5" />
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