import type { VideoHTMLAttributes } from 'react'

export interface IVideo extends VideoHTMLAttributes<HTMLVideoElement> {
	className?: string
	isIconStatic?: boolean
}
