'use client'

import SearchField from '@/components/ui/elements/form/search/SearchField'
import { useState, type FC } from 'react'
import styles from '../Header.module.scss'

const HeaderSearch: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<SearchField
			className={styles.search}
			searchTerm={searchTerm}
			handleSearch={({ target }) => setSearchTerm(target.value)}
			placeholder={'Поиск поставщиков'}
		/>
	)
}

export default HeaderSearch
