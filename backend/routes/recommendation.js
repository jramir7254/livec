import express from 'express';
import sendEmail from '../utils/email.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  const {
    proposalId,
    associateEditorId,
    decision,
    justification,
    contributorEmail,
  } = req.body;

  if (!proposalId || !associateEditorId || !decision || !justification || !contributorEmail) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  console.log(`[DB] Saved recommendation for proposal ${proposalId}`);

  try {
    await sendEmail({
      to: contributorEmail,
      subject: `Decision on Your LiveC Proposal ${proposalId}`,
      body: `Hello,\n\nYour proposed change has been reviewed\n\nDecision: ${decision}\n\nJustification: ${justification}\n\nThank you,\nLiveC Editorial Team`,
    });

    console.log(`[Community] Public notification: Proposal ${proposalId} → ${decision.toUpperCase()}`);
    
    res.status(200).json({ message: 'Recommendation and notifications sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Notification failed' });
  }
});

export default router;
