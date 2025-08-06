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
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author}
        </li>
      ))}
    </ul>
  );
};

export default BookList;