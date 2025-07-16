import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import GuideContent from './GuideContent'

interface GuidePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params
  
  // Map slug to markdown file - for now we only have one guide
  if (slug !== 'getting-started') {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              href="/guide"
              className="inline-flex items-center gap-2 text-foreground-secondary hover:text-accent-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Guides
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-accent-primary" />
              <h1 className="text-4xl md:text-5xl font-bold text-glow">
                TumbleCraft Guide
              </h1>
            </div>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Everything you need to know about playing on TumbleCraft
            </p>
          </div>

          <GuideContent />
        </div>
      </div>
      <Footer />
    </main>
  )
}