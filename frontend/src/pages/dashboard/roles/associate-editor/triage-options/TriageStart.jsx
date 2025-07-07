
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal, { DefaultView, ConfirmationView } from '@components/Overlays/Modal';
import useSuggestion from '@hooks/useSuggestion'
import StatusIcon from '@components/Table/StatusIcon';

import { Form, SubmitButton } from '@components/form';
import { TextArea } from '@components/form/input';


export function StartOverlay({ suggestion = {} }) {
    const { startReview } = useSuggestion()

    // if (!showing) return null;
    return (
        <Form>
            <TextArea field={{ notes: '' }} label='Initial Notes' />
            <TextArea field={{ message: '' }} label='Message to submitter' />
            <SubmitButton onSubmit={(formData) => startReview(suggestion.id, formData)} text='Start Review'>
                <Modal>
                    <DefaultView message={"Are you sure you want to start the review process?"}>
                        <p>This wil turn status from</p>
                        <div><StatusIcon status={'assigned'} /> → <StatusIcon status={'under-review'} rand={true} /></div>
                    </DefaultView>
                    <ConfirmationView message={"This is a after confirmation"} />
                </Modal>
            </SubmitButton>
        </Form>
    )
}


     