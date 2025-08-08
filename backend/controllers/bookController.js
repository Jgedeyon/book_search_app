const pool = require('../config/db');

// GET all books
exports.getBooks = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM books');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching books:', error.message);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

// POST a new book
exports.saveBook = async (req, res) => {
  const { title, author, description, image } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO books (title, author, description, image) VALUES (?, ?, ?, ?)',
      [title, author, description, image]
    );

    res.status(201).json({ id: result.insertId, title, author, description, image });
  } catch (error) {
    console.error('Error saving book:', error.message);
    res.status(500).json({ error: 'Failed to save book' });
  }
};

// DELETE a book by ID
exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query('DELETE FROM books WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }

    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error.message);
    res.status(500).json({ error: 'Failed to delete book' });
  }
};