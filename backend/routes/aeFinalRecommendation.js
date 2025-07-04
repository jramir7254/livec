import express from 'express';
import Proposal from '../models/Proposal.js';

const router = express.Router();

router.get('/:proposalId/feedback', async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.proposalId).populate('reviews');
    if (!proposal) return res.status(404).json({ error: 'Proposal not found' });
    res.json({ aeFeedback: proposal.aeFeedback, reviews: proposal.reviews });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/:proposalId/finalize', async (req, res) => {
  try {
    const { finalRecommendation, publicFeedback } = req.body;
    const proposal = await Proposal.findByIdAndUpdate(
      req.params.proposalId,
      {
        finalRecommendation,
        publicFeedback,
        aeFinalized: true,
      },
      { new: true }
    );
    res.json(proposal);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
