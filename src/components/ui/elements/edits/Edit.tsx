import type { IEdit } from '@/shared/interfaces/api/edit/product/edit-product.interface'
import type { FC } from 'react'
import Modal from '../../templates/modal/Modal'
import styles from './Edit.module.scss'
import EditProduct from './product/EditProduct'

const Edit: FC<IEdit> = ({
	type,
	modal,
	button,
	form,
	create,
	update,
	categories,
}) => {
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
			{button && (
				<button
					className={styles.toggle}
					onClick={modal.openModal}
					{...button}
				/>
			)}
			{modal.isShow && (
				<Modal
					heading={modal.heading}
					closeModal={modal.closeModal}
					size={modal.size}
				>
					{content}
				</Modal>
			)}
		</>
	)
}

export default Edit
