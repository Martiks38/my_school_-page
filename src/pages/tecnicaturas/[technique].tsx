import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { LayoutPage } from '@/Layout/LayoutPage'
import { ListItems } from '@/components/ListItem'
import { TableSubjects } from '@/components/TableSubjects'
import { dataTechniques } from '@/const'
import { useEffect, useState } from 'react'

type TechniqueTypes = 'electronica' | 'electromecanica' | 'renovables'

type ListItem = {
	id: string
	item: string
}[]

type TechnicalSection = {
	[index in 'Tercer' | 'Cuarto' | 'Quinto' | 'Sexto']: {
		id: string
		name: string
	}[]
}

type Video = {
	[index in 'electromecanica' | 'electronica' | 'renovables']: string
}

const title = {
	electromecanica: 'Electromecánica',
	electronica: 'Electrónica',
	renovables: 'Energías renovables'
}

const videos: Video = {
	renovables: 'https://www.youtube.com/embed/ZahRlFI6xa0',
	electronica: 'https://drive.google.com/file/d/1t02K3nHXSdU-2V_7pYqPQDmMt_j0uigU/preview',
	electromecanica: 'https://drive.google.com/file/d/1Y55LTJv_rnVo_HUsI7aHWNEc2hwm6aaL/preview'
}

export default function Techniques() {
	const [src, setSrc] = useState('')
	const router = useRouter()
	const path = router.query.technique as TechniqueTypes
	const technique = title[path]

	const sections = dataTechniques[path as TechniqueTypes]?.sections

	useEffect(() => {
		setSrc(videos[path])
	}, [path])

	return (
		<>
			<Head>
				<title>{technique} | EET N°477</title>
			</Head>
			<LayoutPage>
				<main className="w-full max-w-primaryContent mx-auto mt-8 px-8 xl:px-4 py-4 xl:border border-[#0002]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">Tecnicatura en {technique}</h1>
					<div className="w-fit">
						<div className="max-w-[50rem] w-full max-h-[28.125rem] h-auto mb-10">
							{path && (
								<Image
									src={path && `/images/${path}.webp`}
									alt={`Trabajo realizado por los estudiantes de ${technique}`}
									width={800}
									height={450}
									priority={true}
									className="aspect-video"
								/>
							)}
						</div>
						<iframe
							width="560"
							height="315"
							src={src}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="max-w-[35rem] w-full h-auto mx-auto aspect-video"
							title={`Video de los trabajos realizados por los alumnos de ${technique}`}
						></iframe>
					</div>
					<div className="max-w-[50rem]">
						<section className="my-10">
							<h3 className="mb-3 text-xl font-lg">¿Qué información vas a encontrar acá?</h3>
							<nav>
								<ul className="text-lg list-disc list-inside">
									{sections &&
										Object.keys(sections).map((section) => {
											return (
												<li key={section}>
													<a
														href={`#${encodeURI(section.toLowerCase())}`}
														className="text-[#010061] font-medium hover:underline"
													>
														{section}
													</a>
												</li>
											)
										})}
								</ul>
							</nav>
						</section>
						{sections &&
							Object.entries(sections).map(([name, data]) => {
								return (
									<section key={name} className="mb-8">
										<h2 id={name.toLowerCase()} className="mb-2.5 text-xl">
											{name}
										</h2>
										{name === 'Perfil profesional' && (
											<>
												<p>El/la Técnico/a en {technique} estará capacitado para: </p>
												<ListItems items={data as ListItem} />
											</>
										)}
										{name === 'Incumbencias profesionales' && (
											<>
												<p>Las principales áreas ocupacionales para éste técnico son:</p>
												<ListItems items={data as ListItem} />
											</>
										)}
										{name === 'Asignaturas' && (
											<TableSubjects sections={data as TechnicalSection} />
										)}
									</section>
								)
							})}
					</div>
				</main>
			</LayoutPage>
		</>
	)
}
