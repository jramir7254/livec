import React from 'react';
import { useParams } from 'react-router-dom';

const ProposalHistory = () => {
  const { proposalId } = useParams();
  return <div>History view for Proposal {proposalId}</div>;
};

export default ProposalHistory;
