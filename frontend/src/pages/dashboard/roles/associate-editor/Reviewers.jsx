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
		<section className={''}>

		</section>
	);
}
