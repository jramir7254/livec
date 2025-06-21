import React from 'react';
import SubmitRecommendation from '../components/SubmitRecommendation';
import { useParams } from 'react-router-dom';

const AERecommendationPage = () => {
  const { proposalId } = useParams();
  const aeId = 'ae123'; 

  return (
    <div className="p-6">
      <SubmitRecommendation proposalId={proposalId} aeId={aeId} />
    </div>
  );
};

export default AERecommendationPage;
