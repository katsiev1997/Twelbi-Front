import { PUBLIC_PAGES } from '@/constants/url.constants'
import type { IBreadcrumb } from '@/shared/interfaces/common/breadcrumb/breadcrumb.interface'
import type { IClassName } from '@/shared/interfaces/common/class-name/class-name.interface'
import cn from 'clsx'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import Container from '../../common/container/Container'
import Section from '../../common/section/Section'
import List from '../list/List'
import styles from './Breadcrumb.module.scss'

const Breadcrumb: FC<IBreadcrumb & IClassName> = ({
	items,
	className,
	listClassName,
	itemClassName,
	buttonClassName,
	label = 'В каталог',
	mobileLabel,
	isButtonMobile = false,
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
					<Link
						className={cn(styles.catalog, !isButtonMobile && styles.notHidden)}
						href={PUBLIC_PAGES.CATALOG}
					>
						<Undo2 />
						<span
							className={cn(styles.label, {
								[styles.hasMobile]: mobileLabel,
							})}
						>
							{label}
						</span>
						{mobileLabel && (
							<span className={styles.mobileLabel}>{mobileLabel}</span>
						)}
					</Link>
				</div>
			</Container>
		</Section>
	)
}

export default Breadcrumb
