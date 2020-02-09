import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR, SET_LOGGED_IN, SET_LOGGED_IN_FALSE } from '../actions/loginActions';

const initialState = {
  isLoading: false,
  error: '',
  users: [],
  isLoggedIn: true
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload,
          error: null
      }
    case FETCH_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case SET_LOGGED_IN: 
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn
      }
    case SET_LOGGED_IN_FALSE: 
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn
      }
    default:
      return state
    }
}