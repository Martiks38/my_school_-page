import { describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { LayoutPage } from './LayoutPage'

expect.extend(matchers)

describe('<LayoutPage />', () => {
	const renderComponent = (haveHeroImage = false) =>
		render(
			<LayoutPage haveHeroImage={haveHeroImage}>
				<p>Content</p>
			</LayoutPage>
		)

	afterEach(() => {
		cleanup()
	})

	it('It should have an anchor to the content.', async () => {
		renderComponent()

		expect(screen.getByText('Ir al contenido principal')).toBeInTheDocument()
	})

	it('It should display the child content.', () => {
		renderComponent()

		expect(screen.getByText('Content')).toBeInTheDocument()
	})

	it('If there is a background image the wrapper must have the class "gridAreas_withImage".', () => {
		renderComponent(true)

		expect(screen.getByTestId('layout-page')).toHaveClass('gridAreas_withImage')
	})

	it('If there is a background image the wrapper must have the class "gridAreas_withImage".', () => {
		renderComponent()

		expect(screen.getByTestId('layout-page')).not.toHaveClass('gridAreas_withImage')
	})
})
