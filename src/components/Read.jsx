import { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './Movies.jsx';

const movieEndpoint = 'https://data-rep-mern-application.github.io/dataserver/movies.json';

function Read() {
  // Start with no movies and display a loading message until the request ends.
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // This controller belongs to this visit to the Read page.
    const request = new AbortController();

    async function loadMovies() {
      try {
        // await pauses this function until Axios returns or the request fails.
        const result = await axios.get(movieEndpoint, {
          signal: request.signal,
          timeout: 10000
        });
        // myArray is the property returned by the supplied JSON endpoint.
        const movieList = result.data.myArray;
        // Check the response before passing it to the component that uses map.
        if (!Array.isArray(movieList)) {
          throw new Error('Expected an array of movies.');
        }
        // The new state is then passed down to Movies as a prop.
        setMovies(movieList);
      } catch {
        // Do not show an error for a request cancelled by page navigation.
        if (!request.signal.aborted) {
          setMessage('Movies are unavailable at the moment. Please try again later.');
        }
      } finally {
        // Clear the loading indicator for both successful and failed requests.
        if (!request.signal.aborted) setIsLoading(false);
      }
    }

    loadMovies();
    // Stop any pending download when this page closes.
    return () => request.abort();
  }, []); // No changing dependencies: fetch when the component mounts.

  // Pick one result to display: loading, error, empty list or movie cards.
  let content;
  if (isLoading) {
    content = <p role="status">Loading the movie list...</p>;
  } else if (message) {
    content = <p role="alert" className="text-danger">{message}</p>;
  } else if (movies.length === 0) {
    content = <p>There are no movies to display.</p>;
  } else {
    content = <Movies movies={movies} />;
  }

  return (
    <section>
      <h2 className="mb-4">This is my Read Component.</h2>
      {content}
    </section>
  );
}

export default Read;
