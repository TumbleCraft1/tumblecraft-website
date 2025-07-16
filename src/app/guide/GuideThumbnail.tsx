'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface GuideThumbnailProps {
  title: string
  excerpt: string
  content: string
  slug: string
}

export default function GuideThumbnail({ title, excerpt, slug }: GuideThumbnailProps) {
  return (
    <div className="max-w-lg mx-auto">
      <Link href={`/guide/${slug}`}>
        <motion.article
          className="bg-background-secondary border border-border-color rounded-lg p-6 hover:border-accent-primary/50 group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -2 }}
        >
          <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-primary transition-colors">
            {title}
          </h2>
          <p className="text-foreground-secondary mb-4 leading-relaxed">
            {excerpt}
          </p>
          <div className="flex items-center gap-2 text-accent-primary group-hover:gap-3 transition-all">
            <span className="text-sm font-medium">Read Full Guide</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.article>
      </Link>
    </div>
  )
}