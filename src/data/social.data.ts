import telegram from '@/assets/images/icons/telegram.png'
import vk from '@/assets/images/icons/vk.png'
import { TELEGRAM_URL, VK_URL } from '@/constants/details.constants'
import type { IListItem } from '@/shared/interfaces/common/list/list.interface'

export const SOCIAL_DATA: IListItem[] = [
	{
		image: {
			src: vk.src,
			width: vk.width,
			height: vk.height,
			alt: 'Вконтакте',
		},
		href: VK_URL,
	},
	{
		image: {
			src: telegram.src,
			width: telegram.width,
			height: telegram.height,
			alt: 'Телеграм',
		},
		href: TELEGRAM_URL,
	},
]
