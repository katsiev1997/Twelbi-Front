import { useJwtAuthLogin } from '@/hooks/mutations/auth/jwt/useJwtAuthLogin'
import type { FC } from 'react'
import styles from '../Auth.module.scss'
import Field from '../../form/field/Field'
import PasswordField from '../../form/password/PasswordField'
import { LENGTH_VALIDATION } from '../../form/validation/form.validation'

const AuthLogin: FC = () => {
	const { registerInput, handleSubmit, onSubmit, errors, loading } =
		useJwtAuthLogin()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Field
				{...registerInput('login', LENGTH_VALIDATION('Логин', 3, 20))}
				className={styles.field}
				placeholder="Логин"
				error={errors.login}
			/>
			<PasswordField
				{...registerInput('password', LENGTH_VALIDATION('Пароль', 6))}
				className={styles.password}
				placeholder="Пароль"
				error={errors.password}
			/>
			<button className={styles.submit} disabled={loading}>
				Войти
			</button>
		</form>
	)
}

export default AuthLogin
