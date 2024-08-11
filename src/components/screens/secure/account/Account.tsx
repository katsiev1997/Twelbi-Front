import Announcements from '@/components/blocks/announcements/Announcements'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import AccountSidebar from '@/components/ui/templates/account/sidebar/AccountSidebar'
import type { FC } from 'react'
import styles from './Account.module.scss'
import { ACCOUNT_BRAND } from './data/brand.data'

const Account: FC = () => {
	return (
		<Section>
			<Container>
				<div className={styles.wrapper}>
					<AccountSidebar brand={ACCOUNT_BRAND} />
					<Announcements />
				</div>
			</Container>
		</Section>
	)
}

export default Account
