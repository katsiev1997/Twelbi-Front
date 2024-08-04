import type { IClassName } from '../class-name/class-name.interface'

export interface IStars extends IClassName {
	variant: 'big' | 'small'
	rating: number
}
