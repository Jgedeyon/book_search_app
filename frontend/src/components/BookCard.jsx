import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookCard = ({ book }) => {
  const { addToFavorites, removeFromFavorites, favorites } = useContext(BookContext);
  const isFavorite = favorites.some((fav) => fav.id === book.id);

  return (
    <div className="border p-4 rounded shadow-md">
      <img src={book.coverImage || 'https://via.placeholder.com/150'} alt={book.title} className="w-32 h-48 object-cover" />
      <h3 className="font-bold">{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.publicationYear}</p>
      <p className="text-sm">{book.description?.slice(0, 100)}...</p>
      <button onClick={() => isFavorite ? removeFromFavorites(book.id) : addToFavorites(book)} className={`p-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-green-500'} text-white`}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default BookCard;
