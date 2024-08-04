import type { IClassName } from '../class-name/class-name.interface'

export interface ISubscribe extends IClassName {
	initialSubscription: boolean
	brandId: number
}
