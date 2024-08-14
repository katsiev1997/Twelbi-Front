import cityIcon from '@/assets/images/icons/city.png'

import Container from '@/components/ui/common/container/Container'
import Picture from '@/components/ui/common/picture/Picture'
import Section from '@/components/ui/common/section/Section'
import Contact from '@/components/ui/elements/contact/Contact'
import List from '@/components/ui/elements/list/List'
import type { IBrand } from '@/shared/interfaces/api/brand/brand.interface'
import { Star } from 'lucide-react'
import type { FC } from 'react'
import styles from './BrandAbout.module.scss'

const BrandAbout: FC<IBrand> = ({ brand }) => {
	return (
		<Section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.box}>
						<div className={styles.preview}>
							<Picture src={brand.logoPath} alt={brand.name} />
						</div>
						<div className={styles.about}>
							<div className={styles.top}>
								<h1 className={styles.name}>{brand.name}</h1>
								<List
									items={[
										{
											label: brand.city,
											image: {
												src: cityIcon.src,
												width: cityIcon.width,
												height: cityIcon.height,
												alt: 'Город',
											},
										},
										{
											label: (
												<>
													На сайте с <strong>{brand.createdAt}</strong>
												</>
											),
										},
										{
											label: (
												<>
													Опубликовано
													<span>{brand.postedCount} товаров</span>
												</>
											),
										},
									]}
									listClassName={styles.terms}
									itemClassName={styles.term}
								/>
							</div>
							<div className={styles.center}>
								<div className={styles.rating}>
									<Star />
									{brand.rating} средний рейтинг товаров поставщика
								</div>
								<div className={styles.postedMobile}>
									Опубликовано
									<span>{brand.postedCount} товаров</span>
								</div>
							</div>
							<Contact
								isBrandOwner={brand.isBrandOwner}
								isSubscribed={brand.isSubscribed}
								brandId={brand.id}
								phone={brand.phone}
								whatsapp={brand.whatsapp}
								telegram={brand.telegram}
							/>
						</div>
					</div>
					<div className={styles.info}>
						<h2 className={styles.title}>Информация о поставщике</h2>
						<div
							className={styles.text}
							dangerouslySetInnerHTML={{ __html: brand.about }}
						/>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default BrandAbout
