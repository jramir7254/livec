import React, { useState } from 'react';
import { Status } from '@utils/constants';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '@context/UserProvider';

export default function ActionSelect({ status, suggestion }) {
      const { user } = useContext(UserContext);
    const [selectedAction, setSelectedAction] = useState('');
    const navigate = useNavigate();
    const actionItems = {
        [Status.Public.SUBMITTED]: [
            { value: 'view', label: 'View' },
            { value: 'edit', label: 'Edit' },
            { value: 'retract', label: 'Retract' },
        ],
        approved: [
            { value: 'revoke', label: 'Revoke Approval' },
            { value: 'archive', label: 'Archive' },
        ],
        rejected: [
            { value: 'resubmit', label: 'Resubmit' },
            { value: 'delete', label: 'Delete' },
        ],
    };

    const options = actionItems[Status.Public.SUBMITTED] || [];

    const handleChange = (e) => {
        const action = e.target.value
        setSelectedAction(e.target.value);

        switch (action) {
            case "view": navigate(`/dashboard/${user.id}/suggestion/${suggestion.id}`, {state: suggestion})
        }
        console.log('Selected action:', e.target.value);
    };

    return (
        <select value={selectedAction} onChange={handleChange}>
            <option value="" disabled>
                Select
            </option>
            {options.map((action) => (
                <option key={action.value} value={action.value}>
                    {action.label}
                </option>
            ))}
        </select>
    );
}
