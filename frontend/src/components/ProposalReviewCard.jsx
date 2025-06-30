import React from 'react';
import { Link } from 'react-router-dom';

const ProposalReviewCard = ({ proposal }) => (
  <div className="proposal-card">
    <h3>{proposal.title}</h3>
    <p>{proposal.summary}</p>
    <Link to={`/proposal/${proposal._id}/history`}>View History</Link>
    <Link to={`/proposal/${proposal._id}/review`}>Submit Feedback</Link>
  </div>
);

export default ProposalReviewCard;