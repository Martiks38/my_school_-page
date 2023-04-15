import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import ArrowIcon from './index'

expect.extend(matchers)

describe('<InstitutionalNews />', () => {
	it('It should show the title "Institutional News".', () => {
		const { container } = render(<ArrowIcon />)

		expect(container.querySelector('svg')).toBeDefined()
	})

	it('The container must have the mb-4 class.', () => {
		const { container } = render(<ArrowIcon styles="mb-4" />)

		expect(container.querySelector('div')).toHaveClass('mb-4')
	})
})
