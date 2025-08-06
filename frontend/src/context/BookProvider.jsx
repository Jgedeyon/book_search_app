import React, { useState, useCallback, useEffect } from 'react';
import { BookContext } from './BookContext';

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/books'; // Use proxy path

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (err) {
        console.error('Failed to parse favorites from localStorage:', err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  const searchBooks = useCallback(async ({ query, title, author, genre }) => {
    if (!query && !title && !author && !genre) {
      setError('At least one search parameter is required');
      return;
    }

    const params = new URLSearchParams();
    if (query) params.append('query', query.trim());
    if (title) params.append('title', title.trim());
    if (author) params.append('author', author.trim());
    if (genre) params.append('genre', genre.trim());

    setLoading(true);
    setError(null);

    const url = `${BASE_URL}/search?${params.toString()}`;
    console.log('Fetching from:', url);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (!Array.isArray(data?.results)) {
        throw new Error('Invalid response format from API');
      }

      setBooks(data.results);
    } catch (err) {
      setError(err.message || 'Failed to fetch books');
    } finally {
      setLoading(false);
    }
  }, [BASE_URL]);

  const addFavorite = useCallback((book) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === book.id)) return prev;
      return [...prev, book];
    });
  }, []);

  const removeFavorite = useCallback((bookId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== bookId));
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