const express = require('express');
const authRoutes = require('@routes/authRoutes');
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors());// Module aliases

app.get('/', (req, res) => {
	res.send('✅ Server is up and running!');
});



app.use('/auth', authRoutes);



// 404 handler (optional; for unmatched API routes only)
app.use((req, res) => {
	res.status(404).json({ message: 'Not Found' });
});



// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: 'Server Error' });
});



module.exports = app;