'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import PardonAppearanceModal from '@/components/PardonAppearanceModal'
import { shouldShowRenovationModal } from '@/utils/modalUtils'
// import ServerInfo from '@/components/ServerInfo'

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setShowModal(shouldShowRenovationModal())
  }, [])

  return (
    <main className="h-full overflow-hidden">
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
