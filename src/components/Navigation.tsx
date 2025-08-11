'use client'

import { motion } from 'framer-motion'
import { Info, UserPlus } from 'lucide-react'

export default function Navigation() {

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

        {/* Navigation - Always visible on both desktop and mobile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="bg-white/90 backdrop-blur-sm px-3 py-2 sm:px-4 rounded-full shadow-lg border border-gray-200 text-gray-700 font-medium hover:text-primary hover:bg-white transition-all duration-300 flex items-center gap-1 sm:gap-2"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.icon}
              <span className="hidden xs:inline sm:inline">{link.label}</span>
            </motion.a>
          ))}
          
          {/* Join Waitlist CTA */}
          <motion.a
            href="https://discord.gg/HYrTBqMKCM"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-or-discord px-3 py-2 sm:px-4 rounded-full shadow-lg flex items-center gap-1 sm:gap-2"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <UserPlus className="w-4 h-4" />
            <span className="hidden xs:inline sm:inline">Join Waitlist</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}