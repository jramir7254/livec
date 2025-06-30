import { UserContext } from '@context/UserProvider';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StatusIcon from '@components/Table/StatusIcon';
import { useParams } from 'react-router-dom';

import styles from './SuggestionPage.module.css';
import { BackButton, RejectButton } from '@components/Buttons';
import { toTitleCase, formatDate, Status, Step } from '@utils/constants.js';
import { getSuggestion } from '../../../../utils/suggestionHandler';

export default function SuggestionPage() {
    const { user } = useContext(UserContext);

    const [suggestion, setSuggestion] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const [showing, setShowing] = useState({
        reject: false,
        start: false,
        reviewer: false
    })

    const { suggestionId } = useParams();

    useEffect(() => {
        getSuggestion(suggestionId)
            .then(res => setSuggestion(res))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [suggestionId]);

    const toggleOverlay = (key) => {
        setShowing(prev => ({
            reject: false,
            start: false,
            reviewer: false,
            [key]: !prev[key],
        }));
    };

    if (loading) {
        return <p style={{ color: 'black' }}>Loading...</p>;
    }

    if (!suggestion || !suggestion.id) {
        return (
            <div style={{ color: 'black' }}>
                <h1>No suggestion found.</h1>
                <button onClick={() => navigate(`/dashboard/${user?.id || ''}`)}>
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <section className={styles.container}>
            <div className={styles.content}>

                <BackButton to={`/dashboard/${user.id}`} />
                <h1>{suggestion.title || "Untitled"}</h1>
                <h3>Reference ID: {suggestion.id}</h3>
                <h3>Date Submitted: {formatDate(suggestion.timeCreated)}</h3>
                <h3>Curicullum: {toTitleCase(suggestion.discipline)}</h3>
                <h3>Current Status: {<StatusIcon status={suggestion.status.private} />}</h3>
                {suggestion.status.private !== Status.REJECTED &&
                    <>
                        {suggestion.status.private !== Step.REVIEWING &&
                            <>
                                <button className={`${styles.button} ${styles['button--reject']}`} onClick={() => toggleOverlay('reject')}>Reject</button>
                                <button className={`${styles.button} ${styles['button--start-review']}`} onClick={() => toggleOverlay('start')}>Start Review</button>
                            </>

                        }
                        <button className={`${styles.button} ${styles['button--defer']}`} onClick={() => toggleOverlay('reviewer')}>Defer to Reviewer</button>
                    </>

                }
                <p>{suggestion.suggestion}</p>
            </div>

            <div className={styles.tree}>
                <RejectOverlay showing={showing.reject} suggestion={suggestion} />
                <StartReviewOverlay showing={showing.start} suggestion={suggestion} />
                <DeferOverlay showing={showing.reviewer} suggestion={suggestion} />
            </div>
        </section>
    );
}


import useForm from '@hooks/useForm'





import OverlayModule from '../../../../components/Overlays';
import useSuggestion from '@hooks/useSuggestion'


function RejectOverlay({ showing, suggestion }) {
    const defaultData = {
        privateReason: '',
        publicMessage: '',
    }
    const navigate = useNavigate()
    const { formData, onFormChange, resetForm } = useForm(defaultData)

    const [showingBox, setShowingBox] = useState(false)
    const { reject } = useSuggestion()
    if (!showing) return null;
    return (
        <div className='flex col'>
            <h2>Reject</h2>
            <form className='flex col'>
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
            </form>
        </div>
    )
}

function StartReviewOverlay({ showing, suggestion }) {
    const defaultData = {
        initialNotes: '',
        publicMessage: '',
    }
    const navigate = useNavigate()
    const { formData, onFormChange, resetForm } = useForm(defaultData)

    const [showingBox, setShowingBox] = useState(false)
    const { startReview } = useSuggestion()
    if (!showing) return null;
    return (
        <div className='flex col'>
            <h2>Start Review</h2>
            <form className='flex col'>


                <label htmlFor='private'>Initial Notes</label>
                <textarea onChange={(e) => onFormChange('initialNotes', e.target.value)} name='private' />
                <label htmlFor='public'>Message to Submitter</label>
                <textarea onChange={(e) => onFormChange('publicMessage', e.target.value)} name='public' />



                <button type='button' className={`${styles.button} ${styles['button--start-review']}`} onClick={() => setShowingBox(true)}

                >Start Review Process</button>
                <OverlayModule
                    message={"Are you sure you want to start the review process?"}
                    showing={showingBox}
                    onConfirm={async () => { await startReview(suggestion.id, formData.initialNotes, formData.publicMessage); setShowingBox(false); navigate(0) }}
                    onCancel={() => setShowingBox(false)} />

            </form>
        </div>
    )
}
import { getReviewers } from '@utils/api-handlers/users/get-reviewers';

function DeferOverlay({ showing, suggestion }) {
    const defaultData = {
        reviewerMessage: '',
        publicMessage: '',
        reviewers: [],
    }

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

    const navigate = useNavigate()
    const { formData, onFormChange, resetForm } = useForm(defaultData)

    const [showingBox, setShowingBox] = useState(false)
    const { assignReviewers } = useSuggestion()


    if (loading) {
        return <p style={{ color: 'black' }}>Loading...</p>;
    }

    if (!showing) return null;
    return (
        <div className='flex col'>
            <h2>Defer to Reviewer</h2>
            <form className='flex col'>

                <label htmlFor='private'>Initial Notes for Reviewer</label>
                <textarea onChange={(e) => onFormChange('reviewerMessage', e.target.value)} name='private' />
                <label htmlFor='public'>Message to Submitter</label>
                <textarea onChange={(e) => onFormChange('publicMessage', e.target.value)} name='public' />
                {reviewers.map(r => (
                    <div className='flex' key={r.id}>
                        <input
                            id={r.id}
                            type='checkbox'
                            name='reviewers'
                            value={r.id}
                            checked={formData.reviewers?.includes(r.id) || false}
                            onChange={(e) => {
                                const isChecked = e.target.checked;
                                const value = r.id;

                                let updatedReviewers = formData.reviewers || [];

                                if (isChecked) {
                                    updatedReviewers = [...updatedReviewers, value];
                                } else {
                                    updatedReviewers = updatedReviewers.filter(id => id !== value);
                                }

                                onFormChange('reviewers', updatedReviewers);
                            }}
                        />
                        <label htmlFor={r.id}>{r.name}</label>
                    </div>
                ))}


                <button type='button' className={`${styles.button} ${styles['button--defer']}`} onClick={() => setShowingBox(true)}>
                    Assign Reviewers
                </button>
                <OverlayModule
                    message={"Are you sure you want to defer this suggestion to reviewer?"}
                    showing={showingBox}
                    onConfirm={async () => { await assignReviewers(suggestion.id, formData.initialNotes, formData.publicMessage, formData.reviewers); setShowingBox(false); navigate(0) }}
                    onCancel={() => setShowingBox(false)} />



            </form>
        </div>
    )
}
