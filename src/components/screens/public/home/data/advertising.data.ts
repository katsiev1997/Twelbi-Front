import { type Advertising, AdvertisingType } from '@/__generated__/output'
import type { IAdvertising } from '@/shared/interfaces/api/advertising/advertising.interface'

export const HOME_LARGE_ADVERTISING: IAdvertising = {
	advertising: {
		id: 1,
		bigImagePath: '/uploads/advertisements/advertising-1-big-image.png',
		url: '/',
		alt: 'Реклама',
		type: AdvertisingType.Large,
	},
}

export const HOME_BANNER_ADVERTISING_DATA: IAdvertising = {
	advertising: {
		id: 2,
		bigImagePath: '/uploads/advertisements/advertising-2-big-image.png',
		smallImagePath: '/uploads/advertisements/advertising-2-small-image.png',
		url: '/youtube.com',
		alt: 'Реклама',
		resolution: '550',
		type: AdvertisingType.Banner,
	},
}

export const HOME_SMALL_ADVERTISING_DATA: IAdvertising = {
	advertising: {
		id: 3,
		bigImagePath: '/uploads/advertisements/advertising-3-big-image.png',
		url: '/',
		alt: 'Реклама',
		type: AdvertisingType.Small,
	},
}

// export const HOME_CATALOG_ADVERTISING_DATA: IAdvertising = {
// 	advertising: {
// 		imagePath: catalogAdvertisingImage.src,
// 		imageSetPath: catalogSetAdvertisingImage.src,
// 		responsive: 550,
// 		link: '/',
// 		alt: 'Реклама',
// 	},
// }

export const HOME_CARD_ADVERTISEMENTS_DATA: Advertising[] = [
	{
		id: 1,
		bigImagePath: '/uploads/advertisements/advertising-4-big-image.png',
		smallImagePath: '/uploads/advertisements/advertising-4-small-image.png',
		url: '/',
		alt: 'Реклама',
		resolution: '550',
		type: AdvertisingType.Card,
	},
	{
		id: 2,
		bigImagePath: '/uploads/advertisements/advertising-5-big-image.png',
		smallImagePath: '/uploads/advertisements/advertising-5-small-image.png',
		url: '/',
		alt: 'Реклама',
		resolution: '550',
		type: AdvertisingType.Card,
	},
	{
		id: 3,
		bigImagePath: '/uploads/advertisements/advertising-6-big-image.png',
		smallImagePath: '/uploads/advertisements/advertising-6-small-image.png',
		url: '/',
		alt: 'Реклама',
		resolution: '550',
		type: AdvertisingType.Card,
	},
]

export const HOME_CATALOG_ADVERTISING_DATA: IAdvertising = {
	advertising: {
		id: 7,
		bigImagePath: '/uploads/advertisements/advertising-7-big-image.png',
		smallImagePath: '/uploads/advertisements/advertising-7-small-image.png',
		url: '/',
		alt: 'Реклама',
		resolution: '550',
		type: AdvertisingType.Catalog,
	},
}
