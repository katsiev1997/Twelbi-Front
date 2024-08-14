import {
	CDN_URL,
	IS_PRODUCTION,
	SERVER_URL,
} from '@/constants/global.constants'

export const useFileByPath = async (url: string) => {
	const baseUrl = IS_PRODUCTION ? CDN_URL : SERVER_URL

	const response = await fetch(baseUrl + url)
	const blob = await response.blob()
	const fileName = url.split('/').pop()
	const mimeType = blob.type
	return new File([blob], fileName || '', { type: mimeType })
}
