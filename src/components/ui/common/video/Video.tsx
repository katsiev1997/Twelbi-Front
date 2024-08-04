import type { IVideo } from '@/shared/interfaces/global/video/video.interface'
import type { FC } from 'react'

const Video: FC<IVideo> = ({ className }) => {
	return <video className={className} loop />
}

export default Video
