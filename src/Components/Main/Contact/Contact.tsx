//CSS
import css from './Contact.module.css'
//Komponenty
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Map } from './Map/Map'

const Contact = () => {
	return (
		<section className={css.section}>
			<SectionTitle title='kontakt' />
			<div className={css.contentContainer}>
				<Map />
				<div className={css.textContainer}>
					<h4>Adres:</h4>
					<p>Centralna 33, 44-240 Żory</p>
					<h4>Godziny otwarcia:</h4>
					<ul>
						<li>Poniedziałek: 12:00 - 18:30</li>
						<li>Wtorek: 10:00 - 18:30</li>
						<li>Środa: 10:00 - 18:30</li>
						<li>Czwartek: 10:00 - 20:00</li>
						<li>Piątek: 10:00 - 18:30</li>
						<li>Sobota: Indywidualnie</li>
						<li>Niedziela: Zamknięte</li>
					</ul>
					<span>Możliwość umówienia wizyty poza godzinami pracy za dodatkową opłatą</span>
					<h4>Telefon:</h4>
					<p>531 023 277</p>
				</div>
			</div>
		</section>
	)
}
export { Contact }
