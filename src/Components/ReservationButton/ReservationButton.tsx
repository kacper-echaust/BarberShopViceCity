import css from './ReserationButton.module.css'
import classNames from 'classnames'

type ReserationButtonType = {
	className?: string,
	href: string
}

const ReservationButton = ({ className,href }: ReserationButtonType) => {
	const reservationButtonClasses = classNames(css.reservationButton, className)
	return (
		<a href={href}>
			<button className={reservationButtonClasses}>rezerwuj</button>
		</a>
	)
}
export { ReservationButton }
