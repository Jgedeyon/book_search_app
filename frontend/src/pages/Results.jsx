// src/components/Results.jsx
import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import { BookContext } from '../context/BookContext';

export default function Results() {
  const { books, loading, error, searchBooks, addFavorite } = useContext(BookContext);
  return (
    <div className="p-6">
      <SearchBar onSearch={searchBooks} />

      {error && (
        <p className="text-red-500 text-center mt-4">
          {error}
        </p>
      )}

      {loading && (
        <p className="text-gray-500 text-center mt-4">
          Loading...
        </p>
      )}

      {!loading && !error && books.length === 0 && (
        <p className="text-gray-600 text-center mt-4">
          No books found. Try a different search.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {books.map((book, index) => (
          <div key={book.id || index} className="p-4 border rounded shadow bg-white">
            <h2 className="text-lg font-bold">{book.title || 'Untitled'}</h2>
            <p className="text-sm text-gray-700">{book.author || 'Unknown Author'}</p>
            <p className="text-xs text-gray-500 italic">{book.genre || 'N/A'}</p>
            <p className="mt-2 text-sm">
              {(book.description?.slice(0, 100) || 'No description') + '...'}
            </p>
            <button
   onClick={() => addFavorite(book)}
   className="mt-2 text-sm text-blue-600 hover:underline"
>
   ❤️ Add to Favorites
  </button>
          </div>
        ))}
      </div>
    </div>
  );
}