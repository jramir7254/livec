import express from 'express';
import { getAEQueue, submitAEFeedback } from '../controllers/aeController.js';

const router = express.Router();

router.get('/queue', getAEQueue);
router.post('/feedback/:proposalId', submitAEFeedback);

export default router;
