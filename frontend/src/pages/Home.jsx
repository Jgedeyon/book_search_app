// src/pages/Home.jsx
import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import { BookContext } from '../context/BookContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { searchBooks } = useContext(BookContext);
  const navigate = useNavigate();

  const handleSearch = (params) => {
    searchBooks(params);
    navigate('/results');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          📚 Book Search
        </h1>
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
}