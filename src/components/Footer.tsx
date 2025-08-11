'use client'

import { Heart, BookOpen, Trophy } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border/10 bg-black">
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center text-sm flex-col sm:flex-row gap-2 sm:gap-0">
          <a 
            href="https://builtforniko.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-white/80 transition-colors text-xs flex items-center order-2 sm:order-1"
          >
            Built For Niko With
            <Heart className="inline-block w-3 h-3 mx-1" fill="red" stroke="red" />
          </a>
          
          <div className="flex items-center gap-2 sm:gap-3 order-1 sm:order-2">
            <Link 
              href="/docs" 
              className="text-white/70 hover:text-white transition-colors flex items-center gap-1 sm:gap-2"
            >
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Docs</span>
            </Link>
            <Link 
              href="/leaderboards" 
              className="text-white/70 hover:text-white transition-colors flex items-center gap-1 sm:gap-2"
            >
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm">Leaderboards</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}