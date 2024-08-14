'use client'

import { useLogoutClient } from '@/hooks/mutations/auth/useLogout'
import type { ButtonHTMLAttributes, FC } from 'react'

const Logout: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...rest }) => {
	const { logout } = useLogoutClient()

	return <button {...rest} onClick={logout} />
}

export default Logout
