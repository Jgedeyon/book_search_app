// src/components/BookCard.jsx
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const BookCard = ({ book, redirectOnAdd = false }) => {
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, favorites } = useContext(BookContext);

  const isFavorite = favorites.some(fav => fav.id === book.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
      if (redirectOnAdd) {
        navigate('/favorites');
      }
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-indigo-600 mb-2">{book.title}</h3>
      <p className="text-sm text-gray-700 mb-1"><strong>Author:</strong> {book.author}</p>
      <p className="text-sm text-gray-700 mb-1"><strong>Genre:</strong> {book.genre}</p>
      <p className="text-sm text-gray-600 mb-4"><strong>Description:</strong> {book.description}</p>
      <button
        onClick={handleFavoriteToggle}
        className={`w-full px-4 py-2 rounded text-white font-medium transition-colors duration-200 ${
          isFavorite
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
      </button>
    </div>
  );
};

export default BookCard;