'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowLeft } from 'lucide-react'

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-secondary flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-20 h-20 bg-accent-primary rounded-full flex items-center justify-center mx-auto mb-6"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0] 
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Clock className="w-10 h-10 text-background" />
        </motion.div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Coming Soon
        </h1>
        
        <p className="text-foreground-secondary mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        
        <motion.a
          href="/"
          className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-secondary transition-colors"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </motion.a>
      </motion.div>
    </div>
  )
}