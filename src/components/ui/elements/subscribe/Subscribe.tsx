'use client'

import subscribeIcon from '@/assets/images/icons/subscribe.png'
import type { ISubscribe } from '@/shared/interfaces/common/subscribe/subscribe.interface'
import cn from 'clsx'
import { useState, type FC } from 'react'
import Picture from '../../common/picture/Picture'
import styles from './Subscribe.module.scss'

const Subscribe: FC<ISubscribe> = ({ initialSubscription, className }) => {
	const [isSubscribed, setIsSubscribed] = useState(initialSubscription)

	return (
		<button className={cn(styles.subscribe, className && className)}>
			<Picture src={subscribeIcon.src} alt="Подписка" />
			{isSubscribed ? 'Отписаться' : 'Подписаться'}
		</button>
	)
}

export default Subscribe
