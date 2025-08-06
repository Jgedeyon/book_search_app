const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Adjust path if your db.js lives elsewhere


router.get('/search', async (req, res) => {
  const { q, title, author, genre } = req.query;

    console.log("🔍 Backend search route hit:", req.query);

  const keyword = `%${q || ''}%`;
  const titleFilter = `%${title || ''}%`;
  const authorFilter = `%${author || ''}%`;
  const genreFilter = `%${genre || ''}%`;

  const query = `
    SELECT * FROM books
    WHERE (title LIKE ? OR author LIKE ? OR genre LIKE ? OR description LIKE ?)
    AND title LIKE ?
    AND author LIKE ?
    AND genre LIKE ?
  `;

  db.query(
    query,
    [keyword, keyword, keyword, keyword, titleFilter, authorFilter, genreFilter],
    (err, results) => {
      if (err) {
        console.error('Search failed:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      res.json(results);
    }
  );
});
module.exports = router; 