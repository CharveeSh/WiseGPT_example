export const BASE_URL = 'https://api.themoviedb.org/3';
export const NOW_PLAYING_URL = `${BASE_URL}/movie/now_playing?language=en-US&page=1&api_key=${process.env.REACT_APP_TMDB_API_KEY}`;