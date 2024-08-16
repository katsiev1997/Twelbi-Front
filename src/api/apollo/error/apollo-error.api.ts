import { EnumSession } from '@/constants/enums.constants'
import { destroySession } from '@/server/auth/get-server-session'
import { onError } from '@apollo/client/link/error'

export const errorLink = onError(({ graphQLErrors }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(async ({ extensions, message }) => {
			if (extensions?.code === 'UNAUTHENTICATED' && message === 'Logout') {
				sessionStorage.removeItem(EnumSession.QUERY_USER)
				await destroySession()
			}
		})
	}
})
