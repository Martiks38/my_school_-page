import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import Technique from './[technique]'

expect.extend(matchers)

const useRouter = vi.spyOn(require('next/router'), 'useRouter')
const technique = 'electronica'

describe('<Technique />', () => {
	let container: HTMLElement

	beforeEach(() => {
		useRouter.mockImplementation(() => {
			return {
				query: { technique }
			}
		})

		container = render(<Technique />).container
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
})
