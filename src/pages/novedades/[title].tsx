import Head from 'next/head'
import { useRouter } from 'next/router'
import { LayoutPage } from '@/Layout/LayoutPage'
import { notices } from '@/const'

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
