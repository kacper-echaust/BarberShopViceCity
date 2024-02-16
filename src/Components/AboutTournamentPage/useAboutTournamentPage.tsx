import { useState } from 'react'

const useAboutTournamentPage = () => {
	const [galleryName, setGalleryName] = useState('')

	const openPopup = (name: string) => {
		setGalleryName(name)
	}
	const closePopup = () => {
		setGalleryName('')
	}
	return {
		galleryName,
		openPopup,
		closePopup,
	}
}
export { useAboutTournamentPage }
