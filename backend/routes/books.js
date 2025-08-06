// routes/books.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/search', async (req, res) => {
  const { query, title, author, genre } = req.query;

  let sql = 'SELECT * FROM books WHERE 1=1';
  const params = [];

  if (query) {
    sql += ' AND (title LIKE ? OR author LIKE ? OR genre LIKE ?)';
    params.push(`%${query}%`, `%${query}%`, `%${query}%`);
  }

  if (title) {
    sql += ' AND title LIKE ?';
    params.push(`%${title}%`);
  }
  if (author) {
    sql += ' AND author LIKE ?';
    params.push(`%${author}%`);
  }
  if (genre) {
    sql += ' AND genre LIKE ?';
    params.push(`%${genre}%`);
  }
  console.log('SQL:', sql);
  console.log('Params:', params);


  try {
    const [results] = await db.query(sql, params);
    res.json({ results });
  } catch (err) {
    console.error('Database error:', err.message);
    console.error('Full error:', err.stack);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;