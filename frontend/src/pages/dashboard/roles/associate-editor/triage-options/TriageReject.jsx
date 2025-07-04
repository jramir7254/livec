
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '@components/Overlays/Modal';
import useSuggestion from '@hooks/useSuggestion'

import styles from '../SuggestionPage.module.css';

export const RejectButton = ({setOverlay}) => {
    return (
        <button onClick={() => setOverlay(() => RejectOverlay)}>Reject</button>
    )
}

function RejectOverlay({ showing = true, suggestion = {}}) {
    const defaultData = {
        privateReason: '',
        publicMessage: '',
    }
    // const navigate = useNavigate()
    // const { formData, onFormChange, resetForm } = useForm(defaultData)

    // const [showingBox, setShowingBox] = useState(false)
    const { reject } = useSuggestion()
    if (!showing) return null;
    return (
        <div className='flex col'>
            <h2>Reject</h2>
            {/* <form className='flex col'>
                <label htmlFor='private'>Reason for rejection</label>
                <textarea onChange={(e) => onFormChange('privateReason', e.target.value)} name='private' />
                <label htmlFor='public'>Message for submitter</label>
                <textarea onChange={(e) => onFormChange('publicMessage', e.target.value)} name='public' />

                <button type='button' className={`${styles.button} ${styles['button--reject']}`} onClick={() => setShowingBox(true)}

                >Confirm Reject</button>
                <OverlayModule
                    message={"Are you sure you want to confire your rejection?"}
                    showing={showingBox}
                    onConfirm={async () => { await reject(suggestion.id, formData.privateReason, formData.publicMessage); setShowingBox(false); navigate(0) }}
                    onCancel={() => setShowingBox(false)} />
            </form> */}
        </div>
    )
}
