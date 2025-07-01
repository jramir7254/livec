import express from 'express';
import { submitRecommendation } from '../controllers/reviewerRecommendationController.js';

const router = express.Router();

router.post('/:proposalId/recommendation', submitRecommendation);

export default router;