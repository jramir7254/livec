import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AEFinalRecommendationPage = () => {
  const { proposalId, aeId } = useParams();
  const [recommendation, setRecommendation] = useState('');
  const [justification, setJustification] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/api/proposals/${proposalId}/final-recommendation`, {
        aeId,
        recommendation,
        justification,
      });
      setMessage('Recommendation submitted successfully');
    } catch (err) {
      setMessage('Error submitting recommendation');
    }
  };

  return (
    <div>
      <h2>Final Recommendation for Proposal {proposalId}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recommendation:
          <select value={recommendation} onChange={(e) => setRecommendation(e.target.value)} required>
            <option value="">Select</option>
            <option value="include">Include in next version</option>
            <option value="exclude">Exclude from next version</option>
          </select>
        </label>
        <br />
        <label>
          Justification:
          <textarea
            value={justification}
            onChange={(e) => setJustification(e.target.value)}
            required
            rows={4}
          />
        </label>
        <br />
        <button type="submit">Submit Recommendation</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AEFinalRecommendationPage;
