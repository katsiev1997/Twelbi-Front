import { EnumCookies } from '@/constants/enums.constants'
import { cookies } from 'next/headers'

export class CookieService {
	static getServerCookies() {
		const allCookies = cookies().getAll()

		const requiredCookieNames = [
			EnumCookies.ACCESS_TOKEN,
			EnumCookies.REFRESH_TOKEN,
		] as string[]

		const credentials = Object.fromEntries(
			allCookies
				.filter((cookie) => requiredCookieNames.includes(cookie.name))
				.map((cookie) => [cookie.name, cookie.value])
		)

		return {
			cookie: Object.entries(credentials)
				.map(([name, value]) => `${name}=${value}`)
				.join('; '),
		}
	}
}
