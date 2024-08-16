import Catalog from '@/components/screens/public/catalog/Catalog'
import type { IPageSearchParam } from '@/shared/interfaces/common/param/param.interface'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '',
	description: '',
}

export default function CatalogPage({ searchParams }: IPageSearchParam) {
	return <Catalog searchParams={searchParams} />
}
