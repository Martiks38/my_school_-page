import Head from 'next/head'
import { HeaderLayout } from '@components/HeaderLayout'
import { FooterLayout } from '@components/FooterLayout'
import stylesModule from './Layout.module.css'

interface LayoutPageProps {
	haveHeroImage?: boolean
	children: JSX.Element | JSX.Element[]
}

export function LayoutPage({ children, haveHeroImage = false }: LayoutPageProps): JSX.Element {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="./logo192.png" />
			</Head>
			<div
				className={`grid min-h-screen ${haveHeroImage ? 'gridAreas_withImage' : 'gridAreas'}`}
				data-testid="layout-page"
			>
				<a
					href="#mainContent"
					className="fixed top-0 block w-full py-2.5 text-center bg-[#010061] opacity-0 -z-10 focus:opacity-100 focus:z-10"
					aria-hidden={true}
				>
					<span className="text-2xl text-white opacity-90">Ir al contenido principal</span>
				</a>
				<HeaderLayout />
				<div className={stylesModule.content}>
					<div className="flex flex-col bg-[#ededed]">
						{children}
						<FooterLayout />
					</div>
				</div>
			</div>
		</>
	)
}
