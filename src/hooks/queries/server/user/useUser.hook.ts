import { useUserQuery } from '@/__generated__/output'
import { EnumSession } from '@/constants/enums.constants'
import { destroySession, setUser } from '@/server/auth/get-server-session'
import type { TypeAuthUser } from '@/shared/types/auth/auth.type'
import { useEffect, useState } from 'react'

export const useUser = (user?: TypeAuthUser) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	const isQueried =
		isMounted && !!sessionStorage.getItem(EnumSession.QUERY_USER)

	useUserQuery({
		skip: !isMounted || (!!user && isQueried),
		onCompleted: async ({ user }) => {
			if (!user) {
				await destroySession()
				sessionStorage.removeItem(EnumSession.QUERY_USER)
				return
			}

			await setUser(user)
			sessionStorage.setItem(EnumSession.QUERY_USER, 'true')
		},
		onError: async () => {
			await destroySession()
			sessionStorage.removeItem(EnumSession.QUERY_USER)
		},
	})
}
