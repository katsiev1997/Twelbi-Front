import type { AllReviews, ReviewCard } from '@/__generated__/output'
import type { Dispatch, SetStateAction } from 'react'
import type { IClassName } from '../../common/class-name/class-name.interface'

export interface IReviewCard extends IClassName {
	isAdmin: boolean
	review: ReviewCard
	setReviews: Dispatch<SetStateAction<ReviewCard[]>>
}

export interface IReviews extends AllReviews {
	isAdmin: boolean
	brandId?: number
	wrapperClassName?: string
	listClassName?: string
	reviewClassName?: string
	heading: string
	rating: string
}
