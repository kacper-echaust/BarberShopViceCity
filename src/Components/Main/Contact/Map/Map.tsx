//CSS
import css from './Map.module.css'
//Google maps
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

const center = { lat: 50.03654243069497, lng: 18.690420376074645 }

const Map = () => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: 'AIzaSyBXMPRIilwzEBLY1EQu_RgghVlW__e_g7M',
	})
	if (!isLoaded) {
		return <div></div>
	}
	
	return (
		<div className={css.container}>
			<GoogleMap
				center={center}
				zoom={18}
				mapContainerStyle={{ width: '100%', height: '70vh' }}
				options={{
					streetViewControl: false,
					mapTypeControl: false,
					fullscreenControl: false,
				}}>
				<Marker position={center} />
			</GoogleMap>
		</div>
	)
}
export { Map }
