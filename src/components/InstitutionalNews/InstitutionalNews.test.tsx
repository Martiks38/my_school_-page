import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { InstitutionalNews } from './index'

expect.extend(matchers)

describe('<InstitutionalNews />', () => {
	it('It should show the title "Institutional News".', () => {
		render(<InstitutionalNews />)
		expect(screen.getByText('Novedades Institucionales')).toBeInTheDocument()
	})
})
