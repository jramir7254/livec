import { UserContext } from '@context/UserProvider';
import { useContext } from 'react';
import LogoutButton from '@components/LogoutButton';
import { Outlet } from 'react-router-dom';

import * as Icons from '@components/Icons';
import {Layout, SideBar, MainPanel} from '@components/Layout';


export default function AssociateEditorLayout() {
	const { loading } = useContext(UserContext)

	if (loading) return <div>Loading...</div>

	return (
		<Layout>

			<SideBar>
				<SideBar.Item text={"Dashboard"} icon={<Icons.House />} route={'overview'} />
				<SideBar.Item text={"My Reviewers"} icon={<Icons.Reviewer />} route={'reviewers'}/>
				<SideBar.Item text={"Histogram"} icon={<Icons.History />} route={' '}/>
				<SideBar.Item text={"Profile"} icon={<Icons.Profile />} route={'profile'}/>
			</SideBar>

			<MainPanel>
				<Outlet/>
			</MainPanel>

		</Layout>
	)
}
