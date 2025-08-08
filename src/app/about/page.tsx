'use client'

import Navigation from '@/components/Navigation'
import { MessageCircleMore, Sparkles, Trophy } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Minimalist Hero */}
      <section className="pt-36 pb-12">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="hero-title">Why TumbleCraft</h1>
          <p className="subtitle mt-4">
            A clean, modern SMP focused on progression that feels fair, social systems that make teaming easy,
            and seasonal events that stay exciting without grind walls.
          </p>
        </div>
      </section>

      {/* Three-Panel Value Row */}
      <section className="py-4">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-6">
          {[
            { title: 'Fair Progression', desc: 'Earn it in-game. No pay-to-win. Rewards tuned for fun.' },
            { title: 'Social-first', desc: 'Teams, events, and tools that bring players together.' },
            { title: 'Polished UX', desc: 'Readable UI, smooth motion, and consistently high quality.' },
          ].map((v) => (
            <div key={v.title} className="game-card">
              <div className="text-lg font-semibold text-primary">{v.title}</div>
              <div className="text-foreground-secondary mt-1">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-4">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="feature-card flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2"><Trophy className="w-5 h-5 text-primary" /><span className="text-sm text-foreground-muted">99.95% Uptime</span></div>
            <div className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-accent" /><span className="text-sm text-foreground-muted">Weekly Updates</span></div>
            <div className="flex items-center gap-2"><MessageCircleMore className="w-5 h-5 text-primary" /><span className="text-sm text-foreground-muted">Active Discord</span></div>
          </div>
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
                Join Discord
              </a>
              <a href="#apply" className="btn-or-server min-w-[200px]">Apply For Beta</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


