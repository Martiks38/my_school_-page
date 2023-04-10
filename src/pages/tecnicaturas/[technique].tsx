import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { LayoutPage } from '@/Layout/LayoutPage'
import { ListItems } from '@/components/ListItem'
import { TableSubjects } from '@/components/TableSubjects'
import { dataTechniques } from '@/const'
import { useState } from 'react'

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

const title = {
	electromecanica: 'Electromecánica',
	electronica: 'Electrónica',
	renovables: 'Energías renovables'
}

export default function Techniques() {
	const [viewVideo, setViewVideo] = useState(false)
	const router = useRouter()
	const path = router.query.technique as TechniqueTypes
	const technique = title[path]

	const sections = dataTechniques[path as TechniqueTypes]?.sections

	return (
		<>
			<Head>
				<title>{technique} | EET N°477</title>
			</Head>
			<LayoutPage>
				<main className="grow w-full max-w-primaryContent mx-auto  mt-8 p-4 border border-[#0002]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">Tecnicatura en {technique}</h1>
					<div className="w-fit">
						<div className="w-[50rem] h-[28.125rem] mb-10">
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
						<div className="w-full border-l-8 border-[#0002]" aria-live="polite">
							{!viewVideo ? (
								<button
									className="flex justify-center items-center w-[35rem] mx-auto aspect-video bg-[url('/Escudo.webp')] bg-no-repeat bg-contain bg-center border border-[#0008]"
									onClick={() => setViewVideo(true)}
									aria-label={`Ver trabajos realizados por los estudiantes de ${technique}`}
								>
									<div className="p-6 rounded-lg hover:bg-[#000b] drop-shadow-[0_0_6px_rgb(0,0,0)]">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="800"
											height="800"
											viewBox="-0.5 0 7 7"
											className="w-12 h-12"
										>
											<path
												fill="#fff"
												fillRule="evenodd"
												d="M5.5 2.57 1.5.14C.83-.26 0 .25 0 1.07v4.86c0 .82.83 1.33 1.5.93l4-2.43a1.1 1.1 0 0 0 0-1.86"
											/>
										</svg>
									</div>
								</button>
							) : path === 'renovables' ? (
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/ZahRlFI6xa0?autoplay=1"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									className="w-[35rem] mx-auto aspect-video"
									aria-label={`Video de los trabajos realizados por los alumnos de ${technique}`}
								></iframe>
							) : (
								<video
									src={path && `/videos/${path}.mp4`}
									controls
									controlsList="nodownload"
									autoPlay
									className="w-[35rem] mx-auto aspect-video"
									aria-label={`Video de los trabajos realizados por los alumnos de ${technique}`}
								></video>
							)}
						</div>
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
