import type { SessionUser } from '@/__generated__/output'

export type TypeAuth = 'login' | 'register' | 'lost' | 'reset'

export type TypeAuthUser = SessionUser | null
