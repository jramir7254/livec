import { useParams, useSearchParams } from 'react-router-dom';
import SubmitRecommendation from '../components/SubmitRecommendation';

const RecommendationPage = () => {
  const { proposalId } = useParams();
  const [searchParams] = useSearchParams();
  const associateEditorId = searchParams.get('aeId');

  if (!proposalId || !associateEditorId) {
    return <p className="p-6 text-red-600">Missing proposal ID or AE ID.</p>;
  }

  return (
    <SubmitRecommendation
      proposalId={proposalId}
      associateEditorId={associateEditorId}
    />
  );
};

export default RecommendationPage;
