import type { Advertising } from '@/__generated__/output'
import type { IClassName } from '../../common/class-name/class-name.interface'

export interface IAdvertisements {
	wrapperClassName?: string
	listClassName?: string
	advertisingClassName?: string
	advertisements: Advertising[]
}

export interface IAdvertising extends IClassName {
	advertising: Advertising
	sizes?: string
}
