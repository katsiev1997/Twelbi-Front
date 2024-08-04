import type { IButton } from '@/shared/interfaces/common/form/form.interface'
import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	buttonClassName,
	wrapperClassName,
	...rest
}) => {
	return (
		<div className={cn(styles.field, wrapperClassName && wrapperClassName)}>
			<button
				className={cn(styles.button, buttonClassName && buttonClassName)}
				{...rest}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
