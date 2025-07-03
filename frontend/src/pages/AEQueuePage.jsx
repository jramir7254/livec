import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AEQueuePage() {
  const [proposals, setProposals] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [merits, setMerits] = useState('');
  const [justification, setJustification] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/ae/queue')
      .then(res => setProposals(res.data))
      .catch(err => console.error(err));
  }, []);

  const submitFeedback = () => {
    axios.post(`http://localhost:3001/api/ae/feedback/${selectedProposal._id}`, {
      merits,
      justification,
      aeId: 'ae123'  
    }).then(() => {
      alert('Feedback submitted');
      setSelectedProposal(null);
    });
  };

  return (
    <div>
      <h2>AE Proposal Queue</h2>
      <ul>
        {proposals.map(p => (
          <li key={p._id} onClick={() => setSelectedProposal(p)}>
            {p.title}
          </li>
        ))}
      </ul>

      {selectedProposal && (
        <div>
          <h3>{selectedProposal.title}</h3>
          <textarea
            placeholder="Merits"
            value={merits}
            onChange={e => setMerits(e.target.value)}
          />
          <textarea
            placeholder="Justification"
            value={justification}
            onChange={e => setJustification(e.target.value)}
          />
          <button onClick={submitFeedback}>Submit Feedback</button>
        </div>
      )}
    </div>
  );
}

export default AEQueuePage;
