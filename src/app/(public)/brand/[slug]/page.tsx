import { UserRole } from '@/__generated__/output'
import NotFoundPage from '@/app/not-found'
import Brand from '@/components/screens/public/brand/Brand'
import { BRAND_DATA } from '@/components/screens/public/brand/data/brand.data'
import { getUser } from '@/server/auth/get-server-session'
import type {
	IPageSearchParam,
	IPageSlugParam,
} from '@/shared/interfaces/common/param/param.interface'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: '',
	description: '',
}

export default async function BrandPage({
	params,
	searchParams,
}: IPageSlugParam & IPageSearchParam) {
	if (!params.slug) return <NotFoundPage />

	const user = await getUser()
	const isAdmin = user?.role === UserRole.Admin

	return (
		<Brand brand={BRAND_DATA} searchParams={searchParams} isAdmin={isAdmin} />
	)
}
