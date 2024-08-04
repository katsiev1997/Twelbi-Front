import { AdvertisingType } from '@/__generated__/output'

export const getAdvertisingClass = (type: AdvertisingType) => {
	const className =
		type === AdvertisingType.Large
			? 'large-advertising'
			: type === AdvertisingType.Small
			? 'small-advertising'
			: type === AdvertisingType.Banner
			? 'banner-advertising'
			: type === AdvertisingType.Card
			? 'card-advertising'
			: 'catalog-advertising'

	return `advertising ${className}`
}
