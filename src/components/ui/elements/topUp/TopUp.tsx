'use client'

import type { ButtonHTMLAttributes, FC } from 'react'

const TopUp: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	onClick,
	...rest
}) => {
	return <button {...rest} />
}

export default TopUp
