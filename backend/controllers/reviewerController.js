import Proposal from '../models/Proposal.js';

export const getReviewerQueue = async (req, res) => {
  const { reviewerId } = req.params;
  const proposals = await Proposal.find({ assignedReviewers: reviewerId });
  res.json(proposals);
};

export const getProposalHistory = async (req, res) => {
  const { segmentId } = req.params;
  const history = await Proposal.find({ segmentId });
  res.json(history);
};

// import Proposal from '../models/Proposal.js';

// export const getAssignedProposals = async (req, res) => {
//   try {
//     const reviewerId = req.query.reviewerId;
//     const proposals = await Proposal.find({ assignedReviewers: reviewerId });
//     res.json(proposals);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching proposals' });
//   }
// };

// export const submitProposalFeedback = async (req, res) => {
//   try {
//     const { proposalId } = req.params;
//     const { reviewerId, comments, merits, recommendation } = req.body;

//     const proposal = await Proposal.findById(proposalId);
//     proposal.reviewerFeedback.push({ reviewerId, comments, merits, recommendation });
//     await proposal.save();

//     res.json({ message: 'Feedback submitted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error submitting feedback' });
//   }
// };