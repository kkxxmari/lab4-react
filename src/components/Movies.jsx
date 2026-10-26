import MovieItem from './MovieItem.jsx';

function Movies({ movies }) {
  // Destructure the array supplied by the Read component.
  return (
    <div className="movie-list">
      {/* Each card receives one object from Read's movie array. */}
      {/* A stable IMDb key lets React identify the same movie between renders. */}
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
