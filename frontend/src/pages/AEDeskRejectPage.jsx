import React, { useState } from 'react';
import axios from 'axios';
import './AEDeskRejectPage.css';

const AEDeskRejectPage = ({ proposalId, aeId }) => {
  const [justification, setJustification] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.patch(`/api/desk-reject/${proposalId}/desk-reject`, {
        aeId,
        justification,
      });
      setMessage('Desk rejection justification submitted successfully');
    } catch (error) {
      console.error(error);
      setMessage('Failed to submit desk rejection');
    }
  };

  return (
    <div className="desk-reject-container">
      <h2>Desk Reject Justification</h2>
      <textarea
        className="justification-input"
        placeholder="Enter justification"
        value={justification}
        onChange={(e) => setJustification(e.target.value)}
      />
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};

export default AEDeskRejectPage;
