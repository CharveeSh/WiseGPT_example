import { AUTH_URL } from '../constants/apiUrls';

export const apiCall = (url, method, body = null, headers = {}) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: body ? JSON.stringify(body) : null
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });
};

export const authenticateUser = (username, password) => {
  return apiCall(AUTH_URL, 'POST', { username, password });
};