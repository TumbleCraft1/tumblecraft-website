'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import PardonAppearanceModal from '@/components/PardonAppearanceModal'
import { shouldShowRenovationModal } from '@/utils/modalUtils'
import { Swords, Users, Trophy, Zap, Star, Calendar, UserPlus } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(shouldShowRenovationModal())
  }, [])

  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "1,000+ Quests",
      description: "Spanning storylines, skill training, and world events.",
      image: "/screenshot-1.png"
    },
    {
      icon: <Swords className="w-8 h-8" />,
      title: "Epic Boss Fights",
      description: "Unique mechanics and cooperative challenges.",
      image: "/screenshot-2.png"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Custom Skilling System",
      description: "Mining, fishing, combat, and more, with unique skillcapes and perks.",
      image: "/screenshot-3.png"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Balanced PvP & PvE",
      description: "Designed for both competitive and casual players.",
      image: "/screenshot-4.png"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Authentic SMP Feel",
      description: "Community-focused gameplay with long-term progression.",
      image: "/screenshot-5.png"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Custom Features & Events",
      description: "Economy balancing, player shops, tournaments, and more.",
      image: "/screenshot-6.png"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      <PardonAppearanceModal 
        show={showModal} 
        onClose={() => setShowModal(false)}
        noBlur={true}
        autoDismiss={5000}
      />


      {/* Story Section */}
      <section className="pt-36 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="section-title text-left">Our Story</h2>
              <div className="space-y-6 text-foreground-secondary leading-relaxed text-lg">
                <p>
                  TumbleCraft is a next-generation Minecraft experience built by <strong><a href="https://builtforniko.com" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">BuiltForNiko</a></strong>. We&apos;re a team of software engineers, gaming enthusiasts, and community builders who are tired of low-effort servers popping up for a week and vanishing.
                </p>
                <p>
                  Our vision is to blend the depth of classic RPGs with the freedom and creativity that Minecraft provides. We&apos;re here to set a new standard for Minecraft SMP.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/screenshot-7.png"
                alt="TumbleCraft Server Overview"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-background-secondary/20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">What Makes Us Different</h2>
            <p className="subtitle text-xl">We&apos;re creating a persistent, player-driven world with:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title}>
                <div className="relative rounded-xl p-8 h-full overflow-hidden border border-border/50">
                  <div className="absolute inset-0">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-white mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Development Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center">
            <h2 className="section-title mb-8">Our Promise</h2>
            <div className="space-y-8 text-lg leading-relaxed max-w-4xl mx-auto">
              <p className="text-foreground-secondary">
                We&apos;re still in active development, and the journey is just getting started. 
                Every feature we launch is tested, refined, and balanced with player feedback, 
                so our community directly shapes the world we&apos;re building.
              </p>
              <p className="text-2xl font-semibold text-primary">
                If you&apos;ve been looking for a server where progress matters, adventure thrives, 
                and the creators care deeply, welcome to TumbleCraft. 
                We&apos;re building the experience we want to play and you&apos;re invited to shape it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="section-title mb-4">Join the Journey</h2>
          <p className="text-foreground-secondary mb-8 text-xl">
            Connect with our community and help shape the future of TumbleCraft.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://discord.gg/HYrTBqMKCM"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-or-discord min-w-[200px]"
            >
              <UserPlus className="w-5 h-5" />
              Join Waitlist
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}


