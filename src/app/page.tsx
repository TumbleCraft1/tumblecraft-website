'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServerInfo from '@/components/ServerInfo'
import GettingStarted from '@/components/GettingStarted'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <ServerInfo />
        <GettingStarted />
        <Footer />
      </div>
    </main>
  )
}
