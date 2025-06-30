import { useContext } from 'react';
import { UserContext } from '@context/UserProvider';
import AssociateEditorProfile from '../roles/associate-editor/Profile';
// import CommunityMemberProfile from '../CommunityMember/main/Profile';

export default function ProfileWrapper() {
  const { user } = useContext(UserContext);

  if (user.role === 'associate-editor') return <AssociateEditorProfile />;
//   if (user.role === 'community-member') return <CommunityMemberProfile />;

  return <div>Unauthorized role: {user.role}</div>;
}
