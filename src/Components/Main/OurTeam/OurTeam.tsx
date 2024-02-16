//Komponenty
import { Profile } from './Profile/Profile'
import { SectionTitle } from '../SectionTitle/SectionTitle'
//Zdjęcia
import arekImage from '../../img/arek.jpg'
import paulinaImage from '../../img/paulina.png'

const OurTeam = () => {
	return (
		<section>
			<SectionTitle title='nasz zespół' />
			<Profile name='arek' src={arekImage} />
			<Profile name='paulina' src={paulinaImage} />
		</section>
	)
}
export { OurTeam }
