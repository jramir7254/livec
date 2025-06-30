import { UserContext } from '@context/UserProvider';
import { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import StatusIcon from '@components/Table/StatusIcon';
import styles from './SuggestionPage.module.css';
import { BackButton } from '@components/Buttons';
import { toTitleCase, formatDate, Status } from '@utils/constants';
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

                <BackButton to={`/dashboard/${user.id}`}/>
                <h1>{suggestion.title || "Untitled"}</h1>
                <h3>Reference ID: {suggestion.id}</h3>
                <h3>Date Submitted: {formatDate(suggestion.timeCreated)}</h3>
                 <h3>Curicullum: {toTitleCase(suggestion.discipline)}</h3>
                <h3>Current Status: {<StatusIcon status={suggestion.status.public}/>}</h3>
                <p>{suggestion.suggestion}</p>
            </div>

            <div className={styles.tree}>
                {suggestion.status.public === Status.REJECTED &&
                <>
                <h2>Feedback</h2>
                    <p>
                        {suggestion.meta.publicMessage}
                    </p>
                </>
                }
            </div>
        </section>
    );
}

