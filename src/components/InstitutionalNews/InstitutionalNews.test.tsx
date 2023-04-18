import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { InstitutionalNews } from './index'
import { NEWS } from '@/__mocks__/news'

expect.extend(matchers)

describe('<InstitutionalNews />', () => {
	beforeEach(() => {
		render(<InstitutionalNews news={NEWS} />)
	})

	afterEach(() => {
		cleanup()
	})

	it('It should show the title "Institutional News".', () => {
		expect(screen.getByText('Novedades Institucionales')).toBeInTheDocument()
	})

	it('It should show at most three novelties.', () => {
		const headings = screen.getAllByRole('heading', { level: 3 })

		expect(headings.length).toBeLessThanOrEqual(3)
	})
})
