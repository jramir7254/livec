import styles from './StatusIcon.module.scss';
import { Status, toTitleCase, Step } from '@utils/constants.js';
import { useContext } from 'react';
import { UserContext } from '@context/UserProvider';

const statusMap = {
    [Status.SUBMITTED]:  'status--submitted' ,
    [Status.REJECTED]: 'status--rejected' ,
    [Status.ASSIGNED]: 'status--assigned' ,
    [Status.UNDER_REVIEW]:  'status--under-review' ,
    [Status.UNDER_CONSIDERATION]:  'status--under-consideration' ,
    [Status.ACCEPTED]:  'status--accepted',
};

const stepMap = {
    [Step.AWAITING_INITIAL_RESPONSE]:  'step--initial' ,
    [Status.REJECTED]: 'status--rejected' ,
    [Status.ASSIGNED]: 'status--assigned' ,
    [Step.REVIEWING]:  'status--under-review' ,
    [Status.UNDER_CONSIDERATION]:  'status--under-consideration' ,
    [Status.ACCEPTED]:  'status--accepted',
};

export default function StatusIcon({ status, rand = false }) {
    const { user, loading } = useContext(UserContext);

    if (loading) return <p>loading...</p>

    const statusType = (user.role === 'community-member') || rand ? statusMap[status] : stepMap[status]

    if (!statusType) {
        return <div className={styles.unknown}>Unknown</div>;
    }

    return (
        <div className={`${styles['status-badge']} ${styles[statusType]}`}>
            {toTitleCase(status)}
        </div>
    );
}
