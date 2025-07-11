import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/EICDecisionPage.css'; 

const EICSingleDecisionPage = () => {
  const { id } = useParams();
  const [proposal, setProposal] = useState(null);
  const [decision, setDecision] = useState('');
  const [justification, setJustification] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/eic/proposals/${id}`)
      .then((res) => {
        setProposal(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleSubmit = async () => {
    if (justification.length > 500) {
      alert("Justification must be under 500 characters");
      return;
    }

    try {
      await axios.post(`http://localhost:3001/api/eic/decide/${id}`, {
        decision,
        justification
      });
      alert('Decision submitted');
    } catch (err) {
      alert('Failed to submit decision');
    }
  };

  if (loading) return <p>Loading</p>;
  if (!proposal) return <p>Proposal not found</p>;

  return (
    <div className="eic-decision-page">
      <h1 className="eic-title">{proposal.title}</h1>
      <div className="proposal-card">
        <p><strong>Summary:</strong> {proposal.summary}</p>
        <p><strong>AE Recommendation:</strong> {proposal.aeRecommendation}</p>

        <label><strong>EIC Decision:</strong></label>
        <select value={decision} onChange={(e) => setDecision(e.target.value)}>
          <option value="">Select</option>
          <option value="approve">Approve</option>
          <option value="reject">Reject</option>
          <option value="revise">Request Revision</option>
        </select>

        <label><strong>Justification:</strong></label>
        <textarea
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
          maxLength={500}
          placeholder="Enter your justification (max 500 characters)"
        />

        <p className="char-counter">{justification.length}/500</p>

        <button className="decision-button" onClick={handleSubmit}>Submit Decision</button>
      </div>
    </div>
  );
};

export default EICSingleDecisionPage;
