import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { LayoutPage } from '@/Layout/LayoutPage'
import errorImg from '@/assets/images/error.png'

export default function Custom404() {
	return (
		<>
			<Head>
				<title>Error 404</title>
				<meta name="description" content="Página no encontrada." />
			</Head>
			<LayoutPage>
				<main className="w-full max-w-primaryContent mx-auto mt-8 p-4">
					<div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-center gap-8 w-fit mx-auto mb-10 md:mb-40 py-4 px-8 xl:border border-[#0005]">
						<div className="">
							<h1 className="px-4 mb-8 text-center text-4xl font-robotoMono font-bold">404</h1>
							<p className="px-4 mb-6 font-medium text-xl">Está página no pudo ser encontrada.</p>
							<Link
								href="/"
								className="block w-fit px-4 py-2 font-semibold text-lg hover:underline text-[#010061]"
							>
								Ir al inicio
							</Link>
						</div>
						<Image
							src={errorImg}
							alt="No se encontró la página solicitada."
							width={330}
							height={336}
						/>
					</div>
				</main>
			</LayoutPage>
		</>
	)
}
