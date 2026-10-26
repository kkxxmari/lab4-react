import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function MovieItem({ movie }) {
  // Keep track of broken posters independently for each movie card.
  const [imageError, setImageError] = useState(false);
  // N/A is sometimes used in movie data instead of an actual image address.
  const showPoster = movie.Poster && movie.Poster !== 'N/A' && !imageError;

  // Repeat the log only if the supplied movie object changes.
  useEffect(() => {
    console.log('Movie details:', movie);
  }, [movie]);

  return (
    <Card className="h-100">
      <Card.Header as="h3" className="h5">{movie.Title}</Card.Header>
      <Card.Body>
        {/* An unavailable image should not hide the movie's details. */}
        {showPoster ? (
          // The error handler switches to the text fallback if the image fails.
          <img className="movie-poster" src={movie.Poster} alt={movie.Title}
            width="300" height="450" loading="lazy" onError={() => setImageError(true)} />
        ) : (
          <p className="missing-poster">No poster available</p>
        )}
      </Card.Body>
      <Card.Footer>{movie.Year}</Card.Footer>
    </Card>
  );
}

export default MovieItem;
