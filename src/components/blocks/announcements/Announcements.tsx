'use client'

import plusIcon from '@/assets/images/icons/plus.png'
import sortIcon from '@/assets/images/icons/sort.png'
import AnnouncementCard from '@/components/parts/announcement-card/AnnouncementCard'
import { ACCOUNT_ANNOUNCEMENTS_DATA } from '@/components/screens/secure/account/data/announcements.data'
import Picture from '@/components/ui/common/picture/Picture'
import Check from '@/components/ui/elements/check/Check'
import Filter from '@/components/ui/elements/filters/Filter'
import { SITE_NAME } from '@/constants/details.constants'
import { useState, type FC } from 'react'
import styles from './Announcements.module.scss'
import AnnouncementSearch from './search/AnnouncementSearch'

const Announcements: FC = () => {
	const [checked, setChecked] = useState<number[]>([])

	const toggle = (announcementId: number) => {
		setChecked((prev) =>
			prev.includes(announcementId)
				? prev.filter((id) => id !== announcementId)
				: [...prev, announcementId]
		)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.top}>
				<div className={styles.select}>
					<Check
						isChecked={ACCOUNT_ANNOUNCEMENTS_DATA.length === checked.length}
						toggle={() =>
							setChecked(
								ACCOUNT_ANNOUNCEMENTS_DATA.length === checked.length
									? []
									: [...ACCOUNT_ANNOUNCEMENTS_DATA.map((a) => a.id)]
							)
						}
					/>
					Выбрать {checked.length} из {ACCOUNT_ANNOUNCEMENTS_DATA.length}
				</div>
				<div className={styles.filter}>
					<span className={styles.label}>сортировка</span>
					<Filter
						options={['01']}
						image={{
							src: sortIcon.src,
							alt: 'Сортировка',
						}}
						label={`По дням на ${SITE_NAME}`}
					/>
				</div>
				<AnnouncementSearch />
			</div>
			<div className={styles.fill}>
				<div className={styles.announcements}>
					{ACCOUNT_ANNOUNCEMENTS_DATA.map((announcement) => (
						<div key={announcement.id} className={styles.announcement}>
							<div className={styles.pick}>
								<Check
									isChecked={checked.includes(announcement.id)}
									toggle={() => toggle(announcement.id)}
								/>
							</div>
							<AnnouncementCard
								key={announcement.id}
								announcement={announcement}
							/>
						</div>
					))}
				</div>
				<button type="button" className={styles.add}>
					<Picture src={plusIcon.src} alt="Плюс" />
					Добавить объявление
				</button>
			</div>
		</div>
	)
}

export default Announcements
