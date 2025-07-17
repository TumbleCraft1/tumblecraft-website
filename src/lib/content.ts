import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface MarkdownContent {
  content: string
  data: {
    title?: string
    description?: string
    [key: string]: unknown
  }
}

export interface GuideItem {
  slug: string
  title: string
  description: string
  content: string
  data: {
    [key: string]: unknown
  }
}

// Build-time content processing
export async function generateStaticContent(): Promise<GuideItem[]> {
  const contentDirectory = join(process.cwd(), 'src/content')
  const filenames = readdirSync(contentDirectory)
  
  const guides = await Promise.all(
    filenames
      .filter(name => name.endsWith('.md'))
      .map(async (name) => {
        const slug = name.replace(/\.md$/, '')
        const filePath = join(contentDirectory, name)
        const fileContents = readFileSync(filePath, 'utf8')
        const { data, content } = matter(fileContents)
        
        const processedContent = await remark()
          .use(html)
          .process(content)
        
        return {
          slug,
          title: data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: data.description || 'Guide documentation',
          content: processedContent.toString(),
          data
        }
      })
  )
  
  return guides.sort((a, b) => a.title.localeCompare(b.title))
}

// Static content data - generated at build time
export const STATIC_GUIDES: GuideItem[] = []