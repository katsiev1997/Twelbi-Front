import { Sort } from '@/__generated__/output'
import type { ISelectItem } from '@/shared/interfaces/common/form/form.interface'

export const SORT_FILTER_DATA: ISelectItem<Sort>[] = [
	{
		key: Sort.Desc,
		label: 'Новые',
	},
	{
		key: Sort.Asc,
		label: 'Старые',
	},
]
