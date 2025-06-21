const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  proposalId: { type: String, required: true },
  aeId: { type: String, required: true },
  decision: { type: String, enum: ['include', 'exclude'], required: true },
  justification: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
