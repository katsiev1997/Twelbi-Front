import type { Product } from '@/__generated__/output'

export const PRODUCT_DATA: Product = {
	id: 1,
	name: 'Футболка Lacoste',
	about: `Футболка Lacoste - идеальный выбор для всех ценителей стиля и качества. Эта уникальная футболка изготовлена из смеси высококачественного хлопка и льна, что обеспечивает комфорт и прочность изделия. Сочетание этих материалов делает футболку Lacoste идеальной для повседневной носки.
	<br /> <br />
	Состав футболки Lacoste составляет 70% хлопка и 30% льна, что делает ее не только удобной, но и легкой и дышащей. Ткань приятна к телу и не вызывает раздражения даже при длительном ношении. Эта футболка станет незаменимым элементом гардероба как для повседневного использования, так и для особых случаев.
	<br /> <br />
	Приобретая футболку Lacoste в официальном магазине, вы гарантированно получаете продукт высочайшего качества и оригинальной фирменный стиль. Будьте уверены, что ваш образ будет безупречен и стильный с этой футболкой от Lacoste.
	<br /> <br />
	Не упустите возможность обновить свой гардероб с помощью футболки Lacoste - надежной и стильной базовой вещи, которая дополнит любой ваш образ.`,
	sku: '1595804283',
	posterPath: '/twelbi/products/current-product-poster.png',
	videoPath: '/twelbi/products/current-product-video.mp4',
	imagesPaths: [
		'/twelbi/products/current-product-image-1.png',
		'/twelbi/products/current-product-image-2.png',
		'/twelbi/products/current-product-image-3.png',
	],
	prices: [
		{
			price: '4501',
			minQuantity: '5',
		},
		{
			price: '4000',
			minQuantity: '500',
		},
		{
			price: '3500',
			minQuantity: '1000',
		},
	],
	rating: '4.7',
	reviews: [
		{
			id: 1,
			authorName: 'Людмила',
			rating: 5.0,
			comment:
				'Ткань качественная, натуральный хлопок, пошив хороший. Спасибо.',
			createdAt: '13 июля 2024',
		},
		{
			id: 2,
			authorName: 'Людмила',
			rating: 5.0,
			comment:
				'Ткань качественная, натуральный хлопок, пошив хороший. Спасибо.',
			createdAt: '13 июля 2024',
		},
		{
			id: 3,
			authorName: 'Людмила',
			rating: 5.0,
			comment:
				'Ткань качественная, натуральный хлопок, пошив хороший. Спасибо.',
			createdAt: '13 июля 2024',
		},
	],
	reviewsCount: 230,
	category: {
		name: 'Одежда, обувь, аксессуары',
		slug: 'odejda-obuv-aksesuari',
	},
	provider: {
		id: 1,
		rating: '4.8',
		phone: '+7 (879) 478-54-74',
		whatsapp: '+7 (879) 478-54-74',
		telegram: '@lacoste',
		name: 'Lacoste Россия',
		slug: 'lacoste-russia',
		isBrandOwner: false,
		isSubscribed: false,
		logoPath: '/twelbi/brands/brand-6.png',
	},
	views: 8351,
	createdAt: '13 июля 2024',
}
