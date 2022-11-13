import React from 'react';

const PlayerPreview = (props) => {
  return (
    <div className='player'>
      <div className='player__wrap'>
        <img className='player__avatar' src={props.playerImage} alt='Avatar' />
        <h2 className='player__name'>@{props.playerName}</h2>
      </div>
      {props.children}
    </div>
  );
};

export default PlayerPreview;
