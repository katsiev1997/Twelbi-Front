'use client'

import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import type { IClassName } from '@/shared/interfaces/common/class-name/class-name.interface'
import cn from 'clsx'
import { ChevronDown } from 'lucide-react'
import { useState, type FC } from 'react'
import styles from './Info.module.scss'

// TODO: get codegen interface
export interface IInfo extends IClassName {
	info: {
		heading: string
		content: string
	}
}

const Info: FC<IInfo> = ({ info, className }) => {
	const [isShow, setIsShow] = useState(false)

	return (
		<Section className={className && className}>
			<Container>
				<div>
					<h2 className={styles.heading}>{info.heading}</h2>
					<div className={styles.fill}>
						<div
							className={cn(styles.content, {
								[styles.visible]: isShow,
							})}
							dangerouslySetInnerHTML={{ __html: info.content }}
						/>
						<div
							className={cn(styles.gradient, {
								[styles.visible]: isShow,
							})}
						/>
					</div>
					<button
						className={cn(styles.toggle, {
							[styles.toggled]: isShow,
						})}
						onClick={() => setIsShow(!isShow)}
					>
						{isShow ? 'Скрыть' : 'Раскрыть полностью'}
						<ChevronDown />
					</button>
				</div>
			</Container>
		</Section>
	)
}

export default Info
