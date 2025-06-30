import express from 'express';
import cors from 'cors';
import recommendationRoutes from './routes/recommendation.js';

import notifyRoutes from './routes/notify.js';
import reviewerRoutes from './routes/reviewer.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recommendation', recommendationRoutes);

app.use('/api/notify', notifyRoutes);

app.use('/api/reviewer', reviewerRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
