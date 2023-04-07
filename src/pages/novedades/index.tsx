import { LayoutPage } from '@/Layout/LayoutPage'
import { notices } from '@/const'
import Head from 'next/head'
import Link from 'next/link'

export default function Novedades() {
	return (
		<>
			<Head>
				<title>Novedades | EET N°477</title>

				<meta property="og:title" content="Novedad | EET N° 477" />
			</Head>
			<LayoutPage>
				<main className="grow w-full max-w-primaryContent mx-auto  mt-8 p-4 border border-[#0005]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">Novedades Institucionales</h1>
					<table className="w-full border">
						<tbody>
							{notices.map(({ date, id, title }, index) => {
								return (
									<tr key={id} className={index % 2 === 0 ? 'bg-[#dbdbdb]' : ''}>
										<td className="px-3 py-1.5 border border-black">
											<Link
												href={`/novedades/${title.replaceAll(' ', '-')}`}
												className="hover:underline"
											>
												{title}
											</Link>
										</td>
										<td className="w-[11.25rem] px-3 py-1.5 border border-black text-center">
											{date}
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</main>
			</LayoutPage>
		</>
	)
}
