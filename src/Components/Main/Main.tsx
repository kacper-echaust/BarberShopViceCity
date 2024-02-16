//CSS
import css from './Main.module.css'
//Komponenty
import { OurTeam } from './OurTeam/OurTeam'
import { Opinions } from './Opinions/Opinions'
import { OurWorks } from './OurWorks/OurWorks'
import { Contact } from './Contact/Contact'
import { Tournament } from './AboutTournament/AboutTournament'

const Main = () => {
	return (
			<main className={css.main}>
				<OurTeam />
				<Opinions />
				<OurWorks />
				<Tournament />
				<Contact />
			</main>
	)
}
export { Main }
