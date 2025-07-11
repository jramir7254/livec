import express from 'express';
const router = express.Router();

const curriculumChanges = [
  {
    id: 'section1',
    sectionTitle: 'Algorithms',
    proposedBy: 'AE Jane Smith',
    proposedChanges: 'Added Dynamic Programming and Greedy strategies',
    currentText: 'Covers Sorting, Searching, and Divide & Conquer',
    proposedText: 'Covers Sorting, Searching, Divide & Conquer, Dynamic Programming, and Greedy strategies',
  },
];

router.get('/curriculum-review', (req, res) => {
  res.json(curriculumChanges);
});

export default router;
