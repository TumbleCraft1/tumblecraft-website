import Navigation from '@/components/Navigation'
import { getMarkdownContent } from '@/lib/markdown'
import { BookOpen } from 'lucide-react'
import GuideThumbnail from './GuideThumbnail'

// Enable static generation
export const dynamic = 'force-static'

// Generate static params for the guide page
export async function generateStaticParams() {
  return [{}] // Single static route for /guide
}

export default async function Guide() {
  const { content, data } = await getMarkdownContent('guide')

  // Extract excerpt from content (first paragraph or first 200 characters)
  const excerpt = data.description || "Everything you need to know about playing on TumbleCraft"

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">
                TumbleCraft Guide
              </h1>
            </div>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              Comprehensive documentation and guides for TumbleCraft server
            </p>
          </div>

          {/* Guide Thumbnail */}
          <GuideThumbnail 
            title={data.title || 'TumbleCraft Guide'}
            excerpt={excerpt}
            content={content}
            slug="getting-started"
          />
        </div>
      </div>
    </main>
  )
}