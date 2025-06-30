import  { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { UserContext } from '@context/UserProvider';
import LogoutButton from '@components/LogoutButton';
import * as Icons from '@components/Icons';
import { Layout, SideBar, MainPanel } from '@components/Layout';

export default function ReviewerLayout() {
	const { loading } = useContext(UserContext);


	if (loading) return <div>Loading...</div>;

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
