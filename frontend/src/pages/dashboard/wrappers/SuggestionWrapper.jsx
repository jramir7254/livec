
import { useContext } from 'react';
import { UserContext } from '@context/UserProvider';
import { toTitleCase, formatDate, Roles } from '@utils/constants.js';
import CommunityMemberSuggestionPage from '../roles/community-member/SuggestionPage'
import AssociateEditorSuggestionPage from '../roles//associate-editor/SuggestionPage';

export default function SuggestionWrapper() {
  const { user } = useContext(UserContext);

  if (user.role === Roles.COMMUNITY_MEMBER) return <CommunityMemberSuggestionPage />;
  if (user.role === Roles.ASSOCIATE_EDITOR) return <AssociateEditorSuggestionPage />;

  return <div>Unauthorized role: {user.role}</div>;
}
