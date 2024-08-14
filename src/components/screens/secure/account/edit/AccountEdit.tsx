import Field from '@/components/ui/elements/form/field/Field'
import MaskField from '@/components/ui/elements/form/mask/MaskField'
import ReactSelect from '@/components/ui/elements/form/react-select/ReactSelect'
import TextEditor from '@/components/ui/elements/form/text-editor/TextEditor'
import UploadField from '@/components/ui/elements/form/upload/UploadField'
import {
	EDITOR_VALIDATION,
	LENGTH_VALIDATION,
	PHONE_VALIDATION,
	REQUIRED_VALIDATION,
} from '@/components/ui/elements/form/validation/form.validation'
import Heading from '@/components/ui/elements/heading/Heading'
import { EnumFile } from '@/constants/enums.constants'
import { USER_PAGES } from '@/constants/url.constants'
import { COUNTRIES_SELECT_DATA } from '@/data/countries.data'
import { useFileUploadProps } from '@/hooks/helpers/file/useFileUpload.hook'
import { useEditBrand } from '@/hooks/mutations/brand/useEditBrand.hook'
import type { IAccountEdit } from '@/shared/interfaces/api/brand/brand.interface'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import styles from '../Account.module.scss'

const AccountEdit: FC<IAccountEdit> = ({
	brand,
	type,
	categories,
	setBrand,
}) => {
	const {
		registerInput,
		control,
		errors,
		handleSubmit,
		onSubmit,
		watch,
		setValue,
		resetField,
	} = useEditBrand({ type, brand, setBrand })

	const isEdit = type === 'edit'

	return (
		<div className={styles.fill}>
			<div className={styles.top}>
				{isEdit && (
					<Link className={styles.back} href={USER_PAGES.ACCOUNT}>
						<MoveLeft />
						Назад
					</Link>
				)}
				<Heading variant="h1" className={styles.heading} size="md">
					{isEdit ? 'Редактировать' : 'Создать'} Бренд
				</Heading>
			</div>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.left}>
					<Controller
						name="logoPath"
						control={control}
						defaultValue=""
						render={({ field: { onChange }, fieldState: { error } }) => (
							<UploadField
								className="triq"
								buttonClassName={styles.uploadBtn}
								{...useFileUploadProps(
									onChange,
									watch,
									setValue,
									resetField,
									'logoPath',
									'logoFile'
								)}
								error={error}
								fileType={EnumFile.IMAGE}
								label="Лого"
							/>
						)}
						rules={{
							validate: {
								required: (value) =>
									value || watch('logoFile') ? true : 'Лого обязательно.',
							},
						}}
					/>
				</div>
				<div className={styles.right}>
					<Field
						{...registerInput('name', LENGTH_VALIDATION('Название', 3, 20))}
						className={styles.field}
						label="Название"
						placeholder="Twelbi"
						error={errors.name}
					/>
					<Controller
						name="city"
						control={control}
						render={({ field, fieldState: { error } }) => (
							<ReactSelect
								field={field}
								options={COUNTRIES_SELECT_DATA}
								label="Город"
								error={error}
								className={styles.select}
							/>
						)}
						rules={REQUIRED_VALIDATION('Город')}
					/>
					<Controller
						name="category"
						control={control}
						render={({ field, fieldState: { error } }) => (
							<ReactSelect
								field={field}
								options={categories.map(({ id, name }) => ({
									label: name,
									value: id,
								}))}
								label="Категория"
								error={error}
								className={styles.select}
							/>
						)}
						rules={REQUIRED_VALIDATION('Категория')}
					/>
				</div>
				{isEdit && (
					<div className={styles.contacts}>
						<Controller
							name="phone"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<MaskField
									className={styles.social}
									label="Телефон"
									mask={'+{7} (000) 000-00-00'}
									error={error}
									value={value as string}
									onChange={onChange}
								/>
							)}
							rules={PHONE_VALIDATION('Телефон')}
						/>
						<Controller
							name="whatsapp"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<MaskField
									className={styles.social}
									label="Whatsapp (Не обязательно)"
									placeholder=""
									mask={'+{7} (000) 000-00-00'}
									error={error}
									value={value as string}
									onChange={onChange}
								/>
							)}
						/>
						<Field
							{...registerInput('telegram')}
							className={styles.social}
							label="Телеграм (Не обязательно)"
							placeholder="@twelbi"
							error={errors.telegram}
						/>
					</div>
				)}
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
		</div>
	)
}

export default AccountEdit
