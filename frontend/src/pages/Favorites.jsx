import React, { useEffect, useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';

const Favorites = () => {
  const { favorites, fetchFavorites } = useContext(BookContext);

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default Favorites;
