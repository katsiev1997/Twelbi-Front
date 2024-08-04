import { useOutside } from '@/hooks/helpers/outside/useOutside'
import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import globalStyles from '../Form.module.scss'
import styles from './Select.module.scss'
import type { ISelect } from './interface/select.interface'

function Select<K>({ data, onChange, value, label, className }: ISelect<K>) {
	const [isOpen, setIsOpen] = useState(false)
	const { ref } = useOutside<HTMLDivElement>(() => setIsOpen(false))

	return (
		<div
			ref={ref}
			className={cn(globalStyles.field, styles.wrapper, className && className)}
		>
			{label && <label className={globalStyles.label}>{label}</label>}
			<div className={styles.select}>
				<button
					className={cn(styles.opener, {
						[styles.active]: isOpen,
					})}
					onClick={() => setIsOpen(!isOpen)}
				>
					{value?.label || 'Выбрать'}
					<ChevronDown />
				</button>
				{isOpen && (
					<ul className={styles.list}>
						{data
							.filter((item) => item.key !== value?.key)
							.map((item, index) => (
								<li key={index} className={styles.item}>
									<button
										className={styles.button}
										onClick={() => {
											onChange(item)
											setIsOpen(false)
										}}
										disabled={item.key === value?.key}
									>
										{item.label}
									</button>
								</li>
							))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Select
