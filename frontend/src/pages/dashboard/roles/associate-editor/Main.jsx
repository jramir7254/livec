import useSuggestion from '@hooks/useSuggestion'
import StatusIcon from '@components/Table/StatusIcon';
import { Table, TableHeader, TableBody } from '@components/Table';
import { UserContext } from '@context/UserProvider';
import { useContext, useEffect, useState } from 'react';
import ActionSelect from '@components/Table/ActionSelect';
import './Main.css'


const headers = [
	{ text: 'No.', key: 'num', width: '5%' },
	{ text: 'Date Submitted', key: 'date', width: '20%' },
	{ text: 'Title', key: 'title', width: '20%' },
	{ text: 'Status', key: 'status', width: '20%' },
	{ text: 'Actions', key: 'actions', width: '20%' },
];


const formatSuggestions = (suggestions) => {
	console.table(suggestions)
	return suggestions.map((item, index) => ({
		num: index + 1,
		date: new Date(item.timeCreated).toLocaleDateString(),
		title: item.title,
		status: <StatusIcon status={item.status} />,
		actions: <ActionSelect status={item.status} suggestion={item} />
	}));
};

export default function Main() {
	const { suggestions } = useSuggestion()
	    const { user } = useContext(UserContext);

	return (
		<section className='main'>
			<div className='head'>
				<h2>Welcome Back, {user.name}!</h2>
			</div>

			<div className='side'>

			</div>

			<div className='sugg'>
				<h2>Suggestion Queue</h2>
				<div className='table-container'>

					<Table>
						<TableHeader headers={headers} />
						<TableBody headers={headers} data={formatSuggestions(suggestions)} />
					</Table>
				</div>

			</div>
		</section>
	)
}
