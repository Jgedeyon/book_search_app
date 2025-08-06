import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Form submitted with query:", query);
    const fullQuery = `${query} ${title} ${author} ${genre}`.trim();
    onSearch({ query, title, author, genre }); // Pass query back to parent for API call
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <input
          className="p-2 border rounded"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <input
            className="p-2 border rounded"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="p-2 border rounded"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            className="p-2 border rounded"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 transition text-white p-2 rounded text-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
}