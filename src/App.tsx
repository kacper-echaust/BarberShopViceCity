import { MainPage } from './Components/MainPage'
import { AboutTournamentPage } from './Components/AboutTournamentPage/AboutTournamentPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<MainPage />}></Route>
				<Route path='/PoolTournament' element={<AboutTournamentPage />}></Route>
			</Routes>
		</Router>
	)
}

export default App
