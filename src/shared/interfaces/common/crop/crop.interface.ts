import type { DropzoneRootProps } from 'react-dropzone'

export interface ICrop {
	uploadedFileName: string
	filePath?: string | null
	onChange: (file?: File | null) => void
	getRootProps: <T extends DropzoneRootProps>(props?: T) => T
	isDragActive: boolean
	close: () => void
}
