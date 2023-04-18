import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { TimeBlock } from './index'

expect.extend(matchers)

const PROPS = {
	year: 'Primer año',
	courses: [
		{
			id: 'C925b',
			course: '1° año - 1ra',
			url: 'https://docs.google.com/spreadsheets/d/1v79YjwEMwddVNwm-woI_GuFJC7xbPDsZ/edit#gid=446488113'
		},
		{
			id: 'C8c25',
			course: '1° año - 2da',
			url: 'https://docs.google.com/spreadsheets/d/1v79YjwEMwddVNwm-woI_GuFJC7xbPDsZ/edit#gid=772678337'
		},
		{
			id: 'Cba38',
			course: '1° año - 3ra',
			url: 'https://docs.google.com/spreadsheets/d/1v79YjwEMwddVNwm-woI_GuFJC7xbPDsZ/edit#gid=1303694508'
		}
	]
}

describe('<TimeBlock />', () => {
	beforeEach(() => {
		render(<TimeBlock courses={PROPS.courses} year={PROPS.year} />)
	})

	afterEach(() => {
		cleanup()
	})

	it('It should render correctly', () => {
		expect(screen.getByText(PROPS.year)).toBeInTheDocument()
	})

	it(`It should show ${PROPS.courses.length} links`, () => {
		expect(screen.getAllByRole('link')).toHaveLength(3)
	})
})
