import cityIcon from '@/assets/images/icons/city.png'
import messageIcon from '@/assets/images/icons/message.png'
import telegramIcon from '@/assets/images/icons/telegram-blue.png'
import whatsappIcon from '@/assets/images/icons/whatsapp.png'
import Container from '@/components/ui/common/container/Container'
import Picture from '@/components/ui/common/picture/Picture'
import Section from '@/components/ui/common/section/Section'
import List from '@/components/ui/elements/list/List'
import Phone from '@/components/ui/elements/phone/Phone'
import Subscribe from '@/components/ui/elements/subscribe/Subscribe'
import type { IBrand } from '@/shared/interfaces/api/brand/brand.interface'
import { Star } from 'lucide-react'
import Link from 'next/link'
import { type FC } from 'react'
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
							<h1 className={styles.name}>{brand.name}</h1>
							<div className={styles.fill}>
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
								<div className={styles.rating}>
									<Star />
									{brand.rating} средний рейтинг товаров поставщика
								</div>
								<div className={styles.buttons}>
									<div className={styles.actions}>
										<Phone phone={brand.phoneNumber} />
										{!brand.isBrandOwner && (
											<Subscribe
												brandId={brand.id}
												initialSubscription={brand.isSubscribed}
											/>
										)}
									</div>
									<div className={styles.contacts}>
										<Link className={styles.message} href="">
											<Picture src={messageIcon.src} alt="Написать сообщение" />
											Написать сообщение
										</Link>
										<List
											items={[
												{
													image: {
														src: telegramIcon.src,
														width: telegramIcon.width,
														height: telegramIcon.height,
														alt: 'Telegram',
													},
													href: `https://t.me/${brand.phoneNumber}`,
												},
												{
													image: {
														src: whatsappIcon.src,
														width: whatsappIcon.width,
														height: whatsappIcon.height,
														alt: 'Whatsapp',
													},
													href: `https://api.whatsapp.com/send?phone=${brand.phoneNumber.slice(
														1
													)}`,
												},
											]}
											listClassName={styles.social}
										/>
									</div>
								</div>
							</div>
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
