import express from 'express';
import Proposal from '../models/Proposal.js';

const router = express.Router();

router.post('/proposals/:proposalId/final-recommendation', async (req, res) => {
  const { proposalId } = req.params;
  const { aeId, recommendation, justification } = req.body;

  try {
    const proposal = await Proposal.findById(proposalId);
    if (!proposal) return res.status(404).json({ error: 'Proposal not found' });

    proposal.aeFinalRecommendation = {
      aeId,
      recommendation,
      justification,
      submittedAt: new Date(),
    };
    await proposal.save();
    res.json({ message: 'Final recommendation submitted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
