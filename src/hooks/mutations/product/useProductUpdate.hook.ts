import {
	type ProductInput,
	useProductByIdQuery,
	useUpdateProductMutation,
} from '@/__generated__/output'
import type { IProductState } from '@/shared/interfaces/api/product/product.interface'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export const useProductUpdate = ({ productId, setProducts }: IProductState) => {
	const {
		register: registerInput,
		control,
		formState: { errors },
		handleSubmit,
		setValue,
	} = useForm<ProductInput>({
		mode: 'onChange',
	})

	useProductByIdQuery({
		fetchPolicy: 'no-cache',
		variables: {
			id: productId,
		},
		skip: !productId,
		onError: (error) => {
			toast.error(error.message)
		},
		onCompleted: async ({ productById }) => {
			// const { smallImagePath, bigImagePath, type, ...response } =
			// 	productById
			// getKeys(response).forEach(({ key, value }) => {
			// 	setValue(key, value)
			// })
			// if (smallImagePath) {
			// 	const smallImageFile = await useFileByPath(smallImagePath)
			// 	setValue('smallImage', smallImageFile)
			// }
			// if (bigImagePath) {
			// 	const bigImageFile = await useFileByPath(bigImagePath)
			// 	setValue('bigImage', bigImageFile)
			// }
		},
	})

	const [updateProduct] = useUpdateProductMutation({
		fetchPolicy: 'no-cache',
		onCompleted: ({ updateProduct }) => {
			setProducts((prev) =>
				prev.map((product) =>
					product.id === productId ? updateProduct : product
				)
			)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const onSubmit: SubmitHandler<ProductInput> = async (data) => {
		await updateProduct({
			variables: {
				id: productId,
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
	}
}
