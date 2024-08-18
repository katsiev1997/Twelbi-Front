import type { ProductInput } from '@/__generated__/output'
import { EnumFile } from '@/constants/enums.constants'
import { useFileUploadProps } from '@/hooks/helpers/file/useFileUpload.hook'
import type { IEditProducts } from '@/shared/interfaces/api/edit/product/edit-product.interface'
import cn from 'clsx'
import { Trash2 } from 'lucide-react'
import { type FC } from 'react'
import { Controller } from 'react-hook-form'
import Field from '../../form/field/Field'
import ReactSelect from '../../form/react-select/ReactSelect'
import Textarea from '../../form/textarea/Textarea'
import UploadField from '../../form/upload/UploadField'
import {
	EDITOR_VALIDATION,
	LENGTH_VALIDATION,
	NUMBER_PATTERN_VALIDATION,
	REQUIRED_VALIDATION,
} from '../../form/validation/form.validation'
import MiniLoader from '../../loaders/mini/MiniLoader'
import globalStyles from '../Edit.module.scss'
import styles from './EditProduct.module.scss'

const EditProduct: FC<IEditProducts> = ({
	categories,
	create,
	update,
	form: {
		props: {
			handleSubmit,
			register,
			control,
			formState: { errors },
			watch,
			resetField,
			setValue,
		},
		arrays: [
			{ fields: priceFields, append: priceAppend, remove: priceRemove },
			{ fields: imagesFields, append: imagesAppend, remove: imagesRemove },
		],
	},
}) => {
	const props = update && update.get(update.id)

	if (props?.error) return null

	const onSubmit = (data: ProductInput) => {
		if (create) {
			create.handler(data)
		} else if (update) {
			update.handler(update.id, data)
		}
	}

	return !props?.loading ? (
		<form className={globalStyles.form} onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('name', LENGTH_VALIDATION('Название', 5, 100))}
				className={styles.field}
				label="Название"
				error={errors.name}
			/>
			<Field
				{...register('sku', REQUIRED_VALIDATION('Артикул'))}
				className={styles.field}
				label="Артикул"
				error={errors.sku}
			/>
			<Controller
				name="category"
				control={control}
				render={({ field, fieldState: { error } }) => (
					<ReactSelect
						field={field}
						options={categories || []}
						label="Категория"
						error={error}
						className={styles.select}
					/>
				)}
				rules={REQUIRED_VALIDATION('Категория')}
			/>
			<div className={styles.priceBox}>
				<h4 className={globalStyles.title}>Цена</h4>
				<div className={styles.priceObject}>
					<div className={styles.prices}>
						{priceFields.map((field, index) => (
							<div className={styles.price} key={field.id}>
								<div className={styles.priceFields}>
									<Field
										{...register(`prices.${index}.price`, {
											...REQUIRED_VALIDATION('Цена'),
											...NUMBER_PATTERN_VALIDATION(1000),
										})}
										className={styles.field}
										placeholder="Цена"
										error={errors.prices && errors.prices[index]?.price}
									/>
									<Field
										{...register(`prices.${index}.minQuantity`, {
											...REQUIRED_VALIDATION('Количество'),
											...NUMBER_PATTERN_VALIDATION(10),
										})}
										className={styles.field}
										placeholder="Количество"
										error={errors.prices && errors.prices[index]?.minQuantity}
									/>
								</div>
								{priceFields.length > 1 && (
									<button
										className={globalStyles.remove}
										type="button"
										onClick={() => priceRemove(index)}
									>
										<Trash2 />
									</button>
								)}
							</div>
						))}
					</div>
					{priceFields.length < 3 && (
						<button
							className={globalStyles.add}
							type="button"
							onClick={() =>
								priceAppend({
									price: 100,
									minQuantity: 5,
								})
							}
						>
							Добавить цену
						</button>
					)}
				</div>
			</div>
			<div className={styles.imagesBox}>
				<h4 className={globalStyles.title}>Картинки</h4>
				<div className={styles.imagesObject}>
					<div className={styles.images}>
						{imagesFields.map((field, index) => (
							<div className={styles.file} key={field.id}>
								<Controller
									name={`imagesPaths.${index}.url`}
									control={control}
									defaultValue=""
									render={({ field: { onChange }, fieldState: { error } }) => (
										<UploadField
											className={styles.uploadField}
											buttonClassName={cn(styles.uploadBtn, styles.image)}
											{...useFileUploadProps(
												onChange,
												watch,
												setValue,
												resetField,
												`imagesPaths.${index}.url`,
												`imagesFiles.${index}.file`
											)}
											error={error}
											fileType={EnumFile.IMAGE}
										/>
									)}
									rules={{
										validate: {
											required: (value) =>
												value || watch(`imagesFiles.${index}.file`)
													? true
													: 'Картинка обязательно.',
										},
									}}
								/>
								<button
									className={globalStyles.remove}
									type="button"
									onClick={() => imagesRemove(index)}
								>
									<Trash2 />
								</button>
							</div>
						))}
					</div>
					<button
						className={globalStyles.add}
						type="button"
						onClick={() => {
							imagesAppend({
								url: '',
							})
						}}
					>
						Добавить картинку
					</button>
				</div>
			</div>
			<div className={styles.bottom}>
				<Controller
					name="posterPath"
					control={control}
					defaultValue=""
					render={({ field: { onChange }, fieldState: { error } }) => (
						<UploadField
							className={styles.uploadPoster}
							buttonClassName={cn(styles.uploadBtn, styles.poster)}
							{...useFileUploadProps(
								onChange,
								watch,
								setValue,
								resetField,
								'posterPath',
								'posterFile'
							)}
							error={error}
							fileType={EnumFile.IMAGE}
							label="Постер"
						/>
					)}
					rules={{
						validate: {
							required: (value) =>
								value || watch('posterFile') ? true : 'Постер обязательно.',
						},
					}}
				/>
				<Controller
					name="videoPath"
					control={control}
					defaultValue=""
					render={({ field: { onChange }, fieldState: { error } }) => (
						<UploadField
							className={styles.uploadVideo}
							buttonClassName={cn(styles.uploadBtn, styles.video)}
							{...useFileUploadProps(
								onChange,
								watch,
								setValue,
								resetField,
								'videoPath',
								'videoFile'
							)}
							error={error}
							fileType={EnumFile.VIDEO}
							label="Видео"
						/>
					)}
					rules={{
						validate: {
							required: (value) =>
								value || watch('videoFile') ? true : 'Видео обязательно.',
						},
					}}
				/>
				<Controller
					name="about"
					control={control}
					defaultValue=""
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<Textarea
							className={styles.editor}
							onChange={onChange}
							error={error}
							value={value}
							label="Описание"
						/>
					)}
					rules={EDITOR_VALIDATION('Описание', 100, 1500)}
				/>
			</div>
			<button className={globalStyles.submit}>Сохранить</button>
		</form>
	) : (
		<MiniLoader />
	)
}

export default EditProduct
