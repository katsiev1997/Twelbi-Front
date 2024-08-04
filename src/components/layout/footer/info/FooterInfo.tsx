import Call from '@/components/ui/elements/call/Call'
import type { FC } from 'react'
import styles from '../Footer.module.scss'

const FooterInfo: FC = () => {
	return (
		<div className={styles.info}>
			<p className={styles.text}>
				Вся информация на сайте носит информационный характер и не является
				офертой. Администрация портала выступает исключительно площадкой для
				размещения информации и никакого отношения к предоставленной информации
				не имеет.
			</p>
			<Call className={styles.call} />
		</div>
	)
}

export default FooterInfo
