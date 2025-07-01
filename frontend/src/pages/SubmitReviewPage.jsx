import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SubmitReviewPage = () => {
  const { proposalId, reviewerId } = useParams();
  const [recommendation, setRecommendation] = useState('');
  const [justification, setJustification] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/review/submit', {
        proposalId,
        reviewerId,
        recommendation,
        justification,
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit review', error);
    }
  };

  return (
    <div>
      <h2>Submit Recommendation</h2>
      {submitted ? (
        <p>Thank you, Your review has been submitted</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Recommendation:
            <select value={recommendation} onChange={(e) => setRecommendation(e.target.value)} required>
              <option value="">Select</option>
              <option value="include">Include</option>
              <option value="exclude">Exclude</option>
              <option value="revise">Revise</option>
            </select>
          </label>
          <br />
          <label>
            Justification:
            <textarea value={justification} onChange={(e) => setJustification(e.target.value)} required />
          </label>
          <br />
          <button type="submit">Submit Review</button>
        </form>
      )}
    </div>
  );
};

export default SubmitReviewPage;
