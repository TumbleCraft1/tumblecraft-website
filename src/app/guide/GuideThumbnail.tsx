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
    <Link href={`/guide/${slug}`}>
      <motion.article
        className="bg-background-secondary border border-border-color rounded-lg p-6 hover:border-primary/50 group cursor-pointer h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -2 }}
      >
        <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h2>
        <p className="text-foreground-secondary mb-4 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all mt-auto">
          <span className="text-sm font-medium">Read Guide</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </motion.article>
    </Link>
  )
}