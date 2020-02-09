import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, SET_USER_ID } from '../actions/userActions';

const initialState = {
  isLoading: false,
  error: '',
  items: [],
  user_id: ''
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
          isLoading: false,
          users: action.payload,
          error: null
      }
    case FETCH_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case SET_USER_ID:
      return {
        ...state,
        user_id: action.payload
      }
    default:
      return state
    }
}