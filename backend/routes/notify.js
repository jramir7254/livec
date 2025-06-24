import express from 'express';
import sendEmail from '../utils/email.js';

const router = express.Router();

router.post('/send', async (req, res) => {
  const { proposalId, memberEmail, message } = req.body;

  if (!proposalId || !memberEmail || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  console.log(`[Public Notice] Feedback posted for Proposal ${proposalId}: ${message}`);

  await sendEmail({
    to: memberEmail,
    subject: `LiveC: Feedback on Proposal ${proposalId}`,
    body: `Dear contributor,\n\nAn Associate Editor has provided feedback:\n\n"${message}"\n\nBest,\nLiveC Editorial Team`,
  });

  res.status(200).json({ message: 'Notification and acknowledgment sent' });
});

export default router;
