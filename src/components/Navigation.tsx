'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Trophy, BookOpen, Info } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    ...(process.env.NODE_ENV === 'development' ? [{ href: '/about', label: 'About', icon: <Info className="w-4 h-4" /> }] : []),
    { href: '/docs', label: 'Documentation', icon: <BookOpen className="w-4 h-4" /> },
    { href: '/leaderboards', label: 'Leaderboards', icon: <Trophy className="w-4 h-4" /> },
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
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="text-lg font-bold text-gray-900">TumbleCraft</span>
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

          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}