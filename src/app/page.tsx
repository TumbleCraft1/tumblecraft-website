'use client'

import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServerInfo from '@/components/ServerInfo'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServerInfo />
      <Footer />
    </main>
  )
}
