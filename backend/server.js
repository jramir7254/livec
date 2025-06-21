const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/recommendations', require('./routes/recommendations'));

mongoose.connect('mongodb://localhost:27017/livec', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(5000, () => console.log('Server running on port 5000'));
