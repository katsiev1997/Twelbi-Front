import {
	AdvertisingType,
	useAdvertisingByIdQuery,
	useUpdateAdvertisingMutation,
	type AdvertisingInput,
} from '@/__generated__/output'
import { ADMIN_PAGES } from '@/constants/url.constants'
import { useFileByPath } from '@/hooks/queries/file/useFileByPath.hook'
import { ADVERTISING_TYPE_TRANSLATE } from '@/translates/advertising-type.translate'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useManageAdvertisingEdit = (advertisingId: number) => {
	const [currentType, setCurrentType] = useState<AdvertisingType | null>(null)
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<AdvertisingInput>({
		mode: 'onChange',
	})

	const { push } = useRouter()

	useAdvertisingByIdQuery({
		fetchPolicy: 'no-cache',
		variables: {
			id: advertisingId,
		},
		skip: !advertisingId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: async ({ advertisingById }) => {
			const { smallImagePath, bigImagePath, type, ...response } =
				advertisingById

			getKeys(response).forEach(({ key, value }) => {
				setValue(key, value)
			})

			setCurrentType(advertisingById.type)

			if (smallImagePath) {
				const smallImageFile = await useFileByPath(smallImagePath)
				setValue('smallImage', smallImageFile)
			}

			if (bigImagePath) {
				const bigImageFile = await useFileByPath(bigImagePath)
				setValue('bigImage', bigImageFile)
			}

			setValue('type', {
				name: ADVERTISING_TYPE_TRANSLATE[type],
				value: type,
			})
		},
	})

	const [updateAdvertising] = useUpdateAdvertisingMutation({
		fetchPolicy: 'no-cache',
		onCompleted: () => {
			push(ADMIN_PAGES.ADVERTISEMENTS)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<AdvertisingInput> = async (data) => {
		await updateAdvertising({
			variables: {
				id: advertisingId,
				data,
			},
		})
	}

	return {
		registerInput,
		control,
		errors,
		handleSubmit,
		onSubmit,
		currentType,
		setCurrentType,
	}
}
