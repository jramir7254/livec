import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './App.css'
import '@styles/flex.css'
import '@styles/borders.css'
import '@styles/colors.css'

import AuthPage from '@pages/Auth/AuthPage'
import CurriculumPage from '@pages/Curriculum/CurriculumPage'
import CurriculumDetailsPage from '@pages/CurriculumDetails/CurriculumDetailsPage'

function App() {
	const [selectedCurriculum, setSelectedCurriculum] = useState('');

	return (
		<>
			<header />

			<main>
				<Routes>
					<Route path='/' element={<AuthPage />} />
					<Route path='/curriculum' element={<CurriculumPage setSelectedCurriculum={setSelectedCurriculum}/>} />
					<Route path='/curriculum/:slug' element={<CurriculumDetailsPage selectedCurriculum={selectedCurriculum}/>} />
				</Routes>

			</main>

		</>
	)
}

export default App
