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
      className="fixed top-6 left-3 right-3 sm:left-6 sm:right-6 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="flex items-center justify-between">
        {/* Left: About/Info on mobile */}
        <div className="flex items-center sm:hidden">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="bg-white/90 backdrop-blur-sm px-2 py-2 rounded-full shadow-lg border border-gray-200 text-gray-700 font-medium hover:text-primary hover:bg-white transition-all duration-300 flex items-center gap-1"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>

        {/* Logo - Center on mobile, left on desktop */}
        <motion.a 
          href="/"
          className="flex items-center gap-2 sm:gap-3 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg border border-gray-200 absolute left-1/2 transform -translate-x-1/2 sm:relative sm:left-auto sm:transform-none"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="bg-orange-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">BETA</span>
            <span className="text-base sm:text-lg font-bold text-gray-900">TumbleCraft</span>
          </div>
        </motion.a>

        {/* Right: Join Waitlist on mobile, Both on desktop */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          {/* About/Info - Hidden on mobile, shown on desktop */}
          <div className="hidden sm:flex items-center gap-1 sm:gap-2 md:gap-3">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="bg-white/90 backdrop-blur-sm px-2 py-2 sm:px-3 sm:py-2 md:px-4 rounded-full shadow-lg border border-gray-200 text-gray-700 font-medium hover:text-primary hover:bg-white transition-all duration-300 flex items-center gap-1 sm:gap-2"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.icon}
                <span className="text-sm md:text-base">{link.label}</span>
              </motion.a>
            ))}
          </div>
          
          {/* Join Waitlist CTA */}
          <motion.a
            href="https://discord.gg/HYrTBqMKCM"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-or-discord px-2 py-2 sm:px-3 sm:py-2 md:px-4 rounded-full shadow-lg flex items-center gap-1 sm:gap-2"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <UserPlus className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline text-sm md:text-base">Join Waitlist</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}