'use client'

import galleryIcon from '@/assets/images/icons/gallery.png'
import '@/assets/styles/slick.scss'
import Picture from '@/components/ui/common/picture/Picture'
import Video from '@/components/ui/common/video/Video'
import SliderArrow from '@/components/ui/elements/slider/SliderArrow'
import type { IProduct } from '@/shared/interfaces/api/product/product.interface'
import cn from 'clsx'
import FsLightbox from 'fslightbox-react'
import { useEffect, useRef, useState, type FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'
import styles from '../ProductContent.module.scss'

const ProductContentSlider: FC<IProduct> = ({ product }) => {
	const [index, setIndex] = useState(0)
	const [isMounted, setIsMounted] = useState(false)
	const [toggler, setToggler] = useState(false)
	const [nav1, setNav1] = useState<Slider | null>(null)
	const [nav2, setNav2] = useState<Slider | null>(null)

	const sliderRef1 = useRef<Slider | null>(null)
	const sliderRef2 = useRef<Slider | null>(null)

	const isDesktop = useMediaQuery({
		minWidth: 901,
	})

	useEffect(() => {
		setIsMounted(true)
	}, [])

	useEffect(() => {
		if (sliderRef1.current && sliderRef2.current) {
			setNav1(sliderRef1.current)
			setNav2(sliderRef2.current)
		}
	}, [isMounted])

	const images = [
		product.posterPath,
		product.posterPath,
		product.posterPath,
		product.posterPath,
		product.posterPath,
		product.posterPath,
		product.posterPath,
	]

	return isMounted ? (
		<>
			<div
				className={cn(styles.slider, {
					[styles.custom]: isDesktop,
				})}
			>
				<Slider
					ref={sliderRef1}
					asNavFor={nav2 || undefined}
					infinite={false}
					slidesToShow={1}
					slidesToScroll={1}
					vertical={false}
					prevArrow={
						<SliderArrow
							customClassName={cn(styles.sliderArrow, styles.sliderPrev)}
							type="left"
						/>
					}
					nextArrow={
						<SliderArrow
							customClassName={cn(styles.sliderArrow, styles.sliderNext)}
							type="right"
						/>
					}
					fade
					responsive={[
						{
							breakpoint: 420,
							settings: {
								vertical: true,
								dots: true,
								arrows: false,
							},
						},
						{
							breakpoint: 900,
							settings: {
								vertical: false,
								dots: false,
							},
						},
						{
							breakpoint: 0,
							settings: {
								vertical: false,
								dots: false,
							},
						},
					]}
				>
					{images.map((path, index) => (
						<div key={index} className={styles.slide}>
							<button
								className={styles.toggle}
								onClick={() => {
									setIndex(index)
									setToggler(!toggler)
								}}
							>
								<Picture src={galleryIcon.src} alt="Галерея" />
							</button>
							<Picture src={path} alt={product.name} />
						</div>
					))}
					{product.videoPath && (
						<div className={styles.slide}>
							<Video
								src={`${product.videoPath}#t=2`}
								autoPlay={false}
								muted
								loop
							/>
						</div>
					)}
				</Slider>
			</div>
			<div className={styles.dots}>
				<Slider
					asNavFor={nav1 || undefined}
					ref={sliderRef2}
					vertical
					focusOnSelect
					infinite={false}
					speed={500}
					swipe={false}
					slidesToShow={5}
					slidesToScroll={1}
					prevArrow={
						<SliderArrow
							customClassName={cn(styles.dotsArrow, styles.dotsPrev)}
							type="up"
						/>
					}
					nextArrow={
						<SliderArrow
							customClassName={cn(styles.dotsArrow, styles.dotsNext)}
							type="down"
						/>
					}
					responsive={[
						{
							breakpoint: 900,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
								vertical: true,
							},
						},
						{
							breakpoint: 700,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
								vertical: true,
							},
						},
						{
							breakpoint: 550,
							settings: {
								slidesToShow: 5,
								slidesToScroll: 1,
								vertical: true,
							},
						},
					]}
				>
					{images.map((path, index) => (
						<div key={index} className={styles.dot}>
							<Picture src={path} alt={product.name} />
						</div>
					))}
					{product.videoPath && (
						<div className={styles.dot}>
							<Video
								src={`${product.videoPath}#t=2`}
								autoPlay={false}
								isIconStatic
								muted
								loop
							/>
						</div>
					)}
				</Slider>
			</div>
			<FsLightbox toggler={toggler} sources={images} sourceIndex={index} />
		</>
	) : (
		<></>
	)
}

export default ProductContentSlider
