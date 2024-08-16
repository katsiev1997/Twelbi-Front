'use client'

import { Sort } from '@/__generated__/output'
import plusIcon from '@/assets/images/icons/plus.png'
import sortIcon from '@/assets/images/icons/sort.png'
import AnnouncementCard from '@/components/parts/announcement-card/AnnouncementCard'
import { ACCOUNT_ANNOUNCEMENTS_DATA } from '@/components/screens/secure/account/data/announcements.data'
import Picture from '@/components/ui/common/picture/Picture'
import Check from '@/components/ui/elements/check/Check'
import Edit from '@/components/ui/elements/edits/Edit'
import Filter from '@/components/ui/elements/filters/Filter'
import MiniLoader from '@/components/ui/elements/loaders/mini/MiniLoader'
import { SITE_NAME } from '@/constants/details.constants'
import { useAnnouncements } from '@/hooks/queries/product/useAnnouncements.hook'
import type { IAnnouncements } from '@/shared/interfaces/api/product/product.interface'
import type { FC } from 'react'
import styles from './Announcements.module.scss'
import AnnouncementSearch from './search/AnnouncementSearch'

const Announcements: FC<IAnnouncements> = ({ tariffs }) => {
	const {
		categories,
		get,
		create,
		update,
		toggle,
		checked,
		setChecked,
		scrollRef,
		announcements,
		count,
		error,
		loading,
		form,
		pricesForm,
		imagesForm,
		openModal,
		closeModal,
		isShow,
	} = useAnnouncements({
		perPage: 15,
		page: 1,
		sort: Sort.Desc,
	})

	if (error) return null

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
				{count ? (
					<div ref={scrollRef} className={styles.announcements}>
						{!loading ? (
							announcements.map((announcement) => (
								<div key={announcement.id} className={styles.announcement}>
									<div className={styles.pick}>
										<Check
											isChecked={checked.includes(announcement.id)}
											toggle={() => toggle(announcement.id)}
										/>
									</div>
									<AnnouncementCard
										key={announcement.id}
										tariffs={tariffs}
										announcement={announcement}
									/>
								</div>
							))
						) : (
							<MiniLoader className={styles.loader} />
						)}
					</div>
				) : (
					''
				)}
				<Edit
					type="product"
					button={{
						type: 'button',
						className: styles.add,
						children: (
							<>
								<Picture src={plusIcon.src} alt="Плюс" />
								Добавить объявление
							</>
						),
					}}
					form={{
						arrays: [pricesForm, imagesForm],
						props: form,
					}}
					modal={{
						isShow,
						openModal,
						closeModal,
						heading: 'Добавить объявление',
						size: 'lg',
					}}
					create={{
						handler: create,
					}}
					categories={categories}
				/>
			</div>
		</div>
	)
}

export default Announcements
