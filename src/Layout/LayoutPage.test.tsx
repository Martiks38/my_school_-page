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

	it('If the page does not have a hero image, the content wrapper does not have the mt-[60vh] class.', () => {
		const { container } = renderComponent()

		const WrapperContent = container.querySelector('.mt-auto > div')

		expect(WrapperContent).not.toHaveClass('mt-[60vh]')
	})

	it('If haveHeroImage is true, the wrapper must have the class mt-[60vh].', () => {
		const { container } = renderComponent(true)
		const WrapperContent = container.querySelector('.mt-auto > div')

		expect(WrapperContent).toHaveClass('mt-[60vh]')
	})
})
