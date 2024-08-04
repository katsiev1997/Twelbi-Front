import type { IMaskField } from '@/shared/interfaces/common/form/form.interface'
import cn from 'clsx'
import { forwardRef } from 'react'
import { IMaskInput } from 'react-imask'
import globalStyles from '../Form.module.scss'

const MaskField = forwardRef<HTMLInputElement, IMaskField>(
	({ className, label, error, stylize = 'default', ...rest }, ref) => {
		return (
			<div className={cn(globalStyles.field, className && className)}>
				{label && <label className={globalStyles.label}>{label}</label>}
				{error && <p className={globalStyles.error}>{error.message}</p>}
				<IMaskInput
					ref={ref}
					type="text"
					className={globalStyles.input}
					{...rest}
				/>
			</div>
		)
	}
)

export default MaskField
