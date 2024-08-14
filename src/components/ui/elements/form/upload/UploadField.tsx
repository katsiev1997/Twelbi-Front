import Picture from '@/components/ui/common/picture/Picture'
import { EnumFile } from '@/constants/enums.constants'
import { useDragAndDrop } from '@/hooks/helpers/drag-and-drop/useDragAndDrop.hook'
import type { IUploadField } from '@/shared/interfaces/common/form/form.interface'
import cn from 'clsx'
import { PlusCircle } from 'lucide-react'
import { forwardRef } from 'react'
import globalStyles from '../Form.module.scss'
import styles from './UploadField.module.scss'

const UploadField = forwardRef<HTMLInputElement, IUploadField>(
	(
		{
			className,
			buttonClassName,
			fileType,
			label,
			error,
			value,
			onChange,
			options,
			...rest
		},
		ref
	) => {
		const { getRootProps, getInputProps, isDragActive } = useDragAndDrop(
			fileType,
			onChange,
			options
		)

		const fileUrl = value
			? typeof value === 'string'
				? value
				: URL.createObjectURL(value)
			: null

		return (
			<div className={cn(globalStyles.field, className && className)}>
				{label && <label className={globalStyles.label}>{label}</label>}
				{error && <span className={globalStyles.error}>{error.message}</span>}
				<div
					className={cn(
						styles.add,
						{
							[styles.dragged]: isDragActive,
						},
						buttonClassName && buttonClassName
					)}
					{...getRootProps()}
				>
					{fileUrl ? (
						<Picture src={fileUrl} alt="" />
					) : (
						<>
							<PlusCircle />
							{`Добавить ${fileType === EnumFile.IMAGE ? 'картинку' : 'видео'}`}
						</>
					)}
				</div>
				<input
					type="hidden"
					ref={ref}
					onChange={onChange}
					{...getInputProps()}
					{...rest}
				/>
			</div>
		)
	}
)

export default UploadField
