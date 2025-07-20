'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Trophy, BookOpen, MessageCircle } from 'lucide-react'
import { useBetaForm } from '@/context/BetaFormContext'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { openForm } = useBetaForm()

  const navLinks = [
    { href: '/leaderboards', label: 'Leaderboards', icon: <Trophy className="w-4 h-4" /> },
    { href: '/guide', label: 'Wiki', icon: <BookOpen className="w-4 h-4" /> },
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
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 text-gray-700 font-medium hover:text-primary hover:bg-white transition-all duration-300 flex items-center gap-2"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.icon}
              {link.label}
            </motion.a>
          ))}
          
          {/* Discord Button */}
          <motion.a
            href="https://discord.gg/HYrTBqMKCM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865F2] hover:bg-[#4752C4] px-4 py-2 rounded-full shadow-lg text-white font-medium transition-all duration-300 flex items-center gap-2"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-4 h-4" />
            DISCORD
          </motion.a>

          {/* Apply for Beta Button */}
          <motion.button
            onClick={openForm}
            className="bg-[#FF8C00] hover:bg-[#FF7700] px-4 py-2 rounded-full shadow-lg text-white font-medium transition-all duration-300 flex items-center gap-2"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            APPLY FOR BETA
          </motion.button>
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
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200 text-gray-700 font-medium hover:text-primary hover:bg-white transition-all duration-300 flex items-center gap-2 w-full"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
            
            {/* Mobile Discord Button */}
            <motion.a
              href="https://discord.gg/HYrTBqMKCM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] px-4 py-2 rounded-full shadow-lg text-white font-medium transition-all duration-300 flex items-center gap-2 w-full"
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 5 }}
            >
              <MessageCircle className="w-4 h-4" />
              DISCORD
            </motion.a>

            {/* Mobile Apply for Beta Button */}
            <motion.button
              onClick={() => {
                openForm()
                setIsOpen(false)
              }}
              className="bg-[#FF8C00] hover:bg-[#FF7700] px-4 py-2 rounded-full shadow-lg text-white font-medium transition-all duration-300 flex items-center gap-2 w-full"
              whileHover={{ x: 5 }}
            >
              APPLY FOR BETA
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}