import React from 'react'

type TechnicalSection = {
	[index in 'Tercer' | 'Cuarto' | 'Quinto' | 'Sexto']: {
		id: string
		name: string
	}[]
}

interface TableSubjectsProps {
	sections: TechnicalSection
}

export function TableSubjects({ sections }: TableSubjectsProps) {
	return (
		<table className="max-w-[30rem]">
			<tbody className="[&>tr:last-child]:border-b-[#000]">
				{Object.entries(sections).map(([title, subjects]) => {
					return (
						<React.Fragment key={title}>
							<tr className="bg-[#0003] text-center">
								<th className="py-4 text-lg border-2 border-black uppercase">{title} año</th>
							</tr>
							{subjects.map((subject) => {
								return (
									<tr key={subject.id} className="border-2 border-x-black border-y-[#0003]">
										<td className="px-6 py-2.5">{subject.name}</td>
									</tr>
								)
							})}
						</React.Fragment>
					)
				})}
			</tbody>
		</table>
	)
}
