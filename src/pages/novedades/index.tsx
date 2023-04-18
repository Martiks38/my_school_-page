import Head from 'next/head'
import Link from 'next/link'
import { LayoutPage } from '@/Layout/LayoutPage'
import { getAllNews } from '@/lib/news'
import { NewsData } from '@/typings'

interface NovedadesProps {
	news: string | NewsData[]
}

export default function Novedades({ news }: NovedadesProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Novedades | EET N°477</title>
				<meta property="og:title" content="Novedad | EET N° 477" />
			</Head>
			<LayoutPage>
				<main className="w-full max-w-primaryContent mx-auto mt-8 p-4 xl:border border-[#0005]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">Novedades Institucionales</h1>
					{Array.isArray(news) ? (
						<table className="w-full border">
							<tbody>
								{news.map(({ id, publishedAt, slug, title }, index) => {
									return (
										<tr key={id} className={index % 2 === 0 ? 'bg-[#dbdbdb]' : ''}>
											<td className="border border-black">
												<Link
													href={`/novedades/${slug}`}
													className="block w-fit px-3 py-3 hover:underline"
												>
													{title}
												</Link>
											</td>
											<td className="w-[11.25rem] px-3 py-3 border border-black text-center">
												{publishedAt}
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					) : (
						<p>{news}</p>
					)}
				</main>
			</LayoutPage>
		</>
	)
}

export async function getStaticProps() {
	const news = getAllNews()

	return {
		props: { news }
	}
}
