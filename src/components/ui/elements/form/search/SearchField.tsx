import { PUBLIC_PAGES } from '@/constants/url.constants'
import { useOutside } from '@/hooks/helpers/outside/useOutside'
import type { ISearchField } from '@/shared/interfaces/common/form/form.interface'
import cn from 'clsx'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, type FC } from 'react'
import styles from './SearchField.module.scss'

const SearchField: FC<ISearchField> = ({
	className,
	searchTerm,
	handleSearch,
	placeholder,
}) => {
	const [isShow, setIsShow] = useState(false)
	const { push, refresh } = useRouter()

	const { ref } = useOutside<HTMLDivElement>(() => setIsShow(false))

	const handleSubmit = () => {
		push(PUBLIC_PAGES.SEARCH(searchTerm))
		refresh()
	}

	return (
		<>
			<div className={cn(styles.search, className && className)} ref={ref}>
				<input
					className={cn(styles.input, {
						[styles.active]: isShow,
					})}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleSubmit()
						}
					}}
					onChange={handleSearch}
					value={searchTerm}
					placeholder={placeholder}
				/>
				<button className={styles.mobileBtn} onClick={() => setIsShow(!isShow)}>
					<Search />
					<span>Поиск</span>
				</button>
				<button className={styles.button} onClick={handleSubmit}>
					<Search />
					<span>Поиск</span>
				</button>
			</div>
		</>
	)
}

export default SearchField
