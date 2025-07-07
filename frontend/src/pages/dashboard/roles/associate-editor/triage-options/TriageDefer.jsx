
import { useState, useContext, useEffect } from 'react';
import Modal, { DefaultView, ConfirmationView } from '@components/Overlays/Modal';
import useSuggestion from '@hooks/useSuggestion'
import StatusIcon from '@components/Table/StatusIcon';
import { UserContext } from '@context/UserProvider';

import { Form, SubmitButton } from '@components/form';
import { TextArea, Dropdown } from '@components/form/input';
import { getReviewers } from '@utils/api-handlers/users/get-reviewers';


export function DeferOverlay({ suggestion = {} }) {

    const { assignReviewers } = useSuggestion()
    const [reviewers, setReviewers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);



    useEffect(() => {
        if (!user?.id) return;
        getReviewers(user.id)
            .then(res => setReviewers(res))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [user.id]);




    if (loading) {
        return <p style={{ color: 'black' }}>Loading...</p>;
    }




    return (
        <Form>
            <TextArea field={{ notes: '' }} label='Message to reviewer' />
            <TextArea field={{ message: '' }} label='Message to submitter' />
            <Dropdown field={{ reviewer: '' }} values={reviewers.map(item => ({ value: item.id, label: item.name }))} />
            <SubmitButton onSubmit={(formData) => assignReviewers(suggestion.id, formData)} text='Defer to Reviewer'>
                <Modal>
                    <DefaultView message={"Are you sure you want to Reject?"}>
                        <p>This wil turn status from</p>
                        <div><StatusIcon status={'assigned'} /> → <StatusIcon status={'rejected'} /></div>
                    </DefaultView>
                    <ConfirmationView message={"This is a after confirmation"} />
                </Modal>
            </SubmitButton>
        </Form>
    )
}

