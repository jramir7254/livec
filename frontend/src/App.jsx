import { Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'
import UserProvider from '@context/UserProvider';




import './App.css'
import '@styles/flex.css'
import '@styles/variants.css'
import '@styles/borders.css'
import '@styles/colors.css'
import '@styles/typography.css'
import Header from '@components/Header';
import AuthPage from '@pages/Auth/AuthPage'
import CurriculumPage from '@pages/Curriculum/CurriculumPage'
import CurriculumDetailsPage from '@pages/Details/CurriculumDetailsPage'
import ProfilePage from '@pages/Profile/ProfilePage';

function App() {
	const [selectedCurriculum, setSelectedCurriculum] = useState('');


	return (
		<>
			<UserProvider>

				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Navigate to="/curriculum" replace />} />

						<Route path='/curriculum' element={<CurriculumPage setSelectedCurriculum={setSelectedCurriculum} />} />
						<Route path='/curriculum/:slug' element={<CurriculumDetailsPage selectedCurriculum={selectedCurriculum} />} />
						<Route path='/auth' element={<AuthPage />} />
						<Route path='/profile' element={<ProfilePage />} />
					</Routes>

				</main>
			</UserProvider>

		</>
	)
}

export default App
