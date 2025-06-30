import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const ProposalHistoryPage = () => {
  const { proposalId } = useParams();
  const [searchParams] = useSearchParams();
  const segmentId = searchParams.get('segmentId');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get(`/api/reviewer/history/${segmentId}`)
      .then(res => setHistory(res.data));
  }, [segmentId]);

  return (
    <div>
      <h2>Proposal History for Segment</h2>
      {history.map(h => (
        <div key={h._id}>
          <h3>{h.title}</h3>
          <p>{h.description}</p>
          <p>Status: {h.status}</p>
        </div>
      ))}
    </div>
  );
};

export default ProposalHistoryPage;