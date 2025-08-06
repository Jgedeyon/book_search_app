const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bookRoutes = require('./routes/books'); // ✅ Move this up here

const app = express();
app.use(cors({ origin: 'http://localhost:5174' }));
app.use(express.json());
app.use('/api/books', bookRoutes);
app.get('/api/test', (req, res) => {
  res.send('Backend is working!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));