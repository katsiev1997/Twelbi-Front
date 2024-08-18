'use client'

import Announcements from '@/components/blocks/announcements/Announcements'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import AccountSidebar from '@/components/ui/templates/account/sidebar/AccountSidebar'
import type { IAccount } from '@/shared/interfaces/api/brand/brand.interface'
import { useState, type FC } from 'react'
import styles from './Account.module.scss'
import AccountEdit from './edit/AccountEdit'

const Account: FC<IAccount> = ({
	searchParams,
	brand: queriedBrand,
	tariffs,
	categories,
}) => {
	const [brand, setBrand] = useState(queriedBrand)
	const [balance, setBalance] = useState(queriedBrand?.balance)
	const isEdit = searchParams && searchParams.type === 'edit'

	return (
		<Section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					{!brand || isEdit ? (
						<AccountEdit
							type={isEdit ? 'edit' : 'create'}
							categories={categories}
							brand={brand}
							setBrand={setBrand}
						/>
					) : (
						<>
							<AccountSidebar balance={balance} brand={brand} />
							<Announcements setBalance={setBalance} tariffs={tariffs} />
						</>
					)}
				</div>
			</Container>
		</Section>
	)
}

export default Account
