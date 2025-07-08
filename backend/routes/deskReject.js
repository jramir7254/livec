import express from 'express';
import Proposal from '../models/Proposal.js';

const router = express.Router();

router.patch('/:proposalId/desk-reject', async (req, res) => {
  try {
    const { proposalId } = req.params;
    const { aeId, justification } = req.body;

    const proposal = await Proposal.findById(proposalId);
    if (!proposal) return res.status(404).json({ message: 'Proposal not found' });

    proposal.status = 'desk_rejected';
    proposal.aeDeskRejection = {
      aeId,
      justification,
      date: new Date()
    };

    await proposal.save();
    res.json({ message: 'Desk rejection justification saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while submitting justification' });
  }
});

export default router;
