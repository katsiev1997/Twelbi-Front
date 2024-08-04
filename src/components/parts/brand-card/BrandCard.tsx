import Picture from '@/components/ui/common/picture/Picture'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IBrandCard } from '@/shared/interfaces/api/brand/brand.interface'
import cn from 'clsx'
import { Star } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './BrandCard.module.scss'

const BrandCard: FC<IBrandCard> = ({
	isAdmin,
	brand,
	setBrands,
	className,
}) => {
	return (
		<li className={cn(styles.brand, className && className)}>
			<Link className={styles.link} href={PUBLIC_PAGES.PROVIDER(brand.slug)}>
				<div className={styles.top}>
					<span className={styles.category}>{brand.category.name}</span>
					<div className={styles.rating}>
						<Star />
						<span className={styles.rate}>{brand.rating}</span>
						<p className={styles.count}>{brand.reviewsCount} оценки</p>
					</div>
				</div>
				<Picture
					className={styles.preview}
					src={brand.logoPath}
					alt={brand.name}
				/>
				<div className={styles.button}>подробнее</div>
			</Link>
		</li>
	)
}

export default BrandCard
