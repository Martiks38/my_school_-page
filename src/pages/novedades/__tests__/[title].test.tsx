import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import Novedad, { getStaticPaths, getStaticProps } from '../[title]'
import { NOTICE } from '@/__mocks__/notice'

expect.extend(matchers)

describe('<Novedades />', () => {
	beforeEach(() => {
		render(<Novedad notice={NOTICE} />)
	})

	afterEach(() => {
		cleanup()
	})

	it('It should show "Novedades Institucionales"', async () => {
		const pageHeading = screen.getByRole('heading', { level: 1, name: NOTICE.title })

		expect(pageHeading).toBeInTheDocument()
	})

	it('It should show the description of the novelty.', () => {
		const descriptionNotice = screen.getByText(NOTICE.description)

		expect(descriptionNotice).toBeInTheDocument()
	})

	it('Starting from the title value of the route, it returns the news item with its respective information.', async () => {
		const title = NOTICE.title.replaceAll(' ', '-').toLowerCase()
		const props = await getStaticProps({
			params: { title }
		})

		expect(props).toEqual({
			props: {
				notice: expect.objectContaining({ title: NOTICE.title })
			}
		})
	})

	it('Devuelve un objeto con las rutas de cada noticia.', async () => {
		const result = await getStaticPaths({})
		const title = NOTICE.title.replaceAll(' ', '-').toLowerCase()

		expect(result).toEqual({
			fallback: false,
			paths: expect.arrayContaining([{ params: { title } }])
		})
	})
})
