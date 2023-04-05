import Image from 'next/image'
import Link from 'next/link'

export function Header() {
	return (
		<header className="px-10 py-2.5 bg-black">
			<div className="flex justify-between items-center max-w-primaryContent mx-auto">
				<Link href="/">
					<Image
						src="/Escudo.webp"
						alt="Escuela Técnica N°477"
						height={32}
						width={32}
						className="w-8 h-8 drop-shadow-[0_0_2px_#fffa]"
					/>
				</Link>
				<nav>
					<ul className="flex gap-8 text-white">
						<li>
							<Link href="/">Inicio</Link>
						</li>
						<li>Institución</li>
						<li>Estudiantes</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
