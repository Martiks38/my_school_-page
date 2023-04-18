import Head from 'next/head'
import Image from 'next/image'
import { LayoutPage } from '@/Layout/LayoutPage'
import { getPathsTechnique, getTechnique } from '@/lib/techniques'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { ParamsTechniques, TechniqueData } from '@/typings'

interface TechniqueProps {
	techniqueData: TechniqueData
}

export default function Techniques({ techniqueData }: TechniqueProps): JSX.Element {
	const {
		__html,
		technique,
		imageAlt,
		imageSrc,
		iframe,
		profileId,
		subjectId,
		responsibilitiesId
	} = techniqueData

	return (
		<>
			<Head>
				<title>{`${technique} | EET N°477`}</title>
			</Head>
			<LayoutPage>
				<main className="w-full max-w-primaryContent mx-auto mt-8 px-8 xl:px-4 py-4 xl:border border-[#0002]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">Tecnicatura en {technique}</h1>
					<div className="w-fit">
						<div className="max-w-[50rem] w-full max-h-[28.125rem] h-auto mb-10">
							<Image
								src={imageSrc}
								alt={imageAlt}
								width={800}
								height={450}
								priority={true}
								className="aspect-video"
							/>
						</div>
						<iframe
							width="560"
							height="315"
							src={iframe}
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
								<ul className="text-lg list-disc list-inside font-medium">
									<li>
										<a href={profileId} className="text-[#010061] hover:underline">
											Perfil profesional
										</a>
									</li>
									<li>
										<a href={responsibilitiesId} className="text-[#010061] hover:underline">
											Incumbencias profesionales
										</a>
									</li>
									<li>
										<a href={subjectId} className="text-[#010061] hover:underline">
											Asignaturas
										</a>
									</li>
								</ul>
							</nav>
						</section>
						<div
							dangerouslySetInnerHTML={{ __html }}
							className="[&>h2]:text-2xl [&>h2]:mb-3 [&>h2_+_p]:mb-2.5 [&>ul]:list-disc [&>ul]:list-inside [&>ul_li]:mb-1.5 [&>ul]:mb-6 [&>table]:max-w-[30rem] [&>table]:w-full [&>table_th]:bg-[#9c0b32] [&>table_:is(thead,_tbody)>tr]:bg-[#0003] [&>table_tbody_tr]:border-2 [&>table_tbody_tr]:border-x-black [&>table_tbody_tr]:border-y-[#0003] [&>table_tbody_td]:px-6 [&>table_tbody_td]:py-2.5 [&>table_thead_th]:text-lg [&>table_thead_th]:text-white [&>table_thead_th]:border-black [&>table_thead_th]:border-2 [&>table_thead_th]:py-4 [&>table_tbody_tr:last-child]:border-b-0 [&>table:last-child]:border-b-2 [&>table:last-child]:border-b-black"
						></div>
					</div>
				</main>
			</LayoutPage>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getPathsTechnique()

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { technique } = params as ParamsTechniques

	let techniqueData = await getTechnique(technique)

	return {
		props: { techniqueData }
	}
}
