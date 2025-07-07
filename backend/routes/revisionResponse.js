import express from 'express';
import RevisionResponse from '../models/RevisionResponse.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { proposalId, revisedText, justification, aeId } = req.body;

  try {
    const response = new RevisionResponse({
      proposalId,
      revisedText,
      justification,
      aeId
    });

    await response.save();
    res.status(201).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit revision response' });
  }
});

export default router;
