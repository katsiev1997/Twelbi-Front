'use client'

import homeIcon from '@/assets/images/icons/home.png'
import Products from '@/components/blocks/products/Products'
import Reviews from '@/components/blocks/reviews/Reviews'
import Breadcrumb from '@/components/ui/elements/breadcrumb/Breadcrumb'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import { useBrandProducts } from '@/hooks/queries/product/useBrandProducts.hook'
import type { IBrand } from '@/shared/interfaces/api/brand/brand.interface'
import type { IUserIsAdmin } from '@/shared/interfaces/api/user/user.interface'
import type { FC } from 'react'
import BrandAbout from './about/BrandAbout'
import styles from './Brand.module.scss'

const Brand: FC<IBrand & IUserIsAdmin> = ({ brand, searchParams, isAdmin }) => {
	const { products, count, page, setPage, step, pagesCount } = useBrandProducts(
		brand.id
	)

	return (
		<div className={styles.brand}>
			<Breadcrumb
				className={styles.breadcrumb}
				items={[
					{
						image: {
							src: homeIcon.src,
							width: homeIcon.width,
							height: homeIcon.height,
							alt: 'Главная',
						},
					},
					{
						label: 'Поставщики',
						href: PUBLIC_PAGES.ALL_BRANDS,
					},
					{
						label: brand.name,
					},
				]}
			/>
			<BrandAbout brand={brand} />
			{brand.reviewsCount && (
				<Reviews
					wrapperClassName={styles.reviewsWrapper}
					listClassName={styles.reviews}
					reviewClassName={styles.review}
					isAdmin={isAdmin}
					brandId={brand.id}
					heading="Отзывы о товарах"
					rating={brand.rating}
					reviews={brand.reviews}
					count={brand.reviewsCount}
				/>
			)}
			{count && (
				<Products
					isAdmin={isAdmin}
					filters={{
						hasSort: true,
					}}
					products={products}
					count={count}
					filtersClassName={styles.productsFilters}
					smallClassName={styles.product}
					pagination={{
						page,
						setPage,
						pagesCount,
						step,
						searchParams,
					}}
				/>
			)}
		</div>
	)
}

export default Brand
