//CSS
import css from './SectionTitle.module.css'

type SectionTitleType = {
	title: string
}

const SectionTitle = ({ title }: SectionTitleType) => {
	return (
		<div className={css.tittleContainer}>
			<h1>{title}</h1>
		</div>
	)
}
export { SectionTitle }
