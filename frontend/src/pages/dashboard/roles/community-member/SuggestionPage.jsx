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

            <div className={styles.progress}>
                <ProgressBar progress={66} />

            </div>

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
                {/* <h2>Feedback</h2>
                <p>
                    {suggestion.meta.publicMessage}
                </p> */}
                <Tab content={suggestion.meta.publicMessage} />
            </div>

        </section>
    );
}

import React from 'react'

const Tab = ({ content }) => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <>
            {/* Tab Buttons */}
            <div className="tab-buttons">
                <button
                    className={activeTab === 'tab1' ? 'active' : ''}
                    onClick={() => setActiveTab('tab1')}
                >
                    Feedback
                </button>
                <button
                    className={activeTab === 'tab2' ? 'active' : ''}
                    onClick={() => setActiveTab('tab2')}
                >
                    Progress
                </button>
                <button
                    className={activeTab === 'tab3' ? 'active' : ''}
                    onClick={() => setActiveTab('tab3')}
                >
                    Tab 3
                </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {activeTab === 'tab1' && <div>{content}</div>}
                {activeTab === 'tab2' &&
                    <div>
                        <ul class="tree">
                            <li>
                                <div class="node complete">Root Node</div>
                                <ul>
                                    <li>
                                        <div class="node in-progress">Child Node 1</div>
                                    </li>
                                    <li>
                                        <div class="node pending">Child Node 2</div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>}
                {activeTab === 'tab3' && <div>
                </div>}
            </div>
        </>
    );
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

// Usage:
