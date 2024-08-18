'use client'

import { Sort } from '@/__generated__/output'
import plusIcon from '@/assets/images/icons/plus.png'
import sortIcon from '@/assets/images/icons/sort.png'
import AnnouncementCard from '@/components/parts/announcement-card/AnnouncementCard'
import Picture from '@/components/ui/common/picture/Picture'
import Check from '@/components/ui/elements/check/Check'
import Edit from '@/components/ui/elements/edits/Edit'
import Filter from '@/components/ui/elements/filters/Filter'
import { SITE_NAME } from '@/constants/details.constants'
import { useAnnouncements } from '@/hooks/queries/product/useAnnouncements.hook'
import type { IAnnouncements } from '@/shared/interfaces/api/product/product.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './Announcements.module.scss'
import AnnouncementSearch from './search/AnnouncementSearch'

const Announcements: FC<IAnnouncements> = ({ tariffs, setBalance }) => {
	const {
		categories,
		get,
		create,
		update,
		remove,
		toggle,
		checked,
		setChecked,
		scrollRef,
		announcements,
		error,
		form,
		pricesForm,
		imagesForm,
		openCreateModal,
		closeCreateModal,
		openUpdateModal,
		closeUpdateModal,
		modal,
		searchTerm,
		handleSearch,
		placeOrder,
	} = useAnnouncements(
		{
			perPage: 15,
			page: 1,
			sort: Sort.Desc,
		},
		setBalance
	)

	if (error) return null

	return (
		<div className={styles.wrapper}>
			<div className={styles.top}>
				<div className={styles.select}>
					<Check
						isChecked={
							announcements.length === 0
								? false
								: announcements.length === checked.length
						}
						toggle={() =>
							setChecked(
								announcements.length === checked.length
									? []
									: [...announcements.map((a) => a.id)]
							)
						}
					/>
					Выбрать {checked.length} из {announcements.length}
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
				<AnnouncementSearch
					searchTerm={searchTerm}
					handleSearch={handleSearch}
				/>
			</div>
			<div className={styles.fill}>
				{announcements.length > 0 && (
					<div
						ref={scrollRef}
						className={cn(styles.announcements, {
							[styles.big]: announcements.length > 3,
						})}
					>
						{announcements.map((announcement) => (
							<div key={announcement.id} className={styles.announcement}>
								<div className={styles.pick}>
									<Check
										isChecked={checked.includes(announcement.id)}
										toggle={() => toggle(announcement.id)}
									/>
								</div>
								<AnnouncementCard
									key={announcement.id}
									placeOrder={placeOrder}
									tariffs={tariffs}
									announcement={announcement}
									categories={categories}
									form={{
										arrays: [pricesForm, imagesForm],
										props: form,
									}}
									modal={{
										isShow:
											modal.isShow &&
											modal.type === 'update' &&
											modal.id === announcement.id,
										openModal: openUpdateModal,
										closeModal: closeUpdateModal,
										heading: 'Изменить объявление',
										size: 'lg',
									}}
									remove={{
										handler: remove,
									}}
									update={{
										id: announcement.id,
										get,
										handler: update,
									}}
								/>
							</div>
						))}
					</div>
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
						isShow: modal.type === 'create' && modal.isShow,
						openModal: openCreateModal,
						closeModal: closeCreateModal,
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
