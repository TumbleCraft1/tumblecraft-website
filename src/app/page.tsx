'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import PardonAppearanceModal from '@/components/PardonAppearanceModal'
// import ServerInfo from '@/components/ServerInfo'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation />
      <PardonAppearanceModal 
        show={showModal} 
        onClose={() => setShowModal(false)}
        noBlur={true}
        autoDismiss={5000}
      />
      <HeroSection />
      {/* <ServerInfo /> */}
    </main>
  )
}
