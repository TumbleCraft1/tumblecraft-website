'use client'

import { motion } from 'framer-motion'

interface GuideContentProps {
  content: string
}

export default function GuideContent({ content }: GuideContentProps) {
  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <article className="bg-background-secondary border border-border-color rounded-xl p-8 md:p-12">
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-foreground prose-headings:font-bold
            prose-h1:text-3xl prose-h1:text-accent-primary prose-h1:mb-6 prose-h1:mt-8 first:prose-h1:mt-0
            prose-h2:text-2xl prose-h2:text-accent-primary prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:text-foreground prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-foreground-secondary prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-foreground prose-strong:font-semibold
            prose-code:text-accent-primary prose-code:bg-background prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
            prose-pre:bg-background prose-pre:border prose-pre:border-border-color prose-pre:rounded-lg prose-pre:p-4
            prose-ul:text-foreground-secondary prose-ol:text-foreground-secondary prose-ul:mb-4 prose-ol:mb-4
            prose-li:marker:text-accent-primary prose-li:mb-1
            prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-accent-primary prose-blockquote:text-foreground-secondary prose-blockquote:bg-background prose-blockquote:px-4 prose-blockquote:py-2 prose-blockquote:rounded-r-lg
            prose-hr:border-border-color prose-hr:my-8
            prose-table:text-foreground-secondary prose-th:text-foreground prose-th:font-semibold
            prose-thead:border-b-border-color prose-td:border-border-color prose-th:border-border-color
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </motion.div>
  )
}