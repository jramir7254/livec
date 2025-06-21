const express = require('express');
const router = express.Router();
const Recommendation = require('../models/Recommendation');

router.post('/submit', async (req, res) => {
  const { proposalId, aeId, decision, justification } = req.body;

  try {
    const rec = new Recommendation({ proposalId, aeId, decision, justification });
    await rec.save();
    res.status(201).json({ message: 'Recommendation saved' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error saving recommendation' });
  }
});

module.exports = router;
