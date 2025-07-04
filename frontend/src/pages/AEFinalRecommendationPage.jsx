import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AEFinalRecommendationPage = () => {
  const { proposalId } = useParams();
  const [aeFeedback, setAeFeedback] = useState('');
  const [reviews, setReviews] = useState([]);
  const [finalRecommendation, setFinalRecommendation] = useState('');
  const [publicFeedback, setPublicFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    axios.get(`/api/ae-final-recommendation/${proposalId}/feedback`)
      .then(res => {
        setAeFeedback(res.data.aeFeedback || '');
        setReviews(res.data.reviews || []);
      });
  }, [proposalId]);

  const handleSubmit = () => {
    axios.post(`/api/ae-final-recommendation/${proposalId}/finalize`, {
      finalRecommendation,
      publicFeedback,
    }).then(() => setSubmitted(true));
  };

  return (
    <div>
      <h2>Final AE Recommendation</h2>
      <h3>AE Feedback</h3>
      <p>{aeFeedback}</p>

      <h3>Reviewers' Feedback</h3>
      <ul>
        {reviews.map((r, i) => (
          <li key={i}>
            <strong>{r.reviewerId}</strong>: {r.recommendation} - {r.justification}
          </li>
        ))}
      </ul>

      <h3>Final Recommendation to EIC</h3>
      <textarea value={finalRecommendation} onChange={e => setFinalRecommendation(e.target.value)} placeholder="Final recommendation..." />

      <h3>Public Feedback</h3>
      <textarea value={publicFeedback} onChange={e => setPublicFeedback(e.target.value)} placeholder="Public feedback to community..." />

      <button onClick={handleSubmit}>Submit Final Recommendation</button>

      {submitted && <p>Recommendation submitted successfully</p>}
    </div>
  );
};

export default AEFinalRecommendationPage;
