import { UPDATE_FIRST_NAME, UPDATE_FIRST_IMAGE, UPDATE_SECOND_NAME, UPDATE_SECOND_IMAGE, GET_BATTLE_LOADING, GET_BATTLE_SUCCESS, GET_BATTLE_FAILURE  } from "./battle.constants"

export const updateFirstName = (payload) => ({
  type: UPDATE_FIRST_NAME,
  payload
});

export const updateFirstImage = (payload) => ({
  type: UPDATE_FIRST_IMAGE,
  payload
});

export const updateSecondName = (payload) => ({
  type: UPDATE_SECOND_NAME,
  payload
});

export const updateSecondImage = (payload) => ({
  type: UPDATE_SECOND_IMAGE,
  payload
});

export const getBattleLoading = () => ({
  type: GET_BATTLE_LOADING
});

export const getBattleSuccess = (payload) => ({
  type: GET_BATTLE_SUCCESS,
  payload
});

export const getBattleFailure = (payload) => ({
  type: GET_BATTLE_FAILURE,
  payload
});