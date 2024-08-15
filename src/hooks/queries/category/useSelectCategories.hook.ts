import { useSelectCategoriesQuery } from '@/__generated__/output'
import type { IOption } from '@/shared/interfaces/common/form/form.interface'

export const useSelectCategories = () => {
	const { data } = useSelectCategoriesQuery()

	return {
		categories: data?.selectCategories.map(
			({ name, id }): IOption => ({
				label: name,
				value: id,
			})
		),
	}
}
