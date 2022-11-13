import { GET_REPOS_FAILURE, GET_REPOS_LOADING, GET_REPOS_SUCCESS, UPDATE_LANGUAGE } from "./popular.constants"

export const updateLanguage = (payload) => ({
  type: UPDATE_LANGUAGE,
  payload
});

export const getReposLoading = () => ({
  type: GET_REPOS_LOADING
});

export const getReposSuccess = (payload) => ({
  type: GET_REPOS_SUCCESS,
  payload
});

export const getReposFailure = (payload) => ({
  type: GET_REPOS_FAILURE,
  payload
});