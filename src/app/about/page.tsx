'use client'

import Navigation from '@/components/Navigation'
import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Minimalist Hero */}
      <section className="pt-36 pb-12">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="hero-title">Why TumbleCraft</h1>
          <p className="subtitle mt-4">
            We're engineered with the single thought of making the best SMP experience possible. 
          </p>
        </div>
      </section>

      {/* Three-Panel Value Row */}
      <section className="py-4">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-6">
          {[
            { title: 'Fair Progression', desc: 'Earn it in-game. No pay-to-win. Rewards tuned for fun.' },
            { title: 'Social-first', desc: 'Teams, events, and tools that bring players together.' },
            { title: 'Polished UX', desc: 'Endless content and QOL updates, with a focus on player experience.' },
          ].map((v) => (
            <div key={v.title} className="game-card">
              <div className="text-lg font-semibold text-primary">{v.title}</div>
              <div className="text-foreground-secondary mt-1">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 cursor-pointer group overflow-hidden rounded-xl">
              <img 
                src="/screenshot-7.png" 
                alt="TumbleCraft server gameplay featuring modern builds and active community"
                className="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onClick={() => setSelectedImage("/screenshot-7.png")}
              />
            </div>
            <div className="aspect-square cursor-pointer group overflow-hidden rounded-xl">
              <img 
                src="/screenshot-3.png" 
                alt="Advanced team mechanics and collaboration features"
                className="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onClick={() => setSelectedImage("/screenshot-3.png")}
              />
            </div>
            <div className="aspect-square cursor-pointer group overflow-hidden rounded-xl">
              <img 
                src="/screenshot-4.png" 
                alt="Server events and community activities"
                className="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onClick={() => setSelectedImage("/screenshot-4.png")}
              />
            </div>
            <div className="col-span-2 cursor-pointer group overflow-hidden rounded-xl">
              <img 
                src="/screenshot-5.png" 
                alt="High-quality server infrastructure and polished user interface"
                className="rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onClick={() => setSelectedImage("/screenshot-5.png")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="feature-card">
            <h2 className="section-title mb-2">Jump in</h2>
            <p className="text-foreground-secondary">
              Join our Discord to connect with the community and get updates.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://discord.gg/HYrTBqMKCM"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-or-discord min-w-[200px]"
              >
                <MessageCircle className="w-5 h-5" />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full size server screenshot"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  )
}


