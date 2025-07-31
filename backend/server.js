const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bookRoutes = require('./routes/books'); // ✅ Move this up here

const app = express();
app.use(cors({ origin: 'http://localhost:5173' })); // Only need one CORS config
app.use(express.json());
app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));