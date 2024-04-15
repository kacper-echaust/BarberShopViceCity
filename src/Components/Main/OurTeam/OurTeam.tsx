//Components
import { Profile } from './Profile/Profile'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { ReservationButton } from '../../ReservationButton/ReservationButton'
//Photos
import arekImage from '../../img/arek.jpg'
import paulinaImage from '../../img/paulina.png'

const OurTeam = () => {
	return (
		<section>
			<SectionTitle title='nasz zespół' />
			<Profile name='arek' photoLink={arekImage}>
				<ReservationButton href='https://booksy.com/pl-pl/147660_barbershop-vice-city_barber-shop_12859_zory/staffer/290607#ba_s=bd_1' />
			</Profile>
			<Profile name='paulina' photoLink={paulinaImage} style={{ direction: 'rtl' }}>
				<ReservationButton href='https://booksy.com/pl-pl/147660_barbershop-vice-city_barber-shop_12859_zory/staffer/313491#ba_s=bd_1' />
			</Profile>
		</section>
	)
}
export { OurTeam }
