import { canvasToFile } from '@/utils/helpers/canvas-to-file.util'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import {
	convertToPixelCrop,
	type Crop,
	makeAspectCrop,
	type PixelCrop,
} from 'react-image-crop'

export const useCrop = (
	uploadedFileName: string,
	onChange: (file: File) => void,
	close: () => void
) => {
	const [crop, setCrop] = useState<Crop>()
	const imageRef = useRef<HTMLImageElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const onImageLoad = () => {
		const crop = makeAspectCrop(
			{
				unit: '%',
				width: 100,
			},
			1 / 1,
			100,
			100
		)

		setCrop(crop)
	}

	const onCropChange = (crop: PixelCrop) => setCrop(crop)

	const onCropSubmit = () => {
		const image = imageRef.current
		const canvas = canvasRef.current

		if (!image || !canvas || !crop) {
			toast.error('Элемент не найден.')
			return
		}

		const cropPercent = convertToPixelCrop(crop, image.width, image.height)

		const ctx = canvas.getContext('2d')

		if (!ctx) {
			toast.error('Контекст не найден.')
			return
		}

		const pixelRatio = window.devicePixelRatio
		const scaleX = image.naturalWidth / image.width
		const scaleY = image.naturalHeight / image.height

		canvas.width = Math.floor(cropPercent.width * scaleX * pixelRatio)
		canvas.height = Math.floor(cropPercent.height * scaleY * pixelRatio)

		ctx.scale(pixelRatio, pixelRatio)
		ctx.imageSmoothingQuality = 'high'
		ctx.save()

		const cropX = cropPercent.x * scaleX
		const cropY = cropPercent.y * scaleY

		ctx.translate(-cropX, -cropY)
		ctx.drawImage(
			image,
			0,
			0,
			image.naturalWidth,
			image.naturalHeight,
			0,
			0,
			image.naturalWidth,
			image.naturalHeight
		)

		ctx.restore()

		canvasToFile(canvas, uploadedFileName, 'image/png')
			.then((file) => {
				console.log(file)
				onChange(file)
				close()
			})
			.catch((error) => {
				console.error(error)
			})
	}

	return { crop, onCropChange, onImageLoad, onCropSubmit, imageRef, canvasRef }
}
