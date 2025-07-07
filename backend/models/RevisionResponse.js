import mongoose from 'mongoose';

const revisionResponseSchema = new mongoose.Schema({
  proposalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Proposal', required: true },
  revisedText: { type: String, required: true },
  justification: { type: String },
  aeId: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

const RevisionResponse = mongoose.model('RevisionResponse', revisionResponseSchema);

export default RevisionResponse;
