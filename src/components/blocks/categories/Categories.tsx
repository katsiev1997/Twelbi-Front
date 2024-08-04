'use client'

import type { CategoryCard as CategoryCardType } from '@/__generated__/output'
import CategoryCard from '@/components/parts/category-card/CategoryCard'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Heading from '@/components/ui/elements/heading/Heading'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { ICategories } from '@/shared/interfaces/api/category/category.interface'
import cn from 'clsx'
import { LayoutGrid } from 'lucide-react'
import Link from 'next/link'
import { useState, type FC } from 'react'
import styles from './Categories.module.scss'

const Categories: FC<ICategories> = ({
	isAdmin,
	heading,
	categories: queriedCategories,
	count,
	variant,
	wrapperClassName,
	listClassName,
	categoryClassName,
}) => {
	const [categories, setCategories] =
		useState<CategoryCardType[]>(queriedCategories)

	const isCard = variant === 'card'

	return (
		<Section className={wrapperClassName && wrapperClassName}>
			<Container>
				{heading && (
					<Heading
						className={heading.className}
						variant={heading.variant}
						hasLine={heading.hasLine}
						label={heading.label}
						button={heading.button}
					>
						{heading.children}
					</Heading>
				)}
				<ul
					className={cn(
						styles.list,
						isCard ? styles.cardList : styles.circleList,
						listClassName && listClassName
					)}
				>
					{categories.map((category) => (
						<CategoryCard
							key={category.slug}
							className={cn(
								isCard ? styles.card : styles.circle,
								categoryClassName && categoryClassName
							)}
							isAdmin={isAdmin}
							isCard={isCard}
							category={category}
							setCategories={setCategories}
						/>
					))}
					{!isCard && (
						<li className={styles.circle}>
							<Link className={styles.link} href={PUBLIC_PAGES.ALL_CATEGORIES}>
								<div className={styles.preview}>
									<LayoutGrid />
								</div>
								<span className={styles.name}>Все категории</span>
							</Link>
						</li>
					)}
				</ul>
			</Container>
		</Section>
	)
}

export default Categories
