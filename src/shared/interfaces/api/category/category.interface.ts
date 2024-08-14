import type { AllCategories, CategoryCard } from '@/__generated__/output'
import type { Dispatch, SetStateAction } from 'react'
import type { IClassName } from '../../common/class-name/class-name.interface'
import type { IHeading } from '../../common/heading/heading.interface'

export interface ICategoryCard extends IClassName {
	isAdmin?: boolean
	category: CategoryCard
	setCategories: Dispatch<SetStateAction<CategoryCard[]>>
	isCard: boolean
}

export interface ICategories extends AllCategories {
	isAdmin?: boolean
	heading?: IHeading
	wrapperClassName?: string
	listClassName?: string
	categoryClassName?: string
	variant: 'circle' | 'card'
}
