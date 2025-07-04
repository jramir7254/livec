import { UserContext } from '@context/UserProvider';
import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StatusIcon from '@components/Table/StatusIcon';
import styles from './ViewSuggestion.module.scss';
import { BackButton } from '@components/Buttons';
import { toTitleCase, formatDate, Status, Roles } from '@utils/constants.js';
import { getSuggestion } from '@utils/suggestionHandler';
import { RejectButton } from '../roles/associate-editor/triage-options/TriageReject';


const EmptyComponent = () => (<>Empty Component</>)


export default function ViewSuggestion() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()
    const [suggestion, setSuggestion] = useState({})
    const [loading, setLoading] = useState(true)
    const [Overlay, setOverlay] = useState(() => EmptyComponent)
    const { suggestionId } = useParams();

    useEffect(() => {
        getSuggestion(suggestionId)
            .then(res => setSuggestion(res))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [suggestionId]);


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

    const status = user.role === Roles.COMMUNITY_MEMBER ? suggestion.status.public : suggestion.status.private;
    const isAdmin = user.role != Roles.COMMUNITY_MEMBER;

    const gridFormat = isAdmin ? "'M H' 'M S'" : "'H H' 'M S'"
    const cssClass = isAdmin ? 'layout--ae' : 'layout--member'

    return (
        <section style={{ '--grid-format': gridFormat }} className={styles['layout']}>

            {/* Header with progress bar */}

            <div className={styles.header}>
                {user.role === Roles.COMMUNITY_MEMBER && <ProgressBar progress={45} />}
                {user.role === Roles.ASSOCIATE_EDITOR && <TriageButtons setOverlay={setOverlay} />}
            </div>



            {/* Main panel showing the suggestino info */}

            <div className={styles['main-content']}>
                <BackButton to={`/dashboard/${user.id}`} />

                {/* Suggestion detail info (status, discipline, id...) */}

                <div className={styles['main-content__header']}>
                    <div>
                        <h1 className={styles.header__title}> {suggestion.title || "Untitled"} </h1>
                        <p className={styles.header__date}>Submitted on {formatDate(suggestion.timeCreated)}</p>
                        <hr className={styles.header__divider} />
                    </div>


                    <div className={styles.header__meta}>
                        <h3 className={styles['meta-item']}><strong>Reference ID:</strong> {suggestion.id}</h3>
                        <h3 className={styles['meta-item']}><strong>Discipline: </strong>{toTitleCase(suggestion.discipline)}</h3>
                        <h3 className={styles['meta-item']}><strong>Current Status: </strong>{<StatusIcon status={status} />}</h3>
                    </div>
                </div>



                {/* The text content containing the suggestion */}

                <div className={styles.text}>
                    <p>{suggestion.suggestion}</p>
                </div>
            </div>



            {/* Side content pane to the right */}

            <div className={styles['side-content']}>

                {!isAdmin ? (
                    <>
                        <h2>Feedback</h2>
                        <p>
                            {suggestion.meta.publicMessage}
                        </p>
                    </>
                ) : (
                    <DifferentComponent />
                )}

            </div>

        </section>
    );
}

import Editor from '@components/Editor'
import { EditorGroup, SubmitButton } from '@components/Editor/EditorGroup';
import Modal, { DefaultView, ConfirmationView } from '@components/Overlays/Modal';
const passedFunc = (data) => {
    console.log("method call:", data)
}


function DifferentComponent() {
    return (
        <EditorGroup>
            <Editor field={{ key1: '' }} />
            <Editor field={{ key2: '' }} />
            <SubmitButton onSubmit={passedFunc}>
                <Modal>
                    <DefaultView message={"Are you sure you want to Reject?"}>
                        <p>This wil turn status from</p>
                        <div><StatusIcon status={'assigned'}/> → <StatusIcon status={'rejected'}/></div>
                    </DefaultView>
                    <ConfirmationView message={"This is a after confirmation"}/>
                </Modal>
            </SubmitButton>
        </EditorGroup>
    )
}



function ProgressBar({ progress }) {
    return (
        <div className='progress-container'>
            <div className='progress-actual' style={{ width: `${progress}%` }} />
            <div className="progress-labels">
                <span className="progress-label">Submitted</span>
                <span className="progress-label">Assigned</span>
                <span className="progress-label">Under Review</span>
                <span className="progress-label">Under Consideration</span>
            </div>

        </div>
    );
}



const TriageButtons = ({ setOverlay }) => {
    return (
        <div>
            <RejectButton setOverlay={setOverlay} />
        </div>
    )
}
