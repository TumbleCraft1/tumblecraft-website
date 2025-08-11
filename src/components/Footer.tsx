'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/10 bg-black">
      <div className="container mx-auto px-6 py-4">
        <div className="text-center text-sm text-white/70">
          Built With{' '}
          <Heart className="inline-block w-4 h-4 mx-1" fill="none" stroke="currentColor" />{' '}
          <a 
            href="https://builtforniko.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Built For Niko
          </a>
        </div>
      </div>
    </footer>
  )
}