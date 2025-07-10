import Proposal from '../models/Proposal.js';

export const getProposalsForEIC = async (req, res) => {
  try {
    const proposals = await Proposal.find({ status: 'reviewedByAE' });
    res.json(proposals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch proposals' });
  }
};
