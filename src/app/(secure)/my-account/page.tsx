import type { Metadata } from 'next'

import Account from '@/components/screens/secure/account/Account'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE,
}

export default function MyAccountPage() {
	return <Account />
}
