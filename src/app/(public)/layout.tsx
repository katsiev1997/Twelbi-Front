import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import type { PropsWithChildren } from 'react'

export default function PublicLayout({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}
