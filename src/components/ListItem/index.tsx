import type { ListItem } from '@/typings'

interface ListItemsProps {
	items: ListItem
}

export function ListItems({ items }: ListItemsProps): JSX.Element {
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
