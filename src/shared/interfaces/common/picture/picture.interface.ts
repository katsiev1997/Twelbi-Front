import type { IClassName } from '../class-name/class-name.interface'

export interface IPictureSource {
	src: string
	resolution: number
}

export interface IPicture extends IClassName {
	src: string
	width?: number
	height?: number
	alt: string
	title?: string
	sources?: IPictureSource[]
}
