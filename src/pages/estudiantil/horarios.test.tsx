import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import Schedules from './horarios'

expect.extend(matchers)

describe('<Schedules />', () => {
	it('It should render correctly', async () => {
		render(<Schedules />)

		expect(screen.getAllByRole('link').length).toBeGreaterThan(0)
	})
})
