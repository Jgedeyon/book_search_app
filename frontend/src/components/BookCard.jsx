import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookCard = ({ book }) => {
  const { addFavorite, removeFavorite, favorites } = useContext(BookContext); // Fixed context names
  const isFavorite = favorites.some((fav) => fav.id === book.id);

  return (
    <div className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow">
      <img
        src={book.coverImage || 'https://via.placeholder.com/150'}
        alt={book.title || 'Book cover'}
        className="w-32 h-48 object-cover mb-2"
      />
      <h3 className="font-bold text-lg">{book.title || 'Untitled'}</h3>
      <p className="text-gray-600">{book.author || 'Unknown'}</p>
      <p className="text-sm text-gray-500">{book.publicationYear || 'N/A'}</p>
      <p className="text-sm text-gray-700">{(book.description?.slice(0, 100) || 'No description') + '...'}</p>
      <button
        onClick={() => isFavorite ? removeFavorite(book.id) : addFavorite(book)}
        className={`mt-2 p-2 rounded ${isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default BookCard;