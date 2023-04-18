import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { HeaderLayout } from './index'

expect.extend(matchers)

describe('<HeaderLayout />', () => {
	let Component: HTMLElement

	beforeEach(() => {
		Component = render(<HeaderLayout />).container
	})

	afterEach(() => {
		cleanup()
	})

	it('It should show the school crest.', () => {
		expect(screen.getByRole('img')).toBeInTheDocument()
	})

	it('Pressing the menu button should change the aria-label to "Close menu".', () => {
		const menuBtn = screen.getByLabelText('Abrir menú')

		expect(menuBtn).toBeDefined()

		fireEvent.click(menuBtn)
		expect(screen.getByLabelText('Cerrar menú')).toBeDefined()
	})

	it('Pressing the menu button should add the expandedNavMenu class to the navMenu.', () => {
		const menuBtn = screen.getByLabelText('Abrir menú')
		const menu = Component.querySelector('.navMenu')
		const backgroundMenu = Component.querySelector('#backgroundMenu')

		expect(menuBtn).toBeDefined()

		fireEvent.click(menuBtn)
		expect(menu).toHaveClass('expandedNavMenu')
		expect(backgroundMenu).toHaveClass('backgroundMenuExpanded')
	})

	describe('window.innerWidth >= 1024, ...', () => {
		beforeEach(() => {
			window.innerWidth = 1820

			fireEvent.resize(window)
		})

		it('when pressing one of the subsections, the menu should not be displayed either the menu or the submenu and the section should not be with the activeSection class.', () => {
			const menu = Component.querySelector('.navMenu')
			const section = screen.getByText('Tecnicaturas')
			const subMenu = section.closest('li')?.querySelector('ul') as HTMLElement
			const subSections = subMenu.querySelectorAll('li a')
			const backgroundMenu = Component.querySelector('#backgroundMenu')

			fireEvent.click(subSections.item(0))

			expect(menu).not.toHaveClass('expanedNavMenu')
			expect(section).not.toHaveClass('activeSection')
			expect(subMenu).not.toHaveClass('expandedSubMenu')
			expect(backgroundMenu).not.toHaveClass('backgroundMenuExpanded')
		})
	})

	describe('When the interior width of the screen is less than 1024...', () => {
		beforeEach(() => {
			window.innerWidth = 1000

			fireEvent.resize(window)
		})

		it('and one of the sections is pressed, they must have the activeSection class.', () => {
			const section = screen.getByText('Estudiantil')

			expect(section).toBeDefined()

			fireEvent.click(section)
			expect(section).toHaveClass('activeSection')
		})

		it('and one of the sections is pressed, should open the submenu by adding the expandedSubMenu class to the ul of the section.', () => {
			const section = screen.getByText('Estudiantil')
			const subMenu = section.closest('li')?.querySelector('ul')

			fireEvent.click(section)
			expect(subMenu).toHaveClass('expandedSubMenu')
		})

		it('and one of the sections is pressed, if the same or another section is clicked and there is an expanded submenu you should remove the expandedSubMenu class.', () => {
			const section = screen.getByText('Estudiantil')
			const subMenu = section.closest('li')?.querySelector('ul')

			fireEvent.click(section)
			expect(subMenu).toHaveClass('expandedSubMenu')

			fireEvent.click(section)
			expect(subMenu).not.toHaveClass('expandedSubMenu')
		})

		it('pressing one of the subsections should close the menu and submenu and remove activeMenu from the section.', () => {
			const menu = Component.querySelector('.navMenu')
			const section = screen.getByText('Tecnicaturas')
			const subMenu = section.closest('li')?.querySelector('ul') as HTMLElement
			const subSections = subMenu.querySelectorAll('li a')

			fireEvent.click(section)
			expect(subMenu).toHaveClass('expandedSubMenu')

			fireEvent.click(subSections.item(0))

			expect(menu).not.toHaveClass('expanedNavMenu')
			expect(section).not.toHaveClass('activeSection')
			expect(subMenu).not.toHaveClass('expandedSubMenu')
		})
	})
})
