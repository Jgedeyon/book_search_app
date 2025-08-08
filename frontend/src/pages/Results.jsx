// src/pages/Results.jsx
import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';

export default function Results() {
  const { books, loading, error, searchBooks } = useContext(BookContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-8">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto">
        <SearchBar onSearch={searchBooks} />

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}

        {loading && (
          <p className="text-gray-500 text-center mt-4">Loading...</p>
        )}

        {!loading && !error && books.length === 0 && (
          <p className="text-gray-600 text-center mt-4">
            No books found. Try a different search.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {books.map((book, index) => (
            <BookCard key={book.id || index} book={book} redirectOnAdd={true} />
          ))}
        </div>
      </div>
    </div>
  );
}