'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Hammer } from 'lucide-react'

interface PardonAppearanceModalProps {
  show: boolean
  onClose: () => void
  noBlur?: boolean
  autoDismiss?: number // auto dismiss after this many milliseconds
}

export default function PardonAppearanceModal({ show, onClose, noBlur = false, autoDismiss }: PardonAppearanceModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
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
  }, [show, onClose])

  // Auto dismiss effect
  useEffect(() => {
    if (show && autoDismiss) {
      const timer = setTimeout(() => {
        onClose()
      }, autoDismiss)

      return () => clearTimeout(timer)
    }
  }, [show, autoDismiss, onClose])

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
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 p-8 max-w-md mx-4"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-8 h-8 text-orange-600" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Pardon Our Appearance
              </h2>

              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Crafting up improvements, block by block
              </p>

              <button
                onClick={onClose}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors font-medium"
              >
                Continue
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}