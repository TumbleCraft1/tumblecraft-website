import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServerInfo from '@/components/ServerInfo'
import CommunityHub from '@/components/CommunityHub'
import GettingStarted from '@/components/GettingStarted'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServerInfo />
      <CommunityHub />
      <GettingStarted />
      <Footer />
    </main>
  );
}
