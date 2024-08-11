'use client'

import type { ICheck } from '@/shared/interfaces/common/check/check.interface'
import cn from 'clsx'
import { Check as CheckIcon } from 'lucide-react'
import type { FC } from 'react'
import styles from './Check.module.scss'

const Check: FC<ICheck> = ({ isChecked, toggle, className }) => {
	return (
		<button
			type="button"
			className={cn(styles.check, className && className)}
			onClick={toggle}
		>
			{isChecked && <CheckIcon />}
		</button>
	)
}

export default Check
