'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Gamepad2, Users, BookOpen, MessageCircle } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#server-info', label: 'Game Modes', icon: <Gamepad2 className="w-4 h-4" /> },
    { href: '#community', label: 'Community', icon: <Users className="w-4 h-4" /> },
    { href: '#getting-started', label: 'Get Started', icon: <BookOpen className="w-4 h-4" /> },
    { href: '#', label: 'Discord', icon: <MessageCircle className="w-4 h-4" /> }
  ]

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background-secondary/95 backdrop-blur-md border-b border-border-color shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-accent-primary rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-glow">TumbleCraft</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="flex items-center gap-2 text-foreground-secondary hover:text-accent-primary transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
            
            <motion.button 
              className="btn-primary text-sm px-4 py-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Server
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground-secondary hover:text-accent-primary transition-colors"
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
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="flex items-center gap-3 text-foreground-secondary hover:text-accent-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
            
            <motion.button 
              className="btn-primary text-sm w-full mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Server
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}