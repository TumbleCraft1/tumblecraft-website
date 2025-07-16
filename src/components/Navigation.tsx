'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Trophy, BookOpen, MessageCircle, Briefcase } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/coming-soon', label: 'Leaderboards', icon: <Trophy className="w-4 h-4" /> },
    { href: '/guide', label: 'Wiki', icon: <BookOpen className="w-4 h-4" /> },
    { href: '/jobs', label: 'Jobs', icon: <Briefcase className="w-4 h-4" /> },
    { href: 'https://discord.gg/HYrTBqMKCM', label: 'Discord', icon: <MessageCircle className="w-4 h-4" /> }
  ]

  return (
    <motion.nav 
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a 
            href="/"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold">TumbleCraft</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.slice(0, -1).map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="nav-link"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
            
            {/* Discord Button - Special styling */}
            <motion.a
              href="https://discord.gg/HYrTBqMKCM"
              className="btn-or-discord"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Discord
            </motion.a>
            
            <motion.a 
              href="/coming-soon"
              className="btn-or-server"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply for Beta
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground-secondary hover:text-accent-primary"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          className={`md:hidden overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
          animate={{ maxHeight: isOpen ? 384 : 0 }}
        >
          <div className="py-4 space-y-3">
            {navLinks.slice(0, -1).map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="nav-link w-full"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 5 }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
            
            {/* Discord Button */}
            <motion.a
              href="https://discord.gg/HYrTBqMKCM"
              onClick={() => setIsOpen(false)}
              className="btn-or-discord w-full mt-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Discord
            </motion.a>
            
            <motion.a 
              href="/coming-soon"
              onClick={() => setIsOpen(false)}
              className="btn-or-server w-full mt-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Apply for Beta
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}