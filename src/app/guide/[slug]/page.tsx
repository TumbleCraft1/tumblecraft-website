import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getMarkdownContent } from '@/lib/markdown'
import { BookOpen, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Enable static generation
export const dynamic = 'force-static'

// Generate static params for all guide pages
export async function generateStaticParams() {
  return [
    { slug: 'getting-started' }
  ]
}

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

  const { content, data } = await getMarkdownContent('guide')

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
                {data.title || 'TumbleCraft Guide'}
              </h1>
            </div>
            <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
              {data.description || 'Everything you need to know about playing on TumbleCraft'}
            </p>
          </div>

          {/* Guide Content */}
          <article className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-invert max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h1:text-3xl prose-h1:mb-8 prose-h1:text-accent-primary
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-accent-primary
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-foreground-secondary prose-p:leading-relaxed
                prose-li:text-foreground-secondary
                prose-strong:text-foreground prose-strong:font-semibold
                prose-code:bg-background-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-accent-primary
                prose-pre:bg-background-secondary prose-pre:border prose-pre:border-border-color
                prose-blockquote:border-l-accent-primary prose-blockquote:text-foreground-secondary
                prose-hr:border-border-color"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
}