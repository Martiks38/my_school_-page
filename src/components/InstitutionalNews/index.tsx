import Link from 'next/link'
import ArrowIcon from '../ArrowIcon'
import { notices } from '@/const'

export function InstitutionalNews() {
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
			<section className="grid grid-cols-[repeat(3,_minmax(300px,_320px))] place-content-between mt-10">
				{notices.map(({ description, id, title }) => {
					return (
						<Link
							key={id}
							href={`/novedades/${title.replaceAll(' ', '-')}`}
							className="block w-80 p-3 border border-[#0002] hover:border-[#000a]"
						>
							<h3 className="text-xl font-semibold">{title}</h3>
							<p className="mt-6">{description}</p>
							<span className="block w-full mt-4 px-4 py-2 border border-[#0006] text-ellipsis whitespace-nowrap overflow-hidden hover:bg-[#aba6a6]">
								LEER MÁS: {title}
							</span>
						</Link>
					)
				})}
			</section>
		</>
	)
}
