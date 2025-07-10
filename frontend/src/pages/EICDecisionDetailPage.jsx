import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/EICDecisionDetailPage.css';
import '../styles/EICDecisionPage.css';

const EICDecisionDetailPage = () => {
  const { proposalId } = useParams();
  const navigate = useNavigate();
  const [proposal, setProposal] = useState(null);
  const [eicDecision, setEicDecision] = useState('');
  const [eicJustification, setEicJustification] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/api/eic/proposal/${proposalId}`)
      .then((res) => setProposal(res.data))
      .catch(() => setError('Failed to load proposal'));
  }, [proposalId]);

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/api/eic/decision/${proposalId}`, {
      eicDecision,
      eicJustification
    }).then(() => {
      alert('Decision submitted');
      navigate('/eic/decisions');
    }).catch(() => {
      setError('Failed to submit decision');
    });
  };

  if (error) return <p>{error}</p>;
  if (!proposal) return <p>Loading proposal</p>;

  return (
    <div className="eic-decision-detail">
      <h2>{proposal.title}</h2>
      <p><strong>Summary:</strong> {proposal.summary}</p>
      <p><strong>AE Recommendation:</strong> {proposal.aeRecommendation}</p>

      <label>
        EIC Decision:
        <select value={eicDecision} onChange={(e) => setEicDecision(e.target.value)}>
          <option value="">Select</option>
          <option value="Approve">Approve</option>
          <option value="Reject">Reject</option>
          <option value="Revise">Request Revision</option>
        </select>
      </label>

      <label>
        Justification:
        <textarea value={eicJustification} onChange={(e) => setEicJustification(e.target.value)} />
      </label>

      <button onClick={handleSubmit}>Submit Decision</button>
    </div>
  );
};

export default EICDecisionDetailPage;
