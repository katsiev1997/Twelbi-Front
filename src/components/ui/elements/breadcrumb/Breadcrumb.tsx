import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IClassName } from '@/shared/interfaces/common/class-name/class-name.interface'
import type { IList } from '@/shared/interfaces/common/list/list.interface'
import cn from 'clsx'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import Container from '../../common/container/Container'
import Section from '../../common/section/Section'
import List from '../list/List'
import styles from './Breadcrumb.module.scss'

const Breadcrumb: FC<IList & IClassName> = ({
	items,
	className,
	listClassName,
	itemClassName,
	buttonClassName,
}) => {
	return (
		<Section>
			<Container>
				<div className={cn(styles.wrapper, className && className)}>
					<List
						items={items}
						listClassName={cn(styles.list, listClassName && listClassName)}
						itemClassName={cn(styles.item, itemClassName && itemClassName)}
						buttonClassName={cn(
							styles.button,
							buttonClassName && buttonClassName
						)}
					/>
					<Link className={styles.catalog} href={PUBLIC_PAGES.CATALOG}>
						<Undo2 />В каталог
					</Link>
				</div>
			</Container>
		</Section>
	)
}

export default Breadcrumb
