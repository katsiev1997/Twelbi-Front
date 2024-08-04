import { EnumFile } from '@/constants/enums.constants'
import {
	IMAGE_EXTENSIONS_DATA,
	VIDEO_EXTENSIONS_DATA,
} from '@/data/extensions.data'
import { MIME_IMAGE_TYPES, MIME_VIDEO_TYPES } from '@/data/mime-types.data'
import { renameFile } from '@/utils/helpers/rename-file.util'
import { type DropzoneOptions, useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'

export const useDragAndDrop = (
	fileType: EnumFile,
	uploadedFileName: string,
	onChange: (file: File | null) => void,
	options?: DropzoneOptions
) => {
	const isImage = fileType === EnumFile.IMAGE
	const accept = Object.fromEntries(
		Object.entries(isImage ? MIME_IMAGE_TYPES : MIME_VIDEO_TYPES).map(
			([ext, mimeType]) => [mimeType, [ext]]
		)
	)

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		...options,
		maxFiles: 1,
		multiple: false,
		noClick: true,
		maxSize: (isImage ? 10 : 50) * 1024 * 1024,
		accept,
		onDrop: (acceptedFiles) => {
			const file = acceptedFiles[0]
			console.log(acceptedFiles)
			onChange(renameFile(file, uploadedFileName))
		},
		onDropRejected: (rejectedFiles) => {
			let uniqueErrorCodes = new Set<string>()

			rejectedFiles.forEach((file) => {
				file.errors.forEach(({ code }) => {
					uniqueErrorCodes.add(code)
				})
			})

			uniqueErrorCodes.forEach((code) => {
				if (code === 'file-invalid-type') {
					toast.error(
						`Поддерживаются только ${
							isImage
								? IMAGE_EXTENSIONS_DATA.join(', ')
								: VIDEO_EXTENSIONS_DATA.join(', ')
						}`
					)
				} else if (code === 'file-too-large') {
					toast.error(
						isImage
							? 'Размер картинки должен быть не больше 10 МБ'
							: 'Размер видео должен быть не больше 50 МБ'
					)
				} else if (code === 'too-many-files') {
					toast.error('Можно загрузить только один файл')
				}
			})
		},
	})

	return {
		isDragActive,
		getRootProps,
		getInputProps,
	}
}
