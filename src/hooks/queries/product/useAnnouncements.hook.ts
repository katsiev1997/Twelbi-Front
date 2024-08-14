import {
	type ProductQueryInput,
	useAnnouncementsQuery,
} from '@/__generated__/output'
import { useEffect, useRef, useState } from 'react'

export const useAnnouncements = (query: ProductQueryInput) => {
	const scrollRef = useRef<HTMLDivElement>()
	const [page, setPage] = useState(1)
	const { data, error, loading } = useAnnouncementsQuery({
		variables: {
			query,
		},
	})

	const count = data?.announcements.count || 0

	useEffect(() => {
		const pagesCount = Math.ceil(count / (query.perPage || 15))
		const scrollArea = scrollRef.current

		if (!scrollArea || pagesCount <= 1 || page >= pagesCount) return

		const handleScroll = () => {
			const { scrollTop, clientHeight, scrollHeight } = scrollArea
			if (scrollTop + clientHeight >= scrollHeight * 0.9) {
				setPage((prev) => prev + 1)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [page, count])

	return {
		scrollRef,
		announcements: data?.announcements.announcements || [],
		count: data?.announcements.count || 0,
		error,
		loading,
	}
}
