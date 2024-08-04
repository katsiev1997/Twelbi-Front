import type { AllCards } from '@/__generated__/output'

export const HOME_CARDS_DATA: AllCards = {
	cards: [
		{
			about: 'мужской и женской одежды',
			imagePath: '/images/data/cards/card-1.png',
			color: '#282828',
			backgroundColor: '#F5F7F9',
			provider: {
				profile: {
					login: 'FABRIC13',
					avatarPath: '/images/data/cards/avatar-1.png'
				}
			}
		},
		{
			about: 'строительных материалов',
			imagePath: '/images/data/cards/card-2.png',
			color: '#282828',
			backgroundColor: '#FFE6B1',
			provider: {
				profile: {
					login: 'АПРЕЛЬ-SHOP',
					avatarPath: '/images/data/cards/avatar-2.png'
				}
			}
		},
		{
			about: 'товаров для животных',
			imagePath: '/images/data/cards/card-3.png',
			color: '#282828',
			backgroundColor: '#63E1AD',
			provider: {
				profile: {
					login: 'B2Pet Store',
					avatarPath: '/images/data/cards/avatar-3.png'
				}
			}
		},
	]
}