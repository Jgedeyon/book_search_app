import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookProvider } from './context/BookProvider';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Results from './pages/Results';

const App = () => {
  console.log('✅ App.jsx is executing');

  return (
    <BookProvider>
      <Router>
        <div className="bg-green-500 text-white p-4 text-center">
          ✅ App is rendering — test message
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </BookProvider>
  );
};

export default App;