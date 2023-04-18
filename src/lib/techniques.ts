import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import { remarkHeadingId } from 'remark-custom-heading-id'
import remarkStringify from 'remark-stringify'
import type { Technique, TechniqueData } from '@/typings'

const pathFiles =
	process.env.NODE_ENV === 'test' ? 'src/__mocks__/_techniques' : 'src/content/_techniques'

const techniquePath = path.join(process.cwd(), pathFiles)

export async function getTechnique(filename: string): Promise<TechniqueData> {
	const filePath = path.join(techniquePath, `${filename}.mdx`)

	const content = fs.readFileSync(filePath, 'utf8')
	const matterResult = matter(content)
	const __html = (
		await remark()
			.use(remarkGfm)
			.use(remarkHeadingId)
			.use(remarkStringify)
			.use(html, { sanitize: false })
			.process(matterResult.content)
	).toString()

	return { __html, ...(matterResult.data as Technique) }
}

export async function getPathsTechnique() {
	const filenames = fs
		.readdirSync(techniquePath, 'utf8')
		.filter((filename) => filename.match(/\.mdx?$/))

	return filenames.map((filename) => {
		return {
			params: {
				technique: filename.replace(/\.mdx?$/, '')
			}
		}
	})
}
