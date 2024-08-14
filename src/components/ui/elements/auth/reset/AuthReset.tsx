'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import { useJwtAuthReset } from '@/hooks/mutations/auth/jwt/useJwtReset'
import type { IAuthReset } from '@/shared/interfaces/api/auth/auth.interface'
import type { FC } from 'react'
import PasswordField from '../../form/password/PasswordField'
import { LENGTH_VALIDATION } from '../../form/validation/form.validation'
import styles from '../Auth.module.scss'

const AuthReset: FC<IAuthReset> = (rest) => {
	const { registerInput, handleSubmit, onSubmit, errors, loading } =
		useJwtAuthReset(rest)

	return (
		<Section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.fill}>
						<h1 className={styles.heading}>Сбросить пароль</h1>
						<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
							<PasswordField
								{...registerInput(
									'newPassword',
									LENGTH_VALIDATION('Новый пароль', 6)
								)}
								className={styles.field}
								placeholder="Новый пароль"
								error={errors.newPassword}
							/>
							<button className={styles.submit} disabled={loading}>
								Подтвердить
							</button>
						</form>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default AuthReset
