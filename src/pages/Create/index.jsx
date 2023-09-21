import React, { useState } from 'react';
import { createSurvey } from '../../helpers/apiCalls';

const Create = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    createSurvey(name, description)
      .then((response) => {
        if (response.status === 'success') {
          console.log('Survey created successfully');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Survey Name' />
      <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Survey Description' />
      <button onClick={handleSubmit}>Create Survey</button>
    </>
  );
}

export default Create;
