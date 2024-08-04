export const formatPhone = (number: string) => {
	const digits = number.replace(/\D/g, '')

	const formattedNumber = `+7 ${digits.slice(1, 4)} ${digits.slice(
		4,
		7
	)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`

	return formattedNumber
}
