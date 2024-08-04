import { EnumFile } from '@/constants/enums.constants'
import type { ButtonHTMLAttributes, ChangeEvent } from 'react'
import type { DropzoneOptions } from 'react-dropzone'
import type { ControllerRenderProps, FieldError } from 'react-hook-form'
import type { Options } from 'react-select'
import type { IClassName } from '../class-name/class-name.interface'

export interface ISelectItem<K = string> {
	label: string
	key: K
}

export interface ISelect<K = string> extends IClassName {
	data: ISelectItem<K>[]
	onChange: (item: ISelectItem<K>) => void
	value?: ISelectItem<K>
	label?: string
}

interface IFieldProps extends IClassName {
	className?: string
	label?: string
	placeholder?: string
	error?: FieldError | undefined
	stylize?: 'default' | 'custom'
}

export interface IField extends IFieldProps {
	onChange: (...event: any[]) => void
}

export interface IMaskField extends IFieldProps {
	mask: string
	value: string
	onChange: (...event: any[]) => void
}

export interface IUploadField extends IFieldProps {
	buttonClassName?: string
	fileType: EnumFile
	uploadedFileName: string
	value: File
	onChange: (...event: any[]) => void
	options?: DropzoneOptions
}

export interface IToggleSwitch extends IFieldProps {
	onChange?: () => void
	isVisible: boolean
}

export interface ISearchField extends IClassName {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	wrapperClassName?: string
	buttonClassName?: string
}

export interface IReactSelectValue {
	value: number
	name: string
}

export interface IOption {
	label: string
	value: string | number
}

export interface IReactSelect extends IFieldProps {
	options: Options<IOption>
	isMulti?: boolean
	field: ControllerRenderProps<any, any>
	isLoading?: boolean
	isSearchable?: boolean
	isCreatable?: boolean
	isClearable?: boolean
	isMenuFixed?: boolean
}
