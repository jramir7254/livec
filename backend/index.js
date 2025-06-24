import express from 'express';
import cors from 'cors';
import recommendationRoutes from './routes/recommendation.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recommendation', recommendationRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
