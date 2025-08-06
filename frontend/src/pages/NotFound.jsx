import React from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router

const NotFound = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-red-600">404 – Page Not Found</h2>
      <p className="mt-2">Oops! Looks like that page doesn’t exist.</p>
      <Link to="/" className="mt-4 inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;