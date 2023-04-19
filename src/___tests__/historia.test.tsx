import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import HistoryInstitution from '@/pages/institucional/historia'

expect.extend(matchers)

describe('<HistoryInstitution />', () => {
	it('It should render correctly', () => {
		render(<HistoryInstitution />)

		expect(
			screen.getByAltText(
				'Imagen conmemorativa de los 80 años de la Escuela de Enseñanza Técnica N°477'
			)
		).toBeInTheDocument()
	})
})
