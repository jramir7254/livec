import Review from '../models/Review.js';

export const submitReview = async (req, res) => {
  try {
    const { proposalId, reviewerId, recommendation, justification } = req.body;

    const newReview = new Review({
      proposalId,
      reviewerId,
      recommendation,
      justification,
    });

    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit review', details: err.message });
  }
};
