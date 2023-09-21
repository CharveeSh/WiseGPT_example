import React, { useEffect, useState } from 'react';
import { fetchNowPlaying } from '../../helpers/apiCalls';

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchNowPlaying().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </div>
  );
};

export default NowPlaying;