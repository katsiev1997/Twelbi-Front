import Picture from '@/components/ui/common/picture/Picture'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { ICategoryCard } from '@/shared/interfaces/api/category/category.interface'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './CategoryCard.module.scss'

const CategoryCard: FC<ICategoryCard> = ({
	isAdmin,
	category,
	setCategories,
	isCard,
	className,
}) => {
	return (
		<li
			className={cn(
				styles.category,
				isCard ? styles.card : styles.circle,
				className && className
			)}
		>
			<Link
				className={cn(styles.link, isCard ? styles.card : styles.circle)}
				href={PUBLIC_PAGES.CATEGORY(category.slug)}
			>
				<div className={cn(styles.preview, isCard ? styles.big : styles.small)}>
					<Picture
						src={isCard ? category.bigImagePath : category.smallImagePath}
						alt={category.name}
					/>
				</div>
				<span className={styles.name}>{category.name}</span>
			</Link>
		</li>
	)
}

export default CategoryCard
