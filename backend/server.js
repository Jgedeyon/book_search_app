const express = require('express');
const cors = require('cors');
require('dotenv').config();

const pool = require('./config/db'); // ✅ MySQL pool
const favoriteRoutes = require('./routes/favorites'); 


const bookRoutes = require('./routes/books'); 

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));


app.use(express.json());
app.use('/api/books', bookRoutes);
app.use('/api/favorites', favoriteRoutes);
app.get('/api/test', (req, res) => {
  res.send('Backend is working!');
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));