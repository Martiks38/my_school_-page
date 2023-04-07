import { LayoutPage } from '@/Layout/LayoutPage'
import { notices } from '@/const'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Notice() {
	const router = useRouter()
	const noticeTitle = router.query.title
	const notice = notices.find((notice) => {
		let title = (noticeTitle as string).replaceAll('-', ' ')

		return notice.title === title
	})

	return (
		<>
			<Head>
				<title>{notice?.title} | EET N°477</title>
				<meta property="og:title" content={notice?.title} />
				<meta name="description" content={notice?.description} />
				<meta property="og:description" content={notice?.description} />
			</Head>
			<LayoutPage>
				<main className="grow w-full max-w-primaryContent mx-auto  mt-8 p-4 border border-[#0005]">
					<h1 className="mb-8 text-4xl font-robotoMono font-bold">{notice?.title}</h1>
					<div className="max-w-[80ch]">
						<blockquote className="mb-6 border-l-4 border-l-[#0003]">
							<p className="py-1.5 pl-4 opacity-80">{notice?.description}</p>
						</blockquote>
						<div>
							{notice?.content.text &&
								(notice.content.text as string).split('\n').map((paragraph, index) => {
									return (
										<p key={index} className="last:mb-2">
											{paragraph}
										</p>
									)
								})}
						</div>
						{notice?.content.list && (
							<ul className="list-disc list-inside">
								{notice.content.list.items.map(({ id, item }) => {
									return (
										<li key={id} className="mb-1">
											{item}
										</li>
									)
								})}
							</ul>
						)}
					</div>
				</main>
			</LayoutPage>
		</>
	)
}

/* {
		date: '20/3/2023',
		id: '1c3a',
		title: 'Becas Provinciales 2023',
		description:
			'Actualmente se encuentra abierta la incripción a becas provinciales hasta el 13 de abril.',
		content: {
			text: "Requisitos",
			list: {
				items: [
					{ id: 1, item: 'Ser alumnos del establecimiento' },
					{
						id: 2,
						item: 'Completar el formulario de becas disponible en la sección de alumnos o en la fotocopiadora del establecimiento'
					},
					{
						id: 3,
						item: 'Presentar la documentación requerida: –  Declaración jurada de grupo familiar conviviente, copia del recibo sueldo o Certificación negativa de Anses'
					},
					{
						id: 4,
						item: 'Tener ingresos inferiores a $163.000'
					},
					{
						id: 5,
						item: 'De tener CBU/CVU consignarlo claramente en el formulario'
					},
					{
						id: 6,
						item: 'Colocar el número celular y la empresa a la cual pertenece'
					}
				],
				item_link: [2, 3],
				links: [
					'https://drive.google.com/file/d/1sio_1VPsCXfejnM8yKS3QBzD5zVNqZ0r/view?usp=sharing',
					' https://drive.google.com/file/d/1-yd-YHfxk62SSkK_VsowyT_9yZK5CtaB/view?usp=sharing'
				]
			}
		}
	}, */
