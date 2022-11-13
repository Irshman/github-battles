import { fetchPopularRepos } from "../../components/api";
import { getReposFailure, getReposLoading, getReposSuccess } from "./popular.actions"

export const getRepos = (language) => async (dispatch) => {
  await dispatch(getReposLoading());

  try {
    const repos = await fetchPopularRepos(language)
    if(repos) {
      dispatch(getReposSuccess(repos))
    }
  } catch (error) {
    dispatch(getReposFailure(error))
  }
}

// 1 Method
// export const getRepos = (language) => (dispatch) => {
//   dispatch(getReposLoading());

//   return fetchPopularRepos(language)
//     .then(data => dispatch(getReposSuccess(data)))
//     .catch(error => dispatch(getReposFailure(error)))
// }