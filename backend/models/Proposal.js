import mongoose from 'mongoose';

const proposalSchema = new mongoose.Schema({
  title: String,
  description: String,
  segment: String,
  segmentId: String,
  assignedReviewers: [{ type: String }],
  reviews: [
    {
      reviewerId: String,
      merits: String,
      recommendation: String,
      submittedAt: { type: Date, default: Date.now }
    }
  ],
  aeFeedback: {
    merits: String,
    justification: String,
    aeId: String,
    submittedAt: { type: Date, default: Date.now }
  },
  aeFinalRecommendation: {
    aeId: String,
    recommendation: String,
    justification: String,
    submittedAt: Date,
  },
});

export default mongoose.model('Proposal', proposalSchema);
