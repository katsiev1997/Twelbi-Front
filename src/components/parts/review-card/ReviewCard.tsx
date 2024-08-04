import userIcon from '@/assets/images/icons/user.png'
import Picture from '@/components/ui/common/picture/Picture'
import Stars from '@/components/ui/elements/stars/Stars'
import type { IReviewCard } from '@/shared/interfaces/api/review/review.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './ReviewCard.module.scss'
import ReviewCardComplain from './complain/ReviewCardComplain'

const ReviewCard: FC<IReviewCard> = ({ review, className }) => {
	return (
		<div className={cn(styles.review, className && className)}>
			<div className={styles.top}>
				<div className={styles.user}>
					<div className={styles.avatar}>
						<Picture src={userIcon.src} alt="Пользователь" />
					</div>
					<div className={styles.info}>
						<h3 className={styles.name}>{review.authorName}</h3>
						<span className={styles.created}>{review.createdAt}</span>
					</div>
				</div>
				<Stars variant="small" rating={review.rating} />
			</div>
			<div
				className={styles.comment}
				dangerouslySetInnerHTML={{ __html: review.comment }}
			/>
			<ReviewCardComplain />
		</div>
	)
}

export default ReviewCard
