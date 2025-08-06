import React, { useState } from 'react';
import SearchBar from "../components/SearchBar"; // adjust if path is different

export default function Results() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const fetchBooks = async ({ query, title, author, genre }) => {
    try {
      setError(null);

      const url = new URL('http://localhost:3000/api/books/search');
    if (query) url.searchParams.append('q', query);
    if (title) url.searchParams.append('title', title);
    if (author) url.searchParams.append('author', author);
    if (genre) url.searchParams.append('genre', genre);

    const response = await fetch(url);
    if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError('Failed to fetch books. Try again.');
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <SearchBar onSearch={fetchBooks} />

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {books.map((book, index) => (
  <div key={index} className="p-4 border rounded shadow bg-white">
    <h2 className="text-lg font-bold">{book.title}</h2>
    <p className="text-sm text-gray-700">{book.author || 'Unknown Author'}</p>
    <p className="text-xs text-gray-500 italic">{book.genre}</p>
    <p className="mt-2 text-sm">{book.description?.slice(0, 100)}...</p>
  </div>
))}
{books.length === 0 && !error && (
  <p className="text-gray-500 text-center mt-4">
    No books found. Try a different search.
  </p>
)}
      </div>
    </div>
  );
}