import '@/assets/styles/advertising.scss'
import Picture from '@/components/ui/common/picture/Picture'
import { ADVERTISING_CLASSNAMES_DATA } from '@/data/advertising.data'
import type { IAdvertising } from '@/shared/interfaces/api/advertising/advertising.interface'
import type { IPicture } from '@/shared/interfaces/common/picture/picture.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './Advertising.module.scss'

const Advertising: FC<IAdvertising> = ({ advertising, sizes, className }) => {
	const pictureProps: IPicture = {
		src: advertising.bigImagePath,
		alt: advertising.alt || 'Реклама',
		...(advertising.smallImagePath && {
			sources: [
				{
					src: advertising.smallImagePath,
					resolution: +(advertising.resolution || 550),
				},
			],
		}),
	}

	return (
		<div
			className={`advertising ${
				ADVERTISING_CLASSNAMES_DATA[advertising.type]
			} ${cn(styles.advertising, className && className)}`}
		>
			<div className={styles.fill}>
				{advertising.url ? (
					<div className={styles.link}>
						<Picture {...pictureProps} />
					</div>
				) : (
					<Picture {...pictureProps} />
				)}
			</div>
		</div>
	)
}

export default Advertising
