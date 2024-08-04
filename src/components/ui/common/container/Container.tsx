import type { IClassName } from '@/shared/interfaces/common/class-name/class-name.interface'
import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import styles from './Container.module.scss'

const Container: FC<PropsWithChildren<IClassName>> = ({
	children,
	className,
}) => {
	return (
		<div className={cn(styles.container, className && className)}>
			{children}
		</div>
	)
}

export default Container
