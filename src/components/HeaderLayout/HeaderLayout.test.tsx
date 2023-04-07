import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { HeaderLayout } from './index'

expect.extend(matchers)

describe('<HeaderLayout />', () => {
	it('It should show the school crest.', () => {
		render(<HeaderLayout />)
		expect(screen.getByRole('img')).toBeInTheDocument()
	})
})
