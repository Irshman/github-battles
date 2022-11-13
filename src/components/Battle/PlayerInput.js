import React, { useState } from 'react';

const PlayerInput = ({ label, id, onSubmit }) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(label, userName);
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='form__label' htmlFor={id}>{label}</label>
      <input
        id={id}
        className='form__input'
        type='text'
        placeholder='GitHub Username'
        autoComplete='off'
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button className='form__button' type='submit' disabled={!userName}>
        Submit
      </button>
    </form>
  );
};

export default PlayerInput;
