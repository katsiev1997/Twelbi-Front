import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export interface IListItem {
	label?: ReactNode
	href?: string
	icon?: LucideIcon
	image?: {
		src: string
		width?: number
		height?: number
		alt: string
	}
	video?: {
		src: string
	}
	onClick?: () => void
}

export interface IList {
	items: IListItem[]
	listClassName?: string
	itemClassName?: string
	buttonClassName?: string
}
