'use client'

interface GuideContentProps {
  content: string
  title: string
}

export default function GuideContent({ content }: GuideContentProps) {

  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg prose-invert max-w-none
        prose-headings:text-foreground prose-headings:font-bold
        prose-h1:text-3xl prose-h1:mb-8 prose-h1:text-primary
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
        prose-p:text-foreground-secondary prose-p:leading-relaxed
        prose-li:text-foreground-secondary
        prose-strong:text-foreground prose-strong:font-semibold
        prose-code:bg-background-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-primary
        prose-ul:space-y-2 prose-ol:space-y-2
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
        prose-hr:border-border-color
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}