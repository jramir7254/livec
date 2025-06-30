import React from 'react'
import useSuggestion from '@hooks/useSuggestion'
import StatusIcon from '../../../../components/Table/StatusIcon';
import { Table, TableHeader, TableBody } from '@components/Table';
import ActionSelect from '@components/Table/ActionSelect';
import { Outlet } from 'react-router';

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
        status: <StatusIcon status={item.status}/>,
        actions: <ActionSelect status={item.status} suggestion={item}/>
    }));
};

export default function Main() {
    const { suggestions } = useSuggestion()
    return (
        <section className='main'>
            <div className='head'>

            </div>

            <div className='side'>
                <h2>Quick Links</h2>
            </div>

            <div className='sugg'>
                <h2>My Suggestions</h2>
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
