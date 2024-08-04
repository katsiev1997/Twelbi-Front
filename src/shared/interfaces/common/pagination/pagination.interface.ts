import type { Dispatch, SetStateAction } from 'react'
import type { IPageSearchParam } from '../param/param.interface'

export interface IPagination extends IPageSearchParam {
	page: number
	setPage: Dispatch<SetStateAction<number>>
	pagesCount: number
	step: number
}
