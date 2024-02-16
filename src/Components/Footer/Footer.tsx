//CSS
import css from './Footer.module.css'
//Ikony fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
	return (
		<footer className={css.footer}>
			<div className={css.socialMediaIconsContainer}>
				<a className={css.link} href='https://www.facebook.com/ViceCityZory'>
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<a className={css.link} href='https://www.instagram.com/barbershop_vice_city/'>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
			</div>
			<div>
				<p>&copy;barbershop_vice_city</p>
			</div>
			<div className={css.creatorContainer}>
				<p>Wykonanie:</p>
				<a className={css.link} href='https://www.facebook.com/kacper.echaust/'>
					@kacper-echaust
				</a>
			</div>
		</footer>
	)
}
export { Footer }
