import type { IClassName } from '@/shared/interfaces/class-name/class-name.interface'
import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import styles from './Section.module.scss'

const Section: FC<PropsWithChildren<IClassName>> = ({
	children,
	className,
}) => {
	return (
		<section className={cn(styles.section, className && className)}>
			{children}
		</section>
	)
}

export default Section
