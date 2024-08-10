'use client'

import pauseIcon from '@/assets/images/icons/pause.png'
import type { IVideo } from '@/shared/interfaces/common/video/video.interface'
import cn from 'clsx'
import { useRef, useState, type FC } from 'react'
import Picture from '../picture/Picture'
import styles from './Video.module.scss'

const Video: FC<IVideo> = ({ className, isIconStatic = false, ...rest }) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [isActive, setIsActive] = useState(false)

	const togglePlay = (value: boolean) => {
		if (!videoRef || !videoRef.current) return

		const video = videoRef.current

		if (value) {
			video.play()
			setIsActive(true)
		} else {
			video.pause()
			setIsActive(false)
		}
	}

	return (
		<div className={cn(styles.video, className && className)}>
			<video ref={videoRef} {...rest} onClick={() => togglePlay(!isActive)} />
			<button
				className={cn(styles.toggle, { [styles.animate]: !isIconStatic })}
				type="button"
			>
				<Picture src={pauseIcon.src} alt="Видео" />
			</button>
		</div>
	)
}

export default Video
