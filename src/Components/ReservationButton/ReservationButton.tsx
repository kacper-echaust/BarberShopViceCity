import css from './ReserationButton.module.css'
import classNames from 'classnames'
const ReservationButton = ({ className,href }: any) => {
	const reservationButtonClasses = classNames(css.reservationButton, className)
	return (
		<a href={href}>
			<button className={reservationButtonClasses}>rezerwuj</button>
		</a>
	)
}
export { ReservationButton }
