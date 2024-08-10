import type {
	IList,
	IListItem,
} from '@/shared/interfaces/common/list/list.interface'
import Link from 'next/link'
import type { FC } from 'react'
import Picture from '../../common/picture/Picture'

const List: FC<IList> = ({
	items,
	listClassName,
	itemClassName,
	buttonClassName,
}) => {
	const renderContent = (item: IListItem) => (
		<>
			{item.icon && <item.icon />}
			{item.image && (
				<Picture
					src={item.image.src}
					width={item.image.width}
					height={item.image.height}
					alt={item.image.alt}
				/>
			)}
			{item.label}
		</>
	)

	const renderItem = (item: IListItem, index: number) => {
		const content = renderContent(item)

		return (
			<li className={itemClassName} key={index}>
				{item.onClick ? (
					<button
						className={buttonClassName}
						type="button"
						onClick={item.onClick}
					>
						{content}
					</button>
				) : item.href ? (
					<Link className={buttonClassName} href={item.href}>
						{content}
					</Link>
				) : (
					content
				)}
			</li>
		)
	}

	return <ul className={listClassName}>{items.map(renderItem)}</ul>
}

export default List
