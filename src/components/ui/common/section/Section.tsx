import cn from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import styles from './Section.module.scss'
import type { IClassName } from '@/shared/interfaces/common/class-name/class-name.interface'

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
