import type {
	UseFormResetField,
	UseFormSetValue,
	UseFormWatch,
} from 'react-hook-form'

export const useFileUploadProps = (
	onChange: (...event: any[]) => void,
	watch: UseFormWatch<any>,
	setValue: UseFormSetValue<any>,
	resetField: UseFormResetField<any>,
	pathName: string,
	fileName: string
) => {
	const onChangeHandler = (e: any) => {
		onChange(e)
		const file = watch(pathName)
		console.log(file)

		resetField(pathName)
		setValue(fileName, file)
	}

	const value = watch(pathName) || watch(fileName)

	return {
		value,
		onChange: onChangeHandler,
	}
}
