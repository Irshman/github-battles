import { GET_REPOS_FAILURE, GET_REPOS_LOADING, GET_REPOS_SUCCESS, UPDATE_LANGUAGE } from "./popular.constants";

const initialState = {
  selectedLanguage: 'All',
  loading: false,
  repos: [],
  error: null
}

export const popularReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload
      }
    case GET_REPOS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      }
    case GET_REPOS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default: return state;
  }
}