import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import type { Article, News, NewsData } from '@/typings'

const pathFiles = process.env.NODE_ENV === 'test' ? 'src/__mocks__/_news' : 'src/content/_news'

const newsPath = path.join(process.cwd(), pathFiles)

export function getAllNews(): NewsData[] | string {
	const fileNames = fs.readdirSync(newsPath).filter((filename) => filename.match(/\.mdx?$/))

	if (fileNames.length === 0) return 'No hay noticias'

	const newsData = fileNames
		.map((fileName) => {
			const slug = fileName.replace(/\.mdx?$/, '')

			const filePath = path.join(newsPath, fileName)

			const fileContents = fs.readFileSync(filePath, 'utf8')

			const matterData = matter(fileContents).data as News

			return { slug, ...matterData }
		})
		// Orders the most recent dates to the oldest.
		.sort((notice1, notice2) => {
			const date1 = notice1.publishedAt.split('/').reverse().join('/')
			const date2 = notice2.publishedAt.split('/').reverse().join('/')

			return date2.localeCompare(date1)
		})

	return newsData
}

export async function getNews(fileName: string): Promise<Article> {
	const filePath = path.join(newsPath, `${fileName}.mdx`)

	const fileContents = fs.readFileSync(filePath, 'utf8')
	const matterResult = matter(fileContents)
	const { description, publishedAt, title } = matterResult.data
	const contentHTML = (await remark().use(html).process(matterResult.content)).toString()

	return { body: contentHTML, description, publishedAt, title }
}

export async function getPathsNews() {
	const fileNames = fs.readdirSync(newsPath).filter((filename) => filename.match(/\.mdx?$/))

	return fileNames.map((fileName) => {
		return {
			params: {
				title: fileName.replace(/\.mdx?$/, '')
			}
		}
	})
}
