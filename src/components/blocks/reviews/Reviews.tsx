'use client'

import ReviewCard from '@/components/parts/review-card/ReviewCard'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Stars from '@/components/ui/elements/stars/Stars'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IReviews } from '@/shared/interfaces/api/review/review.interface'
import { formatNumber } from '@/utils/formats/format-number.util'
import cn from 'clsx'
import Link from 'next/link'
import { useEffect, useState, type FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import '@/assets/styles/reviews-slick.scss'
import '@/assets/styles/slick.scss'
import styles from './Reviews.module.scss'
import ReviewSend from './send/ReviewSend'

const Reviews: FC<IReviews> = ({
	isAdmin,
	type,
	brandId,
	productId,
	reviews: queriedReviews,
	count,
	heading,
	rating,
	wrapperClassName,
	listClassName,
	reviewClassName,
}) => {
	const [reviews, setReviews] = useState(queriedReviews)
	const [isMounted, setIsMounted] = useState(false)

	const isMobile = useMediaQuery({
		maxWidth: 600,
	})

	const isSlider = useMediaQuery({
		maxWidth: 420,
	})

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	const isProduct = type === 'product'
	const id = brandId || productId

	return (
		<Section className={wrapperClassName && wrapperClassName}>
			<Container>
				<div className={styles.top}>
					<h2 className={styles.heading}>{heading}</h2>
					<div className={styles.rating}>
						<span className={styles.rate}>{rating}</span>
						<Stars rating={+rating} variant="big" />
						<span className={styles.count}>{formatNumber(count)} оценок</span>
					</div>
					{id && !isMobile && !isProduct && (
						<Link
							className={cn(
								styles.more,
								isProduct ? styles.product : styles.brand
							)}
							href={
								isProduct
									? PUBLIC_PAGES.PRODUCT_REVIEWS(id)
									: PUBLIC_PAGES.BRAND_REVIEWS(id)
							}
						>
							Смотреть все отзывы
						</Link>
					)}
					{isProduct && id && <ReviewSend />}
				</div>
				{isSlider ? (
					<Slider
						className={listClassName && listClassName}
						dots
						speed={500}
						slidesToShow={1}
						slidesToScroll={1}
						arrows={false}
					>
						{reviews.map((review) => (
							<ReviewCard
								key={review.id}
								className={reviewClassName && reviewClassName}
								isAdmin={isAdmin}
								review={review}
								setReviews={setReviews}
							/>
						))}
					</Slider>
				) : (
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
				)}
				{id && (isMobile || isProduct) && (
					<Link
						className={cn(
							styles.more,
							isProduct ? styles.product : styles.brand
						)}
						href={
							isProduct
								? PUBLIC_PAGES.PRODUCT_REVIEWS(id)
								: PUBLIC_PAGES.BRAND_REVIEWS(id)
						}
					>
						Смотреть все отзывы
					</Link>
				)}
			</Container>
		</Section>
	)
}

export default Reviews
