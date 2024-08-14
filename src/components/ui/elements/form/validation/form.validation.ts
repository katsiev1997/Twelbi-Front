import { validEmail } from '@/utils/regex/email.regex'
import { stripHtml } from 'string-strip-html'

export const REQUIRED_VALIDATION = (name: string) => ({
	required: `${name} обязательно.`,
})

export const LENGTH_VALIDATION = (
	name: string,
	minLength: number,
	maxLength?: number
) => ({
	required: `${name} обязательно.`,
	minLength: {
		value: minLength,
		message: `Минимальная длина должна быть не менее ${minLength} символов.`,
	},
	...(maxLength && {
		maxLength: {
			value: maxLength,
			message: `Максимальная длина должна быть не больше ${maxLength} символов.`,
		},
	}),
})

export const MIN_VALIDATION = (min: number) => ({
	min: {
		value: min,
		message: `Минимум - ${min}.`,
	},
})

export const MAX_VALIDATION = (max: number) => ({
	max: {
		value: max,
		message: `Максимум - ${max}.`,
	},
})

export const EMAIL_VALIDATION = () => ({
	required: 'E-mail обязательно.',
	pattern: {
		value: validEmail,
		message: 'Пожалуйста, введите корректный E-mail.',
	},
})

export const NUMBER_PATTERN_VALIDATION = (number: number) => ({
	pattern: {
		value: /^\d+$/,
		message: `Введите число в формате, например: ${number}`,
	},
})

export const EDITOR_VALIDATION = (
	name: string,
	minLength?: number,
	maxLength?: number
) => ({
	validate: {
		required: (v: string) =>
			(v && stripHtml(v).result.length > 0) || `${name} обязательно.`,
	},
})

export const PHONE_VALIDATION = (name: string) => ({
	required: `${name} обязательно`,
	pattern: {
		value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
		message: 'Пожалуйста, введите корректный номер телефона.',
	},
})
