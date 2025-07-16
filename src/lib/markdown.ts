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
    [key: string]: any
  }
}

export async function getMarkdownContent(filename: string): Promise<MarkdownContent> {
  try {
    const filePath = join(process.cwd(), 'src/content', `${filename}.md`)
    const fileContents = readFileSync(filePath, 'utf8')
    
    const { data, content } = matter(fileContents)
    
    const processedContent = await remark()
      .use(html)
      .process(content)
    
    return {
      content: processedContent.toString(),
      data
    }
  } catch (error) {
    console.error('Error reading markdown file:', error)
    return {
      content: '<p>Error loading guide content. Please try again later.</p>',
      data: {
        title: 'TumbleCraft Guide',
        description: 'Everything you need to know about playing on TumbleCraft'
      }
    }
  }
}