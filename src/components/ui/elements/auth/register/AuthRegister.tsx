import { useJwtAuthConfirmation } from '@/hooks/mutations/auth/jwt/useJwtConfirmation'
import { useAuthConfirmationStore } from '@/store/timer/timer.store'
import { formatTimer } from '@/utils/formats/format-timer.util'
import type { FC } from 'react'
import { Controller } from 'react-hook-form'
import Field from '../../form/field/Field'
import MaskField from '../../form/mask/MaskField'
import PasswordField from '../../form/password/PasswordField'
import {
	EMAIL_VALIDATION,
	LENGTH_VALIDATION,
	PHONE_VALIDATION,
	REQUIRED_VALIDATION,
} from '../../form/validation/form.validation'
import MiniLoader from '../../loaders/mini/MiniLoader'
import styles from '../Auth.module.scss'

const AuthRegister: FC = () => {
	const {
		registerInput,
		control,
		watch,
		handleSubmit,
		onSubmit,
		errors,
		loading,
	} = useJwtAuthConfirmation()
	const { remainingTime } = useAuthConfirmationStore()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Field
				{...registerInput('email', EMAIL_VALIDATION())}
				className={styles.field}
				placeholder="E-mail"
				error={errors.email}
			/>
			<Field
				{...registerInput('login', LENGTH_VALIDATION('Логин', 3, 20))}
				className={styles.field}
				placeholder="Логин"
				error={errors.login}
			/>
			<Controller
				name="phone"
				control={control}
				defaultValue=""
				render={({ field: { value, onChange }, fieldState: { error } }) => (
					<MaskField
						className={styles.field}
						placeholder="Телефон"
						mask={'+{7} (000) 000-00-00'}
						error={error}
						value={value}
						onChange={onChange}
					/>
				)}
				rules={PHONE_VALIDATION('Телефон')}
			/>
			<PasswordField
				{...registerInput('password', LENGTH_VALIDATION('Пароль', 6))}
				className={styles.password}
				placeholder="Пароль"
				error={errors.password}
			/>
			<PasswordField
				{...registerInput('confirmPassword', {
					...REQUIRED_VALIDATION('Подтвердить пароль'),
					validate: (value) =>
						value === watch('password') ? true : 'Пароли не совпадают.',
				})}
				className={styles.password}
				placeholder="Подтвердить пароль"
				error={errors.confirmPassword}
			/>
			{loading ? (
				<MiniLoader className={styles.loader} />
			) : remainingTime ? (
				<div className={styles.submit}>{formatTimer(remainingTime)}</div>
			) : (
				<button className={styles.submit}>Зарегистрироваться</button>
			)}
		</form>
	)
}

export default AuthRegister
