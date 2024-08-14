import { useLogoutMutation } from '@/__generated__/output'
import { EnumSession } from '@/constants/enums.constants'
import { PUBLIC_PAGES, USER_PAGES } from '@/constants/url.constants'
import { destroySession } from '@/server/auth/get-server-session'
import { usePathname, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export const useLogoutClient = () => {
	const pathname = usePathname()
	const { replace, refresh } = useRouter()

	const [logoutMutate] = useLogoutMutation({
		fetchPolicy: 'no-cache',
		onCompleted: async () => {
			await destroySession()

			sessionStorage.removeItem(EnumSession.QUERY_USER)

			const userPages = [USER_PAGES.ACCOUNT]

			if (userPages.some((page) => pathname === page)) {
				replace(PUBLIC_PAGES.HOME)
				refresh()
			}

			toast.success('Вы успешно вышли из системы.')
		},
		onError: ({ message }) => {
			toast.error(message)
		},
	})

	const logout = () => logoutMutate()

	return { logout }
}
