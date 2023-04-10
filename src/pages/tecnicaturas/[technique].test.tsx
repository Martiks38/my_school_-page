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

	it('At startup it should show having a button instead of rendering the iframe or video. The button must have an aria-label="See work done by the students of ...".', () => {
		expect(
			screen.getByRole('button', { name: /^Ver trabajos realizados por los estudiantes de/i })
		).toBeDefined()
	})

	it('Pressing the button should change the element to the video or iframe.', async () => {
		const videoBtn = screen.getByRole('button', {
			name: /^Ver trabajos realizados por los estudiantes de/i
		})

		act(() => fireEvent.click(videoBtn))

		const video = await screen.findByLabelText(
			/^Video de los trabajos realizados por los alumnos de/i
		)

		expect(video).toBeDefined()
	})

	it('In the case that the value of [technique] is "renewable" it should render an iframe element when pressing the button', async () => {
		vi.clearAllMocks()

		useRouter.mockImplementation(() => {
			return {
				query: { technique: 'renovables' }
			}
		})

		const videoBtn = screen.getByRole('button', {
			name: /^Ver trabajos realizados por los estudiantes de/i
		})

		act(() => fireEvent.click(videoBtn))

		expect(container.querySelector('video')).not.toBeInTheDocument()
		expect(container.querySelector('iframe')).toBeInTheDocument()
	})
})
