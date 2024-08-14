import type { TypeAuth } from '@/shared/types/auth/auth.type'

export interface IAuthReset {
	token: string
	changeType: (type: TypeAuth) => void
}
