import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import { BookContext } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { searchBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const handleSearch = (params) => {
    searchBooks(params); // Optional: Use context search if integrating
    navigate('/results'); // Navigate to Results page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center p-6">Book Search</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}