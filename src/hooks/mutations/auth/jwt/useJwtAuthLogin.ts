import {
	useJwtLoginMutation,
	type JwtAuthLoginInput,
} from '@/__generated__/output'
import { EnumSession } from '@/constants/enums.constants'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { setUser } from '@/server/auth/get-server-session'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useJwtAuthLogin = () => {
	const {
		register: registerInput,
		formState: { errors },
		handleSubmit,
	} = useForm<JwtAuthLoginInput>({
		mode: 'onChange',
	})

	const [login, { loading }] = useJwtLoginMutation()

	const onSubmit: SubmitHandler<JwtAuthLoginInput> = async (data) => {
		await login({
			fetchPolicy: 'no-cache',
			variables: { data },
			onCompleted: async (data) => {
				if (!data.jwtLogin) {
					toast.error('Ошибка во время входа в систему.')
					return
				}

				await setUser(data.jwtLogin.user, PUBLIC_PAGES.HOME)

				sessionStorage.setItem(EnumSession.QUERY_USER, 'true')
			},
			onError: ({ message }) => {
				toast.error(message)
			},
		})
	}

	return { registerInput, errors, handleSubmit, onSubmit, loading }
}
