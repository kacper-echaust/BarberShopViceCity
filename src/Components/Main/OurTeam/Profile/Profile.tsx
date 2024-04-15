import css from './Profile.module.css'
import classNames from 'classnames'

import { CSSProperties, ReactNode, useState } from 'react'
import { ServiceList } from './ServiceList/ServiceList'

type ProfileType = {
	name: string
	photoLink: string
	className?: string
	children: ReactNode
	style?: CSSProperties
}

const Profile = ({ name, photoLink, className, children, style }: ProfileType) => {
	// const [scrollActive, setScrollActive] = useState({ firstProfile: false, secondProfile: false })

	// const scrollAnimation = () => {
	// 	if (window.scrollY > 650) {
	// 		setScrollActive({ ...scrollActive, firstProfile: true })
	// 	}
	// 	if (window.scrollY > 1100) {
	// 		setScrollActive({ firstProfile: true, secondProfile: true })
	// 	}
	// }

	// window.addEventListener('scroll', scrollAnimation)

	const profileClasses = classNames(css.profileContainer, className)

	// const firstProfileClasses = classNames(profileClasses, css.firstProfile, {
	// 	[css.firstProfileAnimation]: scrollActive.firstProfile,
	// })

	// const secondProfileClasses = classNames(profileClasses, css.secondProfile, {
	// 	[css.secondProfileAnimation]: scrollActive.secondProfile,
	// })

	return (
		<>
			<div className={css.profileContainer} style={style}>
				<img className={css.image} src={photoLink} alt='Worker' />
				<div className={css.descriptionContainer}>
					<h2>{name}</h2>
					<ServiceList />
					{children}
				</div>
			</div>
			{/* <div style={style}>
					<div className={css.descriptionContainer}>
						<h2>{name}</h2>
						<ServiceList />
						
					</div>
					<div className={css.imageContainer}>
						<img className={css.image} src={src} alt='Paulina' />
					</div>
				</div> */}
		</>
	)
}
export { Profile }
