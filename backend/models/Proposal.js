import mongoose from 'mongoose';

const proposalSchema = new mongoose.Schema({
  title: String,
  description: String,
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
  }
});

const Proposal = mongoose.model('Proposal', proposalSchema);
export default Proposal;
