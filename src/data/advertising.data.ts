import { AdvertisingType } from '@/__generated__/output'
import type { IOption } from '@/shared/interfaces/common/form/form.interface'
import { ADVERTISING_TYPE_TRANSLATE } from '@/translates/advertising-type.translate'

export const ADVERTISING_TYPE_DATA: IOption[] = Object.entries(
	AdvertisingType
).map(([_, value]) => ({
	label: ADVERTISING_TYPE_TRANSLATE[value],
	value: value as AdvertisingType,
}))

export const ADVERTISING_CLASSNAMES_DATA = {
	[AdvertisingType.Large]: 'large-advertising',
	[AdvertisingType.Small]: 'small-advertising',
	[AdvertisingType.Banner]: 'banner-advertising',
	[AdvertisingType.Card]: 'card-advertising',
	[AdvertisingType.Catalog]: 'catalog-advertising',
}
