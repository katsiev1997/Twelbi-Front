import type { IEdit } from '@/shared/interfaces/api/edit/product/edit-product.interface'
import { useState, type FC } from 'react'
import Modal from '../../templates/modal/Modal'
import styles from './Edit.module.scss'
import EditProduct from './product/EditProduct'

const Edit: FC<IEdit> = ({
	type,
	button,
	heading,
	form,
	create,
	update,
	categories,
}) => {
	const [isShow, setIsShow] = useState(false)

	if (!create && !update) return null

	const content =
		type === 'product' ? (
			<EditProduct
				categories={categories}
				form={form}
				create={create}
				update={update}
			/>
		) : (
			''
		)

	return (
		<>
			<button
				className={styles.toggle}
				onClick={() => setIsShow(!isShow)}
				{...button}
			/>
			{isShow && (
				<Modal heading={heading} closeModal={() => setIsShow(false)} size="lg">
					{content}
				</Modal>
			)}
		</>
	)
}

export default Edit
