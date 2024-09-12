import Home from '@/components/screens/public/home/Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '',
	description: '',
}

export default async function HomePage() {
	return <Home />
}
