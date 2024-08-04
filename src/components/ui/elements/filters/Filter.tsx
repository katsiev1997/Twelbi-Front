import Picture from '@/components/ui/common/picture/Picture'
import { useOutside } from '@/hooks/helpers/outside/useOutside'
import type { IFilter } from '@/shared/interfaces/common/filter/filter.interface'
import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from './Filter.module.scss'

const Filter: FC<IFilter> = ({
	isSearchable,
	isMulti,
	image,
	label,
	options,
	className,
}) => {
	const [isShow, setIsShow] = useState(false)
	const [selectedOptions, setSelectedOptions] = useState([''])

	const { ref } = useOutside<HTMLDivElement>(() => setIsShow(false))

	return (
		<div className={cn(styles.filter, className && className)} ref={ref}>
			<button
				className={cn(styles.toggle, {
					[styles.active]: isShow,
				})}
				onClick={() => setIsShow(!isShow)}
			>
				<Picture src={image.src} alt={image.alt} />
				{!isMulti && selectedOptions[0] ? selectedOptions[0] : label}
				<ChevronDown />
			</button>
			<div
				className={cn(styles.fill, {
					[styles.active]: isShow,
				})}
			>
				<ul className={styles.list}>
					{options.map((option, index) => (
						<li className={styles.item} key={index}>
							<button
								className={cn(styles.button, {
									[styles.active]: selectedOptions.includes(option),
								})}
								onClick={() =>
									setSelectedOptions((prev) =>
										isMulti ? [...prev, option] : [option]
									)
								}
							>
								<div className={styles.radio}>
									<span></span>
								</div>
								{option}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Filter
