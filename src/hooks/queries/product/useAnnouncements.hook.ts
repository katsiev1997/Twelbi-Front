import {
	type AnnouncementCard,
	ProductInput,
	type ProductQueryInput,
	useAnnouncementByIdQuery,
	useAnnouncementsQuery,
	useEditAnnouncementMutation,
} from '@/__generated__/output'
import { getKeys } from '@/utils/helpers/get-keys.util'
import { useEffect, useRef, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSelectCategories } from '../category/useSelectCategories.hook'

export const useAnnouncements = (query: ProductQueryInput) => {
	const form = useForm<ProductInput>({
		mode: 'onChange',
		defaultValues: {
			prices: [
				{
					price: '1000',
					minQuantity: '10',
				},
			],
		},
	})
	const pricesForm = useFieldArray({
		name: 'prices',
		control: form.control,
	})
	const imagesForm = useFieldArray({
		name: 'imagesPaths',
		control: form.control,
	})

	const [checked, setChecked] = useState<number[]>([])
	const [announcements, setAnnouncements] = useState<AnnouncementCard[]>([])

	const scrollRef = useRef<HTMLDivElement>(null)
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

	useEffect(() => {
		const announcements = data?.announcements.announcements
		if (announcements) {
			setAnnouncements(announcements)
		}
	}, [data])

	const toggle = (announcementId: number) => {
		setChecked((prev) =>
			prev.includes(announcementId)
				? prev.filter((id) => id !== announcementId)
				: [...prev, announcementId]
		)
	}

	const { categories } = useSelectCategories()
	const [editAnnouncements] = useEditAnnouncementMutation()

	const get = (id: number) => {
		const { loading, error } = useAnnouncementByIdQuery({
			variables: {
				id,
			},
			onCompleted: ({ announcementById }) => {
				const { category, posterPath, videoPath, ...response } =
					announcementById

				form.setValue('category', {
					name: category.name,
					value: category.id,
				})

				form.setValue('posterPath', posterPath)
				form.setValue('videoPath', videoPath)

				getKeys(response).forEach(({ key, value }) => {
					form.setValue(key, value)
				})
			},
			onError: ({ message }) => {
				toast.error(message)
			},
		})

		return {
			loading,
			error,
		}
	}

	const create = (data: ProductInput) => {
		editAnnouncements({
			variables: {
				data,
			},
			onCompleted: ({ editAnnouncement }) => {
				setAnnouncements((prev) => {
					const newData = [editAnnouncement, ...prev]

					return newData.slice(query.perPage || 15)
				})
			},
			onError: ({ message }) => {
				toast.error(message)
			},
		})
	}

	const update = (announcementId: number, data: ProductInput) => {
		editAnnouncements({
			variables: {
				data,
				announcementId,
			},
			onCompleted: ({ editAnnouncement }) => {
				setAnnouncements((prev) => {
					const newData = prev.map((item) =>
						item.id === announcementId ? editAnnouncement : item
					)

					return [editAnnouncement, ...newData].slice(0, query.perPage || 15)
				})
			},
			onError: ({ message }) => {
				toast.error(message)
			},
		})
	}

	return {
		categories,
		get,
		create,
		update,
		toggle,
		checked,
		setChecked,
		scrollRef,
		announcements,
		count: data?.announcements.count || 0,
		error,
		loading,
		form,
		pricesForm,
		imagesForm,
	}
}
