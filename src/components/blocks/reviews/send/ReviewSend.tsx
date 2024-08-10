import pencilIcon from '@/assets/images/icons/pencil.png'
import Picture from '@/components/ui/common/picture/Picture'
import Modal from '@/components/ui/templates/modal/Modal'
import { useState, type FC } from 'react'
import styles from '../Reviews.module.scss'

const ReviewSend: FC = () => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<button className={styles.toggle} onClick={() => setIsShow(true)}>
				<Picture src={pencilIcon.src} alt="Написать" />
				Написать отзыв
			</button>
			{isShow && (
				<Modal
					heading="Написать отзыв"
					closeModal={() => setIsShow(false)}
				></Modal>
			)}
		</>
	)
}

export default ReviewSend
