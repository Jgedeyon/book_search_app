// src/context/BookProvider.js
import React, { useState } from 'react';
import { BookContext } from './BookContext';

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const searchBooks = async ({ query, title, author, genre }) => {
    const params = new URLSearchParams();
    if (query) params.append('q', query);
    if (title) params.append('title', title);
    if (author) params.append('author', author);
    if (genre) params.append('genre', genre);

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/books/search?q=Harry+Potter`);
      const data = await response.json();
      
      setBooks(data);
    } catch (err) {
      setError(err.message || 'Search error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookContext.Provider
      value={{ books, favorites, loading, error, searchBooks }}
    >
      {children}
    </BookContext.Provider>
  );
};