'use client'

import searchIcon from '@/assets/images/icons/search-white.png'
import Picture from '@/components/ui/common/picture/Picture'
import type { ISearchField } from '@/shared/interfaces/common/form/form.interface'
import type { FC } from 'react'
import styles from '../Announcements.module.scss'

const AnnouncementSearch: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<input
				className={styles.field}
				placeholder="Поиск по объявлениям"
				onChange={handleSearch}
				value={searchTerm}
			/>
			<button className={styles.submit}>
				<Picture src={searchIcon.src} alt="Поиск" />
				<span>Поиск</span>
			</button>
		</div>
	)
}

export default AnnouncementSearch
