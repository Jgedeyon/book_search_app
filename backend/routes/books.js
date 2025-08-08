const express = require('express');
const router = express.Router(); // ✅ This was missing
const db = require('../config/db');
const bookController = require('../controllers/bookController');

// 🔍 Search books with filters
router.get('/search', async (req, res) => {
  const { query, title, author, genre } = req.query;

  let sql = `
    SELECT id, title, author, genre, year AS publicationYear, description, cover_url AS coverImage
    FROM books
    WHERE 1=1
  `;
  const params = [];

  if (query) {
    const q = `%${query.trim().toLowerCase()}%`;
    sql += ' AND (LOWER(title) LIKE ? OR LOWER(author) LIKE ? OR LOWER(genre) LIKE ?)';
    params.push(q, q, q);
  }
  if (title) {
    sql += ' AND LOWER(title) LIKE ?';
    params.push(`%${title.trim().toLowerCase()}%`);
  }
  if (author) {
    sql += ' AND LOWER(author) LIKE ?';
    params.push(`%${author.trim().toLowerCase()}%`);
  }
  if (genre) {
    sql += ' AND LOWER(genre) LIKE ?';
    params.push(`%${genre.trim().toLowerCase()}%`);
  }

  try {
    const [results] = await db.query(sql, params);
    res.json({ results });
  } catch (err) {
    console.error('Database error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 📚 Get all books
router.get('/', bookController.getBooks);

// ➕ Add a new book
router.post('/', bookController.saveBook);

// ❌ Delete a book by ID
router.delete('/:id', bookController.deleteBook);

module.exports = router;