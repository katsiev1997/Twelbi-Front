import fireIcon from '@/assets/images/icons/fire.png'
import moreIcon from '@/assets/images/icons/more.png'
import rubleBlackIcon from '@/assets/images/icons/ruble-black.png'
import rubleGreenIcon from '@/assets/images/icons/ruble-green.png'
import Picture from '@/components/ui/common/picture/Picture'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IProductCard } from '@/shared/interfaces/api/product/product.interface'
import { formatNumber } from '@/utils/formats/format-number.util'
import cn from 'clsx'
import { Star } from 'lucide-react'
import Link from 'next/link'
import { type FC } from 'react'
import styles from './ProductCard.module.scss'
import ProductCardActions from './actions/ProductCardActions'

const ProductCard: FC<IProductCard> = ({
	isAdmin,
	product,
	setProducts,
	className,
}) => {
	return (
		<div
			className={cn(
				styles.product,
				{
					[styles.hot]: true,
				},
				className && className
			)}
		>
			<div className={styles.thumbnail}>
				<div className={styles.top}>
					{true && (
						<div className={styles.best}>
							<Picture src={fireIcon.src} alt={product.name} />
						</div>
					)}
					<Link
						className={styles.category}
						href={PUBLIC_PAGES.CATEGORY(product.category.slug)}
					>
						{product.category.name}
					</Link>
				</div>
				<Picture src={product.posterPath} alt={product.name} />
			</div>
			<div className={styles.box}>
				<div
					className={cn(styles.price, {
						[styles.hot]: false,
					})}
				>
					{product.maxPrice >= 1000000 ? (
						<>
							<span>От</span> {formatNumber(product.minPrice)}
						</>
					) : (
						<>
							{formatNumber(product.minPrice)} -{' '}
							{formatNumber(product.maxPrice)}
						</>
					)}
					{}
					<Picture
						src={true ? rubleGreenIcon.src : rubleBlackIcon.src}
						alt="Рубли"
					/>
				</div>
				<h3 className={styles.name}>{product.name}</h3>
				<div className={styles.info}>
					<span className={styles.label}>Поставщик:</span>
					<Link
						className={styles.provider}
						href={PUBLIC_PAGES.PROVIDER(product.provider.slug)}
					>
						<Picture
							className={styles.avatar}
							src={product.provider.logoPath}
							alt={product.provider.name}
						/>
						<span className={styles.login}>{product.provider.name}</span>
						<Picture className={styles.about} src={moreIcon.src} alt="Больше" />
					</Link>
				</div>
				<div className={styles.rating}>
					<Star />
					<span className={styles.rate}>{product.rating}</span>
					<p className={styles.count}>{product.ratesCount} оценки</p>
				</div>
			</div>
			<Link className={styles.link} href={PUBLIC_PAGES.PRODUCT(product.id)} />
			{isAdmin && (
				<ProductCardActions
					productId={product.id}
					visibility={product.visibility}
					setProducts={setProducts}
				/>
			)}
		</div>
	)
}

export default ProductCard
