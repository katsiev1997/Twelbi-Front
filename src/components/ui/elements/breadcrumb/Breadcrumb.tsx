import type { IList } from '@/shared/interfaces/common/list/list.interface'
import cn from 'clsx'
import type { FC } from 'react'
import Container from '../../common/container/Container'
import Section from '../../common/section/Section'
import List from '../list/List'
import styles from './Breadcrumb.module.scss'

const Breadcrumb: FC<IList> = ({
	items,
	listClassName,
	itemClassName,
	buttonClassName,
}) => {
	return (
		<Section>
			<Container>
				<List
					items={items}
					listClassName={cn(styles.list, listClassName && listClassName)}
					itemClassName={cn(styles.item, itemClassName && itemClassName)}
					buttonClassName={cn(
						styles.button,
						buttonClassName && buttonClassName
					)}
				/>
			</Container>
		</Section>
	)
}

export default Breadcrumb
