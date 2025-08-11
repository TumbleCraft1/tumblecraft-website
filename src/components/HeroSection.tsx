'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function HeroSection() {

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
          The next generation of Minecraft servers is here.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Built by software veterans with deep ties to tech creators and 
          gaming culture - TumbleCraft is redefining what SMP should feel like.
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
        </motion.div>

      </motion.div>

    </section>
  )
}