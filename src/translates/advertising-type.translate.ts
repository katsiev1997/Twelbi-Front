import { AdvertisingType } from '@/__generated__/output'
import type { IObject } from '@/shared/interfaces/common/object/object.interface'

export const ADVERTISING_TYPE_TRANSLATE: IObject = {
	[AdvertisingType.Large]: 'Длинная реклама на главной',
	[AdvertisingType.Small]: 'Маленькая реклама на главной',
	[AdvertisingType.Banner]: 'Квадратная реклама на главной',
	[AdvertisingType.Catalog]: 'Реклама в продуктах',
	[AdvertisingType.Card]: 'Карточная реклама',
}
