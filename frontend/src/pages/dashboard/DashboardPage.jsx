import { useContext } from 'react';
import { UserContext } from '@context/UserProvider';
import { useNavigate } from 'react-router-dom';

import AssociateEditorLayout from './layouts/AssociateEditorLayout';
import CommunityMemberLayout from './layouts/CommunityMemberLayout';
import ReviewerLayout from './layouts/ReviewerLayout';

export default function DashboardPage() {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	if (!user) {
		navigate('/auth');
		return null;
	}

	switch (user.role) {
		case 'associate-editor':
			return <AssociateEditorLayout />;
		case 'community-member':
			return <CommunityMemberLayout />;
		case 'reviewer':
			return <ReviewerLayout/>
		default:
			return <div>Unauthorized role: {user.role}</div>;
	}
}
