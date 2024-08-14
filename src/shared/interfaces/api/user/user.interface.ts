import type { SessionUser } from '@/__generated__/output'
import type { TypeAuthUser } from '@/shared/types/auth/auth.type'

export interface IUserIsAdmin {
	isAdmin?: boolean
}

export interface IIronUser {
	iron: {
		user?: TypeAuthUser
		isProvider?: boolean
		isAdmin?: boolean
	}
}

export interface IIronUserExist {
	iron: {
		user: SessionUser
		isProvider?: boolean
		isAdmin?: boolean
	}
}

export interface ISessionUser {
	user?: TypeAuthUser
}
