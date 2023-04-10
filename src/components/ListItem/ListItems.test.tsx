import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { ListItems } from './index'

expect.extend(matchers)

const items = [{ id: '1', item: 'Item 1' }]

describe('<ListItems />', () => {
	it('It should render correctly.', () => {
		const { container } = render(<ListItems items={items} />)
		const li = container.querySelector('li')

		expect(li).toBeInTheDocument()
		expect(screen.getByText(items[0].item)).toBeDefined()
	})
})
