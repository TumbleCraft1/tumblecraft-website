'use client'

import { Heart, BookOpen, Trophy } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/10 bg-black">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center text-sm">
          <a 
            href="https://builtforniko.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-bold hover:text-white/80 transition-colors"
          >
            Built For Niko With{' '}
            <Heart className="inline-block w-4 h-4 mx-1" fill="red" stroke="red" />
          </a>
          
          <div className="flex items-center gap-6">
            <a 
              href="/docs" 
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Documentation
            </a>
            <a 
              href="/leaderboards" 
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
            >
              <Trophy className="w-4 h-4" />
              Leaderboards
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}