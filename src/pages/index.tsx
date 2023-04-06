import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { InstitutionalNews } from '@components/InstitutionalNews'
import { LayoutPage } from '@/Layout/LayoutPage'

export default function Home() {
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
			<LayoutPage>
				<Image
					src="/escuela.webp"
					alt=""
					width={1920}
					height={1080}
					className="fixed top-0 -z-10 w-screen h-screen object-cover"
					priority={true}
				/>
				<main className="grow w-full max-w-primaryContent mx-auto  mt-8 p-4 border border-[#0005]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">
						Escuela de Educación Técnica Profesional N° 477
					</h1>
					<InstitutionalNews />
				</main>
			</LayoutPage>
		</>
	)
}
