import type { IStars } from '@/shared/interfaces/common/stars/stars.interface'
import cn from 'clsx'
import { Star } from 'lucide-react'
import type { FC } from 'react'
import styles from './Stars.module.scss'

const Stars: FC<IStars> = ({ variant, rating, className }) => {
	const percent = (rating * 100) / 5

	return (
		<ul
			className={cn(
				styles.stars,
				variant === 'big' ? styles.big : styles.small,
				className && className
			)}
		>
			{[1, 2, 3, 4, 5].map((i) => (
				<li>
					<Star />
				</li>
			))}
		</ul>
	)

	// return (
	// 	<div
	// 		className={cn(
	// 			styles.stars,
	// 			variant === 'big' ? styles.big : styles.small,
	// 			className && className
	// 		)}
	// 	>
	// 		<Picture
	// 			className={styles.background}
	// 			src={
	// 				variant === 'big' ? starsBigBackground.src : starsSmallBackground.src
	// 			}
	// 			alt="Звезды"
	// 		/>
	// 		<span className={styles.fill}></span>
	// 	</div>
	// )
}

export default Stars
