const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET all favorites
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM favorites');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// POST a new favorite
router.post('/', async (req, res) => {
  const { id, title, author, genre, description } = req.body;
  console.log('📥 Incoming favorite:', req.body);

  try {
    await pool.query(
      'INSERT INTO favorites (id, title, author, genre, description) VALUES (?, ?, ?, ?, ?)',
      [id, title, author, genre, description]
    );
    res.status(201).send('Favorite added');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// DELETE a favorite
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM favorites WHERE id = ?', [id]);
    res.send('Favorite removed');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;