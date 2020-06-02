import {createUser, createSession, deleteSession} from '../utils/session'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const createNewUser = (user) => dispatch => {
  return createUser(user)
  .then(user => dispatch(receiveCurrentUser(user)))
}

export const login = (user) => dispatch => {
  return createSession(user)
  .then(user => dispatch(receiveCurrentUser(user)))
}

export const logout = () => dispatch => {
  return deleteSession()
  .then(() => dispatch(logoutCurrentUser()))
}