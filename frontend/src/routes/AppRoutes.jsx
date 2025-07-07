import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '@pages/Home/HomePage';
import AuthPage from '@pages/auth/AuthPage';
import CurriculumPage from '@pages/curriculums/CurriculumPage';
import CurriculumDetailsPage from '@pages/details/CurriculumDetailsPage';
import DashboardPage from '@pages/dashboard/DashboardPage';

import ProfileView from '../pages/dashboard/shared/ProfileView';
import SuggestionView from '../pages/dashboard/shared/SuggestionView';
import Reviewers from '../pages/dashboard/roles/associate-editor/Reviewers';
import MainView from '../pages/dashboard/shared/MainView';


export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/auth" element={<AuthPage />} />
			<Route path="/curriculums" element={<CurriculumPage />} />
			<Route path="/curriculums/:slug/details" element={<CurriculumDetailsPage />} />


			{/* Dashboard entry */}
			<Route path="/dashboard/:userId" element={<DashboardPage />}>
				<Route index element={<Navigate to="overview" replace />} />
				<Route path="overview" element={<MainView />} />
				<Route path="profile" element={<ProfileView />} />
				<Route path="reviewers" element={<Reviewers />} />
				<Route path="suggestion/:suggestionId" element={<SuggestionView />} />
			</Route>
		</Routes>
	);
}
