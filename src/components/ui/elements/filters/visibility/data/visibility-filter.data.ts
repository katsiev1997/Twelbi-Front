import { Visibility } from '@/__generated__/output'
import type { ISelectItem } from '@/shared/interfaces/common/form/form.interface'

export const VISIBILITY_FILTER_DATA: ISelectItem<Visibility>[] = [
	{
		key: Visibility.Visible,
		label: 'Видимый',
	},
	{
		key: Visibility.Hidden,
		label: 'Скрытий',
	},
]
