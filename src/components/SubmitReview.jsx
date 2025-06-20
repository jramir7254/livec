import React, { useState } from 'react';
import axios from 'axios';

const SubmitReview = ({ proposalId, reviewerId }) => {
  const [recommendation, setRecommendation] = useState('');
  const [justification, setJustification] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('/api/reviews/submit', {
        proposalId,
        reviewerId,
        recommendation,
        justification,
      });
      setMessage('Review submitted successfully');
    } catch (error) {
      console.error(error);
      setMessage('Error submitting review');
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Submit Review</h2>
      <textarea
        className="w-full p-2 border rounded mb-3"
        rows="5"
        placeholder="Enter your justification"
        value={justification}
        onChange={(e) => setJustification(e.target.value)}
      />
      <select
        className="w-full p-2 border rounded mb-3"
        value={recommendation}
        onChange={(e) => setRecommendation(e.target.value)}
      >
        <option value="">Select Recommendation</option>
        <option value="accept">Accept</option>
        <option value="revise">Request Revision</option>
        <option value="reject">Reject</option>
      </select>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit Review
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default SubmitReview;
