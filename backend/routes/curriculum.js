import express from 'express';
import Curriculum from '../models/Curriculum.js';
const router = express.Router();

router.put('/:segmentId', async (req, res) => {
  const { segmentId } = req.params;
  const { updatedText, updatedBy } = req.body;

  try {
    const updated = await Curriculum.findByIdAndUpdate(
      segmentId,
      { $set: { text: updatedText, lastModifiedBy: updatedBy, lastModifiedAt: new Date() } },
      { new: true }
    );
    if (!updated) {
      return res.status(404).json({ error: 'Segment not found' });
    }
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update curriculum segment' });
  }
});

export default router;
