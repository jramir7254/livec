import { UserContext } from '@context/UserProvider';
import { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StatusIcon from '@components/Table/StatusIcon';
import styles from './SuggestionView.module.scss';
import { BackButton } from '@components/Buttons';
import { toTitleCase, formatDate, Status, Roles } from '@utils/constants.js';
import { getSuggestion } from '@utils/suggestionHandler';


import { RejectOverlay2 } from '../roles/associate-editor/triage-options/TriageReject';
import { DeferOverlay } from '../roles/associate-editor/triage-options/TriageDefer';
import { StartOverlay } from '../roles/associate-editor/triage-options/TriageStart';




import { Button } from '../../../components/Buttons';





import useTabs from '@hooks/useTabs';

export default function SugestionView() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()
    const [suggestion, setSuggestion] = useState({})
    const [loading, setLoading] = useState(true)
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


    const isActive = suggestion.status.public === Status.ASSIGNED
    const css = !isActive && isAdmin ? 'layout--column' : 'layout--grid'
    let gridFormat = isAdmin ? "'H S' 'M S'" : "'H H' 'M S'"


    return (
        <section style={{ '--grid-format': gridFormat }} className={styles[css]}>

            <ActiveView suggestion={suggestion} isAdmin={isAdmin} user={user} status={status}/>
        </section>
    );
}



const ActiveView = ({suggestion, isAdmin, user, status}) => {
    const { setView, CurrentView } = useTabs({
        reject: <RejectOverlay2 suggestion={suggestion} />,
        defer: <DeferOverlay suggestion={suggestion} />,
        start: <StartOverlay suggestion={suggestion} />
    }, <Info />)

    const isActive = suggestion.status.public === Status.ASSIGNED


    return (
        <>

            <div className={styles.header}>
                {user.role === Roles.COMMUNITY_MEMBER && <ProgressBar progress={45} />}
                {(user.role === Roles.ASSOCIATE_EDITOR && isActive) && <TriageButtons setView={setView} />}
                {(user.role === Roles.ASSOCIATE_EDITOR && !isActive) && <div><button>Click</button></div>}
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

            {(isActive && isAdmin) && <div className={styles['side-content']}>
                {/* {CurrentView} */}

                {!isAdmin ? (
                    <>
                        <h2>Feedback</h2>
                        <p>
                            {suggestion.meta.publicMessages[0].text}
                        </p>
                    </>
                ) : (
                    CurrentView
                )}

            </div>}
        </>
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




const Info = () => {
    return (
        <div>
            <h2>Reject</h2>
            <p>You reject tghe thing</p>
            <h2>Start</h2>
            <p>You reject tghe thing</p>
            <h2>Defer</h2>
            <p>You reject tghe thing</p>
        </div>
    )
}






const TriageButtons = ({ setView }) => {
    return (
        <>
            <Button variant={'danger'} text={'Reject'} action={() => setView('reject')} />
            <Button variant={'blue'} text={'Start Review'} action={() => setView('start')} />
            <Button variant={'purple'} text={'Defer'} action={() => setView('defer')} />
        </>
    )
}
