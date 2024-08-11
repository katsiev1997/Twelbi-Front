import type { IClassName } from '../class-name/class-name.interface'

export interface ICheck extends IClassName {
	isChecked: boolean
	toggle: () => void
}
