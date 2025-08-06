import React, { useContext } from 'react';
import { BookProvider } from './context/BookProvider';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import { BookContext } from './context/BookContext';

const AppContent = () => {
  const { searchBooks } = useContext(BookContext);

  return (
    <div>
      <h1>📚 Book Finder</h1>
      <SearchBar onSearch={searchBooks} /> {/* now wired to context */}
      <BookList />
    </div>
  );
};

const App = () => (
  <BookProvider>
    <AppContent />
  </BookProvider>
);

export default App;