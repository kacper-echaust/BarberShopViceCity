//CSS
import css from './Profile.module.css'
import classNames from 'classnames'
//Komponenty
import { ReservationButton } from '../../../ReservationButton/ReservationButton'
//Hooki
import { useState } from 'react'

type ProfileType = {
	name: string
	src: string
	style?: {}
	className?: string
}

const Profile = ({ name, src, style, className }: ProfileType) => {
	const [scrollActive, setScrollActive] = useState({ firstProfile: false, secondProfile: false })

	const scrollAnimation = () => {
		if (window.scrollY > 650) {
			setScrollActive({ ...scrollActive, firstProfile: true })
		}
		if (window.scrollY > 1100) {
			setScrollActive({ firstProfile: true, secondProfile: true })
		}
	}

	window.addEventListener('scroll', scrollAnimation)

	const profileClasses = classNames(css.profileContainer, className)

	const firstProfileClasses = classNames(profileClasses, css.firstProfile, {
		[css.firstProfileAnimation]: scrollActive.firstProfile,
	})

	const secondProfileClasses = classNames(profileClasses, css.secondProfile, {
		[css.secondProfileAnimation]: scrollActive.secondProfile,
	})

	return (
		<>
			{name === 'arek' && (
				<div className={firstProfileClasses} style={style}>
					<div className={css.imageContainer}>
						<img className={css.image} src={src} alt='Arek' />
					</div>
					<div className={css.descriptionContainer}>
						<h2>{name}</h2>
						<ul className={css.list}>
							<li>komplet | włosy + broda</li>
							<li>strzyżenie włosów</li>
							<li>trymowanie brody</li>
							<li>strzyżenie włosów - całość maszynką</li>
							<li>trymowanie brody + farbowanie</li>
							<li>komplet + farbowanie brody</li>
							<li>strzyżenie włosów - same boki</li>
						</ul>
						<ReservationButton href='https://booksy.com/pl-pl/147660_barbershop-vice-city_barber-shop_12859_zory/staffer/290607#ba_s=bd_1' className={css.reservationButton}/>
					</div>
				</div>
			)}
			{name === 'paulina' && (
				<div className={secondProfileClasses} style={style}>
					<div className={css.descriptionContainer}>
						<h2>{name}</h2>
						<ul className={css.list}>
							<li>komplet | włosy + broda</li>
							<li>strzyżenie włosów</li>
							<li>trymowanie brody</li>
							<li>strzyżenie włosów - całość maszynką</li>
							<li>trymowanie brody + farbowanie</li>
							<li>komplet + farbowanie brody</li>
							<li>strzyżenie włosów - same boki</li>
						</ul>
						<ReservationButton
							className={css.reservationButton}
							href='https://booksy.com/pl-pl/147660_barbershop-vice-city_barber-shop_12859_zory/staffer/313491#ba_s=bd_1'
						/>
					</div>
					<div className={css.imageContainer}>
						<img className={css.image} src={src} alt='Paulina' />
					</div>
				</div>
			)}
		</>
	)
}
export { Profile }
