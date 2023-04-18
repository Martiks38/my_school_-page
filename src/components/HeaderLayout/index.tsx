import Image from 'next/image'
import Link from 'next/link'
import { nav } from '@/content/nav'
import stylesHeader from './Header.module.css'
import { useEffect } from 'react'

export function HeaderLayout(): JSX.Element {
	const handlerMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
		const menu = document.querySelector('.navMenu')
		const backgroundMenu = document.querySelector('#backgroundMenu')
		const menuBtnContainer = e.currentTarget

		backgroundMenu?.classList.toggle('backgroundMenuExpanded')
		menu?.classList.toggle('expandedNavMenu')
		menuBtnContainer.classList.toggle('activeMenu')

		const label = menu?.classList.contains('expandedNavMenu') ? 'Cerrar menú' : 'Abrir menú'

		menuBtnContainer.setAttribute('aria-label', label)
	}

	const handlerSubMenu = (e: React.MouseEvent<HTMLElement>) => {
		if (window.innerWidth >= 1024) return

		const target = e.currentTarget
		const subMenu = target.closest('li')?.querySelector('ul')
		const expanded = document.querySelector('.expandedSubMenu')
		const activeSection = document.querySelector('.activeSection')

		if (!subMenu?.classList.contains('expandedSubMenu')) {
			expanded?.classList.remove('expandedSubMenu')
			activeSection?.classList.remove('activeSection')
		}

		subMenu?.classList.toggle('expandedSubMenu')
		target?.classList.toggle('activeSection')
	}

	const closeMenu = (changeScreen = false) => {
		if (window.innerWidth >= 1024 && !changeScreen) return

		const expanded = document.querySelector('.expandedSubMenu')
		const activeSection = document.querySelector('.activeSection')
		const backgroundMenu = document.querySelector('#backgroundMenu')
		const navMenu = document.querySelector('.navMenu')
		const menuBtn = document.querySelector('.menuButton__container')

		expanded?.classList.remove('expandedSubMenu')
		activeSection?.classList.remove('activeSection')
		backgroundMenu?.classList.remove('backgroundMenuExpanded')
		navMenu?.classList.remove('expandedNavMenu')
		menuBtn?.classList.remove('activeMenu')
	}

	useEffect(() => {
		const closeMenuResize = () => {
			if (window.innerWidth >= 1020) closeMenu(true)
		}

		window.addEventListener('resize', closeMenuResize)

		return () => window.removeEventListener('resize', closeMenuResize)
	}, [])

	return (
		<>
			<div
				id="backgroundMenu"
				className="fixed top-0 left-0 w-full h-screen bg-[#0004] opacity-0 transition-[opacity,_z-index] ease-linear duration-300 -z-10"
				onClick={() => closeMenu()}
			></div>
			<header className={`sticky top-0 px-10 bg-black z-[1] ${stylesHeader.header}`}>
				<div className="flex justify-between items-center max-w-primaryContent mx-auto">
					<Link href="/">
						<Image
							src="/Escudo.webp"
							alt="Escuela Técnica N°477"
							height={52}
							width={52}
							className="w-[3.25rem] h-[3.25rem] p-2 drop-shadow-[0_0_2px_#fffa]"
						/>
					</Link>
					<div aria-live="polite" className="flex items-center w-fit h-[3.25rem]">
						<button aria-label="Abrir menú" className="menuButton__container" onClick={handlerMenu}>
							<div className="menuButton"></div>
						</button>
						<nav className="fixed lg:static h-full bg-[rgba(0,0,0,0.75)] lg:bg-black w-full sm:max-w-md lg:max-w-full backdrop-blur-xl lg:backdrop-blur-none navMenu z-[2]">
							<ul className="flex flex-col lg:flex-row h-full py-10 lg:px-4 lg:py-0 text-2xl text-white lg:text-base lg:text-center">
								{nav.map(({ id, section, subsections }) => {
									return (
										<li key={id} className="group relative lg:h-full">
											{section.match(/^Inicio$/) ? (
												<Link
													href="/"
													className="flex items-center px-10 py-3 h-full hover:bg-[#9c0b32] font-semibold"
													onClick={() => closeMenu()}
												>
													Inicio
												</Link>
											) : (
												<>
													<span
														className="flex items-center h-auto lg:h-full px-10 py-3 font-semibold transition-[background-color] duration-300 ease-in-out lg:group-hover:bg-[#9c0b32] cursor-default"
														onClick={handlerSubMenu}
													>
														{section}
													</span>
													<ul className="lg:absolute top-full left-0 lg:hidden w-full h-0 lg:h-auto overflow-hidden lg:overflow-visible group-hover:flex flex-col lg:bg-black transition-[height] duration-300 ease-linear">
														{subsections.map(({ id, name, path }) => {
															return (
																<li key={id}>
																	<Link
																		href={`/${section.toLowerCase()}/${path}`}
																		className="block pl-16 pr-10 py-3 lg:px-4 lg:hover:bg-[#fff2]"
																		onClick={() => closeMenu()}
																	>
																		{name}
																	</Link>
																</li>
															)
														})}
													</ul>
												</>
											)}
										</li>
									)
								})}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</>
	)
}
