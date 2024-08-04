import type { IField } from '@/shared/interfaces/common/form/form.interface'
import cn from 'clsx'
import { forwardRef } from 'react'
import globalStyles from '../Form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ className, label, error, stylize = 'default', ...rest }, ref) => {
		return (
			<div className={cn(globalStyles.field, className && className)}>
				{label && <label className={globalStyles.label}>{label}</label>}
				{error && <span className={globalStyles.error}>{error.message}</span>}
				<input
					ref={ref}
					className={stylize === 'default' ? globalStyles.input : undefined}
					{...rest}
				/>
			</div>
		)
	}
)

export default Field
