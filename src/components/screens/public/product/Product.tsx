import complainIcon from '@/assets/images/icons/complain-big.png'
import eyeIcon from '@/assets/images/icons/eye.png'
import fireIcon from '@/assets/images/icons/fire.png'
import homeIcon from '@/assets/images/icons/home.png'
import Products from '@/components/blocks/products/Products'
import Reviews from '@/components/blocks/reviews/Reviews'
import Container from '@/components/ui/common/container/Container'
import Picture from '@/components/ui/common/picture/Picture'
import Section from '@/components/ui/common/section/Section'
import Breadcrumb from '@/components/ui/elements/breadcrumb/Breadcrumb'
import List from '@/components/ui/elements/list/List'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IProduct } from '@/shared/interfaces/api/product/product.interface'
import type { IUserIsAdmin } from '@/shared/interfaces/api/user/user.interface'
import type { FC } from 'react'
import { BRAND_PRODUCTS_DATA } from '../brand/data/products.data'
import styles from './Product.module.scss'
import ProductContent from './content/ProductContent'

const Product: FC<IProduct & IUserIsAdmin> = ({
	product,
	searchParams,
	isAdmin,
}) => {
	return (
		<div className={styles.product}>
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
						label: product.category.name,
						href: PUBLIC_PAGES.CATEGORY(product.category.slug),
					},
					{
						label: product.name,
					},
				]}
				label="Вернуться  в каталог"
				mobileLabel="В каталог"
			/>
			<ProductContent product={product} />
			{product.reviewsCount && (
				<Reviews
					wrapperClassName={styles.reviewsWrapper}
					listClassName={styles.reviews}
					reviewClassName={styles.review}
					isAdmin={isAdmin}
					type="product"
					productId={product.id}
					heading="Отзывы"
					rating={product.rating}
					reviews={product.reviews}
					count={product.reviewsCount}
				/>
			)}
			{BRAND_PRODUCTS_DATA.count && (
				<Products
					isAdmin={isAdmin}
					products={BRAND_PRODUCTS_DATA.products}
					count={BRAND_PRODUCTS_DATA.count}
					wrapperClassName={styles.productsWrapper}
					listClassName={styles.products}
					smallClassName={styles.productCard}
					heading={{
						children: 'Рекомендуем',
						mobileChildren: (
							<>
								<Picture src={fireIcon.src} alt="Огонь" />
								Рекомендуем
							</>
						),
						variant: 'h3',
						isUppercase: false,
						size: 'md',
					}}
				/>
			)}
			{BRAND_PRODUCTS_DATA.count && (
				<Products
					isAdmin={isAdmin}
					products={BRAND_PRODUCTS_DATA.products}
					count={BRAND_PRODUCTS_DATA.count}
					wrapperClassName={styles.productsWrapper}
					listClassName={styles.products}
					smallClassName={styles.productCard}
					heading={{
						children: 'Похожие товары',
						variant: 'h3',
						isUppercase: false,
						size: 'md',
					}}
				/>
			)}
			{BRAND_PRODUCTS_DATA.count && (
				<Products
					isAdmin={isAdmin}
					products={BRAND_PRODUCTS_DATA.products}
					count={BRAND_PRODUCTS_DATA.count}
					wrapperClassName={styles.productsWrapper}
					listClassName={styles.products}
					smallClassName={styles.productCard}
					heading={{
						children: 'Недавно просмотренные товары',
						mobileChildren: 'вы смотрели',
						variant: 'h3',
						isUppercase: false,
						size: 'md',
					}}
				/>
			)}
			<Section>
				<Container>
					<div className={styles.mobileDetails}>
						<List
							listClassName={styles.terms}
							itemClassName={styles.term}
							items={[
								{
									label: `Артикул: ${product.sku}`,
								},
								{
									label: product.createdAt,
								},
							]}
						/>
						<div className={styles.views}>
							<Picture src={eyeIcon.src} alt="Глаз" />
							{product.views}
						</div>
						<button className={styles.complain}>
							<Picture src={complainIcon.src} alt="Пожаловаться" />
							Пожаловаться
						</button>
					</div>
				</Container>
			</Section>
		</div>
	)
}

export default Product
