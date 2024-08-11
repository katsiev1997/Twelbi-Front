import cityIcon from '@/assets/images/icons/city.png'
import eyeIcon from '@/assets/images/icons/eye.png'
import fillIcon from '@/assets/images/icons/fill-gray.png'
import questionIcon from '@/assets/images/icons/question.png'
import raiseIcon from '@/assets/images/icons/raise.png'
import rubleBlackIcon from '@/assets/images/icons/ruble-black.png'
import rubleGreenIcon from '@/assets/images/icons/ruble-green.png'
import vipIcon from '@/assets/images/icons/vip-gray.png'
import Picture from '@/components/ui/common/picture/Picture'
import List from '@/components/ui/elements/list/List'
import type { IAnnouncementCard } from '@/shared/interfaces/api/product/product.interface'
import { formatNumber } from '@/utils/formats/format-number.util'
import cn from 'clsx'
import { AlertCircle } from 'lucide-react'
import type { FC } from 'react'
import styles from './AnnouncementCard.module.scss'

const AnnouncementCard: FC<IAnnouncementCard> = ({
	announcement,
	className,
}) => {
	return (
		<div className={cn(styles.announcement, className && className)}>
			<div className={styles.fill}>
				<div className={styles.poster}>
					<Picture src={announcement.posterPath} alt={announcement.name} />
				</div>
				<div className={styles.box}>
					<List
						listClassName={styles.terms}
						itemClassName={styles.term}
						items={[
							{
								label: `Артикул: ${announcement.sku}`,
							},
							{
								label: announcement.createdAt,
							},
							{
								label: (
									<>
										{announcement.views}
										<Picture src={eyeIcon.src} alt="Глаз" />
									</>
								),
							},
						]}
					/>
					<h2 className={styles.name}>{announcement.name}</h2>
					<div
						className={cn(styles.price, {
							[styles.hot]: false,
						})}
					>
						{announcement.maxPrice >= 1000000 ? (
							<>
								<span>От</span> {formatNumber(announcement.minPrice)}
							</>
						) : (
							<>
								{formatNumber(announcement.minPrice)} -{' '}
								{formatNumber(announcement.maxPrice)}
							</>
						)}
						{}
						<Picture
							src={true ? rubleGreenIcon.src : rubleBlackIcon.src}
							alt="Рубли"
						/>
					</div>
					<div className={styles.city}>
						<Picture src={cityIcon.src} alt="Город" />
						{announcement.city}
					</div>
					<List
						items={[
							{
								label: 'Изменить иобъявление',
								onClick: () => {},
							},
							{
								label: 'Удалить объявление',
								onClick: () => {},
							},
						]}
						listClassName={styles.actions}
						buttonClassName={styles.action}
					/>
				</div>
			</div>
			<div className={styles.payments}>
				<div className={styles.payment}>
					<button
						className={cn(styles.pay, {
							[styles.active]: true,
						})}
					>
						<Picture src={raiseIcon.src} alt="Поднять объеявление" />
						Поднять объеявление
					</button>
					<button className={styles.info}>
						<Picture src={questionIcon.src} alt="Подробно" />
					</button>
				</div>
				<div
					className={cn(styles.payment, {
						[styles.payed]: true,
					})}
				>
					<div
						className={cn(styles.pay, {
							[styles.payed]: true,
						})}
					>
						<Picture src={fillIcon.src} alt="Выделить цветом" />
						До 31.07 15:59
					</div>
					<button className={styles.info}>
						<Picture src={questionIcon.src} alt="Подробно" />
					</button>
				</div>
				<div className={styles.payment}>
					<div
						className={cn(styles.pay, {
							[styles.payed]: true,
							[styles.left]: true,
						})}
					>
						<AlertCircle />
						<Picture src={vipIcon.src} alt="VIP" />
						До 27.07 15:59
					</div>
					<button className={styles.info}>
						<Picture src={questionIcon.src} alt="Подробно" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default AnnouncementCard
