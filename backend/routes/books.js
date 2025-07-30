router.get('/search', (req, res) => {
  const { q, title, author, genre } = req.query;

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