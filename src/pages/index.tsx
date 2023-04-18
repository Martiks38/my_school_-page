import Head from 'next/head'
import Image from 'next/image'
import { InstitutionalNews } from '@components/InstitutionalNews'
import { LayoutPage } from '@/Layout/LayoutPage'
import { getAllNews } from '@/utils/news'
import type { NewsData } from '@/typings'

interface HomeProps {
	news: string | NewsData[]
}

export default function Home({ news }: HomeProps): JSX.Element {
	return (
		<>
			<Head>
				<title>Home | EET N°477</title>
				<meta
					name="description"
					content='Escuela de Educación Técnico Profesional N°477 "Combate de San Lorenzo". Avenida San Martín 3575, San Lorenzo, Santa Fe, Argentina. Ofrece títulos en: Técnico Electromecánico, Técnico Electrónico y Técnico en Energías Renovables.'
				/>
				<meta property="og:title" content="Home | EETP N° 477" />
				<meta
					property="og:description"
					content='Escuela de Educación Técnico Profesional N°477 "Combate de San Lorenzo". Avenida San Martín 3575, San Lorenzo, Santa Fe, Argentina. Ofrece títulos en: Técnico Electromecánico, Técnico Electrónico y Técnico en Energías Renovables.'
				/>
			</Head>
			<LayoutPage haveHeroImage={true}>
				<Image
					src="/escuela.webp"
					alt=""
					width={1920}
					height={1080}
					className="fixed top-0 -z-10 w-screen h-screen object-cover"
					priority={true}
				/>
				<main className="w-full max-w-primaryContent mx-auto mt-8 p-4 xl:border border-[#0005]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">
						Escuela de Educación Técnica Profesional N°&nbsp;477
					</h1>
					{Array.isArray(news) ? (
						<InstitutionalNews news={news} />
					) : (
						<p className="min-h-[14rem] text-2xl">{news}</p>
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
