import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { updateFirstImage, updateSecondImage, updateFirstName, updateSecondName } from '../../redux/battle/battle.actions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

const Battle = () => {
  const dispatch = useDispatch()
  const playerOneName = useSelector(state => state.battleReducer.playerOneName);
  const playerTwoName = useSelector(state => state.battleReducer.playerTwoName);
  const playerOneImage = useSelector(state => state.battleReducer.playerOneImage)
  const playerTwoImage = useSelector(state => state.battleReducer.playerTwoImage)

  const location = useLocation();

  const img_url = (name) => `https://github.com/${name}.png?size200`;

  const handleSubmit = (label, userName) => {
    if (label === 'Player 1') {
      dispatch(updateFirstName(userName))
      dispatch(updateFirstImage(img_url(userName)))
    } else {
      dispatch(updateSecondName(userName))
      dispatch(updateSecondImage(img_url(userName)))
    }
  };
  const handleReset = (id) => {
    if (id === 'playerOne') {
      dispatch(updateFirstName(''))
      dispatch(updateFirstImage(''))
    } else {
      dispatch(updateSecondName(''))
      dispatch(updateSecondImage(''))
    }
  };


  return (
    <div className='wrap'>
      <div className='battle__row'>
        {!playerOneImage ? (
          <PlayerInput
            id='playerOne'
            label='Player 1'
            onSubmit={handleSubmit}
          />
        ) : (
          <PlayerPreview playerImage={playerOneImage} playerName={playerOneName} handleReset={handleReset}>
            <button className='reset' onClick={() => handleReset('playerOne')}>
              Reset
            </button>
          </PlayerPreview>
        )}
        {!playerTwoImage ? (
          <PlayerInput
            id='playerTwo'
            label='Player 2'
            onSubmit={handleSubmit}
          />
        ) : (
          <PlayerPreview playerImage={playerTwoImage} playerName={playerTwoName}>
            <button className='reset' onClick={() => handleReset('playerTwo')}>
              Reset
            </button>
          </PlayerPreview>
        )}
      </div>
      {playerOneImage && playerTwoImage ? (
        <Link
          className='battle__btn'
          to={{
            pathname: `${location.pathname}/results`,
            search: `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`,
          }}>
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;

