import type { IClassName } from '../class-name/class-name.interface'
import type { IHeading } from '../heading/heading.interface'

export interface IContent extends IClassName {
	heading: IHeading
	content: string
}
