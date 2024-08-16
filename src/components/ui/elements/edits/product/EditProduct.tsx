import type { ProductInput } from '@/__generated__/output'
import { EnumFile } from '@/constants/enums.constants'
import { useFileUploadProps } from '@/hooks/helpers/file/useFileUpload.hook'
import type { IEditProducts } from '@/shared/interfaces/api/edit/product/edit-product.interface'
import cn from 'clsx'
import { Trash2 } from 'lucide-react'
import { useState, type FC } from 'react'
import { Controller } from 'react-hook-form'
import Field from '../../form/field/Field'
import ReactSelect from '../../form/react-select/ReactSelect'
import TextEditor from '../../form/text-editor/TextEditor'
import UploadField from '../../form/upload/UploadField'
import {
	EDITOR_VALIDATION,
	LENGTH_VALIDATION,
	NUMBER_PATTERN_VALIDATION,
	REQUIRED_VALIDATION,
} from '../../form/validation/form.validation'
import MiniLoader from '../../loaders/mini/MiniLoader'
import styles from '../Edit.module.scss'

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
	const [{ loading, error }, setState] = useState({
		loading: false,
		error: undefined as any,
	})

	if (update) {
		const { loading, error } = update.get(update.id)
		setState({
			loading,
			error,
		})
	}

	if (error) return null

	const onSubmit = (data: ProductInput) => {
		if (create) {
			create.handler(data)
		} else if (update) {
			update.handler(update.id, data)
		}
	}

	return !loading ? (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
			<div className={styles.box}>
				<h4 className={styles.title}>Цена</h4>
				<div className={styles.object}>
					<div className={styles.cols}>
						{priceFields.map((field, index) => (
							<div className={cn(styles.col, styles.prices)} key={field.id}>
								<div className={styles.fields}>
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
										className={styles.remove}
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
							className={styles.add}
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
			<div className={styles.uploads}>
				<Controller
					name="posterPath"
					control={control}
					defaultValue=""
					render={({ field: { onChange }, fieldState: { error } }) => (
						<UploadField
							className={styles.uploadField}
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
							className={styles.uploadField}
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
				<div className={cn(styles.box, styles.images)}>
					<h4 className={styles.title}>Картинки</h4>
					<div className={styles.object}>
						<div className={styles.cols}>
							{imagesFields.map((field, index) => (
								<div className={styles.col} key={field.id}>
									<div className={styles.files}>
										<Controller
											name={`imagesPaths.${index}`}
											control={control}
											defaultValue=""
											render={({
												field: { onChange },
												fieldState: { error },
											}) => (
												<UploadField
													className={styles.uploadField}
													buttonClassName={cn(styles.uploadBtn, styles.video)}
													{...useFileUploadProps(
														onChange,
														watch,
														setValue,
														resetField,
														`imagesPaths.${index}`,
														`imagesFiles.${index}`
													)}
													error={error}
													fileType={EnumFile.IMAGE}
												/>
											)}
											rules={{
												validate: {
													required: (value) =>
														value || watch(`imagesFiles.${index}`)
															? true
															: 'Картинка обязательно.',
												},
											}}
										/>
									</div>
									<button
										className={styles.remove}
										type="button"
										onClick={() => imagesRemove(index)}
									>
										<Trash2 />
									</button>
								</div>
							))}
						</div>
						<button
							className={styles.add}
							type="button"
							onClick={() => imagesAppend(null)}
						>
							Добавить картинку
						</button>
					</div>
				</div>
			</div>
			<Controller
				name="about"
				control={control}
				defaultValue=""
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<TextEditor
						className={styles.editor}
						onChange={onChange}
						error={error}
						value={value}
						label="Описание"
					/>
				)}
				rules={EDITOR_VALIDATION('Описание', 100, 1500)}
			/>
			<button className={styles.submit}>Сохранить</button>
		</form>
	) : (
		<MiniLoader />
	)
}

export default EditProduct
