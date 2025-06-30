import React, { useEffect, useState } from 'react';
import { fetchReviewerProposals } from '../services/api';
import ProposalReviewCard from '../components/ProposalReviewCard';

const ReviewerDashboard = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetchReviewerProposals().then(res => setProposals(res.data));
  }, []);

  return (
    <div>
      <h2>Reviewer Dashboard</h2>
      {proposals.map(p => (
        <ProposalReviewCard key={p._id} proposal={p} />
      ))}
    </div>
  );
};

export default ReviewerDashboard;
