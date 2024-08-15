import type { IClassName } from '../class-name/class-name.interface'

export interface IModal extends IClassName {
	closeModal: () => void
	size?: 'md' | 'lg'
	heading: string
}
