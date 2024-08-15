import type { ProductInput } from '@/__generated__/output'
import type { IOption } from '@/shared/interfaces/common/form/form.interface'
import type { ApolloError } from '@apollo/client'
import type { ButtonHTMLAttributes } from 'react'
import type { UseFieldArrayReturn, UseFormReturn } from 'react-hook-form'

export interface IEditProps {
	create?: {
		handler: (data: any) => void
	}
	update?: {
		id: number
		handler: (id: number, data: ProductInput) => void
		get: (id: number) => {
			loading: boolean
			error: ApolloError | undefined
		}
	}
	form: {
		arrays: UseFieldArrayReturn<any, any, any>[]
		props: UseFormReturn<any, any, undefined>
	}
	categories?: IOption[]
}

export interface IEditProducts extends IEditProps {
	form: {
		arrays: UseFieldArrayReturn<ProductInput, any, any>[]
		props: UseFormReturn<ProductInput, any, undefined>
	}
}

export interface IEdit extends IEditProps {
	type: 'product'
	button: ButtonHTMLAttributes<HTMLButtonElement>
	heading: string
}
