/**
 * MovieCard Component
 * 
 * A functional component that renders a single movie card.
 * It displays the movie's title, genre, and release year.
 * When the user clicks on a movie card, an alert is triggered
 * showing the movie's title.
 * 
 * Props:
 *   - title (string): The title of the movie.
 *   - genre (string): The genre of the movie.
 *   - releaseYear (number): The release year of the movie.
 *   - onMovieClick (function): Callback function triggered when the card is clicked.
 */

import React from 'react';
import './MovieCard.css';

/**
 * MovieCard - Renders an individual movie card with title, genre, and release year.
 * Handles click events to alert the user with the movie title.
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Movie title
 * @param {string} props.genre - Movie genre
 * @param {number} props.releaseYear - Movie release year
 * @param {function} props.onMovieClick - Click handler for the movie card
 * @returns {JSX.Element} A styled card element displaying movie information
 */
const MovieCard = ({ title, genre, releaseYear, onMovieClick }) => {
  /**
   * handleClick - Handles the click event on the movie card.
   * Calls the onMovieClick callback with the movie title.
   */
  const handleClick = () => {
    onMovieClick(title);
  };

  return (
    /* Each movie card is rendered as a clickable div with appropriate styling */
    <div className="movie-card" onClick={handleClick} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') handleClick(); }}
      aria-label={`Click to select ${title}`}
    >
      {/* Movie title displayed as a heading */}
      <h2 className="movie-title">{title}</h2>

      {/* Movie genre displayed below the title */}
      <p className="movie-genre">{genre}</p>

      {/* Movie release year displayed at the bottom */}
      <p className="movie-release-year">Released: {releaseYear}</p>
    </div>
  );
};

/* Export the MovieCard component for use in MovieList */
export default MovieCard;
