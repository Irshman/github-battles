import React from 'react';

const PlayerInfo = ({title ,score, followers}) => {
  return (
    <div className='info'>
      <h1>{title}</h1>
      <div className='info__score'>Score: {score}</div>
      <div className='info__fllowers'>Followers: {followers}</div>
    </div>
  );
}

export default PlayerInfo;
