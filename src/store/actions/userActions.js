import { axiosWithAuth as axios } from '../../utils/axiosUtils';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
export const SET_USER_ID = 'SET_USER_ID'

export const getUsers = () => dispatch => {
  dispatch({ type: FETCH_USERS_REQUEST })

  axios()
    .get('/users')
    .then(res => {
      console.log('data', res.data)
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log("Unable to grab users.", err.response.message)
      dispatch({ type: FETCH_USERS_ERROR })
    })

}

export const createUser = user => dispatch => {

  axios()
    .post("/users", user)
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_ERROR, payload: err.response });
    });

}

export const deleteUser = id => dispatch => {
  
  if (window.confirm('Are you sure you want to delete user?'))
  axios()
    .delete(`/users/${id}`)
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_ERROR, payload: err.response });
    });

}

export const editUser = user => dispatch => {

  axios()
    .put(`/users/${user.id}`, user)
    .then(res => {
      dispatch({ type: FETCH_USERS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_USERS_ERROR, payload: err.response })
    })
}

export const setUserId = id => dispatch => {
  dispatch({ type: SET_USER_ID, payload: id })
}