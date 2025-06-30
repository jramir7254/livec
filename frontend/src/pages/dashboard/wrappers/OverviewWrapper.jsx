import { useContext } from 'react';
import { UserContext } from '@context/UserProvider';
import AssociateEditorMain from '../roles/associate-editor/Main';
import CommunityMemberMain from '../roles/community-member/Main';
import ReviewerMain from '../roles/reviewer/Main'


export default function OverviewWrapper() {
  const { user } = useContext(UserContext);

  if (user.role === 'associate-editor') return <AssociateEditorMain />;
  if (user.role === 'community-member') return <CommunityMemberMain/>;
  if (user.role === 'reviewer') return <ReviewerMain/>;

  return <div>Unauthorized role: {user.role}</div>;
}