import express from 'express';
import { getReviewerQueue, getProposalHistory } from '../controllers/reviewerController.js';
const router = express.Router();

router.get('/queue/:reviewerId', getReviewerQueue);
router.get('/history/:segmentId', getProposalHistory);

export default router;

// import express from 'express';
// import {
//   getAssignedProposals,
//   submitProposalFeedback
// } from '../controllers/reviewerController.js';

// const router = express.Router();

// router.get('/proposals', getAssignedProposals);
// router.post('/proposals/:proposalId/feedback', submitProposalFeedback);

// export default router;

// import express from 'express';

// const router = express.Router();

// const reviewerQueue = {
//   r123: [
//     { proposalId: 'p1', title: 'Add AI Ethics Section', segment: 'AI Ethics', history: ['Initial Suggestion', 'Revised Suggestion'] },
//     { proposalId: 'p2', title: 'Update Data Structures Topic', segment: 'Algorithms', history: ['Initial Draft'] },
//   ]
// };

// router.get('/:reviewerId/queue', (req, res) => {
//   const { reviewerId } = req.params;
//   const queue = reviewerQueue[reviewerId] || [];
//   res.json(queue);
// });

// router.post('/:reviewerId/proposal/:proposalId/feedback', (req, res) => {
//   const { reviewerId, proposalId } = req.params;
//   const { feedback } = req.body;
//   console.log(`Feedback from ${reviewerId} on ${proposalId}:`, feedback);
//   res.json({ message: 'Feedback received' });
// });

// export default router;
