import { useDeleteProductMutation } from '@/__generated__/output'
import type { IProductState } from '@/shared/interfaces/api/product/product.interface'
import toast from 'react-hot-toast'

export const useProductDelete = ({ productId, setProducts }: IProductState) => {
	const [deleteProduct] = useDeleteProductMutation({
		onCompleted: ({ deleteProduct }) => {
			setProducts((prev) => prev.filter((p) => p.id === deleteProduct))
			toast.success('Продукт успешно удален.')
		},
		onError: (error) => {
			toast.error(error.message)
		},
	})

	const deleteHandler = () =>
		deleteProduct({
			variables: {
				id: productId,
			},
		})

	return {
		deleteHandler,
	}
}
