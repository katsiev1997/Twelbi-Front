import {
	useJwtResetMutation,
	type JwtAuthResetInput,
} from '@/__generated__/output'
import type { IAuthReset } from '@/shared/interfaces/api/auth/auth.interface'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useJwtAuthReset = ({ token, changeType }: IAuthReset) => {
	const {
		register: registerInput,
		formState: { errors },
		handleSubmit,
	} = useForm<JwtAuthResetInput>({
		mode: 'onChange',
		defaultValues: {
			token,
		},
	})

	const [reset, { loading }] = useJwtResetMutation()

	const onSubmit: SubmitHandler<JwtAuthResetInput> = async (data) => {
		if (!token) return toast.error('Токен не найден.')

		await reset({
			fetchPolicy: 'no-cache',
			variables: {
				data,
			},
			onCompleted: (data) => {
				if (data.jwtReset) {
					toast.success('Пароль успешно обновлен. Войдите с новым паролем.')
					changeType('login')
					return
				}

				return toast.error('Произошла ошибка.')
			},
			onError: ({ message }) => {
				return toast.error(message)
			},
		})
	}

	return { registerInput, errors, handleSubmit, onSubmit, loading }
}
