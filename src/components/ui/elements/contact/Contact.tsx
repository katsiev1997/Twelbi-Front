import telegramIcon from '@/assets/images/icons/telegram-blue.png'
import whatsappIcon from '@/assets/images/icons/whatsapp.png'
import type { IContact } from '@/shared/interfaces/common/contact/contact.interface'
import cn from 'clsx'
import type { FC } from 'react'
import List from '../list/List'
import Phone from '../phone/Phone'
import Subscribe from '../subscribe/Subscribe'
import styles from './Contact.module.scss'

const Contact: FC<IContact> = ({
	className,
	socialClassName,
	phoneClassName,
	subscribeClassName,
	isBrandOwner,
	isSubscribed,
	brandId,
	phone,
	whatsapp,
	telegram,
}) => {
	return (
		<div className={cn(styles.buttons, className && className)}>
			{phone && (
				<Phone
					className={cn(styles.phone, phoneClassName && phoneClassName)}
					phone={phone}
				/>
			)}
			<List
				items={[
					...(telegram
						? [
								{
									image: {
										src: telegramIcon.src,
										width: telegramIcon.width,
										height: telegramIcon.height,
										alt: 'Telegram',
									},
									href: `https://t.me/${telegram.slice(1)}`,
								},
						  ]
						: []),
					...(whatsapp
						? [
								{
									image: {
										src: whatsappIcon.src,
										width: whatsappIcon.width,
										height: whatsappIcon.height,
										alt: 'Whatsapp',
									},
									href: `https://api.whatsapp.com/send?phone=${whatsapp.slice(
										1
									)}`,
								},
						  ]
						: []),
				]}
				listClassName={cn(styles.social, socialClassName && socialClassName)}
			/>
			{!isBrandOwner && (
				<Subscribe
					className={cn(
						styles.subscribe,
						subscribeClassName && subscribeClassName
					)}
					brandId={brandId}
					initialSubscription={isSubscribed}
				/>
			)}
		</div>
	)
}

export default Contact
