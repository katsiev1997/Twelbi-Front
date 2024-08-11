'use client'

import type { ButtonHTMLAttributes, FC } from 'react'

const Logout: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...rest }) => {
	return <button {...rest} />
}

export default Logout
