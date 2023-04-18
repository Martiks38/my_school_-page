import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import Technique, { getStaticPaths, getStaticProps } from './[technique]'
import { techniqueMock } from '@/__mocks__/techniques'

expect.extend(matchers)

describe('<Technique />', () => {
	let container: HTMLElement

	beforeEach(() => {
		container = render(<Technique techniqueData={techniqueMock} />).container
	})

	afterEach(() => {
		cleanup()
		vi.clearAllMocks()
	})

	it('It should render correctly', () => {
		expect(screen.getByRole('heading', { level: 1, name: /^Tecnicatura en/i })).toBeDefined()
	})

	it('It should have an image with the alt="Trabajo realizado por los estudiantes de ..." attribute', () => {
		expect(screen.getByAltText(/^Trabajo realizado por los estudiantes de/i)).toBeDefined()
	})

	it('The main title of the page should be "Tecnicatura en <technique>".', () => {
		const headingPage = screen.getByRole('heading', {
			level: 1,
			name: `Tecnicatura en ${techniqueMock.technique}`
		})

		expect(headingPage).toBeInTheDocument()
	})

	it('The return response must be the same as the test response.', async () => {
		const { technique } = techniqueMock
		const result = await getStaticProps({
			params: {
				technique: technique
					.toLowerCase()
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
			}
		})

		expect(result).toEqual({
			props: {
				techniqueData: expect.objectContaining(techniqueMock)
			}
		})
	})

	it('The technique should be in the paths.technicature list.', async () => {
		const { technique } = techniqueMock
		const result = await getStaticPaths({})

		expect(result).toEqual({
			fallback: false,
			paths: expect.arrayContaining([
				{
					params: {
						technique: technique
							.toLowerCase()
							.normalize('NFD')
							.replace(/[\u0300-\u036f]/g, '')
					}
				}
			])
		})
	})
})
