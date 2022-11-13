import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getBattle } from '../../redux/battle/battle.thunk';
import PlayerInfo from './PlayerInfo';
import PlayerPreview from './PlayerPreview';
import Loader from '../Loader'


const Results = () => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.battleReducer.players);
  const location = useLocation();

  const win = 'Winer 👍';
  const lose = 'Loser 👎';

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const playerOne = searchParams.get('playerOneName');
    const playerTwo = searchParams.get('playerTwoName');
    if(playerOne && playerTwo) {
      dispatch(getBattle([playerOne, playerTwo]))
    }
  }, [])

  return (
    <>
    <h1 className='title'>Result</h1>
    <div className='result__wrap'>
      {!players.length ? <Loader /> : <>
      <PlayerPreview playerImage={players[0].profile.avatar_url} playerName={players[0].profile.login}>
        <PlayerInfo title={win} score={players[0].score} followers={players[0].profile.followers} />
      </PlayerPreview>
      <PlayerPreview playerImage={players[1].profile.avatar_url} playerName={players[1].profile.login}>
        <PlayerInfo title={lose} score={players[1].score} followers={players[1].profile.followers} />
      </PlayerPreview>
    </> }
    </div>
    <Link className='result__btn' to={'/popular'}>
          Go to Popular
    </Link>
    </>
  );
}

export default Results;
