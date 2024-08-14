import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import Heading from '@/components/ui/elements/heading/Heading'
import type { IContent } from '@/shared/interfaces/common/content/content.interface'
import cn from 'clsx'
import type { FC } from 'react'
import styles from './Content.module.scss'

const Content: FC<IContent> = ({ heading, content, className }) => {
	return (
		<Section className={cn(styles.section, className && className)}>
			<Container>
				<div className={styles.content}>
					<Heading {...heading} />
					<div className={styles.fill}>{content}</div>
				</div>
			</Container>
		</Section>
	)
}

export default Content
