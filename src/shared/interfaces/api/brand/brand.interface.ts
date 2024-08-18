import type {
	AccountBrand,
	AllBrands,
	Brand,
	BrandCard,
	SelectCategory,
	Tariff,
} from '@/__generated__/output'
import type { Dispatch, SetStateAction } from 'react'
import type { IClassName } from '../../common/class-name/class-name.interface'
import type { IHeading } from '../../common/heading/heading.interface'
import type { IPageSearchParam } from '../../common/param/param.interface'

export interface IBrand extends IPageSearchParam {
	brand: Brand
}

export interface IAccountBrand {
	brand: AccountBrand
	balance?: number
}

export interface IAccountBalance {
	balance: number
}

export interface IAccount extends IPageSearchParam {
	brand?: AccountBrand | null
	tariffs: Tariff[]
	categories: SelectCategory[]
}

export interface IAccountState {
	type: 'create' | 'edit'
	brand: AccountBrand | null | undefined
	setBrand: Dispatch<SetStateAction<AccountBrand | null | undefined>>
}

export interface IAccountEdit extends IAccountState {
	categories: SelectCategory[]
}

export interface IAccountCategories {
	setBrand: Dispatch<SetStateAction<AccountBrand | null | undefined>>
}

export interface IBrandCard extends IClassName {
	isAdmin?: boolean
	brand: BrandCard
	setBrands: Dispatch<SetStateAction<BrandCard[]>>
}

export interface IBrands extends AllBrands {
	isAdmin?: boolean
	heading?: IHeading
	wrapperClassName?: string
	listClassName?: string
	brandClassName?: string
}
