import type { IPicture } from '@/shared/interfaces/common/picture/picture.interface'
import type { FC } from 'react'

const Picture: FC<IPicture> = ({
	src,
	sources,
	width,
	height,
	alt,
	title,
	className,
}) => {
	return sources ? (
		<picture className={className && className}>
			{sources?.map((source, index) => (
				<source
					key={index}
					srcSet={source.src}
					media={`(max-width: ${source.resolution}px)`}
				/>
			))}
			<img src={src} width={width} height={height} title={title} alt={alt} />
		</picture>
	) : (
		<img
			className={className && className}
			src={src}
			width={width}
			height={height}
			title={title}
			alt={alt}
		/>
	)
}

export default Picture
