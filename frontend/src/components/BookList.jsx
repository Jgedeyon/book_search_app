// src/components/BookList.jsx
import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookList = () => {
  const { books, loading, error } = useContext(BookContext);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!books.length) return <p>No books found.</p>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} className="p-4 border rounded mb-4 shadow">
  <h3 className="text-lg font-bold">{book.title}</h3>
  <p><strong>Author:</strong> {book.author}</p>
  <p><strong>Genre:</strong> {book.genre}</p>
  <p>{book.description}</p>
</li>
      ))}
    </ul>
  );
};

export default BookList;