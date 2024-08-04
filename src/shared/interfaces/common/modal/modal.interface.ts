import type { IClassName } from '../class-name/class-name.interface'

export interface IModal extends IClassName {
	closeModal: () => void
	heading: string
}
