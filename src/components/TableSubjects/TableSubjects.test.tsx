import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { TableSubjects } from './index'

expect.extend(matchers)

const sections = {
	Tercer: [
		{ id: 'AEc65b', name: 'Instrumentos y Herramientas de propósito general.' },
		{ id: 'AE6d9a', name: 'Taller.' }
	],
	Cuarto: [
		{ id: 'AE69c9', name: 'Circuitos y Redes I.' },
		{ id: 'AE6fe7', name: 'Taller.' }
	],
	Quinto: [
		{ id: 'AE6c38', name: 'Circuitos y Dispositivos Analógicos.' },
		{ id: 'AE51ab', name: 'Taller.' }
	],
	Sexto: [
		{ id: 'AEb167', name: 'Marco Jurídico de los Procesos Productivos.' },
		{ id: 'AEc909', name: 'Economía.' }
	]
}

describe('<TableSubjects />', () => {
	it('It should render correctly.', () => {
		const { container } = render(<TableSubjects sections={sections} />)

		expect(screen.getByText(/Tercer año/i)).toBeDefined()
		expect(screen.getByText(/Cuarto año/i)).toBeDefined()

		expect(container.querySelectorAll('td').length).toBeGreaterThan(0)
	})
})
