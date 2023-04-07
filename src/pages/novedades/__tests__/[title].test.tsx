import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import Novedad from '../[title]'
expect.extend(matchers)

const useRouter = vi.spyOn(require('next/router'), 'useRouter')

describe('<Novedades />', () => {
	it('It should show "Novedades Institucionales"', async () => {
		useRouter.mockImplementation(() => ({
			query: { title: 'Becas-Provinciales-2023' }
		}))

		const { getByText } = render(<Novedad />)

		expect(getByText('Becas Provinciales 2023')).toBeInTheDocument()
	})
})
