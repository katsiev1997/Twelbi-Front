import { EnumCookies } from '@/constants/enums.constants'
import { IS_PRODUCTION } from '@/constants/global.constants'
import type { TypeAuthUser } from '@/shared/types/auth/auth.type'
import { getIronSession, type IronSessionData } from 'iron-session'
import { cookies } from 'next/headers'

export const sessionOptions = {
	password: process.env.IRON_PASSWORD as string,
	cookieName: EnumCookies.SESSION,
	cookieOptions: {
		secure: IS_PRODUCTION,
		httpOnly: false,
	},
}

declare module 'iron-session' {
	interface IronSessionData {
		user?: TypeAuthUser
	}
}

const getSession = async (req: Request, res: Response) => {
	const session = await getIronSession<IronSessionData>(
		req,
		res,
		sessionOptions
	)
	return session
}

const getServerActionSession = async () => {
	const session = await getIronSession<IronSessionData>(
		cookies(),
		sessionOptions
	)
	return session
}

export { getServerActionSession, getSession }
