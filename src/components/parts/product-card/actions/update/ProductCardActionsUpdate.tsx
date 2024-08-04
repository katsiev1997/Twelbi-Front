import { useProductUpdate } from '@/hooks/mutations/product/useProductUpdate.hook'
import type { IProductState } from '@/shared/interfaces/api/product/product.interface'
import type { FC } from 'react'

const ProductCardActionsUpdate: FC<IProductState> = ({
	productId,
	setProducts,
}) => {
	const { registerInput, control, errors, handleSubmit, onSubmit } =
		useProductUpdate({ productId, setProducts })

	return <></>
}

export default ProductCardActionsUpdate
