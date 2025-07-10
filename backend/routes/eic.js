import express from 'express';

const router = express.Router();

router.get('/proposals-for-eic', async (req, res) => {
  try {
    const mockProposals = [
      {
        _id: '1',
        title: 'Revise Algorithms Syllabus',
        summary: 'Proposal to include Dynamic Programming and Greedy strategies.',
        aeRecommendation: 'Recommend Approval',
      },
      {
        _id: '2',
        title: 'Update Data Structures',
        summary: 'Add hash maps and graph traversal techniques.',
        aeRecommendation: 'Needs Revisions',
      }
    ];

    res.json(mockProposals);
  } catch (err) {
    console.error('Mock fetch failed:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/proposal/:proposalId', async (req, res) => {
  const mockProposal = {
    _id: req.params.proposalId,
    title: 'Revise Algorithms Syllabus',
    summary: 'Proposal to include Dynamic Programming and Greedy strategies.',
    aeRecommendation: 'Recommend Approval'
  };
  res.json(mockProposal);
});

router.post('/decision/:proposalId', async (req, res) => {
  const { eicDecision, eicJustification } = req.body;
  console.log(`EIC Decision received for ${req.params.proposalId}:`, eicDecision, eicJustification);
  res.json({ message: 'EIC decision recorded.' });
});

export default router;

// import express from 'express';
// import Proposal from '../models/Proposal.js';
// import { getProposalsForEIC } from '../controllers/eicController.js';

// const router = express.Router();

// // router.get('/proposals-for-eic', getProposalsForEIC);

// router.get('/proposals-for-eic', async (req, res) => {
//   try {
//     const proposals = await Proposal.find({ status: 'ae_submitted' }); 
//     res.json(proposals);
//   } catch (err) {
//     console.error('Failed to fetch proposals for EIC:', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// router.post('/proposal/:proposalId/eic-decision', async (req, res) => {
//   const { proposalId } = req.params;
//   const { eicDecision, eicComments } = req.body;

//   try {
//     const updated = await Proposal.findByIdAndUpdate(
//       proposalId,
//       { eicDecision, eicComments },
//       { new: true }
//     );
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// export default router;
