import downIcon from '@/assets/images/icons/slider-down.png'
import leftIcon from '@/assets/images/icons/slider-left.png'
import rightIcon from '@/assets/images/icons/slider-right.png'
import upIcon from '@/assets/images/icons/slider-up.png'
import type { ISliderArrow } from '@/shared/interfaces/common/slider/slider.interface'
import cn from 'clsx'
import type { FC } from 'react'
import Picture from '../../common/picture/Picture'

const SliderArrow: FC<ISliderArrow> = (props: any) => {
	const { customClassName, className, type, onClick } = props

	const src =
		type === 'left'
			? leftIcon.src
			: type === 'right'
			? rightIcon.src
			: type === 'up'
			? upIcon.src
			: downIcon.src

	return (
		<button
			className={cn(className && className, customClassName && customClassName)}
			onClick={onClick}
			type="button"
		>
			<Picture src={src} alt="" />
		</button>
	)
}

export default SliderArrow
