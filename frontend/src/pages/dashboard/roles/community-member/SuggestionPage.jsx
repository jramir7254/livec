import { UserContext } from '@context/UserProvider';
import { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StatusIcon from '@components/Table/StatusIcon';
import styles from './SuggestionPage.module.css';
import { BackButton } from '@components/Buttons';
import { toTitleCase, formatDate, Status } from '@utils/constants.js';
import { getSuggestion } from '../../../../utils/suggestionHandler';
import { useParams } from 'react-router-dom';



export default function SuggestionPage() {
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


    return (
        <section className={styles.container}>

            <div className={styles.content}>
                <BackButton to={`/dashboard/${user.id}`} />
                <div className={styles.header}>

                    <div>
                        <h1 className={styles.title}>{suggestion.title || "Untitled"}</h1>
                        <p>Submitted on {formatDate(suggestion.timeCreated)}</p>
                        <hr />
                    </div>
                    <div className={styles.headings}>

                        <h3 className={styles.heading}><strong>Reference ID:</strong> {suggestion.id}</h3>
                        <h3 className={styles.heading}><strong>Discipline: </strong>{toTitleCase(suggestion.discipline)}</h3>
                        <h3 className={styles.heading}><strong>Current Status: </strong>{<StatusIcon status={suggestion.status.public} />}</h3>
                    </div>
                </div>
                <div className={styles.text}>
                    <p>{suggestion.suggestion}</p>

                </div>
            </div>

            <div className={styles.feedback}>
                <h2>Feedback</h2>
                <p>
                    {suggestion.meta.publicMessage}
                </p>
            </div>
            
        </section>
    );
}

