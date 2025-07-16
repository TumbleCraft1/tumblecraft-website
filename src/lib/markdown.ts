import { readFileSync } from 'fs'
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

// Cache for processed markdown content to avoid re-processing during build
const markdownCache = new Map<string, MarkdownContent>()

export async function getMarkdownContent(filename: string): Promise<MarkdownContent> {
  // Check cache first for build-time optimization
  if (markdownCache.has(filename)) {
    return markdownCache.get(filename)!
  }

  try {
    const filePath = join(process.cwd(), 'src/content', `${filename}.md`)
    const fileContents = readFileSync(filePath, 'utf8')
    
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    
    const result: MarkdownContent = {
      content: processedContent.toString(),
      data
    }

    // Cache the result for build-time optimization
    markdownCache.set(filename, result)
    
    return result
  } catch (error) {
    console.error('Error reading markdown file:', error)
    const fallbackResult: MarkdownContent = {
      content: '<p>Error loading guide content. Please try again later.</p>',
      data: {
        title: 'TumbleCraft Guide',
        description: 'Everything you need to know about playing on TumbleCraft'
      }
    }
    
    // Cache the fallback result too
    markdownCache.set(filename, fallbackResult)
    return fallbackResult
  }
}