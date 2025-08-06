// src/context/BookContext.js
import { createContext } from 'react';

export const BookContext = createContext({
  books: [],
  favorites: [],
  loading: false,
  error: null,
  searchBooks: () => {},
  addFavorite: () => {},
  removeFavorite: () => {},
});