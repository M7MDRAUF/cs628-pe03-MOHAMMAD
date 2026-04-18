/**
 * App.js
 * 
 * The root component of the React application.
 * It imports and renders the MovieList component,
 * which is the main feature of this application.
 * 
 * This component serves as the entry point for the UI,
 * wrapping the MovieList inside a styled container.
 */

import React from 'react';
import MovieList from './components/MovieList';
import './App.css';

/**
 * App - The root functional component of the application.
 * Renders the MovieList component inside a wrapper div.
 * 
 * @returns {JSX.Element} The root application element
 */
function App() {
  return (
    /* Main application wrapper with a class for global styling */
    <div className="App">
      {/* Render the MovieList component as the main content */}
      <MovieList />
    </div>
  );
}

/* Export the App component as the default export */
export default App;
