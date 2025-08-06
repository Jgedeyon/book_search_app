// src/components/BookList.jsx
import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookList = () => {
  const { books, loading, error } = useContext(BookContext);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!books.length) return <p>No books found.</p>;

  return (
    <ul className="max-w-2xl mx-auto">
      {books.map((book) => (
        <li key={book.id} className="p-4 border rounded mb-4 shadow">
          <h3 className="text-lg font-bold">{book.title || 'Untitled'}</h3>
          <p><strong>Author:</strong> {book.author || 'Unknown'}</p>
          <p><strong>Genre:</strong> {book.genre || 'N/A'}</p>
          <p>{book.description || 'No description available'}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookList;