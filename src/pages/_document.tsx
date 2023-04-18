import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="image/png" href="/logo192.png" />
				<link rel="image/png" href="/logo310.png" />
				<link rel="apple-touch-icon" href="/logo192.png" />
				<link rel="apple-touch-icon" href="/logo310.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#000000" />
				<meta property="og:type" content="website" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Mono:wght@400;600&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
