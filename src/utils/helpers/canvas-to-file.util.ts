import toast from 'react-hot-toast'

export const canvasToFile = (
	canvas: HTMLCanvasElement,
	fileName: string,
	mimeType: string
): Promise<File> => {
	return new Promise((resolve, reject) => {
		canvas.toBlob((blob) => {
			if (blob) {
				const file = new File([blob], fileName, { type: blob.type })
				resolve(file)
			} else {
				toast.error('Ошибка при создании файла.')
				reject(new Error('Ошибка при создании файла.'))
			}
		}, mimeType)
	})
}
