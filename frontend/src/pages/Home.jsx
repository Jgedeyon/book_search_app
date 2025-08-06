import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import { BookContext } from '../context/BookContext';

export default function Home() {
  const { searchBooks } = useContext(BookContext);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-6">Book Search</h1>
      <SearchBar onSearch={searchBooks} />
    </div>
  );
}