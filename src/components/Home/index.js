import React from 'react';

import bgImage from '../../img/bg.jpg'

const Home = () => {
  return (
    <div className='home'>
      <h1 className='title'>GitHub Battle: Battle your friends and ... stuff</h1>
      <div className='home__bg'>
        <img src={bgImage} alt={'image'} />
      </div>
    </div>
  );
}

export default Home;
