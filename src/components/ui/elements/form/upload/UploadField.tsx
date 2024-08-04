import Picture from '@/components/ui/common/picture/Picture'
import Crop from '@/components/ui/templates/crop/Crop'
import { EnumFile } from '@/constants/enums.constants'
import { useDragAndDrop } from '@/hooks/helpers/drag-and-drop/useDragAndDrop.hook'
import type { IUploadField } from '@/shared/interfaces/common/form/form.interface'
import cn from 'clsx'
import { PlusCircle } from 'lucide-react'
import { forwardRef, useState } from 'react'
import globalStyles from '../Form.module.scss'
import styles from './UploadField.module.scss'

const UploadField = forwardRef<HTMLInputElement, IUploadField>(
	(
		{
			className,
			buttonClassName,
			fileType,
			uploadedFileName,
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
			uploadedFileName,
			onChange,
			options
		)
		const [isShow, setIsShow] = useState(false)
		const filePath = value ? URL.createObjectURL(value) : null

		return (
			<div className={cn(globalStyles.field, className && className)}>
				{label && <label className={globalStyles.label}>{label}</label>}
				{error && <span className={globalStyles.error}>{error.message}</span>}
				<button
					className={cn(styles.add, buttonClassName && buttonClassName)}
					type="button"
					onClick={() => setIsShow(true)}
				>
					{filePath ? (
						<Picture src={filePath} alt="" />
					) : (
						<>
							<PlusCircle />
							{`Добавить ${fileType === EnumFile.IMAGE ? 'картинку' : 'видео'}`}
						</>
					)}
				</button>
				<input
					type="hidden"
					ref={ref}
					onChange={onChange}
					{...getInputProps}
					{...rest}
				/>
				{isShow && (
					<Crop
						uploadedFileName={uploadedFileName}
						filePath={value ? URL.createObjectURL(value) : null}
						onChange={onChange}
						getRootProps={getRootProps}
						isDragActive={isDragActive}
						close={() => setIsShow(false)}
					/>
				)}
			</div>
		)
	}
)

export default UploadField
