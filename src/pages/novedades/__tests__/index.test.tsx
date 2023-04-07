import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import Novedades from '../index'

expect.extend(matchers)

describe('<Novedades />', () => {
	it('It should show "Novedades Institucionales"', () => {
		render(<Novedades />)

		expect(screen.getByText('Novedades Institucionales')).toBeInTheDocument()
	})
})
