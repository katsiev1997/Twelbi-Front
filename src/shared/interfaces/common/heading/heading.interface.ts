import type { ReactNode } from 'react'
import type { IClassName } from '../class-name/class-name.interface'

export interface IHeadingButton {
	label: string
	href: string
}

export interface IHeading extends IClassName {
	children: ReactNode
	mobileChildren?: ReactNode
	variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	isUppercase?: boolean
	hasLine?: boolean
	button?: IHeadingButton
	label?: string
	size?: 'lg' | 'md'
}
