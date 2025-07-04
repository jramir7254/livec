import { Outlet } from 'react-router-dom';

import * as Icons from '@components/Icons';
import { Layout, SideBar, MainPanel } from '@components/Layout';

export default function CommunityMemberLayout() {
	return (
		<Layout>
			<SideBar>
				<SideBar.Item text="Dashboard" icon={<Icons.House />} route={"overview"} />

				<SideBar.Item text="Profile" icon={<Icons.Profile />} route="profile" />
			</SideBar>

			<MainPanel>
				<Outlet />
			</MainPanel>
		</Layout>
	);
}
