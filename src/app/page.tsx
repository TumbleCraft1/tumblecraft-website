import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServerInfo from '@/components/ServerInfo'
import GettingStarted from '@/components/GettingStarted'
import Footer from '@/components/Footer'
import BetaApplicationForm from '@/components/BetaApplicationForm'
import { BetaFormProvider, useBetaForm } from '@/context/BetaFormContext'

function HomeContent() {
  const { isFormOpen, closeForm } = useBetaForm()

  return (
    <>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-16">
          <HeroSection />
          <ServerInfo />
          <GettingStarted />
          <Footer />
        </div>
      </main>
      <BetaApplicationForm isOpen={isFormOpen} onClose={closeForm} />
    </>
  )
}

export default function Home() {
  return (
    <BetaFormProvider>
      <HomeContent />
    </BetaFormProvider>
  );
}
