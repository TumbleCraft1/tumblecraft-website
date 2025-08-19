'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { recordModalDismissal } from '@/utils/modalUtils'

interface PardonAppearanceModalProps {
  show: boolean
  onClose: () => void
  noBlur?: boolean
  autoDismiss?: number // auto dismiss after this many milliseconds
}

export default function PardonAppearanceModal({ show, onClose, noBlur = false, autoDismiss }: PardonAppearanceModalProps) {
  const handleClose = useCallback(() => {
    recordModalDismissal()
    onClose()
  }, [onClose])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    if (show) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [show, handleClose])

  // Auto dismiss effect
  useEffect(() => {
    if (show && autoDismiss) {
      const timer = setTimeout(() => {
        handleClose()
      }, autoDismiss)

      return () => clearTimeout(timer)
    }
  }, [show, autoDismiss, handleClose])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className={`absolute inset-0 bg-black/50 ${noBlur ? '' : 'backdrop-blur-sm'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Minecraft-themed Modal */}
          <motion.div
            className="relative max-w-md mx-4 minecraft-modal"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              background: 'linear-gradient(145deg, #8B8680, #C0C0C0)',
              border: '4px solid',
              borderTopColor: '#E8E8E8',
              borderLeftColor: '#E8E8E8', 
              borderRightColor: '#404040',
              borderBottomColor: '#404040',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 2px 2px 4px rgba(255,255,255,0.3)',
              imageRendering: 'pixelated',
              fontFamily: 'monospace'
            }}
          >
            {/* Minecraft-style stone texture overlay */}
            <div 
              className="absolute inset-1 opacity-30 pointer-events-none"
              style={{
                background: `
                  radial-gradient(circle at 25% 25%, #999 1px, transparent 1px),
                  radial-gradient(circle at 75% 75%, #AAA 1px, transparent 1px),
                  radial-gradient(circle at 50% 10%, #888 1px, transparent 1px),
                  linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
                `,
                backgroundSize: '8px 8px, 12px 12px, 6px 6px, 100% 100%'
              }}
            />

            {/* Close Button - Minecraft X style */}
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-8 h-8 text-white font-bold hover:bg-red-600 transition-colors z-10"
              style={{
                background: '#CC0000',
                border: '2px solid',
                borderTopColor: '#FF6666',
                borderLeftColor: '#FF6666',
                borderRightColor: '#990000', 
                borderBottomColor: '#990000',
                fontSize: '14px',
                imageRendering: 'pixelated'
              }}
            >
              ×
            </button>

            {/* Content */}
            <div className="relative p-6 text-center">
              {/* Minecraft grass block */}
              <div className="relative w-16 h-16 mx-auto mb-4">
                <Image 
                  src="/grass-block.png" 
                  alt="Minecraft Grass Block"
                  width={64}
                  height={64}
                  className="w-full h-full"
                  style={{
                    imageRendering: 'pixelated',
                    filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
                  }}
                />
              </div>

              <h2 
                className="text-xl font-bold mb-3 text-white"
                style={{ 
                  textShadow: '2px 2px 0px #000000',
                  fontSize: '18px',
                  letterSpacing: '1px'
                }}
              >
                Server Under Development
              </h2>

              <p 
                className="text-gray-200 mb-6 leading-tight text-sm"
                style={{ 
                  textShadow: '1px 1px 0px #000000',
                  lineHeight: '1.4'
                }}
              >
                Our crafters are hard at work building<br />
                something amazing for you to explore.
                <br />
                <span className="text-yellow-300 font-semibold">
                  Check back soon!
                </span>
              </p>

              {/* Minecraft-style button */}
              <button
                onClick={handleClose}
                className="px-8 py-2 text-white font-semibold transition-all duration-150 hover:brightness-110 active:brightness-90"
                style={{
                  background: 'linear-gradient(145deg, #228B22, #32CD32, #228B22)',
                  border: '3px solid',
                  borderTopColor: '#90EE90',
                  borderLeftColor: '#90EE90',
                  borderRightColor: '#006400',
                  borderBottomColor: '#006400',
                  textShadow: '1px 1px 0px #000000',
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  imageRendering: 'pixelated'
                }}
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}