import Modal from '@/components/ui/templates/modal/Modal'
import { useProductDelete } from '@/hooks/mutations/product/useProductDelete.hook'
import type { IProductState } from '@/shared/interfaces/api/product/product.interface'
import type { IVisibility } from '@/shared/interfaces/common/visibility/visibility.interface'
import { Pencil } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from '../ProductCard.module.scss'
import ProductCardActionsUpdate from './update/ProductCardActionsUpdate'

const ProductCardActions: FC<IProductState & IVisibility> = ({
	productId,
	visibility,
	setProducts,
}) => {
	const [isShow, setIsShow] = useState(false)
	const { deleteHandler } = useProductDelete({ productId, setProducts })

	return (
		<div className={styles.actions}>
			<button onClick={() => setIsShow(true)}>
				<Pencil />
			</button>
			<button onClick={deleteHandler}>
				<Pencil />
			</button>
			{isShow && (
				<Modal
					heading="Редактировать продукт"
					closeModal={() => setIsShow(false)}
				>
					<ProductCardActionsUpdate
						productId={productId}
						setProducts={setProducts}
					/>
				</Modal>
			)}
		</div>
	)
}

export default ProductCardActions
