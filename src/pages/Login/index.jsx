import React, { useState } from 'react';
import { authenticateUser } from '../../helpers/apiCalls';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    authenticateUser(username, password)
      .then((response) => {
        if (response.status === 'success') {
          localStorage.setItem('token', response.data.token);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;