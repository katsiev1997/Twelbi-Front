import type { IHeading } from '@/shared/interfaces/common/heading/heading.interface'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './Heading.module.scss'

const Heading: FC<IHeading> = ({
	children,
	mobileChildren,
	variant,
	hasLine,
	button,
	label,
	isUppercase = true,
	size = 'lg',
	className,
}) => {
	const HeadingTag = variant

	if (!hasLine && !button && !label) {
		return (
			<>
				<HeadingTag
					className={cn(
						styles.title,
						mobileChildren && styles.desktopTitle,
						{ [styles.upp]: isUppercase },
						size === 'md' ? styles.md : styles.lg,
						className && className
					)}
				>
					{children}
				</HeadingTag>
				{mobileChildren && (
					<HeadingTag
						className={cn(
							styles.title,
							styles.mobileTitle,
							{ [styles.upp]: isUppercase },
							size === 'md' ? styles.md : styles.lg,
							className && className
						)}
					>
						{mobileChildren}
					</HeadingTag>
				)}
			</>
		)
	}

	return (
		<div className={cn(styles.heading, className && className)}>
			<HeadingTag
				className={cn(
					styles.title,
					mobileChildren && styles.desktopTitle,
					{ [styles.upp]: isUppercase },
					size === 'md' ? styles.md : styles.lg
				)}
			>
				{children}
			</HeadingTag>
			{mobileChildren && (
				<HeadingTag
					className={cn(
						styles.title,
						styles.mobileTitle,
						{ [styles.upp]: isUppercase },
						size === 'md' ? styles.md : styles.lg
					)}
				>
					{mobileChildren}
				</HeadingTag>
			)}
			{button && (
				<Link className={styles.button} href={button.href}>
					{button.label}
				</Link>
			)}
			{hasLine && <span className={styles.line}></span>}
			{label && <span className={styles.label}>{label}</span>}
		</div>
	)
}

export default Heading
