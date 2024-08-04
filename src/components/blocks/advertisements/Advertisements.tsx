'use client'

import { AdvertisingType } from '@/__generated__/output'
import '@/assets/styles/slick.scss'
import Advertising from '@/components/parts/advertising/Advertising'
import Container from '@/components/ui/common/container/Container'
import Section from '@/components/ui/common/section/Section'
import type { IAdvertisements } from '@/shared/interfaces/api/advertising/advertising.interface'
import { getAdvertisingClass } from '@/utils/helpers/get-advertising-class.util'
import cn from 'clsx'
import { useEffect, useState, type FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import styles from './Advertisements.module.scss'

const Advertisements: FC<IAdvertisements> = ({
	wrapperClassName,
	listClassName,
	advertisingClassName,
	advertisements,
}) => {
	const [isMounted, setIsMounted] = useState(false)
	const isNotDesktop = useMediaQuery({ maxWidth: 550 })

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return (
		<Section
			className={cn(styles.section, wrapperClassName && wrapperClassName)}
		>
			<Container>
				{isNotDesktop ? (
					<Slider
						dots
						speed={500}
						slidesToShow={1}
						slidesToScroll={1}
						arrows={false}
					>
						{advertisements.map((advertising, index) => (
							<Advertising
								key={index}
								className={advertisingClassName && advertisingClassName}
								advertising={advertising}
							/>
						))}
					</Slider>
				) : (
					<div
						className={cn(
							styles.advertisements,
							listClassName && listClassName
						)}
					>
						{advertisements.map((advertising, index) => (
							<Advertising
								key={index}
								className={cn(
									getAdvertisingClass(AdvertisingType.Card),
									advertisingClassName && advertisingClassName
								)}
								advertising={advertising}
							/>
						))}
					</div>
				)}
			</Container>
		</Section>
	)
}

export default Advertisements
