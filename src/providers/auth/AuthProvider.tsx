'use client'

import { useUser } from '@/hooks/queries/server/user/useUser.hook'
import type { ISessionUser } from '@/shared/interfaces/api/user/user.interface'
import type { FC } from 'react'

const AuthProvider: FC<ISessionUser> = ({ user }) => {
	useUser(user)

	return <></>
}

export default AuthProvider
