import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '@pages/Home/HomePage';
import AuthPage from '@pages/auth/AuthPage';
import CurriculumPage from '@pages/curriculums/CurriculumPage';
import CurriculumDetailsPage from '@pages/details/CurriculumDetailsPage';
import DashboardPage from '@pages/dashboard/DashboardPage';

import OverviewWrapper from '@pages/dashboard/wrappers/OverviewWrapper';
import ProfileWrapper from '@pages/dashboard/wrappers/ProfileWrapper';
import SuggestionWrapper from '@pages/dashboard/wrappers/SuggestionWrapper';

import ViewSuggestion from '../pages/dashboard/shared/ViewSuggestion';

import Reviewers from '../pages/dashboard/roles/associate-editor/Reviewers';

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
				<Route path="overview" element={<OverviewWrapper />} />
				<Route path="profile" element={<ProfileWrapper />} />
				<Route path="reviewers" element={<Reviewers />} />
				<Route path="suggestion/:suggestionId" element={<ViewSuggestion />} />
			</Route>
		</Routes>
	);
}
