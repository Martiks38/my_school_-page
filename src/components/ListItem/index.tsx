interface ListItemsProps {
	items: {
		id: string
		item: string
	}[]
}

export function ListItems({ items }: ListItemsProps) {
	return (
		<ul className="mt-2 list-disc list-inside">
			{items.map(({ id, item }) => {
				return (
					<li key={id} className="mb-1.5">
						{item}
					</li>
				)
			})}
		</ul>
	)
}
