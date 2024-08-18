import type { ProductInput } from '@/__generated__/output'
import type { IOption } from '@/shared/interfaces/common/form/form.interface'
import type { IModal } from '@/shared/interfaces/common/modal/modal.interface'
import type { ApolloError } from '@apollo/client'
import type { ButtonHTMLAttributes } from 'react'
import type { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form'

export interface IActions {
	openModal?: () => void
	closeModal?: () => void
	update?: {
		id: number
		handler: (id: number, data: ProductInput) => void
		get: (id: number) => {
			loading: boolean
			error: ApolloError | undefined
		}
	}
	remove?: {
		handler: (id: number) => void
	}
	create?: {
		handler: (data: any) => void
	}
	form: {
		arrays: UseFieldArrayReturn<any, any, any>[]
		props: UseFormReturn<any, any, undefined>
	}
	categories?: IOption[]
}

export interface IEditProducts extends IActions {
	form: {
		arrays: UseFieldArrayReturn<ProductInput, any, any>[]
		props: UseFormReturn<ProductInput, any, undefined>
	}
}

export interface IEdit extends IActions {
	modal: IModal & {
		isShow: boolean
		openModal: () => void
	}
	type: 'product'
	button?: ButtonHTMLAttributes<HTMLButtonElement>
}
