export const formatNumber = (price?: number | null) => {
	return price?.toLocaleString('ru-RU')
}
