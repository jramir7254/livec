import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ proposalId }) => {
  const [comments, setComments] = useState('');
  const [merits, setMerits] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const handleSubmit = async () => {
    await axios.post(`/api/reviewer/proposals/${proposalId}/feedback`, {
      reviewerId: 'r123', 
      comments,
      merits,
      recommendation
    });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <textarea placeholder="Merits" value={merits} onChange={e => setMerits(e.target.value)} />
      <textarea placeholder="Comments" value={comments} onChange={e => setComments(e.target.value)} />
      <select value={recommendation} onChange={e => setRecommendation(e.target.value)}>
        <option value="">Select</option>
        <option value="include">Recommend Inclusion</option>
        <option value="exclude">Recommend Exclusion</option>
      </select>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default ReviewForm;