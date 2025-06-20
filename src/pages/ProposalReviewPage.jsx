import SubmitReview from '../components/SubmitReview';
import ViewAssessments from '../components/ViewAssessments';

const ProposalReviewPage = ({ proposalId, reviewerId }) => (
  <>
    <SubmitReview proposalId={proposalId} reviewerId={reviewerId} />
    <ViewAssessments proposalId={proposalId} />
  </>
);

export default ProposalReviewPage;
