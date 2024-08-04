'use client'

import { Visibility } from '@/__generated__/output'
import type { IVisibilityFilter } from '@/shared/interfaces/common/filter/filter.interface'
import type { FC } from 'react'
import Select from '../../form/custom-select/Select'
import { VISIBILITY_FILTER_DATA } from './data/visibility-filter.data'

const VisibilityFilter: FC<IVisibilityFilter> = ({
	updateQueryFilters,
	visibility,
	className,
}) => {
	return (
		<Select<Visibility | null>
			className={className}
			label="Видимость"
			data={VISIBILITY_FILTER_DATA}
			onChange={(value) => {
				updateQueryFilters('visibility', value.key)
			}}
			value={VISIBILITY_FILTER_DATA.find((value) => value.key === visibility)}
		/>
	)
}

export default VisibilityFilter
