import { useEffect, useRef } from 'react'

export const useOutside = <T extends HTMLElement>(close: () => void) => {
	const ref = useRef<T>(null)

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			close()
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref }
}
