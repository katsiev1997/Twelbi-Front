import List from '@/components/ui/elements/list/List'
import type { FC } from 'react'
import styles from '../Footer.module.scss'
import { FOOTER_MENU_DATA } from './data/expanded-footer-menu.data'

const FooterBox: FC = () => {
	return (
		<div className={styles.box}>
			<h3 className={styles.copyright}>Twelbi.ru © 2024</h3>
			<p className={styles.slogan}>Портал поиска поставщиков для бизнеса</p>
			<List items={FOOTER_MENU_DATA} listClassName={styles.menu} />
		</div>
	)
}

export default FooterBox
