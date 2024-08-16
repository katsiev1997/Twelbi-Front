'use client'

import { useUser } from '@/hooks/queries/server/user/useUser.hook'
import type { FC } from 'react'

const AuthProvider: FC = () => {
	useUser()

	return <></>
}

export default AuthProvider
