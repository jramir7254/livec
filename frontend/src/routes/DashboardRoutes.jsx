import { Navigate, Route } from 'react-router-dom';
import AssociateEditorMain from '../pages/dashboard/AssociateEditor/main/Main';
import AssociateEditorMainProfile from '../pages/dashboard/AssociateEditor/main/Profile';

import CommunityMemberMain from '../pages/dashboard/CommunityMember/main/Main';

export const AERoutes = [
  <Route index element={<Navigate to="overview" replace />} key="ae-index" />,
  <Route path="overview" element={<AssociateEditorMain />} key="ae-overview" />,
  <Route path="profile" element={<AssociateEditorMainProfile />} key="ae-profile" />,
];

export const CMRoutes = [
  <Route index element={<Navigate to="overview" replace />} key="cm-index" />,
  <Route path="overview" element={<CommunityMemberMain />} key="cm-overview" />,
];
