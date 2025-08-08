// src/context/BookProvider.js
import React, { useState, useEffect } from 'react';
import { BookContext } from './BookContext';

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFavorites = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/favorites');
      const data = await res.json();
      setFavorites(data);
    } catch (err) {
      console.error('Error fetching favorites:', err);
      setError('Failed to fetch favorites');
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = async (book) => {
    try {
      const res = await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      });
      if (res.ok) {
        setFavorites((prev) => [...prev, book]);
      }
    } catch (err) {
      console.error('Error adding favorite:', err);
    }
  };

  const removeFavorite = async (id) => {
    try {
      const res = await fetch(`/api/favorites/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setFavorites((prev) => prev.filter((book) => book.id !== id));
      }
    } catch (err) {
      console.error('Error removing favorite:', err);
    }
  };

  const searchBooks = async ({ query, title, author, genre }) => {
    const params = new URLSearchParams();

    if (query) params.append('query', query.trim());
    if (title) params.append('title', title.trim());
    if (author) params.append('author', author.trim());
    if (genre) params.append('genre', genre.trim());

    setLoading(true);
    try {
      const res = await fetch(`/api/books/search?${params.toString()}`);
      const data = await res.json();
      console.log('Search response:', data); // ✅ Debug log
      setBooks(data.results || []);
    } catch (err) {
      console.error('Error searching books:', err);
      setError('Failed to search books');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <BookContext.Provider
      value={{
        books,
        favorites,
        loading,
        error,
        searchBooks,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;