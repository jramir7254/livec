import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import recommendationRoutes from './routes/recommendation.js';
import notifyRoutes from './routes/notify.js';
import reviewerRoutes from './routes/reviewer.js';
import reviewRoutes from './routes/review.js';
import aeRoutes from './routes/ae.js';
import proposalRoutes from './routes/proposalRoutes.js';
import aeFinalRecommendationRoutes from './routes/aeFinalRecommendation.js';
import curriculumRoutes from './routes/curriculum.js';
import revisionResponseRoutes from './routes/revisionResponse.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/livec');

app.use('/api/review', reviewRoutes);
app.use('/api/recommendation', recommendationRoutes);
app.use('/api/notify', notifyRoutes);
app.use('/api/reviewer', reviewerRoutes);
app.use('/api/ae', aeRoutes);
app.use('/api', proposalRoutes);
app.use('/api/ae-final-recommendation', aeFinalRecommendationRoutes);
app.use('/api/curriculum', curriculumRoutes);
app.use('/api/revision-response', revisionResponseRoutes);

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));
