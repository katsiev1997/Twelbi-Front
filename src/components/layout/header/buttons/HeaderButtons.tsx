import loginIcon from '@/assets/images/icons/login.png'
import mapIcon from '@/assets/images/icons/map.png'
import Picture from '@/components/ui/common/picture/Picture'
import Auth from '@/components/ui/elements/auth/Auth'
import Logout from '@/components/ui/elements/logout/Logout'
import { USER_PAGES } from '@/constants/url.constants'
import { COUNTRIES_DATA } from '@/data/countries.data'
import { getUser } from '@/server/auth/get-server-session'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'
import styles from '../Header.module.scss'

const HeaderButtons: FC = async () => {
	const user = await getUser()

	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<Picture src={mapIcon.src} alt="Карта" />
				Москва
				<ChevronDown />
				<ul className={styles.countries}>
					{COUNTRIES_DATA.map((country) => (
						<li className={styles.country} key={country}>
							<Link href="/">{country}</Link>
						</li>
					))}
				</ul>
			</li>
			<li className={styles.item}>
				{user ? (
					<>
						<Link className={styles.login} href={USER_PAGES.ACCOUNT}>
							<Picture src={loginIcon.src} alt="Войти" />
							Профиль
						</Link>
						<Logout className={styles.logout}>Выйти</Logout>
					</>
				) : (
					<Auth className={styles.login}>
						<Picture src={loginIcon.src} alt="Войти" />
						Войти
					</Auth>
				)}
			</li>
		</ul>
	)
}

export default HeaderButtons
