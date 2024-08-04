import Field from '@/components/ui/elements/form/field/Field'
import { EMAIL_VALIDATION } from '@/components/ui/elements/form/validation/form.validation'
import MiniLoader from '@/components/ui/elements/loaders/mini/MiniLoader'
import { useJwtAuthVerification } from '@/hooks/mutations/auth/jwt/useJwtVerification'
import { useAuthVerificationStore } from '@/store/timer/timer.store'
import { formatTimer } from '@/utils/formats/format-timer.util'
import type { FC } from 'react'
import styles from '../../Auth.module.scss'

const AuthLost: FC = () => {
	const { registerInput, handleSubmit, onSubmit, errors, loading } =
		useJwtAuthVerification()
	const { remainingTime } = useAuthVerificationStore()

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<Field
				{...registerInput('email', EMAIL_VALIDATION())}
				className={styles.field}
				placeholder="E-mail"
				error={errors.email}
			/>
			{loading ? (
				<MiniLoader className={styles.loader} />
			) : remainingTime ? (
				<div className={styles.submit}>{formatTimer(remainingTime)}</div>
			) : (
				<button className={styles.submit}>Отправить</button>
			)}
		</form>
	)
}

export default AuthLost
