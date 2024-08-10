import type { IList } from './list/list.interface'

export interface IBreadcrumb extends IList {
	className?: string
	isButtonMobile?: boolean
	label?: string
	mobileLabel?: string
}
