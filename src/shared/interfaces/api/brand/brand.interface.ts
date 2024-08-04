import type { AllBrands, Brand, BrandCard } from '@/__generated__/output'
import type { Dispatch, SetStateAction } from 'react'
import type { IClassName } from '../../common/class-name/class-name.interface'
import type { IHeading } from '../../common/heading/heading.interface'
import type { IPageSearchParam } from '../../common/param/param.interface'

export interface IBrand extends IPageSearchParam {
	brand: Brand
}

export interface IBrandCard extends IClassName {
	isAdmin: boolean
	brand: BrandCard
	setBrands: Dispatch<SetStateAction<BrandCard[]>>
}

export interface IBrands extends AllBrands {
	isAdmin: boolean
	heading?: IHeading
	wrapperClassName?: string
	listClassName?: string
	brandClassName?: string
}
