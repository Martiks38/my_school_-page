type Course = {
	id: string
	course: string
	url: string
}

interface TimeBlockProps {
	courses: Course[]
	year: string
}

export function TimeBlock({ courses, year }: TimeBlockProps) {
	return (
		<section className="p-4 border border-[#0005] rounded-lg shadow-[0_2px_2px_rgb(0_0_0_/_12%),_0_2px_4px_rgb(0_0_0_/_16%)]">
			<h3 className="mb-3.5 text-lg font-medium underline underline-offset-1 decoration-2 text-[#010061]">
				{year}
			</h3>
			<ul className="list-disc list-inside [&>li]:mb-1.5">
				{courses.map((course) => {
					return (
						<li key={course.id}>
							<a
								href={course.url}
								target="_blank"
								rel="noreferrer noopener"
								className="px-4 py-2 text-lg hover:text-[#9c0b32] hover:underline"
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
