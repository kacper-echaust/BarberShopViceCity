import css from './ServiceList.module.css'
const ServiceList = () => {
    return(
            <ul className={css.list}>
							<li>komplet | włosy + broda</li>
							<li>strzyżenie włosów</li>
							<li>trymowanie brody</li>
							<li>strzyżenie włosów - całość maszynką</li>
							<li>trymowanie brody + farbowanie</li>
							<li>komplet + farbowanie brody</li>
							<li>strzyżenie włosów - same boki</li>
						</ul>
    )
}

export {ServiceList}