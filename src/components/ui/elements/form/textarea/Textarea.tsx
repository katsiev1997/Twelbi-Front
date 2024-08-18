import type { ITextarea } from '@/shared/interfaces/common/form/form.interface'
import { formatFromText, formatText } from '@/utils/formats/format-text.util'
import cn from 'clsx'
import { forwardRef, type ChangeEvent } from 'react'
import globalStyles from '../Form.module.scss'

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
	({ className, label, error, value, onChange, ...rest }, ref) => {
		const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
			const text = e.target.value
			onChange({ target: { value: formatText(text) } })
		}

		return (
			<div className={cn(globalStyles.field, className && className)}>
				{label && <label className={globalStyles.label}>{label}</label>}
				{error && <span className={globalStyles.error}>{error.message}</span>}
				<textarea
					ref={ref}
					rows={1}
					className={globalStyles.input}
					value={formatFromText(value || '')}
					onChange={handleInput}
					{...rest}
				/>
			</div>
		)
	}
)

export default Textarea
