import type { IField } from '@/shared/interfaces/common/form/form.interface'
import cn from 'clsx'
import { Eye, EyeOff } from 'lucide-react'
import { forwardRef, useState } from 'react'
import globalStyles from '../Form.module.scss'
import styles from './PasswordField.module.scss'

const PasswordField = forwardRef<HTMLInputElement, IField>(
	({ className, label, error, stylize = 'default', ...rest }, ref) => {
		const [isShow, setIsShow] = useState(false)

		return (
			<div className={cn(globalStyles.field, className && className)}>
				{label && <label className={globalStyles.label}>{label}</label>}
				{error && <span className={globalStyles.error}>{error.message}</span>}
				<div className={styles.box}>
					<input
						ref={ref}
						className={
							stylize === 'default'
								? cn(styles.password, globalStyles.input)
								: undefined
						}
						type={isShow ? 'text' : 'password'}
						{...rest}
					/>
					<button
						className={styles.show}
						onClick={() => setIsShow(!isShow)}
						type="button"
					>
						{isShow ? <EyeOff /> : <Eye />}
					</button>
				</div>
			</div>
		)
	}
)

export default PasswordField
