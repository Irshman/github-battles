import { UPDATE_FIRST_NAME, UPDATE_FIRST_IMAGE, UPDATE_SECOND_NAME, UPDATE_SECOND_IMAGE, GET_BATTLE_LOADING, GET_BATTLE_SUCCESS, GET_BATTLE_FAILURE  } from "./battle.constants"

const initialState = {
  playerOneName: '',
  playerTwoName: '', 
  playerOneImage: '', 
  playerTwoImage: '',
  loading: false,
  players: [],
  error: null
}

export const battleReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return {
        ...state,
        playerOneName: action.payload
      }
    case UPDATE_SECOND_NAME:
      return {
        ...state,
        playerTwoName: action.payload
      }
    case UPDATE_FIRST_IMAGE:
      return {
        ...state,
        playerOneImage: action.payload
      }
    case UPDATE_SECOND_IMAGE:
      return {
        ...state,
        playerTwoImage: action.payload
      }
      case GET_BATTLE_LOADING:
        return {
          ...state,
          loading: true
        }
      case GET_BATTLE_SUCCESS:
        return {
          ...state,
          players: action.payload,
          loading: false
        }
      case GET_BATTLE_FAILURE:
        return {
          ...state,
          error: action.payload,
          loading: false
        }
    default: return state;
  }
}