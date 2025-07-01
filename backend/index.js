import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import recommendationRoutes from './routes/recommendation.js';

import notifyRoutes from './routes/notify.js';
import reviewerRoutes from './routes/reviewer.js';
import reviewRoutes from './routes/review.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/livec');

app.use('/api/review', reviewRoutes);

app.use('/api/recommendation', recommendationRoutes);

app.use('/api/notify', notifyRoutes);

app.use('/api/reviewer', reviewerRoutes);

app.listen(3001, () => {
  console.log('Backend running on port 3001');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
