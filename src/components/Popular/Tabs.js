import React, {memo, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLanguage } from '../../redux/popular/popular.actions';
import { getRepos } from '../../redux/popular/popular.thunk';
import { useSearchParams } from 'react-router-dom'

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'PHP', 'Python'];

const Tabs = memo(() => {
  const dispatch = useDispatch()
  const selectedLanguage = useSelector(state => state.popularReducer.selectedLanguage);
  const [searchParams, setSearchParams] = useSearchParams({language: selectedLanguage});

  useEffect(() => {
    dispatch(updateLanguage(searchParams.get('language')))
    dispatch(getRepos(searchParams.get('language')))
  }, []);

  const updateLanguageHandler = (language) => {
    if(language === selectedLanguage) return;
    setSearchParams({ language: language });
    dispatch(updateLanguage(language))
    dispatch(getRepos(language))
  };
  return (
    <ul className='tabs'>
      {languages.map((language, index) => (
        <li
          className='tabs__item'
          key={index}
          onClick={() => updateLanguageHandler(language)}
          style={language === selectedLanguage ? { color: '#3d96f0' } : null}> 
          {language}
        </li>
      ))}
    </ul>
  );
});

export default Tabs;