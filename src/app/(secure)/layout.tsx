import AccountHeader from '@/components/layout/account-header/AccountHeader'
import Footer from '@/components/layout/footer/Footer'
import type { PropsWithChildren } from 'react'

export default function SecureLayout({ children }: PropsWithChildren) {
	return (
		<>
			<AccountHeader />
			<main>{children}</main>
			<Footer />
		</>
	)
}
