import { useState } from 'react';

function Create() {
  // Group the three form values in a single state object.
  const [movie, setMovie] = useState({ title: '', year: '', poster: '' });
  // An empty notice keeps the confirmation hidden until submission.
  const [notice, setNotice] = useState('');

  function updateMovie(event) {
    // Each input's name tells this shared handler which property to update.
    const { name, value } = event.target;
    // Change one field without clearing the other two.
    setMovie((current) => ({ ...current, [name]: value }));
    // A changed value makes the last confirmation out of date.
    setNotice('');
  }

  function submitMovie(event) {
    // Handle the submission here instead of letting the browser reload.
    event.preventDefault();
    // Remove extra spaces from the text before preparing the console output.
    const details = {
      title: movie.title.trim(),
      year: movie.year,
      poster: movie.poster.trim()
    };
    // All three fields are logged together, as required by the exercise.
    console.log('Submitted movie:', details);
    setNotice('The movie details have been printed to the console.');
  }

  return (
    <section className="movie-form">
      <h2 className="mb-4">This is my Create Component.</h2>
      <form onSubmit={submitMovie}>
        {/* React supplies the value, and updateMovie handles typing. */}
        <div className="mb-3">
          <label className="form-label" htmlFor="title">Add Movie Title:</label>
          <input className="form-control" id="title" name="title" type="text"
            value={movie.title} onChange={updateMovie} required
            pattern=".*\S.*" title="Please provide the movie title." />
        </div>
        {/* Native number validation rejects fractional or out-of-range years. */}
        <div className="mb-3">
          <label className="form-label" htmlFor="year">Add Movie Year:</label>
          <input className="form-control" id="year" name="year" type="number"
            value={movie.year} onChange={updateMovie}
            min="1888" max="9999" step="1" required />
        </div>
        {/* The poster field takes an HTTP or HTTPS image link. */}
        <div className="mb-3">
          <label className="form-label" htmlFor="poster">Add Movie Poster:</label>
          <input className="form-control" id="poster" name="poster" type="url"
            value={movie.poster} onChange={updateMovie} required
            pattern="https?://.+" title="Use a full HTTP or HTTPS poster link." />
        </div>
        <button className="btn btn-dark" type="submit">Add Movie</button>
      </form>
      {notice && <p role="status" className="mt-3 mb-0">{notice}</p>}
    </section>
  );
}

export default Create;
