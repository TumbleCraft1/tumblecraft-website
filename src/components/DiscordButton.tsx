'use client'

import { MessageCircle } from 'lucide-react'

interface DiscordButtonProps {
  href?: string
  className?: string
  children?: React.ReactNode
}

export default function DiscordButton({ 
  href = "https://discord.gg/N7hEkd82", 
  className = "", 
  children = "JOIN OUR DISCORD" 
}: DiscordButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#5865f2] to-[#4752c4] text-white font-bold px-8 py-4 rounded-lg hover:from-[#4752c4] hover:to-[#3c4ec7] ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {children}
    </a>
  )
}