import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import type { IProduct } from '@/shared/interfaces/api/product/product.interface'
import type { FC } from 'react'
import ProductContentAbout from './about/ProductContentAbout'
import styles from './ProductContent.module.scss'
import ProductSlider from './slider/ProductContentSlider'

const ProductContent: FC<IProduct> = ({ product }) => {
	return (
		<Section>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<ProductSlider product={product} />
					</div>
					<div className={styles.right}>
						<ProductContentAbout product={product} />
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default ProductContent
