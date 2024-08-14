import {
	type TelegramAuthInput,
	useJwtRegisterQuery,
	useTelegramAuthMutation,
} from '@/__generated__/output'
import { EnumSession } from '@/constants/enums.constants'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { setUser } from '@/server/auth/get-server-session'
import type { TypeAuth } from '@/shared/types/auth/auth.type'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const useAuth = () => {
	const searchParams = useSearchParams()

	const [isShow, setIsShow] = useState(false)
	const [authType, setAuthType] = useState<TypeAuth>('login')
	const [token, setToken] = useState({
		value: '',
		type: '',
	})

	const isLogin = authType === 'login'
	const isRegister = authType === 'register'
	const isLost = authType === 'lost'
	const isReset = authType === 'reset'

	const changeType = (type: TypeAuth) => setAuthType(type)
	const toggleShow = () => setIsShow(!isShow)

	useEffect(() => {
		if (searchParams) {
			const resetToken = searchParams.get('reset')
			const confirmToken = searchParams.get('confirmEmail')

			if (resetToken) {
				setToken({
					value: resetToken,
					type: 'reset',
				})
				changeType('reset')
				toggleShow()
			}

			if (confirmToken) {
				setToken({
					value: confirmToken,
					type: 'confirm',
				})
			}
		}
	}, [searchParams])

	const deleteParams = () => {
		const updatedSearchParams = new URLSearchParams(searchParams.toString())
		updatedSearchParams.delete('confirmEmail')

		window.history.replaceState(
			null,
			'',
			`${window.location.pathname}?${updatedSearchParams.toString()}`
		)
	}

	const { data } = useJwtRegisterQuery({
		fetchPolicy: 'no-cache',
		skip: !token.value && token.type !== 'confirm',
		variables: {
			token: token.value,
		},
		onCompleted: async ({ jwtRegister }) => {
			if (!jwtRegister.user) {
				toast.error('Ошибка во время регистрации.')
				deleteParams()
				return
			}
			await setUser(jwtRegister.user, PUBLIC_PAGES.HOME)

			sessionStorage.setItem(EnumSession.QUERY_USER, 'true')
		},
		onError: ({ message }) => {
			toast.error(message)
			deleteParams()
		},
	})

	const [telegramLoginMutate] = useTelegramAuthMutation({
		onCompleted: async ({ telegramAuth }) => {
			console.log(telegramAuth)
			if (!telegramAuth.user) {
				toast.error('Ошибка во время регистрации.')
				return
			}
			await setUser(telegramAuth.user, PUBLIC_PAGES.HOME)

			sessionStorage.setItem(EnumSession.QUERY_USER, 'true')
		},
		onError: ({ message }) => {
			console.log(message)
			toast.error('Не удалось войти в систему.')
		},
	})

	const telegramLogin = (data: TelegramAuthInput) => {
		telegramLoginMutate({
			variables: {
				data,
			},
		})
	}

	return {
		isLogin,
		isRegister,
		isLost,
		isReset,
		changeType,
		toggleShow,
		isShow,
		searchParams,
		token,
		data,
		telegramLogin,
	}
}
