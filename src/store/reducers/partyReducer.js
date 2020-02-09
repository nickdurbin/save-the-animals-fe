import { FETCH_PARTIES_REQUEST, FETCH_PARTIES_SUCCESS, FETCH_PARTIES_ERROR } from '../actions/partyActions';
import { FETCH_PARTY_REQUEST, FETCH_PARTY_SUCCESS, FETCH_PARTY_ERROR } from '../actions/partyActions';
import { POST_PARTY_REQUEST, POST_PARTY_SUCCESS, POST_PARTY_ERROR } from '../actions/partyActions';
import { PUT_PARTY_REQUEST, PUT_PARTY_SUCCESS, PUT_PARTY_ERROR } from '../actions/partyActions';


const initialState = {
  isLoading: false,
  error: '',
  items: []
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PARTIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      }
    case FETCH_PARTIES_SUCCESS:
      return {
        ...state,
          isLoading: false,
          parties: action.payload,
          error: null
      }
    case FETCH_PARTIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
      case FETCH_PARTY_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null
        }
      case FETCH_PARTY_SUCCESS:
        return {
          ...state,
            isLoading: false,
            party: action.payload,
            error: null
        }
      case FETCH_PARTY_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
        case PUT_PARTY_REQUEST:
          return {
            ...state,
            isLoading: true,
            error: null
          }
        case PUT_PARTY_SUCCESS:
          return {
            ...state,
              isLoading: false,
              party: action.payload,
              error: null
          }
        case PUT_PARTY_ERROR:
          return {
            ...state,
            isLoading: false,
            error: action.payload
          }
      case POST_PARTY_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null
        }
      case POST_PARTY_SUCCESS:
        return {
          ...state,
            isLoading: false,
            party: action.payload,
            error: null
        }
      case POST_PARTY_ERROR:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
    default:
      return state
    }
}