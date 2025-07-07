import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AERevisionResponsePage = () => {
  const { proposalId } = useParams();
  const [revisedText, setRevisedText] = useState('');
  const [justification, setJustification] = useState('');

  const handleSubmit = async () => {
    try {
      await axios.post('/api/revision-response', {
        proposalId,
        revisedText,
        justification,
        aeId: 'ae123' 
      });
      alert('Revision response submitted');
    } catch (err) {
      console.error(err);
      alert('Error submitting response');
    }
  };

  return (
    <div>
      <h2>Respond to EIC Revision Request</h2>
      <label>Revised Text</label>
      <textarea value={revisedText} onChange={(e) => setRevisedText(e.target.value)} rows={10} style={{ width: '100%' }} />
      <label>Justification</label>
      <textarea value={justification} onChange={(e) => setJustification(e.target.value)} rows={5} style={{ width: '100%' }} />
      <button onClick={handleSubmit}>Submit Response</button>
    </div>
  );
};

export default AERevisionResponsePage;
