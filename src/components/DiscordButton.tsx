'use client'

import { UserPlus } from 'lucide-react'

interface DiscordButtonProps {
  href?: string
  className?: string
  children?: React.ReactNode
}

export default function DiscordButton({ 
  href = "https://discord.gg/N7hEkd82", 
  className = "", 
  children = "Join The Waitlist" 
}: DiscordButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-or-discord ${className}`}
    >
      <UserPlus className="w-5 h-5" />
      {children}
    </a>
  )
}