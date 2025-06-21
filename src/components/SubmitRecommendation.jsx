import React, { useState } from 'react';
import axios from 'axios';

const SubmitRecommendation = ({ proposalId, aeId }) => {
  const [decision, setDecision] = useState('');
  const [justification, setJustification] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('/api/recommendations/submit', {
        proposalId,
        aeId,
        decision,
        justification,
      });
      setMessage('Recommendation submitted to the Editor-in-Chief');
    } catch (err) {
      console.error(err);
      setMessage('Error submitting recommendation');
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Submit Final Recommendation</h2>
      <select
        className="w-full p-2 border rounded mb-3"
        value={decision}
        onChange={(e) => setDecision(e.target.value)}
      >
        <option value="">Select Decision</option>
        <option value="include">Include in Next Version</option>
        <option value="exclude">Exclude from Next Version</option>
      </select>
      <textarea
        className="w-full p-2 border rounded mb-3"
        rows={5}
        placeholder="Justify your decision"
        value={justification}
        onChange={(e) => setJustification(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Submit Recommendation
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default SubmitRecommendation;
