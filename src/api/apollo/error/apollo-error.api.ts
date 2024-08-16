import { EnumSession } from '@/constants/enums.constants'
import { destroySession } from '@/server/auth/get-server-session'
import { onError } from '@apollo/client/link/error'

export const errorLink = onError(({ graphQLErrors }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(({ extensions, message }) => {
			if (extensions?.code === 'UNAUTHENTICATED' && message === 'Logout') {
				destroySession().finally(() =>
					sessionStorage.removeItem(EnumSession.QUERY_USER)
				)
			}
		})
	}
})
