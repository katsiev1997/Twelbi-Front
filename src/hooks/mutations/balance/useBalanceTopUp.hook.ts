import {
	useBalanceTopUpMutation,
	type YookassaInput,
} from '@/__generated__/output'
import { SITE_URL } from '@/constants/seo.constants'
import { USER_PAGES } from '@/constants/url.constants'
import { useRouter } from 'next/navigation'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useBalanceTopUp = () => {
	const {
		register: registerInput,
		formState: { errors },
		handleSubmit,
	} = useForm<YookassaInput>({
		mode: 'onChange',
		defaultValues: {
			redirectUrl: SITE_URL + USER_PAGES.ACCOUNT,
		},
	})

	const { replace } = useRouter()

	const [topUp] = useBalanceTopUpMutation()

	const onSubmit: SubmitHandler<YookassaInput> = async (data) => {
		await topUp({
			variables: {
				data,
			},
			onCompleted: ({ balanceTopUp }) => {
				replace(balanceTopUp.paymentUrl)
			},
			onError: ({ message }) => {
				toast.error(message)
			},
		})
	}

	return {
		registerInput,
		handleSubmit,
		onSubmit,
		errors,
	}
}
