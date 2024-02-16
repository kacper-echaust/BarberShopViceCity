import css from './Popup.module.css'
import Slider from 'react-slick'

type PopupType = {
	gallery: string[]
	onClick: () => void
	first: string
	second: string
	third: string
}

const Popup = ({ gallery, onClick, first, second, third }: PopupType) => {
	const galleryMap = gallery.map((image: string, index: number) => {
		return (
			<div key={index}>
				<img src={image} alt='' />
			</div>
		)
	})
	const settingsSlider = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
	}

	return (
		<div className={css.container}>
			<Slider className={css.slider} {...settingsSlider}>
				{galleryMap}
			</Slider>
			<div className={css.contentContainer}>
				<span>1 miejsce</span>
				<p>{first}</p>
				<span>2 miejsce</span>
				<p>{second}</p>
				<span>3 miejsce</span>
				<p>{third}</p>
			</div>
			<button onClick={onClick} className={css.closeButton}>
				X
			</button>
		</div>
	)
}
export { Popup }
