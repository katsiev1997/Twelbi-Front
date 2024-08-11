'use client'

import searchIcon from '@/assets/images/icons/search-white.png'
import Picture from '@/components/ui/common/picture/Picture'
import type { FC } from 'react'
import styles from '../Announcements.module.scss'

const AnnouncementSearch: FC = () => {
	return (
		<div className={styles.search}>
			<input className={styles.field} placeholder="Поиск по объявлениям" />
			<button className={styles.submit}>
				<Picture src={searchIcon.src} alt="Поиск" />
				<span>Поиск</span>
			</button>
		</div>
	)
}

export default AnnouncementSearch
