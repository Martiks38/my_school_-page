import Image from 'next/image'
import Link from 'next/link'
import { sections } from '../../const'

export function FooterLayout(): JSX.Element {
	return (
		<footer className="relative max-w-primaryContent mt-20 mx-auto pt-8 px-20 pb-9 w-full bg-black text-white">
			<div className="flex justify-between">
				<Image src="/Escudo.webp" alt="EET N°477" width={64} height={64} />
				<div className="flex gap-8">
					<a
						href="#"
						target="_blank"
						rel="norreferer noopener"
						className="group"
						title="Ir al perfil de  Facebook"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 48 48">
							<path
								className="group-hover:fill-[#9c0b32]"
								fill="#666b6e"
								fillRule="evenodd"
								d="M25.64 48h-23A2.65 2.65 0 0 1 0 45.35V2.65A2.65 2.65 0 0 1 2.65 0h42.7A2.65 2.65 0 0 1 48 2.65v42.7A2.65 2.65 0 0 1 45.35 48H33.12V29.41h6.24l.93-7.24h-7.17v-4.63c0-2.1.58-3.52 3.59-3.52h3.84V7.53c-.67-.1-2.95-.29-5.6-.29-5.53 0-9.31 3.38-9.31 9.58v5.34h-6.26v7.24h6.26V48Z"
							/>
						</svg>
					</a>
					<a
						href="#"
						target="_blank"
						rel="norreferer noopener"
						className="group"
						title="Ir al perfil de Instagram"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="64"
							height="64"
							fill="none"
							viewBox="2 2 20 20"
						>
							<path
								className="group-hover:fill-[#9c0b32]"
								fill="#666b6e"
								fillRule="evenodd"
								d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Zm4-2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm6 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm10.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
							/>
						</svg>
					</a>
				</div>
			</div>
			<ul className="flex justify-center gap-12 mt-10 mb-16 font-semibold">
				{sections.slice(1).map(({ id, section, subsections }) => {
					return (
						<li key={id}>
							<span className="block mb-2 font-bold text-xl uppercase">{section}</span>
							<ul>
								{subsections.map((subsection) => {
									return (
										<li key={subsection.id} className="opacity-70 hover:opacity-100">
											<Link
												href={`/${section.toLowerCase()}/${subsection.path}`}
												className="block py-1.5"
											>
												{subsection.name}
											</Link>
										</li>
									)
								})}
							</ul>
						</li>
					)
				})}
			</ul>
			<span className="text-center">
				Escuela de Educación Técnico Nº 477, Av. San Martín 3575, San Lorenzo, Santa Fe, República
				Argentina. Teléfono (+54) 03476-422231
			</span>
		</footer>
	)
}
