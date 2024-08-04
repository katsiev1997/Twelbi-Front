'use client'

import Modal from '@/components/ui/templates/modal/Modal'
import { useState, type FC } from 'react'
import styles from '../ReviewCard.module.scss'

const ReviewCardComplain: FC = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<button className={styles.toggle} onClick={() => setIsShow(true)}>
				Пожаловаться на отзыв
			</button>
			{isShow && (
				<Modal heading="Отзыв" closeModal={() => setIsShow(false)}></Modal>
			)}
		</>
	)
}

export default ReviewCardComplain
