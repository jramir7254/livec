import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  proposalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Proposal', required: true },
  reviewerId: { type: String, required: true },
  recommendation: { type: String, enum: ['include', 'exclude', 'revise'], required: true },
  justification: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Review', reviewSchema);
