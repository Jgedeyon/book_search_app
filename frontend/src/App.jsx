// src/App.jsx
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';
import Favorites from './pages/Favorites';
import BookProvider from './context/BookProvider';

function App() {
  return (
    <BookProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
        <NavBar />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </div>
    </BookProvider>
  );
}

export default App;