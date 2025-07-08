import React, { useState } from 'react';

const SubmitRecommendation = ({ proposalId, aeId }) => {
  const [recommendation, setRecommendation] = useState('');
  const [justification, setJustification] = useState('');

  const handleSubmit = async () => {
    const payload = { proposalId, aeId, recommendation, justification };
    try {
      const res = await fetch('http://localhost:3001/api/recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        alert('Recommendation submitted successfully');
      } else {
        alert('Error submitting recommendation');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  return (
    <div>
      <h2>Submit Recommendation</h2>
      <textarea
        placeholder="Recommendation"
        value={recommendation}
        onChange={(e) => setRecommendation(e.target.value)}
      />
      <textarea
        placeholder="Justification"
        value={justification}
        onChange={(e) => setJustification(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitRecommendation;
