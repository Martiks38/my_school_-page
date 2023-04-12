import Head from 'next/head'
import { LayoutPage } from '@/Layout/LayoutPage'
import { TimeBlock } from '@/components/TimeBlock'
import { schedules } from '@/const'

export default function Schedules() {
	return (
		<>
			<Head>
				<title>Estudiantes | EET N°477</title>
				<meta name="description" content="" />

				<meta property="og:title" content="Estudiantes | EET N°477" />
				<meta property="og:description" content="" />
			</Head>
			<LayoutPage>
				<main className="w-full max-w-primaryContent mx-auto mt-8 py-4 px-8 md:px-4 xl:border border-[#0002]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">Horarios de cursado</h1>
					<strong className="block mb-5">
						En los casos en que no figure el horario de curso se irá completando la información
						progresivamente.
					</strong>
					<div className="grid grid-cols-[repeat(auto-fit,_minmax(17.5rem,22.5rem))] grid-rows-1 auto-rows-fr justify-center gap-10">
						{schedules.map(({ courses, id, year }) => {
							return <TimeBlock key={id} courses={courses} year={year} />
						})}
					</div>
				</main>
			</LayoutPage>
		</>
	)
}
