import { BRAND_PRODUCTS_DATA } from '@/components/screens/public/brand/data/products.data'
import { useState } from 'react'

export const useBrandProducts = (brandId: number) => {
	const [page, setPage] = useState(1)
	const perPage = 15
	const step = 4

	// const { data } = useProductsQuery({
	// 	variables: {
	// 		query: {
	// 			page,
	// 			perPage,
	// 			brandId,
	// 			views: Sort.Desc,
	// 			sort: Sort.Desc,
	// 			visibility: Visibility.Visible,
	// 		},
	// 	},
	// })

	// const count = data?.products.count || 0
	// const pagesCount = Math.ceil(count / (step * 25))

	const count = BRAND_PRODUCTS_DATA.count
	const pagesCount = Math.ceil(count / (step * 25))

	return {
		page,
		setPage,
		step,
		pagesCount,
		products: BRAND_PRODUCTS_DATA.products || [],
		count,
	}
}
