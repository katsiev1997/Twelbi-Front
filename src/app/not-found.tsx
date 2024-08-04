import NotFound from '@/components/screens/public/not-found/NotFound'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Не Найдено',
	...NO_INDEX_PAGE,
}

export default function NotFoundPage() {
	return <NotFound />
}
