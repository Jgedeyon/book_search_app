// src/components/NavBar.jsx
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-center gap-8 text-lg font-medium">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/results" className="hover:underline">Results</Link>
        <Link to="/favorites" className="hover:underline">Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;