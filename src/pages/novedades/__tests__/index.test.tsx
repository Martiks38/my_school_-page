import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import Novedades, { getStaticProps } from '../index'
import { NEWS } from '@/__mocks__/news'
import { getAllNews } from '@/lib/news'
import { NewsData } from '@/typings'

expect.extend(matchers)

describe('<Novedades />', () => {
	it('It should show "Novedades Institucionales"', () => {
		render(<Novedades news={NEWS} />)

		expect(screen.getByText('Novedades Institucionales')).toBeInTheDocument()
	})

	it('When there is no news, it should appear in the message "No news".', () => {
		render(<Novedades news={'No hay noticias'} />)

		expect(screen.getByText('No hay noticias')).toBeInTheDocument()
	})

	it('You must render a link to the news.', async () => {
		const news = getAllNews() as NewsData[]

		render(<Novedades news={news} />)

		const link = screen.getByRole('link', { name: news[0].title })

		expect(link).toBeInTheDocument()
	})

	it('The props should return the same as the saved ones.', async () => {
		const result = await getStaticProps()

		expect(result).toEqual({
			props: {
				news: expect.arrayContaining(NEWS)
			}
		})
	})
})
