import { Outlet } from 'react-router-dom';

import * as Icons from '@components/Icons';
import {Layout, SideBar, MainPanel} from '@components/Layout';


export default function AssociateEditorLayout() {
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
