import {
	useCreateBrandMutation,
	useUpdateBrandMutation,
	type BrandInput,
} from '@/__generated__/output'
import { USER_PAGES } from '@/constants/url.constants'
import type { IAccountState } from '@/shared/interfaces/api/brand/brand.interface'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useEditBrand = ({ type, brand, setBrand }: IAccountState) => {
	const { replace, refresh } = useRouter()
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
		resetField,
		watch,
	} = useForm<BrandInput>({
		mode: 'onChange',
	})

	useEffect(() => {
		if (brand) {
			const {
				id,
				balance,
				createdAt,
				logoPath,
				postedCount,
				subscribers,
				category,
				city,
				...response
			} = brand

			setValue('category', {
				name: category.name,
				value: category.id,
			})

			setValue('city', {
				name: city,
				value: city,
			})

			setValue('logoPath', logoPath)

			getKeys(response).forEach(({ key, value }) => {
				setValue(key, value)
			})
		}
	}, [brand])

	const [createBrand] = useCreateBrandMutation()
	const [updateBrand] = useUpdateBrandMutation()

	const onSubmit: SubmitHandler<BrandInput> = async (data) => {
		console.log(data)
		type === 'edit'
			? await updateBrand({
					variables: {
						data,
					},
					onCompleted: ({ updateBrand }) => {
						setBrand(updateBrand)
						replace(USER_PAGES.ACCOUNT)
						refresh()
					},
					onError: ({ message }) => {
						toast.error(message)
					},
			  })
			: await createBrand({
					variables: {
						data,
					},
					onCompleted: ({ createBrand }) => {
						setBrand(createBrand)
						replace(USER_PAGES.ACCOUNT)
						refresh()
					},
					onError: ({ message }) => {
						toast.error(message)
					},
			  })
	}

	return {
		resetField,
		watch,
		setValue,
		registerInput,
		control,
		errors,
		handleSubmit,
		onSubmit,
	}
}
