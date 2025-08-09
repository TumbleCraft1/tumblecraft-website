'use client'

import Navigation from '@/components/Navigation'
import { MessageCircle, Sparkles } from 'lucide-react'
import { useBetaForm } from '@/context/BetaFormContext'

export default function AboutPage() {
  const { openForm } = useBetaForm()
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

      {/* Final CTA */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="feature-card">
            <h2 className="section-title mb-2">Jump in</h2>
            <p className="text-foreground-secondary">
              Join our Discord to get updates and apply for beta access.
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
              <button onClick={openForm} className="btn-or-server min-w-[200px]">
                <Sparkles className="w-5 h-5" />
                Apply For Beta
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


