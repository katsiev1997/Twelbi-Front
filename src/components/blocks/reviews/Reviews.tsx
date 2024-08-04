'use client'

import ReviewCard from '@/components/parts/review-card/ReviewCard'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Heading from '@/components/ui/elements/heading/Heading'
import Stars from '@/components/ui/elements/stars/Stars'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IReviews } from '@/shared/interfaces/api/review/review.interface'
import { formatNumber } from '@/utils/formats/format-number.util'
import Link from 'next/link'
import { useState, type FC } from 'react'
import styles from './Reviews.module.scss'

const Reviews: FC<IReviews> = ({
	isAdmin,
	brandId,
	reviews: queriedReviews,
	count,
	heading,
	rating,
	wrapperClassName,
	listClassName,
	reviewClassName,
}) => {
	const [reviews, setReviews] = useState(queriedReviews)

	return (
		<Section className={wrapperClassName && wrapperClassName}>
			<Container>
				<div className={styles.top}>
					<Heading className={styles.heading} isUppercase={false} variant="h2">
						{heading}
					</Heading>
					<div className={styles.rating}>
						<span className={styles.rate}>{rating}</span>
						<Stars rating={+rating} variant="big" />
						<span className={styles.count}>{formatNumber(count)} оценок</span>
					</div>
					{brandId && (
						<Link
							className={styles.more}
							href={PUBLIC_PAGES.ALL_REVIEWS(brandId)}
						>
							Смотреть все отзывы
						</Link>
					)}
				</div>
				<div className={listClassName && listClassName}>
					{reviews.map((review) => (
						<ReviewCard
							key={review.id}
							className={reviewClassName && reviewClassName}
							isAdmin={isAdmin}
							review={review}
							setReviews={setReviews}
						/>
					))}
				</div>
			</Container>
		</Section>
	)
}

export default Reviews
