/**
 * MovieList Component
 * 
 * The main component of the Movie List application.
 * It manages the state of the movie collection and the selected genre filter.
 * 
 * Features:
 *   - Displays a list of movies as cards (title, genre, release year).
 *   - Provides a dropdown to filter movies by genre.
 *   - Clicking a movie card shows an alert with the movie title.
 *   - Uses React hooks (useState) for state management.
 *   - Dynamically extracts unique genres from the movie data.
 */

import React, { useState } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

/**
 * MovieList - The main component that renders the movie list application.
 * It manages the movie data and filter state using React hooks.
 * 
 * @returns {JSX.Element} The complete movie list UI with filter and cards
 */
const MovieList = () => {
  /**
   * movies - An array of movie objects.
   * Each movie has a title, genre, and releaseYear property.
   * This data serves as the source for rendering movie cards.
   */
  const movies = [
    { title: 'Inception', genre: 'Science Fiction', releaseYear: 2010 },
    { title: 'The Shawshank Redemption', genre: 'Drama', releaseYear: 1994 },
    { title: 'The Dark Knight', genre: 'Action', releaseYear: 2008 },
    { title: 'Pulp Fiction', genre: 'Crime', releaseYear: 1994 },
    { title: 'The Matrix', genre: 'Science Fiction', releaseYear: 1999 },
    { title: 'Forrest Gump', genre: 'Drama', releaseYear: 1994 },
    { title: 'The Godfather', genre: 'Crime', releaseYear: 1972 },
    { title: 'Interstellar', genre: 'Science Fiction', releaseYear: 2014 },
    { title: 'Gladiator', genre: 'Action', releaseYear: 2000 },
    { title: 'The Prestige', genre: 'Drama', releaseYear: 2006 }
  ];

  /**
   * selectedGenre - State variable to track the currently selected genre filter.
   * Default value is "All Genres" which shows all movies.
   * setSelectedGenre - Function to update the selected genre state.
   */
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  /**
   * genres - An array of unique genre strings extracted from the movies array.
   * Uses Set to eliminate duplicates and spread operator to convert back to array.
   * This is used to populate the dropdown filter options dynamically.
   */
  const genres = [...new Set(movies.map((movie) => movie.genre))];

  /**
   * handleGenreChange - Event handler for the genre dropdown select element.
   * Updates the selectedGenre state when the user selects a new genre.
   * 
   * @param {Object} event - The change event from the select element
   */
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  /**
   * handleMovieClick - Event handler for when a user clicks on a movie card.
   * Displays a browser alert with the clicked movie's title.
   * 
   * @param {string} title - The title of the clicked movie
   */
  const handleMovieClick = (title) => {
    alert(`You clicked on "${title}"`);
  };

  /**
   * filteredMovies - The filtered array of movies based on the selected genre.
   * If "All Genres" is selected, all movies are shown.
   * Otherwise, only movies matching the selected genre are displayed.
   */
  const filteredMovies =
    selectedGenre === 'All Genres'
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  return (
    <div className="movie-list-container">
      {/* Application heading */}
      <h1 className="movie-list-heading">Movie List</h1>

      {/* Genre filter dropdown - allows users to filter movies by genre */}
      <div className="genre-filter-container">
        <select
          className="genre-select"
          value={selectedGenre}
          onChange={handleGenreChange}
          aria-label="Filter movies by genre"
        >
          {/* Default option to show all movies */}
          <option value="All Genres">All Genres</option>

          {/* Dynamically generated genre options from the movies data */}
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Movie cards list - renders a MovieCard for each filtered movie */}
      <div className="movie-cards-container">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            genre={movie.genre}
            releaseYear={movie.releaseYear}
            onMovieClick={handleMovieClick}
          />
        ))}
      </div>

      {/* Message displayed when no movies match the selected genre */}
      {filteredMovies.length === 0 && (
        <p className="no-movies-message">No movies found for the selected genre.</p>
      )}
    </div>
  );
};

/* Export the MovieList component for use in App.js */
export default MovieList;
