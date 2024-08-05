'use client'

import type { ProductCard as ProductCardType } from '@/__generated__/output'
import Advertising from '@/components/parts/advertising/Advertising'
import ProductCard from '@/components/parts/product-card/ProductCard'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Heading from '@/components/ui/elements/heading/Heading'
import Pagination from '@/components/ui/elements/pagination/Pagination'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IProducts } from '@/shared/interfaces/api/product/product.interface'
import cn from 'clsx'
import Link from 'next/link'
import { Fragment, useEffect, useState, type FC } from 'react'
import styles from './Products.module.scss'
import ProductsFilters from './filters/ProductsFilters'

const Products: FC<IProducts> = ({
	isAdmin,
	heading,
	filters,
	advertising,
	pagination,
	hasMoreBtn,
	products: queriedProducts,
	count,
	hasWrapper = true,
	wrapperClassName,
	filtersClassName,
	listClassName,
	smallClassName,
	bigClassName,
}) => {
	const [isBig, setIsBig] = useState(false)
	const [products, setProducts] = useState<ProductCardType[]>([])

	useEffect(() => {
		if (queriedProducts.length > 0) setProducts(queriedProducts)
	}, [queriedProducts])

	const productsComponent = (
		<>
			{heading && (
				<Heading
					className={cn(styles.heading, heading.className)}
					variant={heading.variant}
					hasLine={heading.hasLine}
					label={heading.label}
					button={heading.button}
				>
					{heading.children}
				</Heading>
			)}
			{filters && (
				<ProductsFilters
					wrapperClassName={filtersClassName}
					isBig={isBig}
					setIsBig={setIsBig}
					hasSize={filters.hasSize}
					hasCity={filters.hasCity}
					hasSort={filters.hasSort}
					hasProvider={filters.hasProvider}
				/>
			)}
			<div className={cn(styles.list, listClassName)}>
				{products.map((product, index) => (
					<Fragment key={product.id}>
						<ProductCard
							isAdmin={isAdmin}
							className={cn(
								styles.product,
								isBig
									? cn(styles.big, bigClassName)
									: cn(styles.small, smallClassName)
							)}
							product={product}
							setProducts={setProducts}
						/>
						{advertising && index === 9 && (
							<>
								<Advertising
									className={styles.advertising}
									advertising={advertising}
								/>
							</>
						)}
					</Fragment>
				))}
			</div>
			{pagination && (
				<Pagination
					className={styles.pagination}
					searchParams={pagination.searchParams}
					page={pagination.page}
					pagesCount={pagination.pagesCount}
					step={pagination.step}
					setPage={pagination.setPage}
				/>
			)}
			{hasMoreBtn && (
				<Link className={styles.link} href={PUBLIC_PAGES.CATALOG}>
					смотреть все новинки
				</Link>
			)}
		</>
	)

	return hasWrapper ? (
		<Section className={wrapperClassName && wrapperClassName}>
			<Container>{productsComponent}</Container>
		</Section>
	) : (
		productsComponent
	)
}

export default Products
