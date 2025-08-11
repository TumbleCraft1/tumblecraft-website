'use client'

import Navigation from '@/components/Navigation'
import { MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="hero-title">About TumbleCraft</h1>
          <p className="subtitle mt-4">
            A next-generation Minecraft experience built by BuiltForNiko.com
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="feature-card text-left">
            <div className="space-y-6 text-foreground-secondary leading-relaxed">
              <p>
                TumbleCraft is a next-generation Minecraft experience built by <strong><a href="https://builtforniko.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">BuiltForNiko</a></strong>. We're a team of software engineers, gaming enthusiasts, and community builders who are tired of low-effort servers popping up for a week and vanishing. We're here to set a new standard for Minecraft SMP.
              </p>
              
              <p>
                Our vision is to blend the depth of classic RPGs with the freedom and creativity that Minecraft provides.
              </p>
              
              <div>
                <p className="mb-4">We're creating a persistent, player-driven world with:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-primary font-semibold mr-2">•</span>
                    <span>1,000+ Quests: Spanning storylines, skill training, and world events.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-semibold mr-2">•</span>
                    <span>Epic Boss Fights: Unique mechanics and cooperative challenges.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-semibold mr-2">•</span>
                    <span>Custom Skilling System: Mining, fishing, combat, and more, with unique skillcapes and perks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-semibold mr-2">•</span>
                    <span>Balanced PvP & PvE: Designed for both competitive and casual players.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-semibold mr-2">•</span>
                    <span>Authentic SMP Feel: Community-focused gameplay with long-term progression.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-semibold mr-2">•</span>
                    <span>Custom Features & Events: Economy balancing, player shops, tournaments, and more.</span>
                  </li>
                </ul>
              </div>
              
              <p>
                We're still in active development, and the journey is just getting started. 
                Every feature we launch is tested, refined, and balanced with player feedback, 
                so our community directly shapes the world we're building.
              </p>
              
              <p>
                If you've been looking for a server where progress matters, adventure thrives, 
                and the creators care deeply, welcome to TumbleCraft. 
                We're building the experience we want to play and you're invited to shape it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="feature-card">
            <h2 className="section-title mb-2">Join the Journey</h2>
            <p className="text-foreground-secondary mb-6">
              Connect with our community and help shape the future of TumbleCraft.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
    </main>
  )
}


