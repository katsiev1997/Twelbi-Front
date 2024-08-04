import {
	type UserQuery,
	type UserQueryVariables,
	UserDocument,
} from '@/__generated__/output'
import { apolloClient } from '@/api/apollo/apollo.client'
import {
	destroySession,
	getUser,
	setUser,
} from '@/server/auth/get-server-session'
import { CookieService } from '@/services/cookie/cookie.service'

export const useUser = async () => {
	const { cookie } = CookieService.getServerCookies()
	let user = await getUser()

	if (!user && cookie) {
		const { data, error } = await apolloClient.query<
			UserQuery,
			UserQueryVariables
		>({
			context: {
				headers: {
					cookie,
				},
			},
			query: UserDocument,
		})

		if (data) {
			await setUser(data.user)
			user = data.user
		} else if (error) {
			await destroySession()
		}
	}

	return { user }
}
