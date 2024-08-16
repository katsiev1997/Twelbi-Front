import leftArrow from '@/assets/images/icons/arrow-left.png'
import rightArrow from '@/assets/images/icons/arrow-right.png'
import { usePagination } from '@/hooks/helpers/pagination/usePagination'
import type { IClassName } from '@/shared/interfaces/common/class-name/class-name.interface'
import type { IPagination } from '@/shared/interfaces/common/pagination/pagination.interface'
import cn from 'clsx'
import type { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import Picture from '../../common/picture/Picture'
import styles from './Pagination.module.scss'

const Pagination: FC<IClassName & IPagination> = ({
	page,
	pagesCount,
	step,
	searchParams,
	setPage,
	className,
}) => {
	const isMobile = useMediaQuery({ maxWidth: 550 })
	const { pages, goTo, goToPrev, goToNext } = usePagination({
		page,
		pagesCount,
		step,
		searchParams,
		setPage,
	})

	if (pagesCount <= 1) return null

	return (
		<div className={cn(styles.pagination, className)}>
			{page > step && (
				<button className={styles.prev} onClick={goToPrev}>
					<Picture src={leftArrow.src} alt="Стрелка влево" />
					Предыдущая {!isMobile && 'страница'}
				</button>
			)}
			<ul className={styles.list}>
				{pages.map((pageNumber, index) =>
					pageNumber === '...' ? (
						<li key={index} className={styles.dots}>
							...
						</li>
					) : (
						<li key={index}>
							<button
								className={cn(styles.button, {
									[styles.active]: Math.ceil(page / step) === +pageNumber,
								})}
								onClick={() => goTo((+pageNumber - 1) * step + 1)}
							>
								{pageNumber}
							</button>
						</li>
					)
				)}
			</ul>
			{Math.ceil(page / step) !== pagesCount && (
				<button className={styles.next} onClick={goToNext}>
					Следующая {!isMobile && 'страница'}
					<Picture src={rightArrow.src} alt="Стрелка вправо" />
				</button>
			)}
		</div>
	)
}

export default Pagination
