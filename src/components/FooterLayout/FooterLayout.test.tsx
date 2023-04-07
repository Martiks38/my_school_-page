import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { FooterLayout } from './index'

expect.extend(matchers)

describe('<FooterLayout />', () => {
	it('It should show the school crest.', () => {
		render(<FooterLayout />)
		expect(screen.getByRole('img')).toBeInTheDocument()
	})
})
