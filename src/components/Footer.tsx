'use client'

import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/10 bg-black">
      <div className="container mx-auto px-6 py-4">
        <div className="text-center text-sm">
          <a 
            href="https://builtforniko.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-white/80 transition-colors"
          >
            Built For Niko With{' '}
            <Heart className="inline-block w-4 h-4 mx-1" fill="red" stroke="red" />
          </a>
        </div>
      </div>
    </footer>
  )
}