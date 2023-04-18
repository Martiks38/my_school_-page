import Link from 'next/link'
import ArrowIcon from '../ArrowIcon'
import stylesInstitutionalNews from './Institutional.module.css'
import type { NewsData } from '@/typings'

export function InstitutionalNews({ news }: { news: NewsData[] }): JSX.Element {
	return (
		<>
			<h2 className="w-fit">
				<Link href="/novedades">
					<span className="flex items-center gap-4 px-4 py-2 bg-black hover:bg-[#9c0b32]">
						<span className="block text-xl font-semibold text-white ">
							Novedades Institucionales
						</span>
						<ArrowIcon styles="w-4 h-4" />
					</span>
				</Link>
			</h2>
			<section className="grid grid-cols-[repeat(auto-fill,_minmax(20rem,22.5rem))] grid-rows-1 auto-rows-fr place-content-center lg:place-content-start gap-4 mt-10">
				{news.slice(0, 3).map(({ description, id, slug, title }) => {
					return (
						<Link
							key={id}
							href={`/novedades/${slug}`}
							className="grid grid-rows-[min-content_auto_min-content] w-full p-3 border border-[#0002] hover:border-[#000a]"
						>
							<h3 className="text-xl font-semibold">{title}</h3>
							<p className={`mt-6 ${stylesInstitutionalNews.description}`}>{description}</p>
							<span className="block w-full h-fit mt-4 px-4 py-2 border border-[#0006] text-ellipsis whitespace-nowrap overflow-hidden hover:bg-[#aba6a6]">
								LEER MÁS: {title}
							</span>
						</Link>
					)
				})}
			</section>
		</>
	)
}
