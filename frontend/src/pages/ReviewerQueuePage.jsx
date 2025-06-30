import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ReviewerQueuePage = ({ reviewerId }) => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    axios.get(`/api/reviewer/queue/${reviewerId}`)
      .then(res => setProposals(res.data));
  }, [reviewerId]);

  return (
    <div>
      <h2>My Proposal Queue</h2>
      {proposals.map(p => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <Link to={`/proposal/${p._id}/history?segmentId=${p.segmentId}`}>
            View Segment History
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ReviewerQueuePage;