//CSS
import css from './OurWorks.module.css'
//Komponenty
import { SectionTitle } from '../SectionTitle/SectionTitle'
//Karuzela Zdjęć
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//Zdjęcia
import portfolio1 from '../../img/portfolio1.jpeg'
import portfolio2 from '../../img/portfolio2.jpeg'
import portfolio3 from '../../img/portfolio3.jpeg'
import portfolio4 from '../../img/portfolio4.jpeg'
import portfolio5 from '../../img/portfolio5.jpeg'
import portfolio6 from '../../img/portfolio6.jpeg'
import portfolio7 from '../../img/portfolio7.jpeg'
import portfolio8 from '../../img/portfolio8.jpeg'
import portfolio9 from '../../img/portfolio9.jpeg'
import portfolio10 from '../../img/portfolio10.jpeg'
import portfolio11 from '../../img/portfolio11.jpeg'

const OurWorks = () => {
	type ArrowType = {
		className?: string
		onClick?: () => void
		to: string
	}
	const SliderArrow = ({ className, onClick, to }: ArrowType) => {
		return <button type='button' onClick={onClick} className={className} aria-label={to}></button>
	}
	const settings = {
		dots: false,
		infinite: true,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoPlaySpeed: 2000,
		autoplay: true,
		prevArrow: <SliderArrow to='prev' />,
		nextArrow: <SliderArrow to='next' />,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow:1,
				},
			}
		],
	}
	const images = [
		portfolio1,
		portfolio2,
		portfolio3,
		portfolio4,
		portfolio5,
		portfolio6,
		portfolio7,
		portfolio8,
		portfolio9,
		portfolio10,
		portfolio11,
	]
	const displayImages = images.map((image, index) => {
		return (
			<div className={css.imageContainer} key={index}>
				<img src={image} alt='zdjęcie klienta po obcięciu' />
			</div>
		)
	})
	return (
		<section>
			<SectionTitle title='nasze prace' />
			<div className={css.container}>
				<Slider {...settings}>{displayImages}</Slider>
			</div>
		</section>
	)
}
export { OurWorks }
