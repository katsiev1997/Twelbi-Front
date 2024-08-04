import logoMobile from '@/assets/images/global/logo-mobile.png'
import logo from '@/assets/images/global/logo.png'
import { SITE_NAME } from '@/constants/seo.constants'
import type { IClassName } from '@/shared/interfaces/common/class-name/class-name.interface'
import Link from 'next/link'
import type { FC } from 'react'
import Picture from '../../common/picture/Picture'

const Logo: FC<IClassName> = ({ className }) => {
	return (
		<Link href="/" className={className && className}>
			<Picture
				src={logo.src}
				sources={[
					{
						src: logoMobile.src,
						resolution: 550,
					},
				]}
				alt={SITE_NAME}
			/>
		</Link>
	)
}

export default Logo
