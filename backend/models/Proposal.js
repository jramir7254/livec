import mongoose from 'mongoose';

const proposalSchema = new mongoose.Schema({
  title: String,
  description: String,
  segment: String,
  assignedAE: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  recommendation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recommendation'
  },
  createdAt: { type: Date, default: Date.now },
  content: String,
  aeFeedback: String,
  segmentId: String,
  assignedReviewers: [{ type: String }],
  reviews: [
    {
      reviewerId: String,
      merits: String,
      recommendation: String,
      justification: String,
      submittedAt: { type: Date, default: Date.now }
    }
  ],
  finalRecommendation: String,
  publicFeedback: String,
  aeFinalized: Boolean,
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

const Proposal = mongoose.model('Proposal', proposalSchema);
export default Proposal;
