import { useMemo } from 'react'
import Head from 'next/head'
import { LayoutPage } from '@/Layout/LayoutPage'
import { getNews, getPathsNews } from '@/utils/news'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import type { Article } from '@/typings'

interface ParamsNotice extends ParsedUrlQuery {
	title: string
}

interface NoticeProps {
	notice: Article
}

export default function Notice({ notice }: NoticeProps): JSX.Element {
	const { body, description, publishedAt, title } = notice

	let date = useMemo(
		() =>
			new Date(publishedAt.split('/').reverse().join('/')).toLocaleDateString('es-AR', {
				weekday: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			}),
		[publishedAt]
	)

	let dateFormat = date.charAt(0).toUpperCase() + date.slice(1)

	return (
		<>
			<Head>
				<title>{`${title} | EET N°477`}</title>
				<meta property="og:title" content={title} />
				<meta name="description" content={description} />
				<meta property="og:description" content={description} />
			</Head>
			<LayoutPage>
				<main className="w-full max-w-primaryContent mx-auto mt-8 pt-4 px-4 pb-40 md:px-8 xl:border border-[#0005]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">{title}</h1>
					<blockquote className="mb-4 text-lg [&>blockquote_p]:pl-6 [&_blockquote]:border-l-4 [&_blockquote]:border-l-[#0003]">
						{description}
					</blockquote>
					<div
						dangerouslySetInnerHTML={{ __html: body }}
						className="flex flex-col gap-4 max-w-[80ch] mb-4 text-lg [&>blockquote_p]:pl-6 [&_blockquote]:border-l-4 [&_blockquote]:border-l-[#0003] [&_ul>li]:list-disc [&_ul>li]:list-inside [&_a]:text-[#010061] [&_a]:font-medium hover:[&_a]:underline"
					></div>
					<small>
						<span className="mr-3.5">📆</span>
						{dateFormat}
					</small>
				</main>
			</LayoutPage>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getPathsNews()

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { title } = params as ParamsNotice
	let notice = await getNews(title)

	return {
		props: { notice }
	}
}
