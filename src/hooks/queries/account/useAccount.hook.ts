import {
	AccountDocument,
	type AccountQuery,
	type AccountQueryVariables,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo/apollo.client'
import { CookieService } from '@/services/cookie/cookie.service'

export const useAccount = async () => {
	const { cookie } = CookieService.getServerCookies()

	const { data, error } = await apolloClient.query<
		AccountQuery,
		AccountQueryVariables
	>({
		context: {
			headers: {
				cookie,
			},
		},
		query: AccountDocument,
	})

	return {
		brand: data.account.brand || null,
		tariffs: data.account.tariffs || [],
		categories: data.account.categories || [],
		error,
	}
}
