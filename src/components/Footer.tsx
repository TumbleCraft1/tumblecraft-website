'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Twitter, Youtube, Twitch, Mail, Copy, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const serverIP = "play.tumblecraft.net"

  const copyServerIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const socialLinks = [
    { icon: <MessageCircle className="w-5 h-5" />, label: 'Discord', href: 'https://discord.gg/N7hEkd82', color: 'hover:text-[#5865f2]' },
    { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#', color: 'hover:text-[#1da1f2]' },
    { icon: <Youtube className="w-5 h-5" />, label: 'YouTube', href: '#', color: 'hover:text-[#ff0000]' },
    { icon: <Twitch className="w-5 h-5" />, label: 'Twitch', href: '#', color: 'hover:text-[#9146ff]' }
  ]

  const quickLinks = [
    { label: 'Server Rules', href: '#getting-started' },
    { label: 'Game Modes', href: '#server-info' },
    { label: 'Community', href: '#community' },
    { label: 'Getting Started', href: '#getting-started' }
  ]

  const serverInfo = [
    { label: 'Server IP', value: serverIP },
    { label: 'Version', value: '1.21+' },
    { label: 'Location', value: 'North America' },
    { label: 'Uptime', value: '99.9%' }
  ]

  return (
    <footer className="bg-background-tertiary border-t border-border-color">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 bg-accent-primary rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-glow">TumbleCraft</span>
            </motion.div>
            
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              Experience the ultimate Minecraft adventure with our thriving SMP community 
              and challenging Prison gamemode. Join thousands of players today!
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-foreground-secondary ${social.color}`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-foreground-secondary hover:text-accent-primary flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Server Information */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Server Info</h3>
            <ul className="space-y-3">
              {serverInfo.map((info, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="text-foreground-secondary text-sm">{info.label}:</span>
                  <span className="text-accent-primary text-sm font-mono">{info.value}</span>
                </li>
              ))}
            </ul>
            
            <motion.button
              onClick={copyServerIP}
              className="mt-4 flex items-center gap-2 bg-background-secondary border border-border-color rounded-lg px-4 py-2 hover:border-accent-primary w-full justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Copy className="w-4 h-4" />
              <span className="text-sm">{copied ? 'Copied!' : 'Copy Server IP'}</span>
            </motion.button>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Support</h3>
            <div className="space-y-4">
              <div>
                <p className="text-foreground-secondary text-sm mb-2">Need help? Contact us:</p>
                <motion.a
                  href="#"
                  className="flex items-center gap-2 text-accent-primary hover:text-accent-secondary"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">support@tumblecraft.net</span>
                </motion.a>
              </div>
              
              <div>
                <p className="text-foreground-secondary text-sm mb-2">Join our Discord for:</p>
                <ul className="text-foreground-secondary text-xs space-y-1">
                  <li>• 24/7 community support</li>
                  <li>• Server updates & news</li>
                  <li>• Events & giveaways</li>
                  <li>• Player trading</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border-color pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-foreground-secondary">
              <span>© 2024 TumbleCraft. All rights reserved.</span>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent-primary">Privacy Policy</a>
                <a href="#" className="hover:text-accent-primary">Terms of Service</a>
                <a href="#" className="hover:text-accent-primary">DMCA</a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-foreground-secondary">
              <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></div>
              <span>Server Status: Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Minecraft-style border pattern */}
      <div className="h-1 bg-accent-primary"></div>
    </footer>
  )
}