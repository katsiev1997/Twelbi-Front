import type { AccountBrand } from '@/__generated__/output'

export const ACCOUNT_BRAND: AccountBrand = {
	id: 1,
	name: 'Lacoste Россия',
	balance: 12500,
	email: 'lacoste@yandex.ru',
	phone: '+7 (949) 123-45-67',
	whatsapp: '+7 (949) 123-45-67',
	telegram: '@user',
	logoPath: '/twelbi/brands/brand-6-mini.png',
	city: 'Москва',
	postedCount: 3,
	subscribers: Array.from({ length: 15 }, () => 'lacoste@yandex.ru'),
	createdAt: '18.07.2024',
}
