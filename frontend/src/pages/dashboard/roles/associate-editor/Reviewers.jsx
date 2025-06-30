import styles from './AssociateEditor.module.css';
import { getReviewers } from '@utils/api-handlers/users/get-reviewers';
import { UserContext } from '@context/UserProvider';
import { useContext, useEffect, useState } from 'react';


export default function Reviewers() {
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
		<section className={styles.reviewers}>
			<div className={styles.block}>
				<h2>Active Reviewers</h2>
				<ul style={{ color: 'black' }}>
					{/* {reviewers.map(item => (
						<li key={item.id}>{item.name}</li>
					))} */}
				</ul>
			</div>

			<div className={styles.block}>
				<h2>Idle Reviewers</h2>

			</div>
		</section>
	);
}
