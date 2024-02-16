//CSS
import css from './Opinions.module.css'
//Ikony fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
//Zdjęcia
import booksy from '../../img/Booksy_logo_black.png'

const Opinions = () => {
	return (
		<section className={css.section}>
			<div>
				<FontAwesomeIcon icon={faGoogle} className={css.icon} />
				<p>5 / 5</p>
			</div>
			<div>
				<FontAwesomeIcon icon={faFacebook} className={css.icon} />
				<p>5 / 5</p>
			</div>
			<div>
				<img src={booksy} alt='logo booksy' className={css.booksyIcon} />
				<p>5 / 5</p>
			</div>
		</section>
	)
}
export { Opinions }
