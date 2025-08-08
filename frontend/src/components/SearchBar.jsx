// src/components/SearchBar.jsx
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const searchParams = { query, title, author, genre };
    console.log('Search params submitted:', searchParams);
    onSearch(searchParams);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-6 bg-white p-6 rounded-lg shadow-md"
      >
        <input
          className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <input
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            className="p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 flex-1"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 px-6 rounded-md text-lg font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          🔍 Search
        </button>
      </form>
    </div>
  );
}