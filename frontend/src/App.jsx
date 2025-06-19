import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";

import acmLogo from '@assets/acm.png'

import './App.css'
import '@styles/flex.css'
import '@styles/borders.css'
import '@styles/colors.css'
import '@styles/typography.css'

import AuthPage from '@pages/Auth/AuthPage'
import CurriculumPage from '@pages/Curriculum/CurriculumPage'
import CurriculumDetailsPage from '@pages/Details/CurriculumDetailsPage'

import SelectCurriculum from './pages/SelectCurriculum';
import CurriculumReview from './pages/CurriculumReview';
import ProposeChange from './pages/ProposeChange';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const [selectedCurriculum, setSelectedCurriculum] = useState('');
	const navigate = useNavigate()

	return (
		<>
			<header>
				<div className='centered gap-1r' onClick={() => navigate('/curriculum')}>
					<div className='logo'>
						<img className='logo__img ' src={acmLogo}></img>
					</div>
					<h1 className='site-name monts'>LiveC</h1>
				</div>

			</header>

			<main>
				<Routes>
					<Route path='/' element={<AuthPage />} />
					<Route path='/curriculum' element={<CurriculumPage setSelectedCurriculum={setSelectedCurriculum} />} />
					<Route path='/curriculum/:slug' element={<CurriculumDetailsPage selectedCurriculum={selectedCurriculum} />} />
					<Route path="/select-curriculum" element={<SelectCurriculum />} />
					<Route path="/review/:curriculumId" element={<CurriculumReview />} />
					<Route path="/propose-change" element={<ProposeChange />} />
				</Routes>

			</main>

		</>
	)
}

export default App
