// src/pages/Favorites.jsx
import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(BookContext);

  return (
    <div className="min-h-screen px-4 py-10">
      <h2 className="text-4xl font-bold mb-10 text-center text-indigo-700 drop-shadow-md">
        📚 Your Favorite Books
      </h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600 italic">
          You haven’t added any favorites yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {favorites.map((book) => (
            <div key={book.id} className="relative group">
              <BookCard book={book} />
              <button
                onClick={() => removeFavorite(book.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full shadow hover:bg-red-600 transition-opacity opacity-0 group-hover:opacity-100"
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;