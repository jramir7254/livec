import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/EICDecisionPage.css'; 

const EICHistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/eic/history')
      .then((res) => setHistory(res.data))
      .catch((err) => {
        console.error('Error fetching history:', err);
        setHistory([]);
      });
  }, []);

  return (
    <div className="eic-decision-page">
      <h1 className="eic-title">Proposal and Decision History</h1>
      {history.length === 0 ? (
        <p>No history available</p>
      ) : (
        history.map((entry) => (
          <div key={entry.proposalId} className="proposal-card">
            <h2>{entry.title}</h2>
            <p><strong>AE Recommendation:</strong> {entry.aeRecommendation}</p>
            <p><strong>EIC Decision:</strong> {entry.eicDecision}</p>
            <p><strong>Final Decision:</strong> {entry.finalDecision}</p>
            <p><strong>Date:</strong> {entry.timestamp}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default EICHistoryPage;
