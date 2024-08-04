import type { IPagination } from '@/shared/interfaces/common/pagination/pagination.interface'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

export const usePagination = ({
	page,
	pagesCount,
	step,
	searchParams,
	setPage,
}: IPagination) => {
	const { push } = useRouter()
	const isMobile = useMediaQuery({ maxWidth: 550 })
	const isScrollBlocked = useRef(false)

	let pages = []

	const maxVisiblePages = isMobile ? 3 : 7
	let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2))
	let endPage = Math.min(pagesCount, startPage + maxVisiblePages - 1)

	if (endPage - startPage < maxVisiblePages - 1) {
		startPage = Math.max(1, endPage - maxVisiblePages + 1)
	}

	if (startPage > 2) {
		pages.push('...')
	}

	for (let i = startPage; i <= endPage; i++) {
		pages.push(i)
	}

	if (endPage < pagesCount - 1) {
		pages.push('...')
	}

	useEffect(() => {
		if (pagesCount <= 1) return

		const handleScroll = () => {
			if (isScrollBlocked.current) return

			const { scrollTop, clientHeight, scrollHeight } = document.documentElement
			if (scrollTop + clientHeight >= scrollHeight * 0.9) {
				if (page % step !== 0) {
					setPage((prev) => prev + 1)
				}
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [page])

	const updateUrlParameters = (newPage: number) => {
		const params = new URLSearchParams(searchParams?.toString())
		const displayPage = Math.floor((newPage - 1) / step) + 1
		params.set('page', String(displayPage))
		push('?' + params.toString())
	}

	const goTo = (pageNumber: number) =>
		setPage(() => {
			updateUrlParameters(pageNumber)

			isScrollBlocked.current = true

			setTimeout(() => {
				isScrollBlocked.current = false
			}, 1000)

			return pageNumber
		})

	const goToPrev = () =>
		setPage((prev) => {
			const currentPage = prev
			const currentRangeStart = Math.floor((currentPage - 1) / step) * step + 1

			let newPage = currentRangeStart - step
			if (newPage < 1) newPage = 1

			updateUrlParameters(newPage)

			isScrollBlocked.current = true

			setTimeout(() => {
				isScrollBlocked.current = false
			}, 1000)

			return newPage
		})

	const goToNext = () =>
		setPage((prev) => {
			const currentPage = prev
			const currentRangeStart = Math.floor((currentPage - 1) / step) * step + 1
			const newPage = currentRangeStart + step

			updateUrlParameters(newPage)

			isScrollBlocked.current = true

			setTimeout(() => {
				isScrollBlocked.current = false
			}, 1000)

			return newPage
		})

	return {
		pages,
		goTo,
		goToPrev,
		goToNext,
	}
}
