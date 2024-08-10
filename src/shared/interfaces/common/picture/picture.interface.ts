import type { ImgHTMLAttributes } from 'react'

export interface IPictureSource {
	src: string
	resolution: number
}

export interface IPicture extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string
	src: string
	width?: number
	height?: number
	alt: string
	title?: string
	sources?: IPictureSource[]
}
