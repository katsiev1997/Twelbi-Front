import type { IClassName } from '../class-name/class-name.interface'

export interface IContact extends IClassName {
	socialClassName?: string
	phoneClassName?: string
	subscribeClassName?: string
	isBrandOwner: boolean
	isSubscribed: boolean
	brandId: number
	phoneNumber: string
}
