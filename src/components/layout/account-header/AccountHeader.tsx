import accountIcon from '@/assets/images/icons/account.png'
import logoutIcon from '@/assets/images/icons/logout.png'
import Container from '@/components/ui/common/container/Container'
import Picture from '@/components/ui/common/picture/Picture'
import Logo from '@/components/ui/elements/logo/Logo'
import Logout from '@/components/ui/elements/logout/Logout'
import { USER_PAGES } from '@/constants/url.constants'
import cn from 'clsx'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './AccountHeader.module.scss'

const AccountHeader: FC = () => {
	return (
		<header>
			<Container>
				<div className={styles.wrapper}>
					<Logo className={styles.logo} />
					<div className={styles.buttons}>
						<Link
							className={cn(styles.button, styles.account)}
							href={USER_PAGES.ACCOUNT}
						>
							<Picture src={accountIcon.src} alt="Аккаунт" />
							Василий Иванович
						</Link>
						<Logout className={cn(styles.button, styles.logout)}>
							<Picture src={logoutIcon.src} alt="Выйти" />
							Выйти
						</Logout>
					</div>
				</div>
			</Container>
		</header>
	)
}

export default AccountHeader
