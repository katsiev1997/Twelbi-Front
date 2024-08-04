'use client'

import type { ICall } from '@/shared/interfaces/common/call/call.interface'
import { useState, type FC } from 'react'
import Modal from '../../templates/modal/Modal'

const Call: FC<ICall> = ({ label = 'Обратная связь', className }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<>
			<button
				className={className && className}
				onClick={() => setIsShow(true)}
			>
				{label}
			</button>
			{isShow && <Modal heading={label} closeModal={() => setIsShow(false)} />}
		</>
	)
}

export default Call
