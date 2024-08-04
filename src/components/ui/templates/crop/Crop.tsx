import { useCrop } from '@/hooks/helpers/crop/useCrop.hook'
import type { ICrop } from '@/shared/interfaces/common/crop/crop.interface'
import cn from 'clsx'
import { Trash2, X } from 'lucide-react'
import { type FC } from 'react'
import ReactCrop, { type Crop } from 'react-image-crop'
import 'react-image-crop/src/ReactCrop.scss'
import styles from './Crop.module.scss'

const Crop: FC<ICrop> = ({
	uploadedFileName,
	filePath,
	onChange,
	getRootProps,
	isDragActive,
	close,
}) => {
	const { crop, onCropChange, onCropSubmit, onImageLoad, imageRef, canvasRef } =
		useCrop(uploadedFileName, onChange, close)

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<div className={styles.buttons}>
					{filePath && (
						<button
							className={styles.remove}
							type="button"
							onClick={() => onChange(null)}
						>
							<Trash2 />
						</button>
					)}
					<button className={styles.close} type="button" onClick={close}>
						<X />
					</button>
				</div>
				{filePath ? (
					<div className={styles.fill}>
						{crop && <canvas ref={canvasRef} className={styles.canvas} />}
						<ReactCrop keepSelection crop={crop} onChange={onCropChange}>
							<img
								ref={imageRef}
								src={filePath}
								onLoad={onImageLoad}
								style={{ maxWidth: '100%', maxHeight: '100%' }}
							/>
						</ReactCrop>
						<button
							className={styles.submit}
							type="button"
							onClick={onCropSubmit}
						>
							Обрезать
						</button>
					</div>
				) : (
					<div
						className={cn(styles.drop, {
							[styles.active]: isDragActive,
						})}
						{...getRootProps()}
					>
						<p className={styles.text}>
							<span>Перетащите</span> файл сюда
						</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Crop
