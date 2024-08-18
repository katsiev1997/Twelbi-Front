import { anchorBrRegex, brRegex } from '../regex/br.regex'
import { anchorUrlRegex, urlRegex } from '../regex/url.regex'

export const formatText = (text: string) => {
	return text
		.replace(brRegex, '<br>')
		.replace(/(<br>){3,}/g, '<br><br>')
		.replace(urlRegex, (url) => `<a href="${url}" target="_blank">${url}</a>`)
}

export const formatFromText = (text: string) => {
	return text
		.replace(anchorBrRegex, '\n')
		.replace(anchorUrlRegex, (_, group) => {
			const urlMatch = group.match(urlRegex)
			return urlMatch ? urlMatch[0] : group
		})
}
