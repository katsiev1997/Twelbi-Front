'use client'

import phoneIcon from '@/assets/images/icons/phone.png'
import type { IPhone } from '@/shared/interfaces/common/phone/phone.interface'
import { formatPhone } from '@/utils/formats/format-phone.util'
import cn from 'clsx'
import Link from 'next/link'
import { useState, type FC } from 'react'
import Picture from '../../common/picture/Picture'
import styles from './Phone.module.scss'

const Phone: FC<IPhone> = ({ phone, className }) => {
	const [isShow, setIsShow] = useState(false)

	return isShow ? (
		<Link
			className={cn(styles.phone, className && className)}
			href={`tel: ${phone}`}
		>
			<Picture src={phoneIcon.src} alt="Телефон" />
			<span>{formatPhone(phone)}</span>
		</Link>
	) : (
		<button
			className={cn(styles.phone, className && className)}
			onClick={() => setIsShow(true)}
		>
			<Picture src={phoneIcon.src} alt="Телефон" />
			<div className={styles.fill}>
				Показать телефон
				<span>+7 xxx xxx-xx-xx</span>
			</div>
		</button>
	)
}

export default Phone
