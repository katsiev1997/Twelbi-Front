'use client'

import { useBalanceTopUp } from '@/hooks/mutations/balance/useBalanceTopUp.hook'
import { useState, type ButtonHTMLAttributes, type FC } from 'react'
import Modal from '../../templates/modal/Modal'
import Field from '../form/field/Field'
import {
	MIN_VALIDATION,
	NUMBER_PATTERN_VALIDATION,
} from '../form/validation/form.validation'
import styles from './TopUp.module.scss'

const TopUp: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	onClick,
	...rest
}) => {
	const [isShow, setIsShow] = useState(false)
	const { registerInput, errors, handleSubmit, onSubmit } = useBalanceTopUp()

	return (
		<>
			<button {...rest} onClick={() => setIsShow(!isShow)} />
			{isShow && (
				<Modal heading="Пополнить баланс" closeModal={() => setIsShow(false)}>
					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Field
							{...registerInput('amount', {
								...MIN_VALIDATION(100),
								...NUMBER_PATTERN_VALIDATION(1000),
							})}
							className={styles.field}
							placeholder="Итого к оплате"
							error={errors.amount}
						/>
						<button className={styles.submit}>Оплатить</button>
					</form>
				</Modal>
			)}
		</>
	)
}

export default TopUp
