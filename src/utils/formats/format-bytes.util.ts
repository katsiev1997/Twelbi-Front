export const formatBytes = (bytes: number) => {
	if (bytes === 0) return '0 Байт'

	const k = 1024
	const sizes = ['Байт', 'КБ', 'МБ', 'ГБ']

	const i = Math.floor(Math.log(bytes) / Math.log(k))

	const sizeIndex = i < sizes.length ? i : sizes.length - 1

	return Math.floor(bytes / Math.pow(k, sizeIndex)) + ' ' + sizes[sizeIndex]
}
