'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, User, Gamepad2 } from 'lucide-react'
import { useState } from 'react'

interface BetaApplicationFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function BetaApplicationForm({ isOpen, onClose }: BetaApplicationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    minecraftUsername: '',
    server: '',
    experience: '',
    why: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      minecraftUsername: '',
      server: '',
      experience: '',
      why: ''
    })
    setSubmitted(false)
    onClose()
  }

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
              className="bg-background-secondary border border-border-color rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {!submitted ? (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-border-color">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
                        <Gamepad2 className="w-5 h-5 text-background" />
                      </div>
                      <h2 className="text-2xl font-bold text-accent-primary">Apply for Beta Access</h2>
                    </div>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-background-tertiary rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-foreground-secondary" />
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-background-tertiary border border-border-color rounded-lg focus:outline-none focus:border-accent-primary transition-colors text-foreground"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-secondary" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-background-tertiary border border-border-color rounded-lg focus:outline-none focus:border-accent-primary transition-colors text-foreground"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Minecraft Username */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Minecraft Username *
                      </label>
                      <input
                        type="text"
                        name="minecraftUsername"
                        value={formData.minecraftUsername}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background-tertiary border border-border-color rounded-lg focus:outline-none focus:border-accent-primary transition-colors text-foreground"
                        placeholder="YourMinecraftUsername"
                      />
                    </div>

                    {/* Server Preference */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Server *
                      </label>
                      <select
                        name="server"
                        value={formData.server}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background-tertiary border border-border-color rounded-lg focus:outline-none focus:border-accent-primary transition-colors text-foreground"
                      >
                        <option value="">Select a server...</option>
                        <option value="smp">SMP Server</option>
                        <option value="prison">Prison Server</option>
                        <option value="both">Both Servers</option>
                      </select>
                    </div>

                    {/* Experience */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Minecraft Experience
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background-tertiary border border-border-color rounded-lg focus:outline-none focus:border-accent-primary transition-colors text-foreground"
                      >
                        <option value="">Select your experience level...</option>
                        <option value="beginner">Beginner (Less than 1 year)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3-5 years)</option>
                        <option value="expert">Expert (5+ years)</option>
                      </select>
                    </div>

                    {/* Why Join */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Why do you want to join TumbleCraft? *
                      </label>
                      <textarea
                        name="why"
                        value={formData.why}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-background-tertiary border border-border-color rounded-lg focus:outline-none focus:border-accent-primary transition-colors text-foreground resize-none"
                        placeholder="Tell us why you'd like to be part of our community..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 px-6 py-3 border border-border-color rounded-lg text-foreground-secondary hover:bg-background-tertiary transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 bg-accent-primary text-background rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <Gamepad2 className="w-8 h-8 text-background" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-accent-primary mb-4">Application Submitted!</h3>
                  <p className="text-foreground-secondary mb-6">
                    Thank you for your interest in TumbleCraft! We&apos;ll review your application and get back to you soon.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-accent-primary text-background rounded-lg font-semibold hover:bg-accent-primary/90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}