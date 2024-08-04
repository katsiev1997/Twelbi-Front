import Container from '@/components/ui/common/container/Container'
import List from '@/components/ui/elements/list/List'
import { SOCIAL_DATA } from '@/data/social.data'
import type { FC } from 'react'
import styles from './Footer.module.scss'
import FooterBox from './box/FooterBox'
import FooterInfo from './info/FooterInfo'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.wrapper}>
					<FooterBox />
					<FooterInfo />
					<List listClassName={styles.social} items={SOCIAL_DATA} />
				</div>
			</Container>
		</footer>
	)
}

export default Footer
