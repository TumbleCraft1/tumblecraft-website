'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Info, UserPlus } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/about', label: 'About', icon: <Info className="w-4 h-4" /> },
    // { href: '/jobs', label: 'Jobs', icon: <Briefcase className="w-4 h-4" /> },
  ]

  return (
    <motion.nav 
      className="fixed top-6 left-6 right-6 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.a 
          href="/"
          className="flex items-center gap-3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-2">
            <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">BETA</span>
            <span className="text-lg font-bold text-gray-900">TumbleCraft</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 text-gray-700 font-medium hover:text-primary hover:bg-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.icon}
              {link.label}
            </motion.a>
          ))}
          
          {/* Join Waitlist CTA */}
          <motion.a
            href="https://discord.gg/HYrTBqMKCM"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-or-discord px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <UserPlus className="w-4 h-4" />
            Join Waitlist
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-gray-200 text-gray-700 hover:text-primary transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="space-y-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 text-gray-700 font-medium hover:text-primary hover:bg-white transition-all duration-300 flex items-center gap-2 w-full"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
            
            {/* Join Waitlist CTA Mobile */}
            <motion.a
              href="https://discord.gg/HYrTBqMKCM"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-or-discord px-4 py-2 rounded-full shadow-lg flex items-center gap-2 w-full"
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 5 }}
            >
              <UserPlus className="w-4 h-4" />
              Join Waitlist
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}