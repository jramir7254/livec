import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/EICDecisionPage.css';
import { useNavigate } from 'react-router-dom';

const EICDecisionPage = () => {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/eic/proposals-for-eic')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setProposals(res.data);
        } else {
          setError('Invalid data format received');
          setProposals([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching proposals:', err);
        setError('Failed to load proposals');
        setLoading(false);
      });
  }, []);

  return (
    <div className="eic-decision-page">
      <h1 className="eic-title">EIC Proposal Review</h1>

      {loading && <p>Loading proposals...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && proposals.length === 0 && <p>No proposals available for review</p>}

      <div className="proposal-list">
        {proposals.map((proposal) => (
          <div key={proposal._id} className="proposal-card">
            <h3>{proposal.title}</h3>
            <p><strong>Summary:</strong> {proposal.summary}</p>
            <p><strong>AE Recommendation:</strong> {proposal.aeRecommendation}</p>
            <button
              onClick={() => window.location.href = `/eic/decision/${proposal._id}`}
              className="decision-button"
            >
              Make Decision
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EICDecisionPage;
