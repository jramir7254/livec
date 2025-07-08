import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AERevisionResponsePage.css';  

const AERevisionResponsePage = () => {
  const { proposalId } = useParams();
  const [revisedText, setRevisedText] = useState('');
  const [justification, setJustification] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    try {
      await axios.post('/api/revision-response', {
        proposalId,
        revisedText,
        justification,
        aeId: 'ae123', 
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert('Error submitting revision response');
    }
  };

  return (
    <div className="ae-revision-page">
      <h2>Respond to EIC Revision Request</h2>

      <label htmlFor="revisedText">Revised Text</label>
      <textarea
        id="revisedText"
        value={revisedText}
        onChange={(e) => setRevisedText(e.target.value)}
        placeholder="Make your revisions here"
      />

      <label htmlFor="justification">Justification</label>
      <textarea
        id="justification"
        value={justification}
        onChange={(e) => setJustification(e.target.value)}
        placeholder="Explain your changes"
        style={{ minHeight: '80px' }}
      />

      <button className="submit-btn" onClick={handleSubmit} disabled={submitted}>
        {submitted ? 'Submitted' : 'Submit Response'}
      </button>

      {submitted && <p style={{ marginTop: '1rem', color: '#2f855a' }}>Response submitted successfully</p>}
    </div>
  );
};

export default AERevisionResponsePage;
