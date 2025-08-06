import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';

const SearchResults = () => {
  const { books, loading, error } = useContext(BookContext);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default SearchResults;
