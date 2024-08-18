import {
	type AnnouncementCard,
	AnnouncementsDocument,
	type OrderInput,
	type ProductInput,
	type ProductQueryInput,
	useAnnouncementByIdQuery,
	useAnnouncementsQuery,
	useDeleteProductMutation,
	useEditAnnouncementMutation,
	usePlaceOrderMutation,
} from '@/__generated__/output'
import { useSearchFilter } from '@/hooks/helpers/filters/useSearchFilter'
import { getKeys } from '@/utils/helpers/get-keys.util'
import {
	type Dispatch,
	type SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useSelectCategories } from '../category/useSelectCategories.hook'

export const useAnnouncements = (
	query: ProductQueryInput,
	setBalance: Dispatch<SetStateAction<number | undefined>>
) => {
	const { searchTerm, debounceSearch, handleSearch } = useSearchFilter()
	const [modal, setModal] = useState({
		isShow: false,
		type: 'create' || 'update',
		id: null as number | null,
	})

	const [checked, setChecked] = useState<number[]>([])
	const [announcements, setAnnouncements] = useState<AnnouncementCard[]>([])
	const [page, setPage] = useState(1)

	const scrollRef = useRef<HTMLDivElement>(null)

	const openCreateModal = () =>
		setModal({
			isShow: true,
			type: 'create',
			id: null,
		})
	const closeCreateModal = () =>
		setModal({
			isShow: false,
			type: 'create',
			id: null,
		})
	const openUpdateModal = (id: number) =>
		setModal({
			isShow: true,
			type: 'update',
			id,
		})
	const closeUpdateModal = (id: number) =>
		setModal({
			isShow: false,
			type: 'update',
			id,
		})

	const form = useForm<ProductInput>({
		mode: 'onChange',
		defaultValues: {
			prices: [
				{
					price: '1000',
					minQuantity: '10',
				},
			],
			imagesPaths: [
				{
					url: '',
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

	const [editAnnouncement] = useEditAnnouncementMutation({
		fetchPolicy: 'no-cache',
	})
	const [deleteAnnouncement] = useDeleteProductMutation({
		fetchPolicy: 'no-cache',
	})
	const [placeOrderMutate] = usePlaceOrderMutation({
		fetchPolicy: 'no-cache',
		onError: ({ message }) => {
			toast.error(message)
		},
	})

	const placeOrder = (
		data: OrderInput,
		price: number,
		closeModal: () => void
	) =>
		placeOrderMutate({
			variables: {
				data,
			},
			onCompleted: ({ placeOrder }) => {
				setAnnouncements((prev) => {
					return prev.map((item) => {
						if (item.id !== data.productId) {
							return item
						}

						return {
							...item,
							orders: [...item.orders, placeOrder],
						}
					})
				})
				setBalance((prev) => prev && (prev - price < 0 ? prev : prev - price))
				closeModal()
			},
		})
	const { categories } = useSelectCategories()
	const { data, error } = useAnnouncementsQuery({
		fetchPolicy: 'no-cache',
		variables: {
			query: {
				...query,
				searchTerm: debounceSearch,
			},
		},
	})

	useEffect(() => {
		const count = data?.announcements.count || 0
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
	}, [page])

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

	const get = (id: number) => {
		const { loading, error } = useAnnouncementByIdQuery({
			fetchPolicy: 'no-cache',
			variables: {
				id,
			},
			onCompleted: ({ announcementById }) => {
				const { category, posterPath, videoPath, ...response } =
					announcementById
				console.log(announcementById)
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
		editAnnouncement({
			variables: {
				data,
			},
			onCompleted: ({ editAnnouncement }) => {
				setAnnouncements((prev) => {
					const newData = [editAnnouncement, ...prev]

					return newData.slice(0, query.perPage || 15)
				})
				closeCreateModal()
				form.reset()
			},
			onError: ({ message }) => {
				toast.error(message)
			},
		})
	}

	const update = (announcementId: number, data: ProductInput) => {
		editAnnouncement({
			variables: {
				data,
				announcementId,
			},
			onCompleted: ({ editAnnouncement }) => {
				setAnnouncements((prev) => {
					const newData = prev.map((item) =>
						item.id === announcementId ? editAnnouncement : item
					)

					return newData.slice(0, query.perPage || 15)
				})
				closeUpdateModal(announcementId)
			},
			onError: ({ message }) => {
				toast.error(message)
			},
		})
	}

	const remove = (id: number) => {
		deleteAnnouncement({
			refetchQueries: [AnnouncementsDocument],
			variables: {
				id,
			},
			onCompleted: () => {
				toast.success('Продукт успешно удален.')
			},
			onError: () => {
				toast.error('Возникла ошибка.Пожалуйста попробуйте позже.')
			},
		})
	}

	return {
		categories,
		get,
		create,
		update,
		remove,
		toggle,
		checked,
		setChecked,
		scrollRef,
		announcements,
		error,
		form,
		pricesForm,
		imagesForm,
		openCreateModal,
		closeCreateModal,
		openUpdateModal,
		closeUpdateModal,
		modal,
		searchTerm,
		handleSearch,
		placeOrder,
	}
}
