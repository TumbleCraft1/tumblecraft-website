'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, Gamepad2 } from 'lucide-react'

interface BetaApplicationFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function BetaApplicationForm({ isOpen, onClose }: BetaApplicationFormProps) {

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div 
              className="bg-background-secondary border border-border-color rounded-xl w-full max-w-sm relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 hover:bg-background-tertiary rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-foreground-secondary" />
              </button>

              {/* Content */}
              <div className="p-8 text-center">
                <motion.div
                  className="w-12 h-12 bg-accent-warning/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.1 }}
                >
                  <Clock className="w-6 h-6 text-accent-warning" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-foreground mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Coming Soon
                </motion.h3>
                
                <motion.p 
                  className="text-foreground-secondary mb-6 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Beta applications will open soon. Join Discord for updates!
                </motion.p>
                
                <motion.a
                  href="https://discord.gg/HYrTBqMKCM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#5865f2] text-white font-medium px-6 py-2.5 rounded-lg hover:bg-[#4752c4] transition-colors text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Join Discord
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}