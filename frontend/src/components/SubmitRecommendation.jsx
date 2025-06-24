import React, { useState } from 'react';
import axios from 'axios';

const [contributorEmail, setContributorEmail] = useState('');

const SubmitRecommendation = ({ proposalId, aeId }) => {
  const [decision, setDecision] = useState('');
  const [justification, setJustification] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/api/recommendation/submit', {
        proposalId,
        associateEditorId,
        decision,
        justification,
        contributorEmail, 
      });
      setMessage('Recommendation submitted and notifications sent');
    } catch (err) {
      console.error(err);
      setMessage('Error submitting recommendation');
    }
  }; 

  <input
    type="email"
    className="w-full p-2 border rounded mb-3"
    placeholder="Contributor Email"
    value={contributorEmail}
    onChange={(e) => setContributorEmail(e.target.value)}
  />

  return (
    <div className="p-6 max-w-xl bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Submit Recommendation</h2>
      <select
        value={decision}
        onChange={(e) => setDecision(e.target.value)}
        className="w-full p-2 border rounded mb-3"
      >
        <option value="">Select Decision</option>
        <option value="include">Include in Next Version</option>
        <option value="exclude">Exclude from Next Version</option>
      </select>
      <textarea
        value={justification}
        onChange={(e) => setJustification(e.target.value)}
        placeholder="Justification"
        className="w-full p-2 border rounded mb-3"
        rows="4"
      />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default SubmitRecommendation;
