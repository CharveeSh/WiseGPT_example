import { NOW_PLAYING_URL } from '../constants/apiUrls';

export const fetchNowPlaying = () => {
  return fetch(NOW_PLAYING_URL)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
};