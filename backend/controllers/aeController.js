import Proposal from '../models/Proposal.js';

export const getAEQueue = async (req, res) => {
  try {
    const proposals = await Proposal.find({});
    res.json(proposals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch AE queue' });
  }
};

export const submitAEFeedback = async (req, res) => {
  const { proposalId } = req.params;
  const { merits, justification, aeId } = req.body;

  try {
    const proposal = await Proposal.findByIdAndUpdate(
      proposalId,
      {
        aeFeedback: {
          merits,
          justification,
          aeId,
          submittedAt: new Date()
        }
      },
      { new: true }
    );
    res.json(proposal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit AE feedback' });
  }
};
