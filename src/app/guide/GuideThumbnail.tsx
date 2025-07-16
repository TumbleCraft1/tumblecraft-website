'use client'

import { motion } from 'framer-motion'
import { Clock, User, ArrowRight, BookOpen } from 'lucide-react'

interface GuideThumbnailProps {
  title: string
  excerpt: string
  content: string
}

export default function GuideThumbnail({ title, excerpt }: GuideThumbnailProps) {
  return (
    <div className="max-w-lg mx-auto">
      <motion.article
        className="bg-background-secondary border border-border-color rounded-lg p-4 hover:border-accent-primary/50 group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -2 }}
      >
        <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent-primary transition-colors">
          {title}
        </h2>
        <p className="text-sm text-foreground-secondary">
          {excerpt}
        </p>
      </motion.article>
    </div>
  )
}