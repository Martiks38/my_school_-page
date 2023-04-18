import type { Course } from '@/typings'

interface TimeBlockProps {
	courses: Course[]
	year: string
}

export function TimeBlock({ courses, year }: TimeBlockProps): JSX.Element {
	return (
		<section className="flex flex-col justify-between p-4 border border-[#0005] rounded-lg shadow-[0_2px_2px_rgb(0_0_0_/_12%),_0_2px_4px_rgb(0_0_0_/_16%)]">
			<h3 className="block h-16 mb-3.5 text-lg font-medium underline underline-offset-1 decoration-2 text-[#010061]">
				{year}
			</h3>
			<ul className="grow list-disc list-inside [&>li]:mb-3">
				{courses.map((course) => {
					return (
						<li key={course.id}>
							<a
								href={course.url}
								target="_blank"
								rel="noreferrer noopener"
								className="pl-2 pr-4 py-3 text-lg hover:text-[#9c0b32] hover:underline"
							>
								{course.course}
							</a>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
