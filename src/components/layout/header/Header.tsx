import catalogIcon from '@/assets/images/icons/catalog.png'
import gridIcon from '@/assets/images/icons/grid.png'
import Container from '@/components/ui/common/container/Container'
import Picture from '@/components/ui/common/picture/Picture'
import Logo from '@/components/ui/elements/logo/Logo'
import { PUBLIC_PAGES } from '@/constants/url.constants'
import Link from 'next/link'
import type { FC } from 'react'
import HeaderButtons from './buttons/HeaderButtons'
import styles from './Header.module.scss'
import HeaderSearch from './search/HeaderSearch'

const Header: FC = () => {
	return (
		<header>
			<Container>
				<div className={styles.wrapper}>
					<div className={styles.fill}>
						<Logo className={styles.logo} />
						<Link href={PUBLIC_PAGES.CATALOG} className={styles.catalog}>
							<Picture
								src={gridIcon.src}
								sources={[
									{
										src: catalogIcon.src,
										resolution: 900,
									},
								]}
								alt="Каталог"
							/>
							Каталог
						</Link>
						<HeaderSearch />
					</div>
					<HeaderButtons />
				</div>
			</Container>
		</header>
	)
}

export default Header
