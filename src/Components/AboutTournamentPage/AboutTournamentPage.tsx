//Css
import css from './AboutTournamentPage.module.css'
//Komponenty
import { SectionTitle } from '../Main/SectionTitle/SectionTitle'
import { Popup } from './Popup/Popup'
//Hooki
import { useAboutTournamentPage } from './useAboutTournamentPage'
//React-Router
import { Link } from 'react-router-dom'
//Zdjęcia
import { gallery } from './gallery'

const AboutTournamentPage = () => {
	const { galleryName, openPopup, closePopup } = useAboutTournamentPage()
	return (
		<section className={css.section}>
			<SectionTitle title='turniej bilardowy' />
			<div className={css.contentContainer}>
				<div className={css.container}>
					<button
						className={css.openPopupButton}
						onClick={() => {
							openPopup('first')
						}}>
						13 październik
					</button>
					<p>
						Turniej pierwszej edycji. Poziom rywalizacji okazał się być na tyle imponujący, że nikt z nas
						nie mógł tego przewidzieć. To było coś więcej niż zwykła rywalizacja; to był prawdziwy test
						umiejętności i determinacji.
					</p>
				</div>
				<div className={css.container}>
					<button
						className={css.openPopupButton}
						onClick={() => {
							openPopup('second')
						}}>
						1 grudnia
					</button>
					<p>
						Drugi turniej został połączony z akcja charytatywna, w salonie została przeprowadzona zbiórka na
						dom dziecka. Cała pula z nagrody również trafiła do domu dziecka.'
					</p>
				</div>
				<Link className={css.backToMainPageButton} to='/'>
					Powrót do strony głównej
				</Link>
			</div>
			{galleryName === 'first' && (
				<Popup
					gallery={gallery.first}
					onClick={closePopup}
					first='dawid o'
					second='mateusz sz'
					third='damian p'
				/>
			)}
			{galleryName === 'second' && (
				<Popup
					gallery={gallery.second}
					onClick={closePopup}
					first='ex aequo artur r i damian p'
					second='---'
					third='bartek w'
				/>
			)}
		</section>
	)
}
export { AboutTournamentPage }
