import { useToggleProductMutation } from '@/__generated__/output'
import type { IProductState } from '@/shared/interfaces/api/product/product.interface'
import toast from 'react-hot-toast'

export const useProductToggle = ({ productId, setProducts }: IProductState) => {
	const [toggleProduct] = useToggleProductMutation({
		onCompleted: ({ toggleProduct }) => {
			toast.success('Статус видимости продукта обновлен.')
			setProducts((prev) =>
				prev.map((product) =>
					product.id === productId
						? {
								...product,
								visibility: toggleProduct,
						  }
						: product
				)
			)
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const toggleHandler = () =>
		toggleProduct({
			variables: {
				id: productId,
			},
		})

	return {
		toggleHandler,
	}
}
