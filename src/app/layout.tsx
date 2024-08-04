import '@/assets/styles/global.scss'
import { SITE_EMAIL, SITE_NAME, SITE_URL } from '@/constants/seo.constants'
import MainProvider from '@/providers/MainProvider'
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import type { PropsWithChildren } from 'react'

const montserrat = Montserrat({
	weight: ['400', '500', '600', '700', '800'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-montserrat',
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
	},
	metadataBase: new URL(SITE_URL),
	openGraph: {
		siteName: SITE_NAME,
		emails: SITE_EMAIL,
		type: 'website',
		locale: 'ru_RU',
	},
	authors: [{ name: SITE_NAME, url: SITE_URL }],
	applicationName: SITE_NAME,
	manifest: '/metadata/manifest/manifest.json',
}

export const viewport: Viewport = {
	maximumScale: 1,
}

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body className={montserrat.variable}>
				<MainProvider>
					{children}
					<div id="modal"></div>
				</MainProvider>
			</body>
		</html>
	)
}
