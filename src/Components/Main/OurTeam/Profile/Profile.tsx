import css from './Profile.module.css'

import { CSSProperties, ReactNode } from 'react'
import { ServiceList } from './ServiceList/ServiceList'

type ProfileType = {
	name: string
	photoLink: string
	className?: string
	children: ReactNode
	style?: CSSProperties
}

const Profile = ({ name, photoLink, className, children, style }: ProfileType) => {
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
		</>
	)
}
export { Profile }
