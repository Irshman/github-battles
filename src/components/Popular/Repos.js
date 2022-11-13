import React, {memo} from 'react';
import { useSelector } from 'react-redux';
import Loader from '../Loader'

const Repos = memo(() => {
  const repos = useSelector(state => state.popularReducer.repos);
  const loading = useSelector(state => state.popularReducer.loading);
  return (
    <>
      {loading ? <Loader /> : <ul className='repos'>
      { repos.length ? repos.map((repo, index) => {
        return (
          <li className='repos__item' key={repo.name}>
            <div>{index + 1}</div>
            <ul>
              <li>
                <img className='repos__img' src={repo.owner.avatar_url} alt={repo.name} />
              </li>
              <li><a className='repos__name' href={repo.html_url}>{repo.name}</a></li>
              <li className='repos__login'>@{repo.owner.login}</li>
              <li className='repos__stars'>{repo.stargazers_count} <span>&#9733;</span></li>
            </ul>
          </li>
        )
      }) : null }
    </ul>}
    </>
  );
})

export default Repos;
