import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AEHistoryPage = ({ aeId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/proposals/history/ae/${aeId}`)
      .then(res => setHistory(res.data))
      .catch(err => console.error('Error fetching history:', err));
  }, [aeId]);

  return (
    <div>
      <h2>Proposal & Decision History</h2>
      {history.length === 0 ? <p>No history found</p> : (
        <ul>
          {history.map(p => (
            <li key={p._id}>
              <strong>{p.title}</strong><br />
              Segment: {p.segment}<br />
              Created: {new Date(p.createdAt).toLocaleDateString()}<br />
              Reviews: {p.reviews.length}, Final Rec: {p.recommendation?.justification || 'N/A'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AEHistoryPage;
