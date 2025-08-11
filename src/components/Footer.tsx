'use client'

import { Heart, BookOpen, Trophy } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border/10 bg-black">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center text-sm">
          <a 
            href="https://builtforniko.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-white/80 transition-colors text-xs whitespace-nowrap flex items-center"
          >
            Built For Niko With
            <Heart className="inline-block w-3 h-3 mx-1" fill="red" stroke="red" />
          </a>
          
          <div className="flex items-center gap-3">
            <Link 
              href="/docs" 
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Documentation
            </Link>
            <Link 
              href="/leaderboards" 
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Leaderboards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}