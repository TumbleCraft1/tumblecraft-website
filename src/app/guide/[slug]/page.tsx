import Navigation from '@/components/Navigation'
import { BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getMarkdownContent, getAllGuides } from '@/lib/markdown'
import GuideContent from './GuideContent'

interface GuidePageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all guides
export async function generateStaticParams() {
  const guides = getAllGuides()
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params
  
  // Try to load the markdown content for this slug
  let markdownContent
  try {
    markdownContent = await getMarkdownContent(slug)
  } catch (error) {
    console.error('Error loading guide:', error)
    notFound()
  }
  
  // Verify the guide exists in our guides list
  const guides = getAllGuides()
  const guide = guides.find(g => g.slug === slug)
  if (!guide) {
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
              className="inline-flex items-center gap-2 text-foreground-secondary hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Guides
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">
                {markdownContent.data.title || guide.title}
              </h1>
            </div>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              {markdownContent.data.description || guide.description}
            </p>
          </div>

          <GuideContent content={markdownContent.content} title={markdownContent.data.title || guide.title} />
        </div>
      </div>
    </main>
  )
}