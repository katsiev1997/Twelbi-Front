import {
	ProductsDocument,
	type ProductQueryInput,
	type ProductsQuery,
	type ProductsQueryVariables,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo/apollo.client'

export const useProducts = async (query: ProductQueryInput) => {
	const { data, error } = await apolloClient.query<
		ProductsQuery,
		ProductsQueryVariables
	>({
		query: ProductsDocument,
		variables: {
			query,
		},
	})

	return {
		products: data.products.products || [],
		productsCount: data.products.count || 0,
		productsError: error,
	}
}
