export const useFileByPath = async (url: string) => {
	const response = await fetch(url)
	const blob = await response.blob()
	const fileName = url.split('/').pop()
	const mimeType = blob.type
	return new File([blob], fileName || '', { type: mimeType })
}
