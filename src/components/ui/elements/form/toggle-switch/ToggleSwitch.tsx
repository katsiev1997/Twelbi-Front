'use client'

import type { IToggleSwitch } from '@/shared/interfaces/common/form/form.interface'
import cn from 'clsx'
import { type FC } from 'react'
import styles from './ToggleSwitch.module.scss'

const ToggleSwitch: FC<IToggleSwitch> = ({
	className,
	isVisible,
	onChange,
}) => {
	return (
		<div className={cn(styles.wrapper, className && className)}>
			<label
				className={cn(styles.switch, {
					[styles.checked]: isVisible,
				})}
			>
				<input
					type="checkbox"
					checked={isVisible}
					onChange={onChange}
					className={styles.input}
				/>
				<span className={cn(styles.slider, styles.round)}></span>
			</label>
		</div>
	)
}

export default ToggleSwitch
